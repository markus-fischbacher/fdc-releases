let defaultConfig = require('../defaultConfig');
let parameterService = require('./parameter-service');
let userConfigPath = parameterService.getParameter('-configFolder') + 
    parameterService.getParameter('-configFileName');
const userConfig = require(userConfigPath);

function getConfigValue(keys) {
    let userValue = _getConfigValue(userConfig, keys);
    if (userValue) {
        return userValue;
    }

    return _getConfigValue(defaultConfig, keys);
}

function _getConfigValue(config, keys) {
    let c = config;
    for (let index = 0; index < keys.length; index++) {
        if (!c.hasOwnProperty(keys[index]) || c[keys[index]] == undefined) {
            return undefined;
        };
        c = c[keys[index]];
    }
    return c;
}


module.exports = {
    getConfigValue
};