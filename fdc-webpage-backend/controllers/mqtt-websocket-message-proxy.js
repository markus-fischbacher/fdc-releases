const express = require('express');
const mqtt = require('mqtt');
const server = require('http').createServer(express);
const log = require('../services/log-service');
const configService = require('../services/config-service');
const authService = require('../services/auth-service');


const socketIoPort = configService.getConfigValue(['messages', 'socketIoPort']) || 8090;
server.listen(socketIoPort, () => {
    log.info(`Websocket server listening on ${socketIoPort}`);
});
const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    },
    path: '/'
});

const mqttClient = mqtt.connect(configService.getConfigValue(['messages', 'mqttUrl']), {clientId: "node-gui-backend"});

// MQTT connection
mqttClient.on("connect", () => {
    log.info('Connected to MQTT Broker');
    configService.getConfigValue(['messages', 'topicsToGui']).forEach((topic) => {
        log.info('MQTT subscription - backend to gui - ' + topic);
        mqttClient.subscribe(topic, {qos:1});
    });
    mqttClient.subscribe('services/guibackend/heartbeat/ping', {qos:1});
});

// SocketIo connection
io.on('connection', (client) => {
    client.onAny((topic, message) => {
        try {
            if (!message) {
                throw `No message for topic ${topic} provided - abort websocket event receiver.`;
            }
            let token = message.authToken;
            let payload = message.payload;
            let topicConfig = configService.getConfigValue(['messages', 'topicsToBackend'])
                .find(conf => conf.topic === topic);

            if (!topicConfig) {
                log.error('MQTT-topic not in gui=>backend config: ' + topic);
                return;
            }

            if (topicConfig.roles.includes('ANONYMOUS')) {
                mqttClient.publish(topic, JSON.stringify(payload),{qos: 1, retain: false});
            } else {
                let tokenSuccessCallback = (decodedToken) => {
                    if (!topicConfig.roles.includes(decodedToken.role)) {
                        log.error(`NO permission for topic '${topic}' for user '${decodedToken.username}' with role '${decodedToken.role}`);
                        return;
                    }
                    mqttClient.publish(topic, JSON.stringify(payload),{qos: 1, retain: false});
                };
                let tokenErrorCallback = (err) => {
                    log.error('Token from Socket.IO event not valid');
                    log.error(err);
                };
                authService.verifyToken(token, tokenSuccessCallback, tokenErrorCallback);
            }
        } catch (exception) {
            log.error(exception);
        }
    });
});

// Backend to GUI
mqttClient.on('message', (topic, message) => {
    if (configService.getConfigValue(['messages', 'topicsToGui']).includes(topic)) {
        io.emit(topic, message.toString());
    } else {
        if (topic === 'services/guibackend/heartbeat/ping') {
            let now = new Date();
            let pong = JSON.stringify({
                dateTime: Math.round(now.getTime() / 1000),
                dateTimeString: toDateTimeStr(now)
            });
            mqttClient.publish('services/guibackend/heartbeat/pong', pong, {qos: 1, retain: false});
        } else {
            log.error('Socket.io topic not in backend=>gui config: ' + topic);
        }
    }
});

function toDateTimeStr(date) {
    return `${
        (date.getMonth() + 1).toString().padStart(2, '0')}/${
        date.getDate().toString().padStart(2, '0')}/${
        date.getFullYear().toString().padStart(4, '0')} ${
        date.getHours().toString().padStart(2, '0')}:${
        date.getMinutes().toString().padStart(2, '0')}:${
        date.getSeconds().toString().padStart(2, '0')}.${
        date.getMilliseconds().toString().padStart(3, '0')}`;
}
