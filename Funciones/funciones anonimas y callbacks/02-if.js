'use strict'
// FUNCIONES ANONIMAS 
// es funcion que no tiene nombre 
// en lugar de definir una funcion directamente con un nombre,  se define una variable y se 
// crea la funcion dentro de ella 

var pelicula = function (nombre) {

    return 'la peliculas es ' + nombre

}

pelicula ()

// CALLBACKS
// es una funcion que se ejecuta dentro de otra
// estructura : function name(dat,dat,fun,fun){} name(1,1,function(dat){},function(dat){})
function sumame (dato1, dato2, sumaYmuestra, sumaPorDos){ //argumento 3 y 4 estan abajo y son funciones

var sumar = dato1 + dato2 

sumaYmuestra(sumar)   // tip: hay que poner las llamadas antes del RETURN
sumaPorDos (sumar)    // en las llamadas hay que pasarle el nombre SUMAR que es el nombre de la operacion que se 
                      // ejecuta dentro de la funcion principal 

return sumar 
};
// a partir de aqui definimos las variables 3 y 4 de la funcion(SUMAME)
sumame (3, 7, function (dato) {  // este es el 3 argumento de la funcion(SUMAME) 

    document.write('la suma es : ', dato +"</br>"); // es argumento(sumaYmuestra)
},
function (dato){ // el 4 argumento de la funcion sumame

    document.write('la sumapor2 es : ',(dato * 2) +"</br>") //es argumento(sumaPorDos)

})
