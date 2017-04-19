//conexion postgret
var pg = require('pg');
// Encriptar la pass
var bcrypt = require('bcryptjs');
// Datos
var conexion = require('../Datos/conexion');

var Usuarioclass = require('./../Clases/Usuario');
//console.log('prueba clases ' +Usuarioclass);
var u=new Usuarioclass();


module.exports = {
	
	getregistrar: function (req, res, next) {
		
		u.registrar(req, res, next);
	},
	postregistrar: function (req, res, next) {
		u.postregistrar(req, res, next);
	}
};