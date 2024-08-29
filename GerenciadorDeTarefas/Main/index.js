///adicionar
import { adicionarTarefa } from "../functions/1 - adicionarTarefa"
///listar
import { exibirTarefas } from "../functions/2 - exibirTarefa"
///editar
import { editarTarefa } from "../functions/3 - editarTarefa"
///remover
import { removerTarefa } from "../functions/4 - removerTarefa"
///marcar
import { marcarConcluida } from "../functions/5 - marcarConcluida"
///Pesquisar

///resumir

let listaTarefas = [
    {nome: 'Limpar o pc',
    descricao : 'Limpar as peças do pc',
    vencimento : '31/12/2024',
    prioridade: 'baixa'
},
    {nome: 'Agendar consulta',
    descricao : 'Agendar consulta ao médico',
    vencimento : '26/10/2024',
    prioridade: 'alta'
},
    {nome: 'Comprar Frutas',
    descricao : 'Comprar as frutas no fim de semana',
    vencimento : '7/8/2024',
    prioridade: 'média'
},
]

let tarefasConcluidas = []

let i = true
while(i){
    console.log('1 - Adicione uma tarefa a lista \n2 - Listar suas tarefas \n3 - Editar uma tarefa \n4 - Remover uma tarefa \n5 - Marcar tarefa como concluida \n6 - Pesquisar tarefa \n7 - Resumir tarefas \n8 - Encerrar programa')
    let escolha = Number(prompt('Escolha uma opção:'))

    switch(escolha){
        case 1:
            adicionarTarefa(listaTarefas)
            break
        
        case 2:
            exibirTarefas(listaTarefas, tarefasConcluidas)
            break
        
        case 3:
            editarTarefa(listaTarefas)
            break

        case 4:
            removerTarefa(listaTarefas)
            break

        case 5:
            marcarConcluida(listaTarefas)
            break

        case 6:
            ///
            break

        case 7:
            ///
            break

        case 8:
            ///
            break

        default:
            console.log('Escolha uma opção válida.')
    }
}