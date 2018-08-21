'use strict'
// FUNCIONES TEXTO
// 

var numero = 777
var texto1 = 'Prueba de texto sobre funciones de texto'
var texto2 = 'texto2 para ver las funciones de texto'


numero.toString () // asi convertimos una variable con numeros en una cadena de texto 
texto1.toUpperCase () // asi se pasa a mayusculas una cadena de texto 
texto1.toLowerCase () // asi pasa a minisculas una cadena de texto 

var dato = texto1.toUpperCase // asi coje el valor de la variable TEXTO1 y crea una variable DATO y la pasa a mayuscula
console.log(numero.toString) // convierte una cadena de numero a un string (cadena de texto )
console.log(texto1.length) // nos da el numero de caracteres de la cadena de texto TEXTO1

var cosas = ['hola','adios','como','estas','yeah'] // asi definimos un ARRAY
console.log(cosas.length) // nos da el numero de elementos en el ARRAY

// CONCATENAR 

var textoTotal = texto1 + texto2 
console.log(textoTotal)
var textoTotal1 = texto1.concat(texto2) // es igual usar CONCAT que usar el + para unir strings
console.log(textoTotal1)


