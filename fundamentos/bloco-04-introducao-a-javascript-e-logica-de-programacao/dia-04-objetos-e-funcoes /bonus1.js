let romanos = "mmcxiv";

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
  let string = stringTemp.toUpperCase();
  let sum = numerosRomanos[string[string.length - 1]];
  let atual = numerosRomanos[string[string.length - 1]];

  for (let i = string.length - 2; i >= 0; i -= 1) {
    if (numerosRomanos[string[i]] >= atual) {
      sum += numerosRomanos[string[i]];
    } else {
      sum -= numerosRomanos[string[i]];
    }
    atual = numerosRomanos[string[i]];
  }
  console.log(`${string} convertido em decimais é: ${sum}`);
};

translator(romanos);
