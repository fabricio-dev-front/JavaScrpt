function meuNome(nome){
    return 'meu nome é ' + nome;
}
meuNome('fabricio');

function verificaIdade(idade){
    if(idade >= 18){
        console.log(meuNome('fabricio') + 'e sou de maior');
    } else{
        console.log(meuNome('fabricio') + 'e sou de menor');
    }
}
verificaIdade(20);


