function escrevaSeuNome(nome){
    return 'meu nome é ' + nome;    
}
console.log(escrevaSeuNome('fabricio'));

// função que verifica idade
function verificaIdade(idade){
    if(idade >= 18){
        return 'maior de idade'
    } else{
        return 'menor de idade'
    }
}
console.log(verificaIdade(10));