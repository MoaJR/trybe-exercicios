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

    (stringLowercase === tempString) ? console.log('True') : console.log('False');;
}

verificaPalindrome('arara')

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

let mostRepetitive = (array) => {
    array.forEach((n) => {
        for (let i = 0; i < array.length; i++) {
            if(n == array[i]){
                console.log(n);
            }
        }
    })
}

array = [2, 3, 2, 5, 8, 2, 3]
mostRepetitive(array)