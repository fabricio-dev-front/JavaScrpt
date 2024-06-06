function calculaImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificacao(imc){
    if(imc < 18.5){
        return "abaixo do peso";
    } else if(imc > 18.5 && imc < 25){
        return "peso normal";
    } else if(imc > 25 && imc < 30){
        return "acima do peso";
    } else if(imc > 30 && imc < 40){
        return "obeso";
    } else if(imc > 40){
        return "obesidade grave";
    }
}

function main(){
    const peso = 87;
    const altura = 1.80;

    const imc = calculaImc(peso, altura);
    console.log(imc.toFixed(2));
    console.log(classificacao(imc));
}
main();

