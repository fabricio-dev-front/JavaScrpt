const numeros = [5, 1, 4, 9, 10, 8];
let i = 0;

function gets(){
    const numero = numeros[i];
    i++;
    return numero;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};