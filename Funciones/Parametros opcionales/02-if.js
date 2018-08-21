'use strict'
//          FUNCIONES 
// Las funciones son conjunto de instruciones reutilizables
// function NOMBRE (){INSTRUCCIONES}


// num1 y num2 son parametros obligatorios
// mostrar la vamos a tener como parametro opcional
// por defecto mostrar es false a menos que le pasemos un parametro opcional TRUE


function calcular (num1,num2, mostrar = false ){ // definimos las variables que usaremos

    if (mostrar == false){

console.log(num1+num2)  
} else{

document.write('funcion - Parametro opcional de mostrar == true')+"</br>"
document.write(num1+num2) // lo imprime en la pagina 

}}

calcular(3,6); // damos los parametros obligatorios de la function
calcular(5,8, true) // le damos ademas de los obligatorios ... le pasamos el parametro opcional









