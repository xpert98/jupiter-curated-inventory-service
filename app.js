require('dotenv').config();

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var db = require('./db');

var application = require('./routes/inventoryRoute');
var businessUnit = require('./routes/businessUnitRoute');
var dataClassification = require('./routes/dataClassificationRoute');
var deploymentEnvironment = require('./routes/deploymentEnvironmentRoute');
var exposure = require('./routes/exposureRoute');
var language = require('./routes/languageRoute');
var lifecycleStage = require('./routes/lifecycleStageRoute');
var owner = require('./routes/ownerRoute');
var riskLevel = require('./routes/riskLevelRoute');
var type = require('./routes/typeRoute');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/application', application);
app.use('/businessUnit', businessUnit);
app.use('/dataClassification', dataClassification);
app.use('/deploymentEnvironment', deploymentEnvironment);
app.use('/exposure', exposure);
app.use('/language', language);
app.use('/lifecycleStage', lifecycleStage);
app.use('/owner', owner);
app.use('/riskLevel', riskLevel);
app.use('/type', type);

module.exports = app;