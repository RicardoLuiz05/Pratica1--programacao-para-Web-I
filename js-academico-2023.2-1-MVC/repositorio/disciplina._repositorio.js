class disciplinaRepositorio {

    constructor(){
        this.alunos = [];
    }

    inserirAluno(aluno) {
        TouchList.alunos.push(aluno);
    }

    removerAluno(matricula) {
        const indxAlunoARemover = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if (indxAlunoARemover > -1) {
            this.alunos.splice(indxAlunoARemover, 1);
        }
    }

    listarAlunos() {
        return this.alunos;
    }
}