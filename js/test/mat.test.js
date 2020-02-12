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

test('efetuar processo de ortonormalizacao de gram schmidt em dimensao 2', ()=>{
    let d2 = [[1, 2], [3, 4]]
    expect(mat.ortonormalizarGramSchmidt(d2))
    .toStrictEqual(
        [
            mat.toFixedVetor([
                Math.sqrt(5) / 5, 
                2 * Math.sqrt(5) / 5
            ]), 
            mat.toFixedVetor([
                2 * Math.sqrt(5) / 5, 
                -Math.sqrt(5) / 5
            ])
        ]
    )
})

test('efetuar processo de ortonormalizacao de gram schmidt em dimensao 3', ()=>{
    let d3 = [[1, 2, 3], [2, 3, 4], [4, 5, 6]]
    expect(mat.ortonormalizarGramSchmidt(d3))
    .toEqual(
        expect.arrayContaining(
            [
                mat.toFixedVetor([
                    Math.sqrt(14) / 14,
                    Math.sqrt(14) / 7,
                    3 * Math.sqrt(14) / 14
                ]),
                mat.toFixedVetor([
                    4 * Math.sqrt(21) / 21,
                    Math.sqrt(21) / 21,
                    -2 * Math.sqrt(21) / 21
                ])
            ]
        )
    )
})

test('efetuar processo de ortonormalizacao de gram schmidt em dimensao 4', ()=>{
    let d4 = [[1, 2, 3, 4], [2, 3, 4, 5], [4, 5, 6, 7], [6, 7, 8, 9]]
    expect(mat.ortonormalizarGramSchmidt(d4))
    .toEqual(
        expect.arrayContaining(
            [
                mat.toFixedVetor([
                    Math.sqrt(30) / 30,
                    Math.sqrt(30) / 15,
                    Math.sqrt(30) / 10,
                    2 * Math.sqrt(30) / 15,
                ]),
                mat.toFixedVetor([
                    Math.sqrt(6) / 3,
                    Math.sqrt(6) / 6,
                    0,
                    -Math.sqrt(6) / 6,
                ])
            ]
        )
    )
})

test('efetuar processo de ortonormalizacao de gram schmidt em dimensao 5', ()=>{
    let d5 = [[1, 2, 3, 4, 5], [2, 3, 4, 5, 6], [4, 5, 6, 7, 8], [6, 7, 8, 9, 10], [8, 9, 10, 11, 12]]
    expect(mat.ortonormalizarGramSchmidt(d5))
    .toEqual(
        expect.arrayContaining(
            [
                mat.toFixedVetor([
                    Math.sqrt(55) / 55,
                    2 * Math.sqrt(55) / 55,
                    3 * Math.sqrt(55) / 55,
                    4 * Math.sqrt(55) / 55,
                    Math.sqrt(55) / 11,
                ]),
                mat.toFixedVetor([
                    4 * Math.sqrt(110) / 55,
                    Math.sqrt(110) / 22,
                    Math.sqrt(110) / 55,
                    -Math.sqrt(110) / 110,
                    -(2 * Math.sqrt(110) / 55),
                ])
            ]
        )
    )
})