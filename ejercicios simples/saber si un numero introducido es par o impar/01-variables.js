'mode strict'

/*
Que nos diga que numero introducido es par o impar 
1. Ventana que nos pida los numeros 
2. Si no es un numero, que lo pida de nuevo 
*/

var number = parseInt(prompt('Introduce un numero', 0))

while(isNaN(number)){
    number = parseInt(prompt('No has introducido un numero, prueba de nuevo', 0))
}

if (number % 2 == 0) {
    alert("Es un numero par")
}   else {
    alert("Es impar")
}

/*
PROMPT da la ventana de dialogo 
En el WHILE decimos que la variable numero debe ser un numero mediante el ISNAN si no lo es 
dentro del WHILE le mandamos de nuevo el PROMPT 
Para saber si es par en el IF dividimos la varible / 2 mediante un % que nos dice si tiene resto 0 o no 
Si el resto no es == 0 , mediante el ELSE decimo que es impar 
*/