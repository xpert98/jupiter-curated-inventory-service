var pool = require('../db');

exports.ownerCreate = function (req, res) {

    var ownerName = req.body.ownerName;

    pool.connect((err, client, done) => {
        const query = 'insert into owner (ownername) values ($1) RETURNING *';
        const values = [ownerName];

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

exports.ownerAll = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from owner';

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

exports.ownerDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from owner where id = $1';
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

exports.ownerUpdate = function (req, res) {

    var ownerId = req.body.id;

    var ownerName = req.body.ownerName;

    pool.connect((err, client, done) => {
        const query = 'update owner set ownername = $2 where id = $1 RETURNING *';
        const values = [ownerId, ownerName];

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

exports.ownerDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from owner where id = $1';
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