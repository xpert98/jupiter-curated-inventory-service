var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var riskLevelController = require('../controllers/riskLevelController');

router.post('/create', riskLevelController.riskLevelCreate);

router.get('/list', riskLevelController.riskLevelAll);

router.get('/:id', riskLevelController.riskLevelDetails);

router.put('/:id', riskLevelController.riskLevelUpdate);

router.delete('/:id', riskLevelController.riskLevelDelete);

module.exports = router;