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

var deploymentEnvironmentController = require('../controllers/deploymentEnvironmentController');

router.post('/create', deploymentEnvironmentController.deploymentEnvironmentCreate);

router.get('/list', deploymentEnvironmentController.deploymentEnvironmentAll);

router.get('/:id', deploymentEnvironmentController.deploymentEnvironmentDetails);

router.put('/:id', deploymentEnvironmentController.deploymentEnvironmentUpdate);

router.delete('/:id', deploymentEnvironmentController.deploymentEnvironmentDelete);

module.exports = router;