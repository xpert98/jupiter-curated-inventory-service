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

var exposureController = require('../controllers/exposureController');

router.post('/create', exposureController.exposureCreate);

router.get('/list', exposureController.exposureAll);

router.get('/:id', exposureController.exposureDetails);

router.put('/:id', exposureController.exposureUpdate);

router.delete('/:id', exposureController.exposureDelete);

module.exports = router;