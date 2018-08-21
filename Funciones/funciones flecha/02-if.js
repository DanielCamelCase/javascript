'use strict'
// FUNCIONES FLECHA
// es lo mismo que la funcion de callback pero con una diferencia en la sintaxis

var pelicula = function (nombre) {

    return 'la peliculas es ' + nombre

}

pelicula ()


// estructura : function name(dat,dat,dat=>,dat=>){} name(1,1,dat => {},dat => {})
function sumame (dato1, dato2, sumaYmuestra, sumaPorDos){ //argumento 3 y 4 estan abajo y son funciones dadas 
                                                          // mediante dato =>

var sumar = dato1 + dato2 

sumaYmuestra(sumar)   
sumaPorDos (sumar)    

return sumar 
};

sumame (3, 7, dato => {  // este es el 3 argumento de la funcion(SUMAME) 

    document.write('la suma es : ', dato +"</br>"); 
},
function (dato){ // dato => // seria lo mismo 

    document.write('la sumapor2 es : ',(dato * 2) +"</br>") 

})
