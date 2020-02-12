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