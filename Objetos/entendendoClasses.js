class pessoa{ // como criar classes (class é a definição. É um modelo de como deve ser)
    nome;
    idade;

// com esse constructor tornamos o nome e a idade obrigatorio e precisamos passar dentro dos () no new pessoa(AQUI) quando esta sendo instanciado. 
// Assim, não precisamos mais fazer aquele 'fabricio.idade = 20' quando esta sendo instanciado a nova pessoa.
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;

        // [IMPORTANTE] - 'this' faz a gente ter acesso a todas as variaveis do nosso objeto.
    } 

    descrever(){
        console.log(`meu nome é ${this.nome}, tenho ${this.idade} anos e gosto de jogar bola`);
    }
}

const fabricio = new pessoa('fabricio', 30); // isso é instanciar uma nova pessoa a 'class pessoa' = (instancia é uma ocorrencia do objeto)
console.log(fabricio);

// o legal da calss pessoa é que podemos definir pessoas diferentes com suas caracteristicas especificas usando o 'new pessoa()' como está ai acima.

const gustavo = new pessoa('gustavo', 23); // fiz uma nova ocorrencia(instancia) usando o modelo 'class pessao'
console.log(gustavo);

fabricio.descrever(); // executando a função 'descerver' que está dentro da class pessoa com cada nova pessoa(fabricio).
gustavo.descrever(); // executando a função 'descerver' que está dentro da class pessoa com cada nova pessoa(gustavo).