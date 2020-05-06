var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var inventoryController = require('../controllers/applicationController');

router.post('/create', inventoryController.inventoryItemCreate);

router.get('/list', inventoryController.inventoryAllItems);

router.get('/:id', inventoryController.inventoryItemDetails);

router.put('/:id', inventoryController.inventoryItemUpdate);

router.delete('/:id', inventoryController.inventoryItemDelete);

module.exports = router;