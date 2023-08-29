class Disciplina {

    constructor(codigo, nome){
        this._codigo = codigo;
        this.nome = nome;
        this.alunos = new disciplinaRepositorio();
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