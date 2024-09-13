export function resumeItens(listaItens, itensComprados) {
    console.log('Resumo da lista de tarefas')
    console.log('Número total de itens:', listaItens.length + itensComprados.length)
    console.log('Número de itens não comprados:', listaItens.length)
    console.log('Número de itens comprados:', itensComprados.length)

    let contagemNaoComprados = {}
    for (const item of listaItens) {
        const categoria = item.categoria
        contagemNaoComprados[categoria] = (contagemNaoComprados[categoria] || 0) + 1
    }
    console.log('Contagem de itens não comprados por categoria:')
    for (const categoria in contagemNaoComprados) {
        console.log(`Categoria: ${categoria}, Quantidade de Itens: ${contagemNaoComprados[categoria]}`)
    }

    let contagemComprados = {}
    for (const item of itensComprados) {
        const categoria = item.categoria
        contagemComprados[categoria] = (contagemComprados[categoria] || 0) + 1
    }
}
