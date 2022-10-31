const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenchecker');
const baseController = require('./base-file-controller');

const fileName = 'outputs.json';

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

// function insertOutputStates(data) {
// 	// TODO: fetch output states from MQTT
// 	let outputs = JSON.parse(data);
// 	outputs.forEach((output) => output.state = Math.floor(Math.random() * 10) >= 5 ? 1 : 0);
// 	return JSON.stringify(outputs);
// }

module.exports = router;