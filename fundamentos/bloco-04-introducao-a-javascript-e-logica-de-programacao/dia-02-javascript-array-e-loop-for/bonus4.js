let jogo = [3, 17, 20, 42, 50, 60];

let sorteado = [];


while(sorteado.length < 6){
    let numRandom = Math.floor(Math.random() * 10 + 1)
    
    if(sorteado.length === 0){
        sorteado.push(numRandom)
    }else{
        
            if(sorteado.includes(numRandom)){
                numRandom = Math.floor(Math.random() * 10 + 1)
                console.log('repetido: ' + numRandom);
            }else{
                sorteado.push(numRandom)
            }
        
    }
}

console.log(sorteado);