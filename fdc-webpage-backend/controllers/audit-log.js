const sqlitedb = require('better-sqlite3');
const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenchecker');
const configService = require('../services/config-service');
const log = require('../services/log-service');

let db = new sqlitedb(configService.getConfigValue(['logger-database', 'path']), sqlitedb.OPEN_READ, (err) => {
    if (err) {
        log.error(err.message);
    }
});

router.use(tokenChecker);

router.post('/general', (req, res, next) => {
	const filter = req.body;
	res.send(db.prepare(`SELECT * FROM GENERAL WHERE TIMESTAMP >= ? and TIMESTAMP <= ?;`).all(filter.from, filter.to));
});

router.post('/damper', (req, res, next) => {
	const filter = req.body;
	res.send(db.prepare(`SELECT * FROM DAMPER WHERE TIMESTAMP >= ? AND TIMESTAMP <= ?;`).all(filter.from, filter.to));
});

module.exports = router;