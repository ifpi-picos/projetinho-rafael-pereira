export function exibirLista(listaItens, itensComprados){
    console.log('1 - Exibir itens em ordem alfabética \n2 - Exibir por categoria \n3 - Exibir por quantidade \n4 - Filtros')
    let opcao = Number(prompt('Escolha uma opção:'))

    switch(opcao){
            case 1:
            let ordem  = listaItens.sort((item1, item2) => item1.nome.localeCompare(item2.nome))
            console.log(ordem)
                break
            case 2: 
            let a = listaItens.sort((item1, item2) => item1.categoria.localeCompare(item2.categoria))
            console.log(a)
            break
            case 3:
                let quant = listaItens.sort((item1, item2) => item1.quantidade - item2.quantidade)
                console.log(quant)
                break
            case 4:
                console.log('1 - Filtrar por categoria \n2 - Filtrar por status(Comprado/não comprado)')
                let opcao = Number(prompt('Escolha uma opção:'))
                    switch(opcao){
                        case 1:
                            let escolha = prompt('Qual categoria?').trim()
                            let a = listaItens.filter((item) => item.categoria === escolha)
                            console.log(a)
                            break
                        case 2:
                            console.log('1 - Comprado \n2 - Não comprado')
                            let CouNC = Number(prompt('Escolha uma opção:'))
                            switch(CouNC){
                                case 1:
                                console.log(itensComprados)
                                break
                                case 2:
                                    console.log(listaItens)
                            }
                    }
}
}