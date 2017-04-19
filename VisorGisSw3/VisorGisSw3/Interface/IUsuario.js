var impl = require('implements');
var user = require('./../clases/Usuario.js');
console.log(user);
function IUsuario(){
var user2 = new user('');
var interf=['getregistrar', 'postregistrar'];
if(impl(user2, interf)== true){
    console.log('funciona');
    console.log(user2.nombre);
    return true;
}else{
    console.log('no implementa');
    return false;
}
};
module.exports = IUsuario;