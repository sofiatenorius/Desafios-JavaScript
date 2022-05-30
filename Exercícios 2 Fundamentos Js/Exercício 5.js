/*
-------------------Exercício 5-------------------------

Crie 5 objetos nesse formato
{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
*/

const person1={
    name:"Sofia",
    Idade:16,
    sexo:"Feminino"
    
}

const person2={
    name:"Lara",
    Idade:18,
    sexo:"Feminino"
    
}

const person3={
    name:"Luiza",
    Idade:32,
    sexo:"Feminino"
    
}
if (person1.Idade >=18){
    console.log ( "Você passou")
}else {
    console.log ("reprovado")
}

const person4= {
    name:"sofia",
    idade: 19

}

if (person4.idade >=18){
    console.log ("Voce foi aprovado")
}else
{
    console.log ("voce foi reprovado")
}