/*

--------------Exercício 3-----------------

Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número
'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10,
e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, 
se não ganhou, mostra outra mensagem.

*/

const number1 = Math.floor(Math.random()*(10-1)+1)
const number2 = Math.floor(Math.random()*(10-1)+1)

if(number1===number2){
    console.log("Voce ganhou")
}else{
    console.log("Voce perdeu")
}


