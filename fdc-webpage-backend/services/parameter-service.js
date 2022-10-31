const kvpParameters = [
    { key: '-configFolder', value: '../'},
    { key: '-configFileName', value: 'config.json'},
    { key: '-flog', value: '/mnt/mmc/logs/fdc-webpage-backend.log'}
];
const switchParameters = [
    { key: '-clog', value: false }
];

function init() {
    for (let index = 2; index < process.argv.length; ++index) {
        const key = process.argv[index];
        let kvpParameter = kvpParameters.find(kvp => kvp.key === key);
        if (kvpParameter && index < process.argv.length - 1) {
            kvpParameter.value = process.argv[++index];
            continue;
        }
        let switchParameter = switchParameters.find(kvp => kvp.key === key);
        if (switchParameter) {
            switchParameter.value = true;
        }
    }
}

function getParameter(key) {
    const parameter = kvpParameters.find(kvp => kvp.key === key)
        ||switchParameters.find(kvp => kvp.key === key);
    return parameter ? parameter.value : undefined;
}

module.exports = {
    init,
    getParameter
};