// let pai = document.getElementById('elementoOndeVoceEsta').parentNode;
// pai.style.color = 'red';

// let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
// primeiroFilhoDoFilho.innerText = 'In deserunt elit velit laborum cupidatat adipisicing sint ea nisi et.'

// let primeiroFilho = document.getElementById('pai').firstChild;
// console.log(primeiroFilho);

// let primeiroFilho = document.getElementById("elementoOndeVoceEsta").previousElementSibling;
// console.log(primeiroFilho);

// let atention = document.getElementById("elementoOndeVoceEsta").nextSibling;
// console.log(atention);

// let thirdChild = document.getElementById("elementoOndeVoceEsta").nextElementSibling;
// console.log(thirdChild);

let thirdChild = document.getElementById("pai").children;
console.log(thirdChild[2]);