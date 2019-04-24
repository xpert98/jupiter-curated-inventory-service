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

var ownerController = require('../controllers/ownerController');

router.post('/create', ownerController.ownerCreate);

router.get('/list', ownerController.ownerAll);

router.get('/:id', ownerController.ownerDetails);

router.put('/:id', ownerController.ownerUpdate);

router.delete('/:id', ownerController.ownerDelete);

module.exports = router;