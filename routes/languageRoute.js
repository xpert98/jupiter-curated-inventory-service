var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var languageController = require('../controllers/languageController');

router.post('/create', languageController.languageCreate);

router.get('/list', languageController.languageAll);

router.get('/:id', languageController.languageDetails);

router.put('/:id', languageController.languageUpdate);

router.delete('/:id', languageController.languageDelete);

module.exports = router;