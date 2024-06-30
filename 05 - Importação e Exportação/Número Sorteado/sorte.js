const {gets, print} = require('./auxiliares');

const numeroSorteados = [];

for(let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
}
/*
Neste trecho, temos um loop for que executa 5 vezes:

Em cada iteração, chamamos a função gets para obter um número (provavelmente de alguma fonte de entrada, como o teclado).

Armazenamos cada número obtido na constante numeroSorteado.

Adicionamos numeroSorteado ao array numeroSorteados usando o método push.
*/

let numeroMaior = 0; // variavel que irá armazenar o maior numero sorteado do for abaixo

for(let i = 0; i < numeroSorteados.length; i++){
    const numeroSorteado = numeroSorteados[i];
    if(numeroSorteado > numeroMaior){
        numeroMaior = numeroSorteado;
    }
}
/*
Neste trecho, percorremos o array numeroSorteados:

Para cada número no array (numeroSorteado), verificamos se ele é maior do que o valor atual de numeroMaior.

Se numeroSorteado for maior, atualizamos numeroMaior com numeroSorteado.
*/

print(numeroMaior); // imprime o maior numero sorteado.
