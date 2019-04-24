var pool = require('../db');

exports.typeCreate = function (req, res) {

    var typeName = req.body.typeName;

    pool.connect((err, client, done) => {
        const query = 'insert into type (typename) values ($1) RETURNING *';
        const values = [typeName];

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

exports.typeAll = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from type';

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

exports.typeDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from type where id = $1';
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

exports.typeUpdate = function (req, res) {

    var typeId = req.body.id;

    var typeName = req.body.typeName;

    pool.connect((err, client, done) => {
        const query = 'update type set typename = $2 where id = $1 RETURNING *';
        const values = [typeId, typeName];

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

exports.typeDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from type where id = $1';
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