var pool = require('../db');

exports.deploymentEnvironmentCreate = function (req, res) {

    var deploymentEnvironmentName = req.body.deploymentEnvironmentName;

    pool.connect((err, client, done) => {
        const query = 'insert into deploymentenvironment (deploymentenvironmentname) values ($1) RETURNING *';
        const values = [deploymentEnvironmentName];

        client.query(query, values, (error, result) => {
            done();
            if (error) {
                res.status(400).json({error});
            }
            else {
                res.status(200).send({
                    result: result.rows[0],
                });
            }
        });
    });

};

exports.deploymentEnvironmentAll = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from deploymentenvironment';

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

exports.deploymentEnvironmentDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from deploymentenvironment where id = $1';
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

exports.deploymentEnvironmentUpdate = function (req, res) {

    var deploymentEnvironmentId = req.body.id;

    var deploymentEnvironmentName = req.body.deploymentEnvironmentName;

    pool.connect((err, client, done) => {
        const query = 'update deploymentenvironment set deploymentenvironmentname = $2 where id = $1 RETURNING *';
        const values = [deploymentEnvironmentId, deploymentEnvironmentName];

        client.query(query, values, (error, result) => {
            done();
            if (error) {
                res.status(400).json({error});
            }
            else {
                res.status(200).send({
                    result: result.rows[0],
                });
            }
        });
    });

};

exports.deploymentEnvironmentDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from deploymentenvironment where id = $1';
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