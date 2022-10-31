const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenchecker');
const baseController = require('./base-file-controller');
const mqtt = require('./mqtt-websocket-message-proxy');

const fileName = 'fdc.json';

router.get('/time', (req, res, next) => {
	res.send(JSON.stringify({milliseconds: new Date().getTime()}));
});

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

function isValid(data) {
	return { success: true };
}
module.exports = router;