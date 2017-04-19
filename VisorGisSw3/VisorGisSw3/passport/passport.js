var LocalStrategy = require('passport-local').Strategy;
var pg = require('pg');
var bcrypt = require('bcryptjs');


module.exports = function(passport){

	passport.serializeUser(function(user, done){
		done(null, user);
	});

	passport.deserializeUser(function(obj, done){
		done(null, obj);
	});

	passport.use(new LocalStrategy({
		passReqToCallback : true
	}, function(req, us, password, done){
		console.log('hola mundo: '+us);
		var conexion = require('./../Datos/conexion');
		conexion.connect();	
		console.log(password);

		conexion.query("SELECT * FROM public.persona where persona.usuario = $1", [us], function(err, rows, fields){
			if(err) throw err;
			//return throw err);
			conexion.end();

			if(rows.length > 0){

				var user = rows[0];
				if(bcrypt.compareSync(password, user.pass)){
					return done(null, {
						id: user.identificacion, 
						nombre : user.nombre,
						email : user.email
					});
				}
			}

			return done(null, false, req.flash('authmessage', 'Email o Password incorrecto.'));

		});

		return
	}
	));

};