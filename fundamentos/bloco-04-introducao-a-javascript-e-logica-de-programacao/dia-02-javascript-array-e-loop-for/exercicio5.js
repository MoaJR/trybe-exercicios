let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] > maiorValor){
        maiorValor = numbers[index]
    }
}

console.log(`O maior valor contido no array é: ${maiorValor}`);


// output: O maior valor contido no array é: 100