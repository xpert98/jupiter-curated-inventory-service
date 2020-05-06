var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var ownerController = require('../controllers/ownerController');

router.post('/create', ownerController.ownerCreate);

router.get('/list', ownerController.ownerAll);

router.get('/:id', ownerController.ownerDetails);

router.put('/:id', ownerController.ownerUpdate);

router.delete('/:id', ownerController.ownerDelete);

module.exports = router;