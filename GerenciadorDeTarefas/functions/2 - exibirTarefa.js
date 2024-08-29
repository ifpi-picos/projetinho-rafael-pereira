export function exibirTarefas(listaTarefas, tarefasConcluidas){
    let i = true
    while(i){
    console.log('1 - Exibir tarefas pendentes \n2 - Exibir tarefas concluídas \n3 - Ordenar \n4 - Filtros \n5 - Voltar ao menu principal')
    let escolha = Number(prompt('Escolha uma opção:'))
    switch(escolha){
        case 1:
            console.log(listaTarefas)
            break
        case 2:
            console.log(tarefasConcluidas)
            break
        case 3:
            console.log('1 - Data de vencimento \n2 - Prioridade \n3 - Data de criação')
            let adc = Number(prompt('Escolha uma opção:'))
            switch(adc){
                case 1: 
                    ///
                break
                case 2:
                    ////
                break
                case 3: 
                ///
                break
            }
            break
        case 4:
            console.log('1 - Filtrar por prioridade \n2 - Filtrar por status \n3 - Filtrar por data de vencimento')
            let opcao = Number(prompt('Escolha uma opção:'))
            switch(opcao){
                case 1:
                    console.log('1 - Baixa \n2 - Média \n3 - Alta')
                    let escolha = Number(prompt('Escolha uma opção:'))
                    switch(escolha){
                        case 1:
                            for (let tarefa of listaTarefas){
                                if(tarefa.prioridade === 'baixa'){
                                    console.log('teste')
                                    console.log(tarefa)
                                }
                                break
                            }
                        case 2:
                            for(let tarefa of listaTarefas){
                                if(tarefa.prioridade === 'média'){
                                    console.log(tarefa)
                                }
                                break
                            }
                        case 3:
                            for(let tarefa of listaTarefas){
                                if(tarefa.prioridade === 'alta'){
                                    console.log(tarefa)
                                }
                                break
                            }
                    }

                case 2:

            }
            break
        case 5:
            let i = false
            break
    }
}   
}