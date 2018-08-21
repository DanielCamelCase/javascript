'use strict'
//  REST 
// Cuando no sabemos cuantos parametro nos van a entregar se usa REST 
// Toyota seat y golf serian esos parametros 
// Añadiendo ...variable y llamandola con su nobre nos dara los parametros 
// que no conocemos o que no sabemos cuantos son 

function listadoCoches ( coche1 , coche2, ...restoCoches ) {

    document.write('Coche1 es : ' + coche1 + "</br>")
    document.write('coche2 es : ' + coche2 + "</br>")
    document.write('restoCoches : '+ restoCoches +"</br>")
}

listadoCoches ('Toyota','Ford','Toyota','Seat','Golf') // los string hay que pasarlos "entre comillas"

//  SPREAD
// Es lo mismo que el rest pero haciendo un array de valores 

var listadoCoches = [ coche1 , coche2, ...restoCoches ]

listadoCoches ('Toyota','Ford','Toyota','Seat','Golf') 
