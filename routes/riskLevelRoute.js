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

var riskLevelController = require('../controllers/riskLevelController');

router.post('/create', riskLevelController.riskLevelCreate);

router.get('/list', riskLevelController.riskLevelAll);

router.get('/:id', riskLevelController.riskLevelDetails);

router.put('/:id', riskLevelController.riskLevelUpdate);

router.delete('/:id', riskLevelController.riskLevelDelete);

module.exports = router;