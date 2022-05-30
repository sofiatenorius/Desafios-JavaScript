/*

---------------------Exercício 4----------------------

[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, 
qual é o menor.
*/

const number1=23
const number2=10
const number3=12

if (number1>number2&&number1>number3){
    console.log ("O número 1 é o maior")
}else if (number2>number3){
    console.log ("O número 2 é o maior")
}else{
    console.log ( "o terceiro é o maior ")
}

if (number1<number2&&number1<number3){
    console.log ("O número 1 é o menor")
}else if (number2<number3){
    console.log ("O número 2 é o menor")
}else{
    console.log ( "o terceiro é o menor ")
}


const number5=45
const number6=60
const number7=90


if(number5>number6 && number5>number7){
    console.log ("o numero 5 é o maior")
}else if( number6>number7){
    console.log ("o numero 6  é o maior ")
}else{
    console.log ("o numero 7 é o maior ")
}