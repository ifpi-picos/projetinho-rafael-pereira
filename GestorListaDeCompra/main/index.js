import { adicionarItem} from "../functions/1-adicionarItem"
import { exibirLista } from "../functions/2-exibirLista"

let menu = ('1 - Adicionar item \n2 - Exibir lista \n3 - Editar item \n4 - Remover item \n5 - Marcar como comprado ou não comprado \n6 - Resumo da lista de itens \n7 - Fechar programa')

let listaItens = [
    {
        nome: 'arroz',
        quantidade: 1,
        categoria: 'alimento'
    },
    {
        nome: 'sabão',
        quantidade: 1,
        categoria: 'higiene'
    },
    {
        nome: 'martelo',
        quantidade: 2,
        categoria: 'ferramenta'
    }
]
let itensComprados = []

let a = true
while(a){
    console.log(menu)
    let opcao = Number(prompt('Escolha uma opção:'))
    switch(opcao){
        case 1:
            adicionarItem(listaItens)
            break
        case 2:
            exibirLista(listaItens, itensComprados)
            break
        case 3:
            ///
            break
        case 4:
            ///
            break
        case 5:
            ///
            break
        case 6:
            ///
            break
        case 7:
            a = false
            console.log('Obrigado por usar o programa')
    }
}