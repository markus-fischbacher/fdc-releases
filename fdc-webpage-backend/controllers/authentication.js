const express = require('express');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken')
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

router.put('/change-password', (req, res, next) => {
    let postData = req.body;
    try {
        let pwCheckResult = validateNewPassword(postData.newPassword);
        if (!pwCheckResult.error) {
            const userFromDb = db.getUser(postData.username);
            if (!userFromDb || !bcrypt.compareSync(postData.password, userFromDb.password)) {
                res.status(403).send({
                    "error": true,
                    "message": 'Wrong username or password'
                });
            } else {
                db.updatePassword(postData.username, postData.newPassword)
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

router.use(tokenChecker);

router.get('/ping', (req, res, next) => {
    res.status(200).json({ping: new Date().getTime()});
});

function validateNewPassword(pass) {
    let result = {
        message: ''
    };
    if (pass.length < configService.getConfigValue(['user', 'minPasswordLength'])) {
        result.message = `Min password length: ${configService.getConfigValue(['user', 'minPasswordLength'])}\n`;
    }
    if (!new RegExp(/\w+/, 'i').test(pass)) {
        result.message += 'At least one non-whitespace char required\n';
    }
    result.error = result.message.length !== 0;

    return result;
}

module.exports = router;