var express = require('express');
var app = express();
//conexion postgret
var pg = require('pg');
// Encriptar la pass
var bcrypt = require('bcryptjs');
// Datos
var conexion = require('../Datos/conexion');

function Usuario(Identificacion, Nombre, Apellido, User, Pass, email) {
	this.Identificacion = Identificacion,
	this.Nombre = Nombre;
	this.Apellido = Apellido;
	this.User = User;
	this.Pass = Pass;
	this.email = email;

	this.getregistrar= function(req, res, next) {
		res.render('./user/registrar.jade');
	}

	this.postregistrar = function(req, res, next) {
		console.log(req.body);
		var salt = bcrypt.genSaltSync(10);
		var pass = bcrypt.hashSync(req.body.pas, salt);

		Usuario.Identificacion = req.body.ide;
		Usuario.Nombre = req.body.nom;
		Usuario.Apellido = req.body.ape;
		Usuario.User = req.body.us;
		Usuario.Pass = pass;
		conexion.connect();
		conexion.query("INSERT INTO public.persona (identificacion, nombre, apellido, usuario, pass, email) VALUES ($1, $2, $3, $4, $5, $6)", [Usuario.Identificacion, Usuario.Nombre, Usuario.Apellido, Usuario.User, Usuario.Pass, Usuario.email]),
			function (err, rows, fields) {
				if (err) {
					return console.error('error running query', err);
				}
				console.log("POST: Resultado:", result.rows[0]);

				//output: 1 
			};
		conexion.end
		req.flash('mensaje', 'Registo corecto, puede iniciar sesion')
		res.redirect('inicioSec');

	};

	this.getinicioSec= function (req, res, next) {
		res.render('./user/inicioSec.jade',{mensaje:req.flash('mensaje')});
	}

	return this;
};

module.exports = Usuario; 
