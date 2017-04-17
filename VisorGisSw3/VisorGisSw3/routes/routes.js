var express = require('express');
var router = express.Router();
var Controllers = require('.././Controllers');
console.log(Controllers);

router.get('/', Controllers.HomeController.index);
//rutas de usuario
router.get('/login/registrar', Controllers.ControlUser.getregistrar);
router.post('/login/registrar', Controllers.ControlUser.postregistrar);
router.get('/login/inicioSec', Controllers.ControlUser.getinicioSec);

module.exports = router;
