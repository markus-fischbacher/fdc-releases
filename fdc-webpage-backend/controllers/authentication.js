const express = require('express');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database/database');
const authService = require('../services/auth-service');
const tokenChecker = require('../middleware/tokenchecker');
const configService = require('../services/config-service');
const log = require('../services/log-service');

const router = express.Router();

router.post('/login', (req,res) => {
    const postData = req.body;
    
    const userFromDb = db.getUser(postData.username);
    if (!userFromDb || !bcrypt.compareSync(postData.password, userFromDb.password)) {
        log.warning('Login failed for ' + postData.username);
        res.status(403).send({
            "error": true,
            "message": 'Wrong username or password'
          });
    } else {
        const user = {
            "username": postData.username,
            "role": userFromDb.role,
            "forcePasswordChange": userFromDb.password_changed !== 1,
            "serverSessionId": authService.randomSessionId
        };
        const token = jwt.sign(user, configService.getConfigValue(['secret']), { expiresIn: configService.getConfigValue(['tokenLife'])});
        const refreshToken = jwt.sign(user, configService.getConfigValue(['refreshTokenSecret']), { expiresIn: configService.getConfigValue(['refreshTokenLife'])});
        const response = {
            "status": "Logged in",
            "token": token,
            "refreshToken": refreshToken,
        };
        authService.needsPasswordChangeList[postData.username] = !userFromDb.password_changed;
        authService.tokenList[postData.username] = response;
        log.warning('Login successful for ' + postData.username);
        res.status(200).json(response);
    }
});

router.post('/refreshtoken', (req,res) => {
    const postData = req.body;
    if(postData.refreshToken) {
        //  && (postData.refreshToken in authService.tokenList)
        jwt.verify(postData.refreshToken, configService.getConfigValue(['refreshTokenSecret']), function(err, decoded) {
            if (err) {
                return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
            }
            let currentSession = decoded.serverSessionId === authService.randomSessionId;
            let userInfo = authService.tokenList[decoded.username];
            let refreshTokenExists = userInfo && userInfo.refreshToken === postData.refreshToken;
            if (!currentSession || !refreshTokenExists) {
                return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
            }
            const userFromDb = db.getUser(decoded.username);

            if (!userFromDb) {
              return res.status(403).send({
                "error": true,
                "message": 'Unauthorized access.'
              });
            } else {
                const user = {
                    "username": userFromDb.username,
                    "role": userFromDb.role,
                    "forcePasswordChange": userFromDb.password_changed !== 1,
                    "serverSessionId": authService.randomSessionId
                };
                const token = jwt.sign(user, configService.getConfigValue(['secret']), { expiresIn: configService.getConfigValue(['tokenLife'])});
                const refreshToken = jwt.sign(user, configService.getConfigValue(['refreshTokenSecret']), { expiresIn: configService.getConfigValue(['refreshTokenLife'])});
                const response = {
                    "token": token,
                    "refreshToken": refreshToken
                };
                // update the token in the list
                authService.tokenList[userFromDb.username].token = token;
                authService.tokenList[userFromDb.username].refreshToken = refreshToken;
                res.status(200).json(response);
            }
        });       
    } else {
        res.status(404).send('Invalid request')
    }
});

router.use(tokenChecker);

router.get('/all-users', (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        jwt.verify(token, configService.getConfigValue(['secret']), (error, decoded) => {
            if (error) {
                error.statusCode = 500;
                next(error);
            } else {
                if (decoded.role === 'ADMIN') {
                    const userInfos = db.getUsernames();
                    res.status(200).json(userInfos);
                } else {
                    const userInfos = db.getOwnUsername(decoded.username);
                    res.status(200).json(userInfos);
                }
            }
        });
    } catch(err) {
        err.statusCode = 500;
        next(err);
    }
});

router.put('/change-password', (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, configService.getConfigValue(['secret']), (err, decoded) => {
        let postData = req.body;
        try {
            let pwCheckResult = validateNewPassword(postData.password);
            if (!pwCheckResult.error) {
                if (decoded.role !== 'ADMIN' && decoded.username !== postData.username) {
                    throw 'No permission to change foreign password!';
                }
                const userFromDb = db.getUser(postData.username);
                if (!userFromDb) {
                    res.status(403).send({
                        "error": true,
                        "message": 'User not found'
                    });
                } else {
                    db.updatePassword(postData.username, postData.password)
                    res.status(200).json({'message': 'Password changed'});
                }
            } else {
                res.status(500).send(pwCheckResult);
            }
        } catch (err) {
            err.statusCode = 500;
            next(err);
        }
    });
});

router.post('/create-user', (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, configService.getConfigValue(['secret']), (err, decoded) => {
        if (decoded.role === 'ADMIN') {
            let postData = req.body;
            try {
                db.insertUser(postData);
                res.status(200).json({message: 'created user ' + postData.username});
            } catch(err) {
                err.statusCode = 500;
                next(err);
            }
        } else {
            next({statusCode: 500, message: 'No permission to add users!', error: true});
        }
    });
});

router.delete('/delete-user', (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, configService.getConfigValue(['secret']), (err, decoded) => {
        if (err) {
            err.statusCode = 500;
            next(err);
        } else {
            const username = req.query.username;
            if (decoded.role === 'ADMIN' && decoded.username !== username) {
                try {
                    db.deleteUser(username);
                    res.status(200).json({message: 'user ' + username + ' created'});
                } catch(err) {
                    err.statusCode = 500;
                    next(err);
                }
            } else {
                next({statusCode: 500, message: 'No permission to delete users!', error: true});
            }
        }
    });
});

router.get('/ping', (req, res, next) => {
    res.status(200).json({ping: new Date().getTime()});
});

function validateNewPassword(pass) {
    const containsUppercaseLetter = /[A-Z]/.test(pass);
    const containsLowercaseLetter = /[a-z]/.test(pass);
    const containsNumber = /[0-9]/.test(pass);
    const containsSpecialChar = /[^A-Za-z0-9\s]/.test(pass);
    const minLength = pass.length >= 8;

    let result = {
        message: ''
    };

    const isMatch = containsUppercaseLetter &&
        containsLowercaseLetter &&
        containsNumber &&
        containsSpecialChar &&
        minLength;
    if (!isMatch) {
        result.error = true;
        result.message = 'Password does not match password rules.';
    }

    return result;
}

module.exports = router;