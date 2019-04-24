var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.use((req, res, next) =>{

    let authToken = req.headers['authorization'];

    if (authToken.startsWith('Bearer ')) {
        authToken = authToken.split(" ")[1];

        jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({message: 'Access Denied'});
            } else {
                req.decoded = decoded;    
                next();
            }
        });

    } else {
        res.status(401).json({message: 'Access Denied'});

    }

});

var languageController = require('../controllers/languageController');

router.post('/create', languageController.languageCreate);

router.get('/list', languageController.languageAll);

router.get('/:id', languageController.languageDetails);

router.put('/:id', languageController.languageUpdate);

router.delete('/:id', languageController.languageDelete);

module.exports = router;