export function marcaItem(listaItens, itensComprados) {
    console.log('1 - Marcar item como comprado \n2 - Desfazer compra')
    let opcao = Number(prompt('Escolha uma opção:'))

    switch(opcao){
        case 1:
            listaItens.forEach(item => console.log(item.nome))
            let comprado = prompt('Qual item marcar como comprado?').trim()
            let a = listaItens.findIndex(item => item.nome === comprado)

            if (a !== -1){
                let [itemComprado] = listaItens.splice(indice, 1)
                itensComprados.push(itemComprado)
                /// ${} adiciona a variável sem precisar quebrar as ''
                console.log(`${itemComprado.nome} marcado como comprado.`)
            } else {
                console.log('Item não encontrado.')
            }
            break

        case 2:
            itensComprados.forEach(item => console.log(item.nome))
            let desfazer = prompt('Qual item deseja desfazer a compra?').trim()
            let indiceDesfazer = itensComprados.findIndex(item => item.nome === desfazer)

            if(indiceDesfazer !== -1){
                let [itemDesfeito] = itensComprados.splice(indiceDesfazer, 1)
                listaItens.push(itemDesfeito)
                console.log(`Compra do item ${itemDesfeito.nome} desfeita.`)
            } else {
                console.log('Item não encontrado na lista de comprados.')
            }
            break
    }
}