//Variables
//var
//ya no se usa. funciona igual que let

//nombre: palabra reservada, no empezar por número, ni simbolos como el -
//Valores primitivos
let nombre = 'Mi nombre' //string
let edad = 30 //number
let soltero = true //(o false) Boolean
let zero = null //Valor especial conocido
let incognita //undefined (a evitar)

//Valores referenciales
//object - parejas clave/valor separadas por ,
let ficha = {
    nombre: 'Mi nombre',
    edad: 30,
    soltero: true
}

//acceso a propiedades
//por .
console.log(ficha.nombre)
//por nombre de propiedad
console.log(ficha['nombre'])

//Array
let lista = [
    'paul',
    'john',
    'george',
    'ringo'
]
console.log(lista)

//acceso a elementos
console.log(lista[3])

//Funciones
let imprimir = function algo(usuario) {
    let nosvamosya = true
    console.log('Hola ', usuario.nombre)
    console.log('tu edad es: ', usuario.edad)
}
console.log(nosvamosya)
imprimir(ficha)


//diferencia entre valor y referencia
let a = {
    clave1: 30,
    clave2: 50
}
let b = a
a.clave1 = 40

console.log(a)
console.log(b)



