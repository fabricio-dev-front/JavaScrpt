const {gets, print} = require('./auxiliares');

const quantidadeNumeros = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for(let i = 0; i < quantidadeNumeros; i++){
    const saidaDeNumros = gets();
    
    if(saidaDeNumros % 2 === 0){
        if(saidaDeNumros > maiorNumeroPar){
            maiorNumeroPar = saidaDeNumros;
        }
    } else{
        if(menorNumeroImpar === 0){
            menorNumeroImpar = saidaDeNumros;
        } else if(saidaDeNumros < menorNumeroImpar){
            menorNumeroImpar = saidaDeNumros;
        }
    }

}

print(`Maior número par: ${maiorNumeroPar}`);
print(`menor número impar: ${menorNumeroImpar}`);

