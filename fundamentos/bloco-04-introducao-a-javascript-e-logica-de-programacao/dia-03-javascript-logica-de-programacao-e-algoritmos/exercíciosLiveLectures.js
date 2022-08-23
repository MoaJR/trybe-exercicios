// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

{
let sum = 0;

for (let i = 1; i <= 50; i += 1) {
    sum += i;
}

console.log(sum);
}

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

{
let sum = 0;

for (let i = 2; i <= 150; i += 1) {
    if(i%3 == 0){
        sum += 1;
    }
}

if (sum === 50){
    console.log('Batman é mais forte que Superman');
}else{
    console.log(sum);
}
}

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

{
let jogador1 = 'papel';
let jogador2 = 'papel';

if(jogador1 == 'pedra' && jogador2 == 'tesoura' || jogador1 == 'papel' && jogador2 == 'pedra' || jogador1 == 'tesoura' && jogador2 == 'papel'){
    console.log('Player 1 won');
}else if(jogador1 == 'pedra' && jogador2 == 'papel' || jogador1 == 'papel' && jogador2 == 'tesoura' || jogador1 == 'tesoura' && jogador2 == 'pedra'){
    console.log('Player 2 won');
}else{
    console.log('A Ties');
}

}

{
//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let maiorIdade = (25 >= 18) ? console.log('A pessoa é maior de idade') : console.log('A pessoa é menor de idade');

}

{
// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 28;
let Murilo = 25;
let Baeta = 32;

if(Carolzita < Murilo && Carolzita < Baeta){
    console.log(Carolzita);
}else if(Murilo < Baeta){
    console.log(Murilo);
}else{
    console.log(Baeta);
}

}