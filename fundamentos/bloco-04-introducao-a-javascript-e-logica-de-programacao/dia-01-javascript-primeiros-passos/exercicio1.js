// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = Math.floor(Math.random()*20), b = Math.floor(Math.random()*20);
let result;

console.log(`Valor de A: ${a}  Valor de B: ${b}`)

//1
result = a + b;
console.log(`Resultado de A + B: ${result}`)

//2
result = a - b;
console.log(`Resultado de A - B: ${result}`)

//3
result = a * b;
console.log(`Resultado de A * B: ${result}`)

//4
result = a / b;
console.log(`Resultado de A / B: ${result}`)

//5
result = a % b;
console.log(`Resultado de A % B: ${result}`)