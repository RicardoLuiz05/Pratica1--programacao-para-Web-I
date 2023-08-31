class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio;

    };
    inserir(nome, codigo){
        const teste = this.pesquisarPorCodigo(codigo);
        if (teste.length > 0) {
            throw Error ('Código de disciplina já em uso!');
        }

        const disciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplina);
        return disciplina; 
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    };

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter( 
            disciplina => disciplina.codigo === codigo);
    }

    inserirAlunoDisciplina(codigo, aluno){
        const disciplina = this.pesquisarPorCodigo(codigo);

        if(disciplina){
            disciplina.alunos.push(aluno);
        }
        else {
            throw Error ("Disciplina não existente");
        }
    }

}
