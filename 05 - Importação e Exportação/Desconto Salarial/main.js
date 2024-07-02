const {gets, print} = require('./auxiliares');

const salarioBruto = gets();
const beneficio = gets();

function calcularPorcentagem(valor, percentual){
    return valor * (percentual / 100);
}

function PegarAliqueta(salario){
    if(salario >= 0 && salario <= 1100){
        return 5;
    } else if(salario >= 1100.01 && salario <= 2500){
        return 10;
    } else{
        return 15;
    }
}

const aliquotaImposto = PegarAliqueta(salarioBruto);

const valorDoImposto = calcularPorcentagem(salarioBruto, aliquotaImposto);

const valorTransferir = salarioBruto - valorDoImposto + beneficio;

print(valorTransferir);