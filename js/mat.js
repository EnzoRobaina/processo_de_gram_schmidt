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
    let numerador = calcularProdutoEscalar(vetor1, vetor2)
    let denominador = calcularProdutoEscalar(vetor2, vetor2)
    return multiplicarPorEscalar(vetor2, numerador / denominador)
}

export function ortonormalizarGramSchmidt(listaDeVetores){
    let vetorNulo = gerarVetorNulo(listaDeVetores[0].length)
    let ortogonais = []
    for (let i = 0; i < listaDeVetores.length; i++) {
        let temp = listaDeVetores[i]
        if (i == 0)
            ortogonais.push(listaDeVetores[i])
        else {
            for (let j = 0; j < i; j++) {
                temp = subtrairVetores(temp, calcularProjecao(temp, ortogonais[j]))
            }
            if (!vetoresSaoIguais(temp, vetorNulo)){
                ortogonais.push(temp)
            }
        }
    }
    return normalizarListaDeVetores(ortogonais).map(e => toFixedVetor(e))
}

export function normalizarListaDeVetores(vetores){
    return vetores.map(vetor => multiplicarPorEscalar(vetor, 1 / calcularNorma(vetor)))
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