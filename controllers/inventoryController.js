var pool = require('../db');

exports.inventoryItemCreate = function (req, res) {

    var commonName = req.body.commonName;

    var primaryOwnerId = null;
    if (typeof(req.body.primaryOwnerId) !== 'undefined') {
        primaryOwnerId = req.body.primaryOwnerId;
    }

    var businessUnitId = null;
    if (typeof(req.body.businessUnitid) !== 'undefined') {
        businessUnitId = req.body.businessUnitId;
    }

    var primaryLanguageId = null;
    if (typeof(req.body.primaryLanguageId) !== 'undefined') {
        primaryLanguageId = req.body.primaryLanguageId;
    }

    var aliases = null;
    if (typeof(req.body.aliases) !== 'undefined') {
        aliases = req.body.aliases;
    }

    var description = null;
    if (typeof(req.body.description) !== 'undefined') {
        description = req.body.description;
    }

    var codeRepoUrl = null;
    if (typeof(req.body.codeRepoUrl) !== 'undefined') {
        codeRepoUrl = req.body.codeRepoUrl;
    }

    var binaryRepoUrl = null;
    if (typeof(req.body.binaryRepoUrl) !== 'undefined') {
        binaryRepoUrl = req.body.binaryRepoUrl;
    }

    var secondaryLanguages = null;
    if (typeof(req.body.secondaryLanguages) !== 'undefined') {
        secondaryLanguages = req.body.secondaryLanguages;
    }

    var typeId = null;
    if (typeof(req.body.typeId) !== 'undefined') {
        typeId = req.body.typeId;
    }

    var secondaryOwners = null;
    if (typeof(req.body.secondaryOwners) !== 'undefined') {
        secondaryOwners = req.body.secondaryOwners;
    }

    var exposureId = null;
    if (typeof(req.body.exposureId) !== 'undefined') {
        exposureId = req.body.exposureId;
    }

    var numUsers = null;
    if (typeof(req.body.numUsers) !== 'undefined') {
        numUsers = req.body.numUsers;
    }

    var dataClassificationId = null;
    if (typeof(req.body.dataClassificationId) !== 'undefined') {
        dataClassificationId = req.body.dataClassificationId;
    }

    var deploymentEnvironmentId = null;
    if (typeof(req.body.deploymentEnvironmentId) !== 'undefined') {
        deploymentEnvironmentId = req.body.deploymentEnvironmentId;
    }

    var deploymentEnvironmentUrl = null;
    if (typeof(req.body.deploymentEnvironmentUrl) !== 'undefined') {
        deploymentEnvironmentUrl = req.body.deploymentEnvironmentUrl;
    }

    var riskLevelId = null;
    if (typeof(req.body.riskLevelId) !== 'undefined') {
        riskLevelId = req.body.riskLevelId;
    }

    var regulations = null;
    if (typeof(req.body.regulations) !== 'undefined') {
        regulations = req.body.regulations;
    }

    var chatChannel = null;
    if (typeof(req.body.chatChannel) !== 'undefined') {
        chatChannel = req.body.chatChannel;
    }

    var agileScrumBoardUrl = null;
    if (typeof(req.body.agileScrumBoardUrl) !== 'undefined') {
        agileScrumBoardUrl = req.body.agileScrumBoardUrl;
    }

    var buildServerUrl = null;
    if (typeof(req.body.buildServerUrl) !== 'undefined') {
        buildServerUrl = req.body.buildServerUrl;
    }

    var age = null;
    if (typeof(req.body.age) !== 'undefined') {
        age = req.body.age;
    }

    var lifecycleStageId = null;
    if (typeof(req.body.lifecycleStageId) !== 'undefined') {
        lifecycleStageId = req.body.lifecycleStageId;
    }

    pool.connect((err, client, done) => {
        const query = 'insert into application (commonname, createddate, primaryownerid, businessunitid, \
            primarylanguageid, aliases, description, coderepourl, binaryrepourl, secondarylanguages, \
            typeid, secondaryowners, exposureid, numusers, dataclassificationid, deploymentenvironmentid, \
            deploymentenvironmenturl, risklevelid, regulations, chatchannel, agilescrumboardurl, buildserverurl, \
            age, lifecyclestageid) values ($1, NOW(), $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, \
            $15, $16, $17, $18, $19, $20, $21, $22, $23) RETURNING *';
        const values = [commonName, primaryOwnerId, businessUnitId, primaryLanguageId, aliases, description,
        codeRepoUrl, binaryRepoUrl, secondaryLanguages, typeId, secondaryOwners, exposureId, numUsers, 
        dataClassificationId, deploymentEnvironmentId, deploymentEnvironmentUrl, riskLevelId, regulations,
        chatChannel, agileScrumBoardUrl, buildServerUrl, age, lifecycleStageId];

        client.query(query, values, (error, result) => {
            done();
            if (error) {
                res.status(400).json({error});
            }
            else {
                res.status(201).send({
                    result: result.rows[0],
                });
            }
        });
    });

};

exports.inventoryAllItems = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from application';

        client.query(query, (error, result) => {
            done();
            if (error) {
                res.status(400).json({error});
            }
            res.status(200).send({
                result: result.rows,
            });
        });
    });

};

exports.inventoryItemDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from application where id = $1';
        const values = [req.params.id];

        client.query(query, values, (error, result) => {
            done();
            if (error) {
                res.status(400).json({error});
            }
            res.status(200).send({
                result: result.rows,
            });
        });
    });
};

