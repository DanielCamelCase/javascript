'use strict'
// FUNCIONES PLANTILLAS DE TEXTO 
// Para evitar concatenar siempre podemos crearnos plantillas de texto y reutilizarlas

var nombre = prompt('introduce tu nombre')
var apellidos = prompt('introduce tus apellidos')

var nombreCompleto = ('Tu nombre completo es : '+ nombre.trim() +' y tus apellidos son : '+ apellidos.trim())
// con trim quita espacios al principio y final ;)
var nombrecompleto = `
<h1>Tu nombre completo</h1>
<h3>Nombre : ${nombre}</h3> 
<h3>apellidos : ${apellidos}</h3>
`
// con ${} podemos llamar el contenido de una variable dentro de un bloque de texto creado por `estas comillas`
// las variables de nombrecompleto es lo mismo pero escrito de diferente maneras 

console.log(nombreCompleto)
document.write(nombrecompleto)