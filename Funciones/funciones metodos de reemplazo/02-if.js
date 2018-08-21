'use strict'
// FUNCIONES METODOS DE REEMPLAZO
// 

var numero = 777
var texto1 = 'Prueba de texto sobre funciones de texto'
var texto2 = '      texto2 para ver las funciones de texto      '

var busqueda = texto1.replace('sobre', 'SOBRE') // reemplaza sobre por SOBRE 
var busqueda1 = texto1.slice(16) // devuelve el TEXTO1 a partir del caracter 16
var busqueda2 = texto1.slice(16,21) // devuelve el TEXTO1 a partir del caracter 16
var busqueda3 = texto1.split(' ') // crea un ARRAY con cada palabra separada por un espacio(' ')
var busqueda4 = texto2.trim() // quita los espacios del principio y final del string TEXTO2


console.log(busqueda) 
console.log(busqueda1)
console.log(busqueda2)
console.log(busqueda3)
console.log(busqueda4)