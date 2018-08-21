'use strict'
// FUNCIONES METODOS DE BUSQUEDA
// 

var numero = 777
var texto1 = 'Prueba de texto sobre funciones de texto sobre'
var texto2 = 'texto2 para ver las funciones de texto'

var busqueda = texto1.indexOf('sobre') // busca la palabra SOBRE en la cadena de texto1 y devuelve en que posicion esta 
var busqueda1 = texto1.search('sobre') // funciona igual que indexOf 
var busqueda2 = texto1.match('sobre')  // funciona como indexOf o search pero devuelve un array
var busqueda3 = texto1.match(/sobre/g) // devuelve un array con todas las apariciones en la cadena 
var busqueda4 = texto1.substr(16,5) // devuelve desde el caracter 16 los siguientes 5 caracteres 
var busqueda5 = texto1.charAt(16) // devuelve el caracter 16 de la variable TEXTO1 
var busqueda6 = texto1.startsWith('prueba') // busca si TEXTO1 empieza con Prueba y devuelve booleano
var busqueda7 = texto1.startsWith('Prueba') // diferencia entre Prueba y prueba  
var busqueda8 = texto1.includes('sobre') // busca si se incluye SOBRE en TEXTO1 y devuelve boobleano  


console.log(busqueda1)
console.log(busqueda2)
console.log(busqueda3)
console.log(busqueda4)
console.log(busqueda5)
console.log(busqueda6)
console.log(busqueda7)
console.log(busqueda8)