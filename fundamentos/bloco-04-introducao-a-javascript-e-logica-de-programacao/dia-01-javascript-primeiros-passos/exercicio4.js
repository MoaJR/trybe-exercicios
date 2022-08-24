let min = Math.ceil(-100)
let max = Math.floor(100)

let number = Math.floor(Math.random()*(max - min)+min)

console.log(number)

if(number>0){
    console.log('Positive');
}else if(number < 0){
    console.log('Negative');
}else{
    console.log('Zero');
}

