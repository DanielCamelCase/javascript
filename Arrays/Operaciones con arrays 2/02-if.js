'use strict'
// OPERACIONES CON ARRAYS 2
// estas son dos formas diferentes para definir un array 

var peliculas = ['la purga', 'un ciudadano ejemplar', 'plan oculto', 'the town', 'los padres son ellos']
var genero =    ['terror'  , 'accion'               , 'comedia'    , 'policiaco']

console.log(peliculas)

var indice = peliculas.indexOf('plan oculto')

// de esta forma podemos borrar un elemento de un array 

if (indice > -1){ //si el elemento al que hacemos referencia no se encuentra en el array nos devuelve un -1 por lo que si existe devolvera un 0>=

    peliculas.splice(indice,1) // metodo splice borra de INDICE ,1 elemento del array (el seleccionado).el 1 hace referencia a cuantos elementos a partir del que 
                                // hacemos referencia en la variable INDICE queremos borrar 
}

//console.log(peliculas)

// pasar a cadena de texto un array 

var string_peliculas = peliculas.join() // mediante el metodo .join podemos convertir un array en un string 

console.log(string_peliculas) 
