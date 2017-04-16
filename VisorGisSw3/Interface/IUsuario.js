var impl = require('implements');
var user = require('./../clases/Usuario.js');
console.log(user);
var user2 = new user('Cesar');
var interf=['mostrar', 'tomar'];
if(impl(user2, interf)== true){
    console.log('funciona');
    console.log(user2
    .nombre);
}else{
    console.log('no implementa');
}