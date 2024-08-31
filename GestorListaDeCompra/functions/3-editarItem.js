export function editarItem(listaItens){
    listaItens.forEach(item => console.log(item.nome))
    let escolha = prompt('Qual item deseja editar?').trim()
    let itemEscolhido = listaItens.find((item) => item.nome === escolha)
    if(itemEscolhido){
        let novoNome = prompt('Qual o novo nome?')
        let novaQuantidade = Number(prompt('Qual a nova quantidade?'))
        let novaCategoria = prompt('Qual a nova categoria?')

        itemEscolhido.nome = novoNome
        itemEscolhido.quantidade = novaQuantidade
        itemEscolhido.categoria = novaCategoria

        console.log(itemEscolhido)
    }
    else{
        console.log('Item não encontrado')
    }
}