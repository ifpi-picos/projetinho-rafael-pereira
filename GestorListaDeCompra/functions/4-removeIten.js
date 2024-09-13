export function removeItem(listaItens){
    listaItens.forEach(item => console.log(item.nome))
    let escolha = prompt('Qual item deseja remover?').trim()
    let itemEscolhido = listaItens.find((item) => item.nome === escolha)
    if(itemEscolhido){
        console.log('Deseja mesmo remover esse item? \n1 - Sim \n2 - Não')
        let opcao = Number(prompt('Escolha uma opção:'))
        switch(opcao){
            case 1:
                listaItens.splice(itemEscolhido, 1)
                break
            case 2:
                console.log('Item não removido')
        }
    }
    else{
        console.log('Item não está na lista')
    }
}