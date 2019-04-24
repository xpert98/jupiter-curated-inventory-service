var pool = require('../db');

exports.dataClassificationCreate = function (req, res) {

    var dataClassificationName = req.body.dataClassificationName;

    pool.connect((err, client, done) => {
        const query = 'insert into dataclassification (dataclassificationname) values ($1) RETURNING *';
        const values = [dataClassificationName];

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

exports.dataClassificationAll = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from dataclassification';

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

exports.dataClassificationDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from dataClassification where id = $1';
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

exports.dataClassificationUpdate = function (req, res) {

    var dataClassificationId = req.body.id;

    var dataClassificationName = req.body.dataClassificationName;

    pool.connect((err, client, done) => {
        const query = 'update dataclassification set dataclassificationname = $2 where id = $1 RETURNING *';
        const values = [dataClassificationId, dataClassificationName];

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

exports.dataClassificationDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from dataclassification where id = $1';
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