//creando el objeto
let persona={ 
    nombre:"Darien",
    apellido:"Pajaro",
    año_de_nacimiento:new Date(1998,09,08).getFullYear(),
    fecha_actual:new Date().getFullYear(),
    
    //creando el metodo de nombre
    nombre_completo:function() {
        //se usa la palabra this para acceder a los atributos
        //del objeto
        return this.nombre+" "+this.apellido
        
    },
    //aqui cree el metodo para calcular la edad
    edad:function(){
        return this.fecha_actual-this.año_de_nacimiento
    }
}
console.log(persona.nombre_completo())
console.log(persona.edad())
console.log(persona.nombre_completo()+" tiene la edad de "+persona.edad()+" años")

let objetojson=JSON.stringify(persona)
console.log(objetojson)