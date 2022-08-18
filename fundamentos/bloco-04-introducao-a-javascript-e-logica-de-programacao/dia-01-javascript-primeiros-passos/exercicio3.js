// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

let a = Math.floor(Math.random()*20);
let b = Math.floor(Math.random()*20);
let c = Math.floor(Math.random()*20);

let result;

console.log(`Valor de A: ${a}  Valor de B: ${b}  Valor de C: ${c}`)

if(a > b && a > c || a===b &&  a > c || a===c && a > b) {
    result = a;
    console.log(`Valor maior foi: ${result}`)
}else if(b > a && b > c || b===a &&  b > c || b===c && b > a){
    result = b;
    console.log(`Valor maior foi: ${result}`)
}else if(a===b && b===c){
    result = c;
    console.log(`Todos são iguais: ${result}`)
}else{
    result = c;
    console.log(`Valor maior foi: ${result}`)
}


