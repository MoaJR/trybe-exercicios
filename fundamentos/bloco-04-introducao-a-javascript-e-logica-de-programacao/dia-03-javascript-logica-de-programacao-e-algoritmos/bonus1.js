// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let string = '';

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        string += '*';        
    }
    string += '\n';
}

console.log(string);