exports.inventoryItemUpdate = function (req, res) {

    var appId = req.body.id;

    var commonName = req.body.commonName;

    var primaryOwnerId = null;
    if (typeof(req.body.primaryOwnerId) !== 'undefined') {
        primaryOwnerId = req.body.primaryOwnerId;
    }

    var businessUnitId = null;
    if (typeof(req.body.businessUnitid) !== 'undefined') {
        businessUnitId = req.body.businessUnitId;
    }

    var primaryLanguageId = null;
    if (typeof(req.body.primaryLanguageId) !== 'undefined') {
        primaryLanguageId = req.body.primaryLanguageId;
    }

    var aliases = null;
    if (typeof(req.body.aliases) !== 'undefined') {
        aliases = req.body.aliases;
    }

    var description = null;
    if (typeof(req.body.description) !== 'undefined') {
        description = req.body.description;
    }

    var codeRepoUrl = null;
    if (typeof(req.body.codeRepoUrl) !== 'undefined') {
        codeRepoUrl = req.body.codeRepoUrl;
    }

    var binaryRepoUrl = null;
    if (typeof(req.body.binaryRepoUrl) !== 'undefined') {
        binaryRepoUrl = req.body.binaryRepoUrl;
    }

    var secondaryLanguages = null;
    if (typeof(req.body.secondaryLanguages) !== 'undefined') {
        secondaryLanguages = req.body.secondaryLanguages;
    }

    var typeId = null;
    if (typeof(req.body.typeId) !== 'undefined') {
        typeId = req.body.typeId;
    }

    var secondaryOwners = null;
    if (typeof(req.body.secondaryOwners) !== 'undefined') {
        secondaryOwners = req.body.secondaryOwners;
    }

    var exposureId = null;
    if (typeof(req.body.exposureId) !== 'undefined') {
        exposureId = req.body.exposureId;
    }

    var numUsers = null;
    if (typeof(req.body.numUsers) !== 'undefined') {
        numUsers = req.body.numUsers;
    }

    var dataClassificationId = null;
    if (typeof(req.body.dataClassificationId) !== 'undefined') {
        dataClassificationId = req.body.dataClassificationId;
    }

    var deploymentEnvironmentId = null;
    if (typeof(req.body.deploymentEnvironmentId) !== 'undefined') {
        deploymentEnvironmentId = req.body.deploymentEnvironmentId;
    }

    var deploymentEnvironmentUrl = null;
    if (typeof(req.body.deploymentEnvironmentUrl) !== 'undefined') {
        deploymentEnvironmentUrl = req.body.deploymentEnvironmentUrl;
    }

    var riskLevelId = null;
    if (typeof(req.body.riskLevelId) !== 'undefined') {
        riskLevelId = req.body.riskLevelId;
    }

    var regulations = null;
    if (typeof(req.body.regulations) !== 'undefined') {
        regulations = req.body.regulations;
    }

    var chatChannel = null;
    if (typeof(req.body.chatChannel) !== 'undefined') {
        chatChannel = req.body.chatChannel;
    }

    var agileScrumBoardUrl = null;
    if (typeof(req.body.agileScrumBoardUrl) !== 'undefined') {
        agileScrumBoardUrl = req.body.agileScrumBoardUrl;
    }

    var buildServerUrl = null;
    if (typeof(req.body.buildServerUrl) !== 'undefined') {
        buildServerUrl = req.body.buildServerUrl;
    }

    var age = null;
    if (typeof(req.body.age) !== 'undefined') {
        age = req.body.age;
    }

    var lifecycleStageId = null;
    if (typeof(req.body.lifecycleStageId) !== 'undefined') {
        lifecycleStageId = req.body.lifecycleStageId;
    }

    pool.connect((err, client, done) => {
        const query = 'update application set commonname = $2, createddate = NOW(), primaryownerid = $3, \
            businessunitid = $4, primarylanguageid = $5, aliases = $6, description = $7, coderepourl = $8,\
            binaryrepourl = $9, secondarylanguages = $10, typeid = $11, secondaryowners = $12, exposureid = $13,\
            numusers = $14, dataclassificationid = $15, deploymentenvironmentid = $16, deploymentenvironmenturl = $17,\
            risklevelid = $18, regulations = $19, chatchannel = $20, agilescrumboardurl = $21, buildserverurl = $22, \
            age = $23, lifecyclestageid = $24 where id = $1 RETURNING *';
        const values = [appId, commonName, primaryOwnerId, businessUnitId, primaryLanguageId, aliases, description,
        codeRepoUrl, binaryRepoUrl, secondaryLanguages, typeId, secondaryOwners, exposureId, numUsers, 
        dataClassificationId, deploymentEnvironmentId, deploymentEnvironmentUrl, riskLevelId, regulations,
        chatChannel, agileScrumBoardUrl, buildServerUrl, age, lifecycleStageId];

        client.query(query, values, (error, result) => {
            done();
            if (error) {
                res.status(400).json({error});
            }
            else {
                res.status(201).send({
                    result: result.rows[0],
                });
            }
        });
    });

};

exports.inventoryItemDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from application where id = $1';
        const values = [req.params.id];

        client.query(query, values, (error, result) => {
            done();
            if (error) {
                res.status(400).json({error});
            }
            res.status(200).send({
                result: {message: req.params.id + ' deleted'},
            });
        });
    });

};