// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

let isPrimo = (n) => {
    if (n <= 0) return false;

    if (n == 2 || n == 3 || n == 1) return true;

    if (n % 2 == 0 || n % 3 == 0) return false;

    for (let i = 5; i < n; i++) {
        if (n % i == 0) return false;
    }
    
    return true;
}

console.log(isPrimo(14));
//output: false

console.log(isPrimo(21));
//output: false

console.log(isPrimo(47));
//output: true
