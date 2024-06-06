const objeto = {
    nome: 'fabricio',
    idade: 20,
    CPF: 11235578908,

    // criando metodos para o objeto.
    descricao: function(){
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
};

console.log(objeto.nome); // vai aparecer oq tem dentro da variavel 'nome' q esta dentro do 'objeto'
// console.log(objeto.idade);
 
objeto.idade = 21; // editando informações de um objeto.
console.log(objeto.idade);

objeto.descricao(); // executando a função dentro do objeto.