let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] < menorValor){
        menorValor = numbers[index]
    }
}

console.log(`O menor valor contido no array é: ${menorValor}`);


// output: O menor valor contido no array é: 2