var express = require('express');
var router = express.Router();
var Controllers = require('.././Controllers');
var passport = require('passport');

//console.log("carga controllers:",Controllers);

router.get('/', Controllers.HomeController.index);
//rutas de usuario
router.get('/login/registrar', Controllers.ControlUser.getregistrar);
router.post('/login/registrar', Controllers.ControlUser.postregistrar);
//router.get('/login/inicioSec', Controllers.ControlUser.getinicioSec);
//router.post('/login/inicioSec', passport.authenticate('local', {
//    successRedirect:'/',
//    failureRedirect : 'login/inicioSec',
//    failureflash : true
//}));

module.exports = router;
