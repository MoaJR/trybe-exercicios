let n = 9;
let string = '';



for (let i = 0; i < n/2; i++) {
    
    for (let j = 0; j < n; j++) {
        if(i === (n-1)/2){
            string += '*';  
        }else{
            if(j+i == Math.floor(n/2) || j-i == Math.floor((n/2))){
                string += '*';
            }else{
                string += ' ';
            }
        }        
    }

    string += '\n';
}

console.log(string);

