export function adicionarItem(listaItens){
    let nome = prompt('Qual o nome do item?').toLowerCase().trim
    let quantidade = Number(prompt('Qual a quantidade?')).trim
    let categoria = prompt('Qual categoria desse item?(Alimento, ferramenta, higiene, etc)').toLowerCase().trim
    while(nome === '' || quantidade === '' || categoria === ''){
        if(nome === ''){
            let nome = prompt('Qual o nome do item?')
        }

        if(quantidade === ''){
            let quantidade = Number(prompt('Qual a quantidade?'))
        }

        if(categoria === ''){
            let categoria = prompt('Qual categoria desse item?(Alimento, ferramenta, higiene, etc')
        }
    }

    let item = {nome, quantidade, categoria}
    listaItens.push(item)
}