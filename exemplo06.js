import dados from "./dados/alunos.json" with { type: "json" };

for (let i = 0; i < dados.length; i++){
    let nome = dados[i].nome;
    let turma = dados[i].turma;
    console.log(`nome: ${nome} - turma: ${turma}`)
}

//console.log(dados);