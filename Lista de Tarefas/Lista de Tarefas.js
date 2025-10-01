let tarefas = [];

let id = 1;

function adicionarTarefa(nome) {
  
  const tarefa = {
    id: id++,
    nome: nome,
    status: "pendente"
  };

  tarefas.push(tarefa);

  console.log("Tarefa adicionada:", tarefa);
}

function editarTarefa(id, novoNome, novoStatus) {
  tarefas = tarefas.map(tarefa => {
    
    if (tarefa.id === id) {
      return {
        ...tarefa,
        nome: novoNome || tarefa.nome,
        status: novoStatus || tarefa.status
      };
    };

    return tarefa;
  
  });

  console.log("Tarefa editada com sucesso!");
}

function removerTarefa(id) {

  const listaAtual = tarefas.length;

  tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  if (tarefas.length < listaAtual) {
    console.log("Tarefa removida com sucesso!");
  } else {
    console.log("Nenhuma tarefa encontrada com esse ID!");
  };
}

function listarTarefas() {

  console.log("Lista de Tarefas:");

  tarefas.forEach(tarefa => {
    console.log(`ID: ${tarefa.id} | Nome: ${tarefa.nome} | Status: ${tarefa.status}`);
  });
  if (tarefas.length === 0) {
    console.log("Nenhuma tarefa encontrada!");
  };
}

function estatisticas() {

  const total = tarefas.length;

  const concluidas = tarefas.reduce((acc, tarefa) => tarefa.status === "concluída" ? acc + 1 : acc, 0);

  console.log(`Total: ${total} | Concluídas: ${concluidas} | Pendentes: ${total - concluidas}`);
}

function menu() {
  
  let opcao;
  
  do {
    opcao = prompt(
      "📋 Lista de Tarefas\n" +
      "1 - Adicionar Tarefa\n" +
      "2 - Editar Tarefa\n" +
      "3 - Remover Tarefa\n" +
      "4 - Listar Tarefas\n" +
      "5 - Estatísticas\n" +
      "6 - Finalizar a lista"
    );

    switch (opcao) {
      case "1":
        const nome = prompt("Digite o nome de uma nova tarefa:");
        adicionarTarefa(nome);

        break;

      case "2":
        listarTarefas();
        const idEditar = parseInt(prompt("Digite o ID da tarefa que quer editar:"));
        const novoNome = prompt("Novo o nome da tarefa ou deixe em branco:");
        const novoStatus = prompt("Novo o status (pendente/concluída) ou deixe em branco:");
        editarTarefa(idEditar, novoNome, novoStatus);

        break;

      case "3":
        listarTarefas();
        const idRemover = parseInt(prompt("Digite o ID da tarefa que quer remover:"));
        removerTarefa(idRemover);

        break;

      case "4":
        listarTarefas();

        break;

      case "5":
        estatisticas();

        break;

      case "6":
        console.log("Lista encerrada!");

        break;

      default:
        console.log("Opção inválida!");
    }

  } while (opcao !== "6");
}

menu();