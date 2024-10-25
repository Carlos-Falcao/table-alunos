function addTable (event){
    event.preventDefault();
    //VARIAVEIS
    let nameAluno = document.getElementById('name_aluno');
    let notasAlunos = document.querySelectorAll('.notas');
    let freqn = document.getElementById('freq');

    //NOME DOS ALUNOS
    let newLine = document.createElement('tr');
    let nome = document.createElement('td');
    nome.innerText = nameAluno.value;

    //NOTAS ALUNOS
    let nota1 = document.createElement('td');
    let nota2 = document.createElement('td');
    let nota3 = document.createElement('td');
    nota1.innerText = notasAlunos[0].value;
    nota2.innerText = notasAlunos[1].value;
    nota3.innerText = notasAlunos[2].value;

    //FREQUENCIA ALUNOS
    let frequencia = document.createElement('td');
    frequencia.innerText = freqn.value + '%';

    let mediaAluno = document.createElement('td');
    let media = Math.floor((Number.parseFloat(notasAlunos[0].value) + Number.parseFloat(notasAlunos[1].value) + Number.parseFloat(notasAlunos[2].value)) / 3);
    mediaAluno.innerText = media;

    let situacao = document.createElement('td');

    if(media < 60 || Number.parseFloat(freqn.value) < 75){
        situacao.innerText = "Reprovado";
    } else {
        situacao.innerText = "Aprovado";
    }

    newLine.appendChild(nome);
    newLine.appendChild(nota1);
    newLine.appendChild(nota2);
    newLine.appendChild(nota3);
    newLine.appendChild(mediaAluno);
    newLine.appendChild(frequencia);
    newLine.appendChild(situacao);
    document.getElementById('tabela').appendChild(newLine);
}

document.getElementById('submit_buttom').addEventListener('click', addTable);