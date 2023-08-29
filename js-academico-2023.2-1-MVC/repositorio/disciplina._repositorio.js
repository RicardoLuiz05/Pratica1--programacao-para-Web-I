class DisciplinaRepositorio {

    constructor(){
        this.disciplinas = []
        this.alunos = [];
    }

    inserir(disciplina) {
        this.disciplina.push(disciplina);
    }

    remover(codigo){
        const indexDisciplina = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indexDisciplina > -1) {
            this.disciplinas.splice(indexDisciplina, 1);
        }
    }

    listarDisciplinas() {
        return this.diciplinas;
    }
}