const {gets, print} = require('./auxiliares');

const quantidadeNumeros = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for(let i = 0; i < quantidadeNumeros; i++){
    const saidaDeNumros = gets();
    
    if(saidaDeNumros % 2 === 0){
        if(maiorNumeroPar === null || saidaDeNumros > maiorNumeroPar){
            maiorNumeroPar = saidaDeNumros;
        }
    } else{
        if(menorNumeroImpar === null || saidaDeNumros < menorNumeroImpar){
            menorNumeroImpar = saidaDeNumros;
        }
    }

}

print(`Maior número par: ${maiorNumeroPar}`);
print(`menor número impar: ${menorNumeroImpar}`);

