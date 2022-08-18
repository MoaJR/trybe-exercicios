let piece = 'CavaLO'.toLowerCase();

switch(piece){
    case "torre":
        console.log('Horizontal e Vertical sem limite');
        break;
    case "cavalo":
        console.log('Em L podendo pular peças');
        break;
    case "bispo":
        console.log('Diagonal sem limite');
        break;
    case "rainha":
        console.log('Livre leve e solta (como toda mulher mulher deveria ser)');
        break;
    case "rei":
        console.log('1 casa para qualquer lado');
        break;
    case "peao":
        console.log('1 casa para frente; no primeiro lance pode mover 2 casas');
        break;
    default:
        console.log('Insira uma peça válida');
}

