'mode strict'
//calculadora simple pide 2 valores y los suma resta multiplica y divide  
// define num1 y num2 , pide que se introduzcan a traves de un cuadro 
// ademas queremos que nos muestre una alerta con los resultados 

var num1 = parseInt(prompt('introduce el primer numero'))
var num2 = parseInt(prompt('introduce el segundo numero'))

//si num1 OR num2 es mas pequeño que 0, OR num1 no es un numero OR num2 no es un numero ...  
while (num1 <0 || num2<0 || isNaN(num1) ||  isNaN(num2) ){

    var num1 = parseInt(prompt('introduce el primer numero valido'))
    var num2 = parseInt(prompt('introduce el segundo numero valido'))

}

var ressuma = num1 + num2
var resresta = num1 - num2
var resdivi = num1 / num2
var resmulti = num1 * num2


document.write('la suma de '+ num1 +' + '+ num2 +' = '+ ressuma +"</br>" )
document.write('la resta de '+ num1 +' - '+ num2+' = '+ resresta +"</br>" )
document.write('la multiplicacion de '+ num1+' * '+ num2+ ' = '+ resmulti + "</br>" )
document.write('la division de '+ num1 +' / '+ num2 +' = '+ resdivi +"</br>" )



    rescmd = 'la suma de '+ num1 +' + '+ num2 +' = '+ ressuma  +'/n' +
             'la resta de '+ num1 +' - '+ num2+' = '+ resresta +
             ('la multiplicacion de '+ num1+' * '+ num2+ ' = '+ resmulti )+
             ('la division de '+ num1 +' / '+ num2 +' = '+ resdivi );

             // Teoricamente mediante el //n deberia hacar un salto de linea en el ALERT

alert(
    rescmd
)














// ejercicio para saber las notas en base a su puntuacion (suspenso menos de 5, 5 suficiente ,
// 6 bien, 7 notable bajo , 8 notable alto ,9 sobresaliente bajo y 10 sobresaliente)
// una persona por cada nota desde 4 hasta 10 

