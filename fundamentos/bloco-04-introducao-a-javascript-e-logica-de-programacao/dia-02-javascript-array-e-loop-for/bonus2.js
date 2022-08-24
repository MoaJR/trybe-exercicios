let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i=1; i<=numbers.length; i++){
    for(j=0; j<i; j++){
        if(numbers[i] > numbers[j]){
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
// 100
// 70
// 35
// 27
// 19
// 9
// 8
// 5
// 3
// 2