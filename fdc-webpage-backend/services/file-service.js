const fs = require('fs');
const log = require('./log-service');

const { exec } = require('child_process');
const configService = require('../services/config-service');

function getFileData(filePath, callbackSuccess, callbackError) {
	getFileDataInternal(filePath, callbackSuccess, () => {
		log.warning('Try to read file again in 500ms');
		setTimeout(() => {
			getFileDataInternal(filePath, callbackSuccess, () => {
				log.warning('Try to read file again in 500ms (last try)');
				setTimeout(() => {
					getFileDataInternal(filePath, callbackSuccess, callbackError);
				}, 500);
			});
		}, 500);
	});
}

function getFileDataInternal(filePath, callbackSuccess, callbackError) {
	try {
		const fileReadPromise = fs.promises.readFile(filePath);
		fileReadPromise.then(
			(data) => (
				callbackSuccess(data)
			) 
		).catch(
			(err) => 
			callbackError(err)
		)
	} catch(err) {
		callbackError(err);
	}
}


function writeFile(fileName, data, callbackSuccess, callbackError) {
	writeFileInternal(fileName, data, callbackSuccess, () => {
		log.warning('Try to write file again in 500ms');
		setTimeout(() => {
			writeFileInternal(fileName, data, callbackSuccess, () => {
				log.warning('Try to write file again in 500ms (last try)');
				setTimeout(() => {
					writeFileInternal(fileName, data, callbackSuccess, callbackError);
				}, 500);
			} );
		}, 500);
	});
}

function writeFileInternal(fileName, data, callbackSuccess, callbackError) {
	const filePath = configService.getConfigValue(['data', 'path']) + fileName;
	const tempPath = configService.getConfigValue(['data', 'temp']) + fileName;
	;
	try {
		// write data to temp file
		const fileWritePromise = fs.promises.writeFile(tempPath, JSON.stringify(data));
		fileWritePromise.then(
			() => {
				// check if data was written correctly
				getFileDataInternal(tempPath, (dataAfterWriting) => {
					if (dataAfterWriting.toString() === JSON.stringify(data)) {
						// move file to productive path
						exec('mv ' + tempPath + ' ' + filePath , (err, output) => {
							if (err) {
								log.error(`Failed to move temporary file '${tempPath}' to productive location '${filePath}'`);
								log.error(err);
								callbackError(err);
							}
							fs.fsync(fs.openSync(filePath, 'r+'), (err) => {
								if (err) {
									log.error('FSYNC-ERROR: Could not sync file from memory to drive. ' + err);
									callbackError(err);
								} else {
									log.info('Successfully wrote file ' + filePath);
									callbackSuccess();
								}
							});
						});
					} else {
						log.error('Written data differs from sent data!');
						callbackError('Written data differs from sent data!');
					}
				}, (errorAfterWriting) => {
					log.error('Could not read file directly after writing');
					log.error(errorAfterWriting);
					callbackError('Could not read file directly after writing');
				});
			}
		).catch(
			(err) => {
				log.error('Failed to write file to temporary location');
				log.error(err);
				callbackError(err);
			}
		);
	} catch (err) {
		log.error(err);
		callbackError(err);
	}
}

module.exports = {
	getFileData,
	writeFile
};