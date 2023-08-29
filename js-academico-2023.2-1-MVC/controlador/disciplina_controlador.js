class DisciplinaControlador {

    constructor(){
        this.servico = new DisciplinaService();
    }

    inserirDisciplina() {
        const nome = document.querySelector("#disciplina");
        const codigo = document.querySelector("#código");
        const disciplinaInserida = this.servico.inserir(Number(codigo.value), nome.value);
        const listaDisciplinas = document.querySelector("#listaDiciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaCodigo(disciplinaInserida, listaDisciplinas);

        }
    }

    inserirDisciplinaCodigo(disciplina, receptor) {
        const elemento = document.createElement("li");
        elemento.textContent =`Código: ${disciplina.codigo} - Disciplina: ${disciplina.nome}`;
        receptor.appendChild(elemento);

    }
}