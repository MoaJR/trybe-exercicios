// 1

let verificaPalindrome = (string) => {
    let stringLowercase = string.toLowerCase()
    let tempString = '';

    for (let i = stringLowercase.length-1; i >= 0; i -= 1) {
        tempString += stringLowercase[i];        
    }

    return (stringLowercase === tempString) ? true : false;
}

console.log(verificaPalindrome('arara'));

// 2
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

// 3

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

// 4

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

// 🚀 5

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

// 6

let somatorio = (n) => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(somatorio(5));

// 7

let isEnding = (string, ending) => {
    let tempString = string.slice(-(ending.length));
    return (tempString === ending) ? true : false;
}

console.log(isEnding('trybe', 'be'))