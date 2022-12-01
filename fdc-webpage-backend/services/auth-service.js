const log = require('./log-service');
const tokenList = {};
const needsPasswordChangeList = {};
const randomSessionId = Math.floor(Math.random() * 1000000);
const jwt = require('jsonwebtoken');
const configService = require('../services/config-service');

log.info(`Random server session id: ${randomSessionId}`);

function ifHasRole(roles, req, res, next, successCallback, errorCallback) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    jwt.verify(token, configService.getConfigValue(['secret']), (err, decoded) => {
        if (roles.includes(decoded.role)) {
            successCallback(req, res, next, decoded);
        } else {
            errorCallback(req, res, next, decoded);
        }
    });
}

function verifyToken(token, successCallback, errorCallback) {
    jwt.verify(token, configService.getConfigValue(['secret']), (err, decoded) => {
        if (err) {
            errorCallback(err);
        } else {
            successCallback(decoded);
        }
    });
}

module.exports = {
    tokenList: tokenList,
    needsPasswordChangeList,
    randomSessionId: randomSessionId,
    ifHasRole,
    verifyToken
};