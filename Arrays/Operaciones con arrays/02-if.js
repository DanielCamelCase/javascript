'use strict'
// OPERACIONES CON ARRAYS 
// estas son dos formas diferentes para definir un array 
var peliculas = ['la purga', 'un ciudadano ejemplar', 'plan oculto', 'the town', 'los padres son ellos']
var genero =    ['terror'  , 'accion'               , 'comedia'    , 'policiaco']

// este es un ARRAYS MULTIDIMENSIONALES  
var cine = [ peliculas, genero] 

/*
peliculas.push('batman') // podemos añadir un elemento al array con el metodo PUSH
console.log(peliculas)
*/


var elemento = ''

do{
    var elemento = prompt('añade nuevas peliculas') //añade a ELEMENTO
    peliculas.push (elemento) // añade la palabra introducida en la variable ELEMENTO al array PELICULAS

}while (elemento !='ACABAR') // mientras que peliculas sea diferente a ACABAR seguira mostrando el prompt 
peliculas.pop() // quita la ultima pelicula añadida (ACABAR) que es la palabra que usamos para salir del DO 

console.log(peliculas)

