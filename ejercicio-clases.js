class Persona {
  //la clase necesita un constructor
  constructor(nombre, apellido, cel, año) {
    this._nombre = nombre;
    this._apellido = apellido;
    this.cel = cel;
    this._año_nac = año;
    this.hoy = new Date().getFullYear();
  }
  //en este caso se realizo el metodo de nombre con un get
  get n_c() {
    return this._nombre + " " + this._apellido;
  }
  //ahora se va a calcular la edad con el metodo get
  //getter edad
  get edad() {
    return this.hoy - this._año_nac;
  }
  //setter año de nacimiento
  set año(año) {
    return (this._año_nac = año);
  }
  //getter nombre
  get nombre() {
    return this._nombre;
  }
  //setter nombre
  set nombre(nombre) {
    return (this._nombre = nombre);
  }
  //getter apellido
  get apellido() {
    return this._nombre;
  }
  //setter apellido
  set apellido(apellido) {
    return (this._apellido = apellido);
  }
}

let darien = new Persona(
  "darien",
  "pajaro",
  3122345,
  new Date(1998, 09, 08).getFullYear()
);

console.log(darien);
console.log(darien.n_c);

console.log(darien.edad);

darien._nombre = "amigos dar";
console.log(darien);
