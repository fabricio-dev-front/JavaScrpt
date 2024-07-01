const entradas = [80, 55, 5, 50, 10, 98, 23, 77, 9];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};