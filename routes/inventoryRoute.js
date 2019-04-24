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

var inventoryController = require('../controllers/inventoryController');

router.post('/create', inventoryController.inventoryItemCreate);

router.get('/list', inventoryController.inventoryAllItems);

router.get('/:id', inventoryController.inventoryItemDetails);

router.put('/:id', inventoryController.inventoryItemUpdate);

router.delete('/:id', inventoryController.inventoryItemDelete);

module.exports = router;