var pool = require('../db');

exports.exposureCreate = function (req, res) {

    var exposureName = req.body.exposureName;

    pool.connect((err, client, done) => {
        const query = 'insert into exposure (exposurename) values ($1) RETURNING *';
        const values = [exposureName];

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

exports.exposureAll = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from exposure';

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

exports.exposureDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from exposure where id = $1';
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

exports.exposureUpdate = function (req, res) {

    var exposureId = req.body.id;

    var exposureName = req.body.exposureName;

    pool.connect((err, client, done) => {
        const query = 'update exposure set exposurename = $2 where id = $1 RETURNING *';
        const values = [exposureId, exposureName];

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

exports.exposureDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from exposure where id = $1';
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