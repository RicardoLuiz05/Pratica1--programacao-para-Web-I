class Disciplina {

    constructor(codigo, nome){
        this._codigo = codigo;
        this.nome = nome;
        this.alunos = [];
        }

        inserirAluno(aluno) {
            this.alunos.push(aluno);
        }
    
        removerAluno(matricula){
            const indexDisciplina = this.alunos.findIndex(aluno => aluno.matricula === matricula);
            if (indexDisciplina > -1) {
                this.disciplinas.splice(indexDisciplina, 1);
            }
        }
    
        listarAlunos() {
            return this.alunos;
        }

        get nome() {
            return this.nome;
        }
    
        set nome(novoNome) {
            this.nome = novoNome;
        }

        get codigo() {
            return this._codigo;
        }

        get alunos(){
            return this.alunos.listarAlunos();
        }


    
}