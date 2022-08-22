//3- Considere o array de strings abaixo:
//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];
let menor = array[0];

for (let i = 0; i < array.length; i++) {
    if(array[i].length > maior.length){
        maior = array[i];
    }
}
for (let i = 0; i < array.length; i++) {
    if(array[i].length < menor.length){
        menor = array[i];
    }
}

console.log(`A maior palavra é ${maior} com ${maior.length} caracteres.`);
console.log(`A menor palavra é ${menor} com ${menor.length} caracteres.`);