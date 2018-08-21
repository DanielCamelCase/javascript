'use strict'
//          FUNCIONES 
//  Las funciones son conjunto de instruciones reutilizables

//function NOMBRE (){INSTRUCCIONES}
// dentro de saludar incluimos las instrucciones que queremos reutilizar
function saludar (){

document.write('funcion hola, como estas?'+"</br>")
console.log('hola, como estas?')

};

//Para usarla la llamamos de esta manera 

saludar()

//se pueden crear funciones a las que mandar el valor de las varibles por ejemplo

function calcular (num1,num2){ // definimos las variables que usaremos


document.write(num1+num2) // lo imprime en la pagina 
console.log(num1+num2)  //lo imprime en consola
document.write('funcion - Parametros')+"</br>"

};

calcular(3,6); // damos el valor que necesitamos a las variables en el orden de la function










