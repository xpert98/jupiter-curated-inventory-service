var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var typeController = require('../controllers/typeController');

router.post('/create', typeController.typeCreate);

router.get('/list', typeController.typeAll);

router.get('/:id', typeController.typeDetails);

router.put('/:id', typeController.typeUpdate);

router.delete('/:id', typeController.typeDelete);

module.exports = router;