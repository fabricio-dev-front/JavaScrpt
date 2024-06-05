// dentro dos () podemos passar paremetros
// EX: (nome);
function teste(nome){
    console.log("teste " + nome);
}

teste("chico"); // aqui eu estou executando a funçõa.


// função com dois parametros:
function cobrancaDeJuros(valor, juros){
    const valorDoAcressimo = (juros / 100) * valor;
    return valor + valorDoAcressimo;
}

console.log(cobrancaDeJuros(100, 10)); // aqui eu estou executando a funçõa.