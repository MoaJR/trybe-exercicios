// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];
let result = 0;

for(let i=1; i<=numbers.length; i++){

    result = numbers[i-1]*numbers[i]

    if(i==numbers.length){
        result = numbers[i-1] * 2;
    }
    
    newNumbers.push(result)
}

for (let index = 0; index < newNumbers.length; index++) {
    const element = newNumbers[index];
    console.log(element);
}

//output:
// 45
// 27
// 57
// 1330
// 560
// 800
// 200
// 70
// 945
// 54