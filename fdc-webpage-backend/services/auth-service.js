const log = require('./log-service');
const tokenList = {};
const needsPasswordChangeList = {};
const randomSessionId = Math.floor(Math.random() * 1000000);
log.info(`Random server session id: ${randomSessionId}`);

module.exports = {
    tokenList: tokenList,
    needsPasswordChangeList,
    randomSessionId: randomSessionId
};