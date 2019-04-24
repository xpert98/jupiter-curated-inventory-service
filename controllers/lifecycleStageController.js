var pool = require('../db');

exports.lifecycleStageCreate = function (req, res) {

    var lifecycleStageName = req.body.lifecycleStageName;

    pool.connect((err, client, done) => {
        const query = 'insert into lifecycleStage (lifecycleStagename) values ($1) RETURNING *';
        const values = [lifecycleStageName];

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

exports.lifecycleStageAll = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from lifecycleStage';

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

exports.lifecycleStageDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from lifecycleStage where id = $1';
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

exports.lifecycleStageUpdate = function (req, res) {

    var lifecycleStageId = req.body.id;

    var lifecycleStageName = req.body.lifecycleStageName;

    pool.connect((err, client, done) => {
        const query = 'update lifecycleStage set lifecycleStagename = $2 where id = $1 RETURNING *';
        const values = [lifecycleStageId, lifecycleStageName];

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

exports.lifecycleStageDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from lifecycleStage where id = $1';
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