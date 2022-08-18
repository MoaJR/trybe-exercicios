// Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

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

