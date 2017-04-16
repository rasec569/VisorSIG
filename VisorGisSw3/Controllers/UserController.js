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
		var seguridad=bcrypt.genSaltSync(10);
		var pass=bcrypt.hasdSync(req.body.pas, seguridad);
		console.log(req.params.id);
		var usuario = {
			Identificacion: req.body.ide,
			Nombre: req.body.nom,
			Apellido: req.body.ape,
			User: req.body.us,
			Pass: pass,
			email: req.body.email,
			msg: "Mensaje de prueba"
		};
		console.log('obj usuario', usuario);
		// Si, mire el mensaje que he puesto abajo, en ese caso usted pondra en vez del select un insert o uptate
		conexion.connect();
		conexion.query('INSERT INTO public.persona SET ?', user, function(err, rows, fields) {
			
			if (err) {
				return console.error('error running query', err);
			}
			console.log("POST: Resultado:", result.rows[0]);
			//output: 1 
		});
		return

		//return res.send(usuario);
	}
};