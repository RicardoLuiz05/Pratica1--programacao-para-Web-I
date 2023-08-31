class Disciplina {

    constructor(codigo, nome){
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
        }
    
        listarAlunos() {
            return this.alunos;
        }

        get nome() {
            return this._nome;
        }
    
        set nome(novoNome) {
            this._nome = novoNome;
        }

        get codigo() {
            return this._codigo;
        }

        get alunos(){
            return this.listarAlunos();
        }

        set alunos(novosAlunos){
            this._alunos = novosAlunos;
        }



    
}