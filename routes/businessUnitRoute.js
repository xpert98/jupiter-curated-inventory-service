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

var businessUnitController = require('../controllers/businessUnitController');

router.post('/create', businessUnitController.businessUnitCreate);

router.get('/list', businessUnitController.businessUnitAllItems);

router.get('/:id', businessUnitController.businessUnitDetails);

router.put('/:id', businessUnitController.businessUnitUpdate);

router.delete('/:id', businessUnitController.businessUnitDelete);

module.exports = router;