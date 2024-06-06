class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / Math.pow(this.altura, 2);
    }

    clacificarImc(){
        const imc = this.calcularImc();

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
}

const helia = new Pessoa('francisca helia', 56, 1.55);

console.log(helia);

console.log(helia.calcularImc());

console.log(helia.clacificarImc());
