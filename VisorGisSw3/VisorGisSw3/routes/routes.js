var express = require('express');
var router = express.Router();
var Controllers = require('.././Controllers');
var passport = require('passport');
var IUsuario = require('.././Interface/IUsuario');

//console.log("carga controllers:",Controllers);

router.get('/', Controllers.HomeController.index);
console.log(IUsuario+ ' instancia de IUsuario');

//rutas de usuario
switch(IUsuario() == true) {
    case getregistrar:
        router.get('/login/registrar', Controllers.ControlUser.getregistrar);
        break;
    case postregistrar:
        router.post('/login/registrar', Controllers.ControlUser.postregistrar);
        break;
    default:
        successRedirect:'/';
}


//router.get('/login/inicioSec', Controllers.ControlUser.getinicioSec);
//router.post('/login/inicioSec', passport.authenticate('local', {
//    successRedirect:'/',
//    failureRedirect : 'login/inicioSec',
//    failureflash : true
//}));

module.exports = router;
