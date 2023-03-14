const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenchecker');
const baseController = require('./base-file-controller');
const fi = require('../services/file-service');
const log = require('../services/log-service');
const configService = require('../services/config-service');
const authService = require('../services/auth-service');
const IP = require('ip');

const fileName = 'fdc.json';

router.get('/info', (req, res, next) => {
	const info = {
		milliseconds: new Date().getTime(),
		ip: IP.address(),
		guiBackendVersion: "1.1"
	};
	res.send(JSON.stringify(info));
});

router.use(tokenChecker);

router.get('/', (req, res, next) => {
	baseController.getBase(req, res, next, fileName);
});

router.post('/', (req, res, next) => {
	if (isValid(req.body).success) {
		baseController.postBase(req, res, next, fileName);
	} else {
		res.status(500).send({
			'error': true,
			'message': 'Data not valid'
		});
	}
});

router.get('/maintenance', (req, res, next) => {
	try {
		fi.getFileData(configService.getConfigValue(['data', 'path']) + fileName, 
			(fileData) => {
				const data = JSON.parse(fileData);
				res.status(200).send({maintenanceEnd: data.maintenanceEnd});
			}, 
			(error) => {
				throw(error);
			}
		);
	} catch (err) {
		log.error(err);
		err.statusCode = 500;
		next(err);
	}
});

router.post('/maintenance', (req, res, next) => {
	if (req.body.maintenanceEnd >= 0) {
		try {
			const maintenanceEndToSet = req.body.maintenanceEnd;
			fi.getFileData(configService.getConfigValue(['data', 'path']) + fileName, 
				(fileData) => {
					const success = () => {
						log.info('Maintenance mode set to endTime: ' + maintenanceEndToSet);
						res.status(200).send({maintenanceEnd: maintenanceEndToSet});
					};
					const error = (err) => {
						log.error('Failed to set maintenancemode');
						res.status(500).send({
							'error': true,
							'message': 'Could not set maintenance mode'
						});
					};
					let conf = JSON.parse(fileData);
					conf.maintenanceEnd = maintenanceEndToSet;
					fi.writeFile(fileName, conf, success, error);
				}, 
				(error) => {
					log.error(error);
					error.statusCode = 500;
					next(error);
				}
			);
		} catch (err) {
			log.error(err);
			err.statusCode = 500;
			next(err);
		}
	} else {
		log.info('W T F');
		next();
	}
});

function isValid(data) {
	return { success: true };
}

module.exports = router;