const notas = [];

notas.push(6);
notas.push(8);
notas.push(4);
notas.push(10);

let soma = 0;

for(let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

console.log(soma / notas.length);