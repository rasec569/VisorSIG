var LocalStrategy = require('passport-local').Strategy;
var pg = require('pg');
var bcrypt = require('bcryptjs');


module.exports = function (passport) {

	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (obj, done) {
		done(null, obj);
	});

	passport.use(new LocalStrategy({
		passReqToCallback: true
	}, function (req, us, password, done) {
		console.log('Usuario: ' + us);
		var conexion = require('./../Datos/conexion');
		conexion.connect();
		console.log('pass: ' + password);

		conexion.query('SELECT * FROM public.persona where persona.usuario = $1', [us], function (err, rows, fields) {
			console.log(rows);

			if (err) throw err;
			//return throw err);
			conexion.end();

			if (rows.length > 0) {

				var user = rows[0];
				var resultado=bcrypt.compareSync(password, user.pass);
				console.log('comparo   :    ' + resultado);

				if (resultado) {
					console.log('prueba oass   :    ' + password);
					return done(null, {
						id: user.identificacion,
						nombre: user.nombre,
						apellido: user.apellido,
						email: user.email
					});
					//conexion.end();
				}

			} else {
				return done(null, false, req.flash('mensaje', 'Usuario o Password incorrecto.'));
				
			}

		});
	}
	));

};