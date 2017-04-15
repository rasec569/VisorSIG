function Usuario(Identificacion){
    this.Identificacion = Identificacion,
	this.Nombre = Nombre;
	this.Apellido = Apellido;
	this.User = User;
	this.Pass = Pass;
	this.emal = emal;

    this.mostrar=function(){
    console.log(Nombre+'nombre');
};

this.tomar=function(nombre){
    console.log('tomar'+Nombre);
}
return this;
};

module.exports = Usuario; 
