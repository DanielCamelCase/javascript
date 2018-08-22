'use strict'
// ARRAYS AVANZADOS
// estas son dos formas diferentes para definir un array 
var arreglo = ['jose', 'pedro', 'luis', true, false, 777,]
var nombres = new Array ('jose', 'antonio', 'luis', 'juan', 'nicola', 'pablo')

console.log(arreglo.length)
console.log(nombres)

// var elemento = parseInt(prompt('que elemento del array quieres', 0))
// parseInt convierte a entero la introduccion que agamos a traves de prompt y guardara en ELEMENTO
// alert( nombres [ elemento ] ) // buscara en el ARRAY nombres , el numero que le pasemos a traves de ELEMENTO 

//--------------------------------------------------------------------------------------------------------------

// ejercicio : Como hacer para que cuando introduzcas un indice mayor de 5 salte un error 
/*
var elemento = parseInt(prompt('que elemento del array quieres', 0))

if (elemento >= nombres.length){
    alert('introduce un numero valido menor de '+ nombres.length)
}
else {
    alert( 'el indice seleccionado es : '+ nombres [ elemento ] ) // nombres[elemento] = nombres[3] ejemplo
}
*/
//ejercicio 2 listar las personas del arreglo NOMBRES en forma de lista 

document.write('<h1> Personas de la clase</h1>')
document.write("<ul>")
for (var i = 0 ; i < nombres.length ; i++ ){
    document.write("<li>"+ nombres[i] + "</li>")
}
document.write("</ul>")
