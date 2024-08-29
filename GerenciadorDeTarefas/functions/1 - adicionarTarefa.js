export function adicionarTarefa (listaTarefas){
    let nome = prompt('Nome da tarefa:').toLowerCase().trim
    let descricao = prompt('Digite uma descrição para a tarefa:').toLowerCase().trim
    let vencimento = prompt('Qual o prazo para essa tarefa?(dd/mm/aaaa)').trim
    let prioridade = prompt('Qual a prioridade da sua tarefa?(Baixa, média ou alta)').toLowerCase().trim
    while(nome === '' || vencimento === '' || prioridade === ''){
        if(nome === ''){
            nome = prompt('Digite o nome da tarefa:')
        }

        if(vencimento === ''){
            vencimento = prompt('Qual o prazo para a tarefa?:')
        }

        if(prioridade === ''){
            prioridade = prompt('Qual a prioridade da sua tarefa?(Baixa, média ou alta):')
        }
    }
    
    let tarefa = {nome, descricao, vencimento, prioridade}

    listaTarefas.push(tarefa)
}