export function calcularProdutoEscalar(vetor1, vetor2){
    if (vetor1.length != vetor2.length){
        throw('Erro! A dimensão dos vetores é diferente.')
    }
    return vetor1.reduce((acumulador, valor, i)=> acumulador += (vetor1[i] * vetor2[i]), 0)
}

export function calcularNorma(vetor){
    return Math.sqrt(calcularProdutoEscalar(vetor, vetor))
}

export function subtrairVetores(vetor1, vetor2){
    return vetor1.map((valor, indice)=> valor - vetor2[indice])
}

export function multiplicarPorEscalar(vetor, escalar){
    return vetor.map(valor=> valor * escalar)
}

export function calcularProjecao(vetor1, vetor2){
    let produtoEscalar = calcularProdutoEscalar(vetor1, vetor2)
    let norma = Math.pow(calcularNorma(vetor1), 2)
    return multiplicarPorEscalar(vetor1, produtoEscalar/norma).map(valor => parseFloat(valor.toFixed(2)))
}