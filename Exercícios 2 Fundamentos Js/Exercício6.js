/*

------------------Exercício 6--------------

=> Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
*/

const nota = 10

switch (nota) {
    case 0:
        console.log("foi uito ruim")

        break;

    case 1:
        console.log("foi muito ruim mesmo")

        break;

    case 3:
        console.log("Temos que melhorar urgente")

        break;
    case 4:
        console.log("Você tem potencial, mas precisa se esforçar")

        break;
    case 10:
        console.log("Chegamos quase na metade")

        break;

    default:
        break;
}