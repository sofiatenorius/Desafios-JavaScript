/* Declara duas variáveis, uma atribuição com o seu nome e outra com o seu sobrenome,
 e então o nome variável Completo e mantém tudo junto. Exemplo: "Cesar Michelin"

 const name1= "Sofia";
 const name2= "Tenório"


 const thenames= `${name1} ${name2}`
 console.log(thenames)

Declare e atribua três variáveis, uma com o seu 'nome'
,outra com o seu 'sobrenome' e outra com a sua 'idade'. 
Então, declare uma variável
com nome resultado e atribua uma string unindo suas variáveis ​​da seguinte forma:
"João Silva terá 30 anos" e utilize o console.log pra mostrar o que acontece. 
Respeite os espaços!


const name1= "Sofia"
const name2="Tenório"
const name3="21 anos"

console.log (`${name1} ${name2} tem ${name3}`)





Duas variáveis ​​variáveis: umNumeroPequeno e umNumeroGrande, e atribua a elas valores numéricos
Definidas de acordo com seus nomes. Então defina a variável eMenor e atribua o resultado da 
comparação se umNumeroPequeno é menor do que umNumeroGrande; e defina a variável eMaior, 
com o resultado da comparação não é umNumeroPeque maior que umNumeroGrande.


const num1= 321
const numbig2=2897

const eMenor= num1<numbig2
const eMaior= num1> numbig2

console.log(eMenor)
console.log(eMaior)

1 - Escrever a função multiplicar que multiplica-os dois multiplicação,
 multiplicação e retorno do resultado da multiplicação.
*/
function multiplicar (num1,num2){
    return num1*num2
}

console.log (multiplicar(34,56))












/*/*
2 - Declare uma função chamada triploDaSoma() que recebe dois parâmetros.
 Então você tem que adicionar ambos e retornar três vezes o valor do resultado da
  soma dos dois parâmetros. Será declarado uma função triplo,
   que recebe um parâmetro e retorna o valor dele multiplicado por três precisos.

*/
 function triploDaSoma(a,b){
 return 3*(a+b)

 }
console.log(triploDaSoma(3,4))

/*
3 - criar um perímetro de função que nos diga a ele um perímetro de um círculo quando damos e também uma área de função que recebe o raio como uma área de um círculo. Lembre-se de usar o valor de 3.14 no lugar do π . perímetro = π * raio * 2; área = π * raio * raio;

4 - Escreva a função escreverCartao, que recebe como um título, um nome e um sobrenome e retorna uma string única como resultado.

5 - Escreva uma função probabilidade de probabilidade(), que não recebe e gera a probabilidade de chuva, retornando aleatoriamente Math.random ().


*/