export function editarTarefa(listaTarefas){
    console.table(listaTarefas)
    let escolha = Number(prompt('Qual tarefa deseja editar de acordo com o index?'))
    const tarefa = listaTarefas[escolha]
    let escolher = Number(prompt('1 - Nome \n2 - Descrição \n3 - Vencimento'))   
}