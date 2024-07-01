const {gets, print} = require('./auxiliares');

const quantidadeDeAlunos = gets();
let numeroMaior = 0;

for(let i = 0; i < quantidadeDeAlunos; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > numeroMaior){
        numeroMaior = numeroSorteado;
    }
}

print(numeroMaior); 
