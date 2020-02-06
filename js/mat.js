export function produtoEscalar(vetor1, vetor2){
    if (vetor1.length != vetor2.length){
        throw('Erro! A dimensão dos vetores é diferente.')
    }
    return vetor1.reduce((acumulador, valor, i)=> acumulador += (vetor1[i] * vetor2[i]), 0)
}

export function norma(vetor){
    return Math.sqrt(produtoEscalar(vetor, vetor))
}