var pool = require('../db');

exports.riskLevelCreate = function (req, res) {

    var riskLevelName = req.body.riskLevelName;

    pool.connect((err, client, done) => {
        const query = 'insert into risklevel (risklevelname) values ($1) RETURNING *';
        const values = [riskLevelName];

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

exports.riskLevelAll = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from risklevel';

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

exports.riskLevelDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from risklevel where id = $1';
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

exports.riskLevelUpdate = function (req, res) {

    var riskLevelId = req.body.id;

    var riskLevelName = req.body.riskLevelName;

    pool.connect((err, client, done) => {
        const query = 'update riskLevel set risklevelname = $2 where id = $1 RETURNING *';
        const values = [riskLevelId, riskLevelName];

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

exports.riskLevelDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from riskLevel where id = $1';
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