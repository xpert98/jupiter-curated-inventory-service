var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var businessUnitController = require('../controllers/businessUnitController');

router.post('/create', businessUnitController.businessUnitCreate);

router.get('/list', businessUnitController.businessUnitAllItems);

router.get('/:id', businessUnitController.businessUnitDetails);

router.put('/:id', businessUnitController.businessUnitUpdate);

router.delete('/:id', businessUnitController.businessUnitDelete);

module.exports = router;