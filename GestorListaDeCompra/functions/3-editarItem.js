export function editarItem(listaItens){
    listaItens.forEach(item => console.log(item.nome))
    let escolha = prompt('Qual item deseja editar?').trim()
    let itemEscolhido = listaItens.find((item) => item.nome === escolha)
    if(itemEscolhido){
        let novoNome = prompt('Qual o novo nome?').trim()
        let novaQuantidade = Number(prompt('Qual a nova quantidade?'))
        let novaCategoria = prompt('Qual a nova categoria?').trim()
        while(novoNome === '' || Number(novaQuantidade) === '' || novaCategoria === ''){
            if(novoNome === ''){
                novoNome = prompt('Qual o novo nome?').trim()
            }
            if(Number(novaQuantidade) === ''){
                novaQuantidade = prompt('Qual a nova quantidade?')
            }
            if(novaCategoria === ''){
                novaCategoria = prompt('Qual a nova categoria?').trim()
            }
        }

        itemEscolhido.nome = novoNome
        itemEscolhido.quantidade = novaQuantidade
        itemEscolhido.categoria = novaCategoria

    }
}