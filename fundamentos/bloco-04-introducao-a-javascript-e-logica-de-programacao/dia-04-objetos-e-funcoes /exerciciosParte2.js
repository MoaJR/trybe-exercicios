// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome('arara');
// Retorno esperado: true
// verificaPalindrome('desenvolvimento');
// Retorno esperado: false

let verificaPalindrome = (string) => {
    let stringLowercase = string.toLowerCase()
    let tempString = '';

    for (let i = stringLowercase.length-1; i >= 0; i -= 1) {
        tempString += stringLowercase[i];        
    }

    return (stringLowercase === tempString) ? true : false;
}

console.log(verificaPalindrome('arara'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

let maiorIndex = (array) => {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > maior){
            maior = array[i];
        }        
    }
    console.log(array.lastIndexOf(maior));
    
}

array = [2, 3, 6, 7, 10, 1]
maiorIndex(array)

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

let menorIndex = (array) => {
    let menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i] < menor){
            menor = array[i];
        }        
    }
    console.log(array.lastIndexOf(menor));
    
}

array = [2, 4, 6, 7, 10, 0, -3]
menorIndex(array)

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let nomeLongo = (array) => {
    let maior = '';
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > maior.length){
            maior = array[i];
        }        
    }
    console.log(maior);
    
}

array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
nomeLongo(array)

// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let mostRepetitive = (arrayUnsorted) => {
    let array = arrayUnsorted.sort();
    let numeroRepeticoes = 0;
    let numeroRepetido = 0;

    for (let i = 0; i < array.length; i++) {

        let count = 0;

        for (let j = 0; j < array.length; j++) {
            if(array[i] === array[j]){
                count += 1;
            }
        }        
        if(count > numeroRepeticoes){
            numeroRepeticoes = count;
            numeroRepetido = array[i];
        }
    }
    console.log(numeroRepetido);
}

array = [2, 3, 2, 5, 8, 8, 2, 3, 3, 3, 3]
mostRepetitive(array)

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let somatorio = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(somatorio(5));

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false

let isEnding = (string, ending) => {
    let tempString = string.slice(-(ending.length));
    return (tempString === ending) ? true : false;
}

console.log(isEnding('trybe', 'be'))