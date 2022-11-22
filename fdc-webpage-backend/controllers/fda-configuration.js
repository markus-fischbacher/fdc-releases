const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenchecker');
const baseController = require('./base-file-controller');
const fi = require('../services/file-service');
const log = require('../services/log-service');
const configService = require('../services/config-service');

const fileName = 'fdas.json';

router.use(tokenChecker);

router.get('/', (req, res, next) => {
	baseController.getBase(req, res, next, fileName);
});

router.post('/', (req, res, next) => {
	if (isValid) {
		baseController.postBase(req, res, next, fileName);
	} else {
		res.status(500).send({
			'error': true,
			'message': 'Data not valid'
		});
	}
});

router.post('/', (req, res, next) => {
	if (isValid) {
		baseController.postBase(req, res, next, fileName);
	} else {
		res.status(500).send({
			'error': true,
			'message': 'Data not valid'
		});
	}
});

router.post('/changemode', (req, res, next) => {
	if (req.body.physicalId && req.body.damperId && req.body.mode) {
		try {
			fi.getFileData(configService.getConfigValue(['data', 'path']) + fileName, 
				(fileData) => {
					const conf = JSON.parse(fileData);
					const fda = conf.find(fda => fda.physicalAddress == req.body.physicalId);
					let isDamper1 = true;
					if (fda.damper1.id === req.body.damperId) {
						fda.damper1.damperMode = req.body.mode;
					} else {
						isDamper1 = false;
						fda.damper2.damperMode = req.body.mode;
					}
					const success = () => {
						log.info('FDA ' + req.body.physicalId + ' => damper ' + (isDamper1 ? 1 : 2) + ' set to mode: ' + req.body.mode);
						res.status(200).send();
					};
					const error = (err) => {
						log.error('Failed to set dampermode');
						res.status(500).send({
							'error': true,
							'message': 'Could not set dampermode'
						});
					};
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