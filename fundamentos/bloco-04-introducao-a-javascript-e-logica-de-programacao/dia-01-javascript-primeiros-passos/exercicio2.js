// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let a = Math.floor(Math.random()*20), b = Math.floor(Math.random()*20);

let result = (a > b) ? a : b;
console.log(`Valor de A: ${a}  Valor de B: ${b}`)

console.log(result)