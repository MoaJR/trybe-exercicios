// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numero = 50;

let maiorPrimo = [];

for (let i = 1; i <= numero; i+=1) {
    if(!(i % 2 == 0 || i % 3 == 0)){
        maiorPrimo.push(i);
    }
}

console.log(maiorPrimo[maiorPrimo.length-1]);

//output: 49