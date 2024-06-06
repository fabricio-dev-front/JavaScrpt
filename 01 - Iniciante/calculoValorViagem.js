console.log("Preço de uma viagem");

const etanol = 5.79;
const gasolina = 6.66;

const kmPorLitro = 10;
const distanciaEmKmDaViagem = 100;

const resultado = (distanciaEmKmDaViagem / kmPorLitro);
const tipoDoCombustivel = 'etanol';

if(tipoDoCombustivel === 'gasolina'){
    const valorDoGasto = (resultado * etanol);
    console.log(valorDoGasto.toFixed(2));
} else{
    const valorDoGasto = (resultado * gasolina);
    console.log(valorDoGasto.toFixed(2));
}

