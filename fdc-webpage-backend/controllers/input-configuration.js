const express = require('express');
const router = express.Router();
const tokenChecker = require('../middleware/tokenchecker');
const baseController = require('./base-file-controller');

const fileName = 'inputs.json';

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

// function insertInputStates(data) {
// 	// TODO: fetch input states from MQTT
// 	let inputs = JSON.parse(data);
// 	inputs.forEach((input) => input.state = Math.floor(Math.random() * 10) >= 5 ? 1 : 0);
// 	return JSON.stringify(inputs);
// }

module.exports = router;