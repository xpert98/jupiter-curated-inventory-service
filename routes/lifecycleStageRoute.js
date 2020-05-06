var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var lifecycleStageController = require('../controllers/lifecycleStageController');

router.post('/create', lifecycleStageController.lifecycleStageCreate);

router.get('/list', lifecycleStageController.lifecycleStageAll);

router.get('/:id', lifecycleStageController.lifecycleStageDetails);

router.put('/:id', lifecycleStageController.lifecycleStageUpdate);

router.delete('/:id', lifecycleStageController.lifecycleStageDelete);

module.exports = router;