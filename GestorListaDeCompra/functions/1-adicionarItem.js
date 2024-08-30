export function adicionarItem(listaItens){
    let nome = prompt('Qual o nome do item?').trim()
    let quantidade = prompt('Qual a quantidade?').trim()
    let categoria = prompt('Qual categoria desse item?(Alimento, ferramenta, higiene, etc)').trim()

    while(nome === '' || isNaN(Number(quantidade)) || quantidade === '' || categoria === ''){
        if(nome === ''){
            nome = prompt('Qual o nome do item?').trim()
        }

        if (isNaN(Number(quantidade)) || quantidade === '') {
            quantidade = Number(prompt('Qual a quantidade?')).trim()
        }

        if(categoria === ''){
            categoria = prompt('Qual categoria desse item?(Alimento, ferramenta, higiene, etc)').trim()
        }
    }

    let item = {nome, quantidade, categoria}
    listaItens.push(item)
}