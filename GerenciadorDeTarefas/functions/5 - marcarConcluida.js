export function marcarConcluida(listaTarefas, tarefasConcluidas){
    for(let tarefa of listaTarefas){
        console.log(tarefa.nome)
    }
    let opcao = prompt('Qual tarefa deseja remover?').toLowerCase()
    let feito = listaTarefas.findIndex((tarefa) => tarefa.nome === opcao)
    let marcar = listaTarefas.splice(feito, 1)
    tarefasConcluidas.push(marcar)
}