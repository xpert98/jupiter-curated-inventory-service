var express = require('express');
var routerUtil = require('../routerUtil');
var router = express.Router();

router.use((req, res, next) =>{

    routerUtil.validateAuth(req, res, next);

});

var deploymentEnvironmentController = require('../controllers/deploymentEnvironmentController');

router.post('/create', deploymentEnvironmentController.deploymentEnvironmentCreate);

router.get('/list', deploymentEnvironmentController.deploymentEnvironmentAll);

router.get('/:id', deploymentEnvironmentController.deploymentEnvironmentDetails);

router.put('/:id', deploymentEnvironmentController.deploymentEnvironmentUpdate);

router.delete('/:id', deploymentEnvironmentController.deploymentEnvironmentDelete);

module.exports = router;