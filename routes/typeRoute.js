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

var typeController = require('../controllers/typeController');

router.post('/create', typeController.typeCreate);

router.get('/list', typeController.typeAll);

router.get('/:id', typeController.typeDetails);

router.put('/:id', typeController.typeUpdate);

router.delete('/:id', typeController.typeDelete);

module.exports = router;