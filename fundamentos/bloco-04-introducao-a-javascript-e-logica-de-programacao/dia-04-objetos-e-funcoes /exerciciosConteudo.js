{
// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (const key in names) {
    console.log(`Olá ${names[key]}, seja bem vindo!`);
}

// output:
// Olá João, seja bem vindo!
// Olá Maria, seja bem vindo!
// Olá Jorge, seja bem vindo!
}

{
// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (const key in car) {
    console.log(`Chave: ${key} - Valor: ${car[key]}`);
}

// output:
// Chave: model - Valor: A3 Sedan
// Chave: manufacturer - Valor: Audi
// Chave: year - Valor: 2020
}

// FUNÇÕES

{
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let soma = (a, b) => {
    console.log(a + b);
}
let subtracao = (a, b) => {
    console.log(a - b);
}
let multiplicacao = (a, b) => {
    console.log(a * b);
}
let divisao = (a, b) => {
    console.log(a / b);
}
let modulo = (a, b) => {
    console.log(a % b);
}

soma(5, 7)
subtracao(5, 7)
multiplicacao(5, 7)
divisao(5, 7)
modulo(5, 7)

// output:
// 12
// -2
// 35
// 0.7142857142857143
// 5

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
let maiorNumero = (a, b) => {
    if(a > b) console.log(a + ' é o maior número.');
    else if(b > a) console.log(b + ' é o maior número.');
    else console.log('Numeros iguais');
}

maiorNumero(10, 5)

// output:
// 10 é o maior número.

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
let maiorTresNumeros = (a, b, c) => {
    if(a > b && a > c) console.log(a + ' é o maior número.');
    else if(b > c) console.log(b + ' é o maior número.');
    else console.log(c + ' é o maior número.');
}

maiorTresNumeros(1, 2, 3)

// output:
// 3 é o maior número.

// Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".
let signalCheck = (n) => {
    if (n > 0) console.log('Positive');
    else if (n < 0) console.log('Negative');
    else console.log('Zero');
}

signalCheck(15)
signalCheck(-15)
signalCheck(0)

// output:
// Positive
// Negative
// Zero

// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let isTriangle = (x, y, z) => {
    if(x <= 0 || y <= 0 || z <= 0) {
        console.log('Erro! Insira valores válidos');
        return;
    }
    if(x + y + z === 180) console.log(true); 
    else console.log(false);
}

isTriangle(120, 0, -60)
isTriangle(120, 45, 15)
isTriangle(120, 60, 15)

// output:
// Erro! Insira valores válidos
// true
// false
}
