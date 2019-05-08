var pool = require('../db');

exports.businessUnitCreate = function (req, res) {

    var businessUnitName = req.body.businessUnitName;

    pool.connect((err, client, done) => {
        const query = 'insert into businessunit (businessunitname) values ($1) RETURNING *';
        const values = [businessUnitName];

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

exports.businessUnitAllItems = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from businessunit';

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

exports.businessUnitDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from businessunit where id = $1';
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

exports.businessUnitUpdate = function (req, res) {

    var businessUnitId = req.body.id;

    var businessUnitName = req.body.businessUnitName;

    pool.connect((err, client, done) => {
        const query = 'update businessunit set businessunitname = $2 where id = $1 RETURNING *';
        const values = [businessUnitId, businessUnitName];

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

exports.businessUnitDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from businessunit where id = $1';
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