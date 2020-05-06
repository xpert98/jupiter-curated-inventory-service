var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var exposureController = require('../controllers/exposureController');

router.post('/create', exposureController.exposureCreate);

router.get('/list', exposureController.exposureAll);

router.get('/:id', exposureController.exposureDetails);

router.put('/:id', exposureController.exposureUpdate);

router.delete('/:id', exposureController.exposureDelete);

module.exports = router;