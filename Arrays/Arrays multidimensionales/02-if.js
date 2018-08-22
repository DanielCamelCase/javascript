'use strict'
// ARRAYS MULTIDIMENSIONALES
// estas son dos formas diferentes para definir un array 
var peliculas = ['la purga', 'un ciudadano ejemplar', 'plan oculto', 'the town', 'los padres son ellos']
var genero =    ['terror'  , 'accion'               , 'comedia'    , 'policiaco']

// este es un ARRAYS MULTIDIMENSIONALES  
var cine = [ peliculas, genero] 
console.log(cine[1][0]) // aqui llamamos a genero[1] terror[0] 
console.log(cine[0][0]) // aqui llamamos a peliculas[0] la purga[0]

console.log(cine[1][2]) // aqui llamamos a genero[1] comedia[2]
console.log(cine[0][4]) // aqui llamamos a peliculas[0] los padres son ellos[4]
