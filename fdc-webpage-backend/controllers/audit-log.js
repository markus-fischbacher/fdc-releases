const sqlitedb = require('better-sqlite3');
const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenchecker');
const configService = require('../services/config-service');
const fi = require('../services/file-service');
const log = require('../services/log-service');

let db = new sqlitedb(configService.getConfigValue(['logger-database', 'path']), sqlitedb.OPEN_READ, (err) => {
    if (err) {
        log.error(err.message);
    }
});

router.use(tokenChecker);

router.post('/general', (req, res, next) => {
	const filter = req.body;
	res.send(db.prepare(`SELECT * FROM GENERAL WHERE TIMESTAMP >= ? and TIMESTAMP <= ? order by TIMESTAMP DESC;`).all(filter.from, filter.to));
});

router.post('/damper', (req, res, next) => {
	const filter = req.body;
	res.send(db.prepare(`SELECT * FROM DAMPER WHERE TIMESTAMP >= ? AND TIMESTAMP <= ? order by TIMESTAMP DESC;`).all(filter.from, filter.to));
});

router.get('/download-database', (req, res, next) => {
	const filePath = configService.getConfigValue(['auditlogdatabase', 'path']);
	let filePathParts = filePath.split('/');
	// fi.downloadFile(filePath, res);
	res.download(filePath, filePathParts[filePathParts.length - 1]);
});

router.get('/statistics', (req, res, next) => {
	const select = 'select * from DAMPER order by PHYSICAL_ADDRESS, NUMBER, TIMESTAMP';
	const result = db.prepare(select).all();
	res.send(result);
});

module.exports = router;