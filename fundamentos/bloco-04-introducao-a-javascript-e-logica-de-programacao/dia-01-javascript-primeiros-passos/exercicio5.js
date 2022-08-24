let a = 60;
let b = 60;
let c = 60;

let triangle = (a+b+c === 180) ? true : false;

if(a < 0 || b < 0 || c <0){
    console.log('Um ou mais ângulos inválidos');
}

console.log(triangle);