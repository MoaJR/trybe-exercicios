// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i=1; i<=numbers.length; i++){
    for(j=0; j<i; j++){
        if(numbers[i] < numbers[j]){
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}

//output:
// 2
// 3
// 5
// 8
// 9
// 19
// 27
// 35
// 70
// 100