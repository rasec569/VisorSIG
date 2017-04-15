//conexion postgret
var pg = require('pg');
//encriptar la pass
var bcrypt = require('bcrypt');

module.exports = {

	getregistrar: function (req, res, next){
		return res.render('user/registrar.jade');
	},

	postregistrar: function (req, res, next){
		console.log(req.body());
		var salt=bcrypt.genSaltSync(10);
		var pass=bcrypt.hasdSync(req.body.pas, salt);
		console.log(req.params.id);
		var usuario = {
			Identificacion : req.body.id,
			Nombre : req.body.nom,
			Apellido : req.body.ape,
			User : req.body.us,
			Pass : req.body.pas,
			emal : req.body.email
		};
		console.log('obj usuario' + usuario);
		var conexion = require('.././datos/conexion');
		console.log('conexion establecida' + conexion);
		var client = new pg.Client(conexion);

		console.log(client);
  
		client.connect(function (err) {
  		if (err) throw err;

		});
		return;
	}
};