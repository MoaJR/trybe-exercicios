
let romanos = 'XIV'

const numerosRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}; 

let translator = (stringTemp) => {
    let string = stringTemp.toUpperCase()
    const ultimo = string.length-1;
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        if(i !== ultimo){
            if(numerosRomanos[string[i]] < numerosRomanos[string[i+1]]){
                sum += (numerosRomanos[string[i+1]] - numerosRomanos[string[i]])
            }else if(numerosRomanos[string[i]] > numerosRomanos[string[i+1]]){
                //sum += (numerosRomanos[string[i+1]] + numerosRomanos[string[i]])
            }
        }
    }
    console.log(sum);
}
translator(romanos)

/*
function NumeroRomaninho(num) {
num = num.toLowerCase();
const tamanho = num.length;
let sum = numerosRomanos[num[tamanho - 1]];
let atual = numerosRomanos[num[tamanho - 1]];
for (let i = 2; i <= tamanho; i += 1) {
const ultimo = numerosRomanos[num[tamanho - i]];
console.log(ultimo);

if (atual <= ultimo) {
sum += ultimo;
} else {
sum -= ultimo;
}

atual = ultimo;
}

return sum;
}
console.log(NumeroRomaninho("XIV")); 
*/