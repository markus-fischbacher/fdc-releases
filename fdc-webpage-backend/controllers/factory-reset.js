const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenchecker');
const fi = require("../services/file-service");
const configService = require("../services/config-service");
const log = require('../services/log-service');

const fileName = 'mailer.json';

router.use(tokenChecker);

router.post('/', (req, res, next) => {
	if (req.body.reset != null) {
		resetFiles(req.body.reset);
	} else {
		res.status(500).send({
			'error': true,
			'message': 'Data not valid'
		});
	}
});

function resetFiles(configNames) {
	try {
		const successCallback = (rawResetData) => {
			let resetData = JSON.parse(rawResetData);
			for (let name of configNames) {
				fi.writeFile(name, resetData[name], () => {
					log.warning(`Reset of ${name}.json successful`);
				}, (err) => {
					log.error(`Reset of ${name}.json failed`);
					log.error(err);
				});
			}
		};
		const errorCallback = (err) => {
			log.error(err);
		};
		fi.getFileData('../config/factoryResetConfig.json', successCallback, errorCallback);
	} catch (err) {
		err.statusCode = 500;
		next(err);
	}
}

module.exports = router;