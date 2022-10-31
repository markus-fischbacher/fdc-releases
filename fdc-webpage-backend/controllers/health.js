const express = require('express');
const tokenChecker = require('../middleware/tokenchecker');
const os = require('os-utils');
const router = express.Router();

router.use(tokenChecker);

function fetchCPUUsage () {
    return new Promise(resolve => { 
        os.cpuUsage(value => resolve(value))
    })
}

async function getCPUUsage(callback) {
    cpuUsage = await fetchCPUUsage();
    callback(`${(cpuUsage * 100).toFixed(1)}%`);
}

function formatUpTime(time) {
    t = time / 60; // minutes
    return t < 60 ? (`${Math.round(t)}min`) : (`${Math.round(t / 60)}h ${Math.round(t % 60)}min`);
}

router.get('/', (req, res) => {
	getCPUUsage((cpuUsage) => {
        res.send({
            freeMem: `${Math.round(os.freemem())}MB`,
            freeMemPercent: `${(os.freememPercentage() * 100).toFixed(1)}%`,
            totalMem: `${Math.round(os.totalmem())}MB`,
            systemUpTime: formatUpTime(os.sysUptime()),
            serverUpTime: formatUpTime(os.processUptime()),
            cpuUsage: cpuUsage
        });
    });
});

module.exports = router;