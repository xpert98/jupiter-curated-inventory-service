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

var lifecycleStageController = require('../controllers/lifecycleStageController');

router.post('/create', lifecycleStageController.lifecycleStageCreate);

router.get('/list', lifecycleStageController.lifecycleStageAll);

router.get('/:id', lifecycleStageController.lifecycleStageDetails);

router.put('/:id', lifecycleStageController.lifecycleStageUpdate);

router.delete('/:id', lifecycleStageController.lifecycleStageDelete);

module.exports = router;