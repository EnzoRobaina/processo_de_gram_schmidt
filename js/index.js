import { 
    calcularProdutoEscalar, 
    calcularNorma, 
    subtrairVetores, 
    multiplicarPorEscalar, 
    calcularProjecao,
    ortonormalizarGramSchmidt
} from './mat.js'

const v1 = [1, 2, 3]
const v2 = [4, 5, 6]
const v3 = [7, 8, 9]

console.log(subtrairVetores(v2, v1))

console.log(multiplicarPorEscalar(v1, 2))

console.log(calcularProjecao(v1, v2))

console.log(ortonormalizarGramSchmidt([v1, v2, v3]))