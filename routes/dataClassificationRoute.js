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

var dataClassificationController = require('../controllers/dataClassificationController');

router.post('/create', dataClassificationController.dataClassificationCreate);

router.get('/list', dataClassificationController.dataClassificationAll);

router.get('/:id', dataClassificationController.dataClassificationDetails);

router.put('/:id', dataClassificationController.dataClassificationUpdate);

router.delete('/:id', dataClassificationController.dataClassificationDelete);

module.exports = router;