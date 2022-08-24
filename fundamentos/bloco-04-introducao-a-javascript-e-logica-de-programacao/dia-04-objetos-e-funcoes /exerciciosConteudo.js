{
//

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
//

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
//

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

//
let maiorNumero = (a, b) => {
    if(a > b) console.log(a + ' é o maior número.');
    else if(b > a) console.log(b + ' é o maior número.');
    else console.log('Numeros iguais');
}

maiorNumero(10, 5)

// output:
// 10 é o maior número.

//
let maiorTresNumeros = (a, b, c) => {
    if(a > b && a > c) console.log(a + ' é o maior número.');
    else if(b > c) console.log(b + ' é o maior número.');
    else console.log(c + ' é o maior número.');
}

maiorTresNumeros(1, 2, 3)

// output:
// 3 é o maior número.

//
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

// 
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
