var pool = require('../db');

exports.languageCreate = function (req, res) {

    var languageName = req.body.languageName;

    pool.connect((err, client, done) => {
        const query = 'insert into language (languagename) values ($1) RETURNING *';
        const values = [languageName];

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

exports.languageAll = function(req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from language';

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

exports.languageDetails = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'select * from language where id = $1';
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

exports.languageUpdate = function (req, res) {

    var languageId = req.body.id;

    var languageName = req.body.languageName;

    pool.connect((err, client, done) => {
        const query = 'update language set languagename = $2 where id = $1 RETURNING *';
        const values = [languageId, languageName];

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

exports.languageDelete = function (req, res) {

    pool.connect((err, client, done) => {
        const query = 'delete from language where id = $1';
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