/* [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em dois objetos separados. 
Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. 
João e João, imprime true. João e Maria, imprime false.[


 ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
 Porém, os dois nomes devem estar em um objeto. Ex: const object1 
 = {firstName:"João", seccondName:"Maria"}. 
 João e João, imprime true. João e Maria, imprime false.
*/

const name1={
    nome:"Júlio",
    age:10
}
const name2={
    nome:"Jorge",
    age:19
}

console.log(name1.nome!==name2.nome)



const name3={
    nome:"Carol",
    age:19
}

const sofi={
    nome:"Sofia",
    age:34
}

console.log ( name3.nome===sofi.nome)