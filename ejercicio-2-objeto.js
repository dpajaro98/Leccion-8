//creando el objeto
let persona={ 
    nombre:"Darien",
    apellido:"Pajaro",
    año_de_nacimiento:new Date(1998,09,08).getFullYear(),
    fecha_actual:new Date().getFullYear(),
    empresa:"rf",
    
    //creando el metodo de nombre
    nombre_completo:function() {
        //se usa la palabra this para acceder a los atributos
        //del objeto
        return this.nombre+" "+this.apellido
        
    },
    //aqui cree el metodo para calcular la edad
    edad:function(){
        return this.fecha_actual-this.año_de_nacimiento
    },
    get metodo_n_c(){
        return this.nombre+" "+this.apellido
    },
    get e(){
        return this.fecha_actual-this.año_de_nacimiento

    },
    get emp(){
        return this.empresa.toUpperCase()
    }
    ,
    set emp(emp){
        return this.empresa=emp.toUpperCase()

    }
}

console.log(persona.metodo_n_c)
console.log(persona.e)

persona.emp="gb"
console.log(persona.emp)
