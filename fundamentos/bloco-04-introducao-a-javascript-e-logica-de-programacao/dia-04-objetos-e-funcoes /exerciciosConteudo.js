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