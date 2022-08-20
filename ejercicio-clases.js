class persona {
  //la clase necesita un constructor
  constructor(nombre, apellido, cel,año) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cel = cel;
    this.año=año;
    this.hoy= new Date().getFullYear()
   
    
  }
  
  //en este caso se realizo el metodo de nombre con un get
  
  get n_c() {
    return this.nombre + " " + this.apellido;
  }

  //ahora se va a calcular la edad con otro metodo get
  get edad(){    
    return this.hoy -this.año
 }
}

let darien = new persona("darien", "pajaro", 3122345,new Date(1998,09,08).getFullYear());

console.log(darien);
console.log(darien.n_c);

console.log(darien.edad)
