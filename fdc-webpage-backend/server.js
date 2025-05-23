const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const auditLog = require('./controllers/audit-log');
const authentication = require('./controllers/authentication');
const healthRouter = require('./controllers/health');
const mailTemplateConfigurationRouter = require('./controllers/mailtemplate-configuration');
const groupConfigurationRouter = require('./controllers/group-configuration');
const fdaConfigurationRouter = require('./controllers/fda-configuration');
const fdcConfigurationRouter = require('./controllers/fdc-configuration');
const mailerConfigurationRouter = require('./controllers/mailer-configuration');
const factoryResetRouter = require('./controllers/factory-reset');
const versionRouter = require('./controllers/version');
const db = require('./database/database');
const configService = require('./services/config-service');
const parameterService = require('./services/parameter-service');
const log = require('./services/log-service');
// Do not remove the require of the "unused" fdaMqtt ... else MQTT would not be activated
const fdaMqtt = require('./controllers/mqtt-websocket-message-proxy');
parameterService.init();
log.info('Starting fdc-webpage-backend service ...');
db.initDatabase();
const app = express();

var corsOptions = {
  origin: configService.getConfigValue(['server', 'origin'])
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/audit-log', auditLog);
app.use('/auth', authentication);
app.use('/health', healthRouter);
app.use('/config/fdc', fdcConfigurationRouter);
app.use('/config/mailer', mailerConfigurationRouter);
app.use('/config/mailtemplates', mailTemplateConfigurationRouter);
app.use('/config/groups', groupConfigurationRouter);
app.use('/config/fdas', fdaConfigurationRouter);
app.use('/factory-reset', factoryResetRouter);
app.use('/version', versionRouter);

app.use(bodyParser.json());
const PORT = process.env.PORT || configService.getConfigValue(['server', 'port']) || 8080;
app.listen(PORT, 'localhost', () => {
  log.info(`Server is running on port ${PORT}.`);
});