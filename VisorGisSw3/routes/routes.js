var express = require('express');
var router = express.Router();
var Controllers = require('.././Controllers');
console.log(Controllers);

router.get('/', Controllers.HomeController.index);
//rutas de usuario
router.get('/login/registrar', Controllers.UserController.getregistrar);
router.post('login/registrar', Controllers.UserController.postregistrar);


module.exports = router;
