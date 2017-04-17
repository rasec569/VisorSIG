//conexion postgret
var pg = require('pg');
// Encriptar la pass
var bcrypt = require('bcryptjs');
// Datos
var conexion = require('../Datos/conexion');
// console.log("CONN:",conexion);



module.exports = {


	getregistrar: function (req, res, next){

		return res.render('user/registrar.jade');
	},

	postregistrar: function (req, res, next){
		console.log(req.body);
		bcrypt.genSalt(10, function(err, salt) {
    	bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    	});
		});
		// console.log(req.params.id);
		var usuario = {
			Identificacion: req.body.ide,
			Nombre: req.body.nom,
			Apellido: req.body.ape,
			user: req.body.us,
			Pass: req.body.pas,
			email: req.body.email,
		};
		console.log('obj usuario', usuario);
		// Si, mire el mensaje que he puesto abajo, en ese caso usted pondra en vez del select un insert o uptate
		conexion.connect();
		conexion.connect
		conexion.query("INSERT INTO persona ("/Identifiacion/", "/Nombre/", "/Apellido/", "/usuario/", "/Pass/", email) VALUES ($1, $2, $3, $4, $5, $6)", [usuario.Identificacion, usuario.Nombre, usuario.Apellido, usuario.user, usuario.Pass, usuario.email]),
		function(err, rows, fields) {
			if (err) {
				return console.error('error running query', err);
			}
			console.log("POST: Resultado:", result.rows[0]);
			//output: 1 
		};

		return;
	},
	getinicioSec: function (req, res, next){

		return res.render('user/inicioSec.jade');
	}
};