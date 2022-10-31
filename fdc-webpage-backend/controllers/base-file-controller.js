const fi = require('../services/file-service');
const log = require('../services/log-service');
const configService = require('../services/config-service');


function getBase(req, res, next, fileName, modifier) {
	try {
		const successCallback = (data) => {
			let dataToSend = data;
			if (modifier) {
				dataToSend = modifier(dataToSend);
			}
			res.send(dataToSend);
		};
		const errorCallback = (err) => {
			res.status(500).send({
				'error': true,
				'message': 'Could not read file'
			});
		};
		fi.getFileData(configService.getConfigValue(['data', 'path']) + fileName, successCallback, errorCallback);
	} catch (err) {
		err.statusCode = 500;
		next(err);
	}
}

function postBase(req, res, next, fileName) {
	try {
		const success = () => {
			const readSuccess = (data) => {
				res.send(data);
			}; 
			const readError = () => {
				log.error('Could not read config file after move to productive location');
				res.status(500).send({
					'error': true,
					'message': 'Could not read config file after move to productive location'
				});
			};
			fi.getFileData(configService.getConfigValue(['data', 'path']) + fileName, readSuccess, readError);
		};
		const error = (err) => {
			res.status(500).send({
				'error': true,
				'message': 'Could not write file'
			});
		};
		fi.writeFile(fileName, req.body, success, error);
	} catch (err) {
		log.error(err);
		err.statusCode = 500;
		next(err);
	}
}

module.exports = {
    getBase,
    postBase
};