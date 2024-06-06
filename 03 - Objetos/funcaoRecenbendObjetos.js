class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

function compararPessoas(primeiraPessoa, segundaPessoa){
    if(primeiraPessoa.idade > segundaPessoa.idade){
        console.log(`${primeiraPessoa.nome} é mais velha(o) de que ${segundaPessoa.nome}`);
    } else if(primeiraPessoa.idade < segundaPessoa.idade){
        console.log(`${segundaPessoa.nome} é mais velha(o) de que ${primeiraPessoa.nome}`);
    } else{
        console.log('ambos tem a mesmo idade!');
    }
}

const amelia = new Pessoa('amelia', 60);

const chico = new Pessoa('chico', 50);

compararPessoas(amelia, chico);