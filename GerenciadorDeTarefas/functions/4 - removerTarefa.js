export function removerTarefa(listaTarefas) {
    console.table(listaTarefas)
    let escolha = parseInt(prompt('Qual tarefa deseja remover de acordo com o index?'))

    if (escolha >= 0 && escolha < listaTarefas.length) {
        listaTarefas.splice(escolha, 1)
        console.log('Tarefa removida')
    } else {
        console.log('Escolha inválida')
    }
}