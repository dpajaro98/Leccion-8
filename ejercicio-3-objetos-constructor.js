function persona(nombre,apellido,telefono){
    this.nombre=nombre,
    this.apellido=apellido,
    this.telefono=telefono
    this.nc=function(){
        return this.nombre+" "+this.apellido
    }
}
persona.prototype.correo="dpajaro@gmail.com"

//se utliza new persona para crear el nuevo objeto
let padre=new persona("darien","pajaro",314557766)

padre.correo="darien@gmail.com"





console.log(padre)
let madre=new persona("ada","luz",32233445)
console.log(madre.correo)