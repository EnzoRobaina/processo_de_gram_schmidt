const mat = require("../mat.js")

test('calcular produto escalar', ()=>{
    expect(mat.calcularProdutoEscalar([1, 2, 3], [4, 5, 6]))
    .toBe(32)
})

test('calcular produto escalar com vetores negativos', ()=>{
    expect(mat.calcularProdutoEscalar([-9, -8, -7], [0, 1, 99]))
    .toBe(-701)
})

test('calcular produto escalar de vetores com dimensões diferentes', ()=>{
    expect(()=>{
        mat.calcularProdutoEscalar([1, 2], [0, 1, 2])
    })
    .toThrowError(/A dimensão dos vetores é diferente/)
})

test('calcular norma de um vetor', ()=>{
    expect(mat.calcularNorma([3, 5, -1]))
    .toBeCloseTo(Math.sqrt(35))

    expect(mat.calcularNorma([-4, -5, -6]))
    .toBeCloseTo(Math.sqrt(77))
})

test('subtrair vetores', ()=>{
    expect(mat.subtrairVetores([3, 3, 3], [1, 1, 1]))
    .toStrictEqual([2, 2, 2])
})

test('subtrair vetores com valores negativos', ()=>{
    expect(mat.subtrairVetores([-3, -3, -3], [-1, -1, -1]))
    .toStrictEqual([-2, -2, -2])
})

test('multiplicar vetor por escalar positivo', ()=>{
    expect(mat.multiplicarPorEscalar([2, 4, 8], 2))
    .toStrictEqual([4, 8, 16])
})

test('multiplicar vetor por escalar negativo', ()=>{
    expect(mat.multiplicarPorEscalar([3, 6, 9], -2))
    .toStrictEqual([-6, -12, -18])
})

test('calcular projecao de v em u', ()=>{
    expect(mat.calcularProjecao([1, 0, 3], [-1, 4, 2]))
    .toStrictEqual([-5/21, 20/21, 10/21])
})

test('calcular projecao de vetores ortogonais', ()=>{
    expect(mat.calcularProjecao([1, 0, 1], [1, 0, -1]))
    .toStrictEqual([0, 0, -0])
})