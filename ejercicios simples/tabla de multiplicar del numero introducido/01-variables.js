'mode strict'


// Tabla de multiplicar de un numero introducido mediante el Prompt



var number = parseInt(prompt('¿De que numero quieres la tabla?', 0))

while(isNaN(number)){
    number = parseInt(prompt('No has introducido un numero, prueba de nuevo', 0))
}

document.write ("<h1>Tabla del numero " + number +"</h1>")

for ( var i = 1; i <= 10 ; i++){
    document.write ( i +" x "+number+" = "+( i * number ) + "</br>" )
}

/*



*/

// Tabla de todos los numeros del 1 al 15

for ( var c = 1; c <= 15 ; c++){
document.write ("<h1>Tabla del numero " + c +"</h1>")
for ( var i = 1; i <= 10 ; i++){
    document.write ( i +" x "+ c +" = "+( i * c ) + "</br>" )
    }
}
/*



*/