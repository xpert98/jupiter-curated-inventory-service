var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var dataClassificationController = require('../controllers/dataClassificationController');

router.post('/create', dataClassificationController.dataClassificationCreate);

router.get('/list', dataClassificationController.dataClassificationAll);

router.get('/:id', dataClassificationController.dataClassificationDetails);

router.put('/:id', dataClassificationController.dataClassificationUpdate);

router.delete('/:id', dataClassificationController.dataClassificationDelete);

module.exports = router;