export function produtoEscalar(vetor1, vetor2){
    if (vetor1.length != vetor2.length){
        throw('Erro! A dimensão dos vetores é diferente.')
    }
    return vetor1.reduce((acumulador, valor, i)=> acumulador += (vetor1[i] * vetor2[i]), 0)
}

export function norma(vetor){
    return Math.sqrt(produtoEscalar(vetor, vetor))
}

export function subtrairVetores(vetor1, vetor2){
    return vetor1.map((valor, indice)=> valor - vetor2[indice])
}

export function multiplicarPorEscalar(vetor, escalar){
    return vetor.map(valor=> valor * escalar)
}