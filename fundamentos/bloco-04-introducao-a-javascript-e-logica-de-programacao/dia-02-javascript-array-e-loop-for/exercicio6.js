// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresImpares = 0;

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] % 2 === 1){
        valoresImpares++;
    }
}

if(valoresImpares !== 0){
    console.log(`Existe(m) ${valoresImpares} valor(es) ímpar(es)`);
}else{
    console.log('Nenhum valor ímpar encontrado');
}

// output: Existe(m) 6 valor(es) ímpar(es)