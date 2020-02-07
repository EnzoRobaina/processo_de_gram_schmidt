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

export function ortonormalizarGramSchmidt(listaDeVetores){
    let listaOrtonormalizada = []
    for (let i = 0; i < listaDeVetores.length; i++) {
        let temp = listaDeVetores[i]
        for (var j = 0; j < i; j++) {
            // let produtoEscalar = calcularProdutoEscalar(listaDeVetores[i], listaDeVetores[j])
            temp = subtrairVetores(temp, calcularProjecao(temp, listaDeVetores[0]))
        }
        listaOrtonormalizada.push(multiplicarPorEscalar(temp, 1 / calcularNorma(temp)))
    }
    return listaOrtonormalizada
}

export function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

export function toFixedVetor(vetor){
    return vetor.map(e => parseFloat(e.toFixed(2)))
}

export function vetoresSaoIguais(vetor1, vetor2){
    return JSON.stringify(vetor1) == JSON.stringify(vetor2)
}

export function gerarVetorNulo(dimensao){
    let vetor = []
    for (let i = 0; i < dimensao; i++){
        vetor[i] = 0
    }
    return vetor
}