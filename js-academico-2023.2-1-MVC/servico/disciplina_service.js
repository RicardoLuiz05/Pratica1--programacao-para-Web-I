class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio;

    }
    inserir(codigo, nome) {
        if (this.pesquisarPorCodigo(codigo)) {
            throw new Error('Disciplina com código já existe!');
        }
        
        const disciplina = new Aluno(codigo, nome);
        this.repositorio.inserir(disciplina);
        return disciplina;
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listarDisciplinas().filter( disciplina => disciplina.codigo === codigo);
    }
}