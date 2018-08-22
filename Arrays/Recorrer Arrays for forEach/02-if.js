'use strict'
// RECORER ARRAYS FOR FOREACH
// estas son dos formas diferentes para definir un array 
var arreglo = ['jose', 'pedro', 'luis', true, false, 777,]
var nombres = new Array ('jose', 'antonio', 'luis', 'juan', 'nicola', 'pablo')

console.log(arreglo.length)
console.log(nombres)


// manera clasica de recorrer un array 
/*
document.write('<h1> Personas de la clase</h1>')
document.write("<ul>")
for (var i = 0 ; i < nombres.length ; i++ ){
    document.write(nombres[i])
}
document.write("</ul>")
*/

// manera a traves de for forEach
// nombres.forEach((elemento,indice)=>{indice+'-'+elemento})  // indice es opcional 

document.write('<h1> Personas de la clase</h1>')
document.write("<ul>")
nombres.forEach((elemento,indice)=>{
    document.write("<li>"+indice+' - '+elemento+"</li>")
})
document.write("</ul>")