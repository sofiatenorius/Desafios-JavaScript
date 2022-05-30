/*
Faça um programa onde, você chame uma função
 que calcule a taxa mensal de juros de um investimento. 
*/


function calcule ( valorinicial, valoratual, tempo){
    const juros = (valoratual-valorinicial)/ (valorinicial*tempo)
    

    console.log ((juros*100).toFixed(2)+'%')
    //tofixed limita o numero de casas decimais
}

calculate (100,4000,10)