// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

let isPrimo = (n) => {
    if (n <= 0) return false;

    if (n == 2 || n == 3) return true;

    if (n % 2 == 0 || n % 3 == 0) return false;
    
    return true;
}

console.log(isPrimo(14));
//output: false

console.log(isPrimo(21));
//output: false

console.log(isPrimo(49));
//output: true
