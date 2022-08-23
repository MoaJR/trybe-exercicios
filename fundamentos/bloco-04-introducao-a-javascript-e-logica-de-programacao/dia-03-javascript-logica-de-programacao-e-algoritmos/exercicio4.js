// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let isPrimo = (n) => {
    if (n <= 0) return false;

    if (n == 2 || n == 3 || n == 1) return false;

    if (n % 2 == 0 || n % 3 == 0) return false;

    for (let i = 5; i < n; i++) {
        if (n % i == 0) return false;
    }
    
    return true;
}

let numero = 50;

let maiorPrimo = [];

for (let i = 1; i < numero; i+=1) {
    if(isPrimo(i)){
        maiorPrimo.push(i)
    }
}

console.log(maiorPrimo[maiorPrimo.length -1]);

//output: 47

