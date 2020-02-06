import { 
    calcularProdutoEscalar, 
    calcularNorma, 
    subtrairVetores, 
    multiplicarPorEscalar, 
    calcularProjecao,
    ortonormalizarGramSchmidt,
    obterNumeroAleatorio
} from './mat.js'

const v1 = [1, 2, 3]
const v2 = [4, 5, 6]
const v3 = [7, 8, 9]

console.log(subtrairVetores(v2, v1))

console.log(multiplicarPorEscalar(v1, 2))

console.log(calcularProjecao(v1, v2))

console.log(ortonormalizarGramSchmidt([v1, v2, v3]))

$(document).ready(function(){
    function getTamanhoVetor(dimensao){
        return `<div class="col-md-${(dimensao == 5) ? 2 : Math.floor((12-3)/dimensao)}"><input type="number" class="form-control"></div>`.repeat(dimensao)
        + `<div class="ml-auto pl-1 col-md-${(dimensao == 5) ? 1: 2}"><button class = "btn-dice btn btn-block btn-outline-primary"><i class="fas fa-dice-five"></i></button></div>`
    }

    function removerInputs(){
        $("form").find("input[type='number']").parents(".form-group.row.row-vetor").remove()
    }

    $("form").on('click', '.btn-dice', function(event) {
        event.preventDefault()
        $(this).parents(".row-vetor").find($("input[type='number']")).each(function(indice, elemento){
            $(elemento).val(obterNumeroAleatorio(0, 99))
        })
    })
    

    $("#dimensao").on('change', function(){
        removerInputs()
        let dimensao = $(this).val()

        for (let i = 0; i < dimensao; i++){
            $("form").append(
                `<div class="form-group row row-vetor">
                    <label class="col-md-1 col-form-label">#${i+1}:</label>
                    ${getTamanhoVetor(dimensao)}
                </div>`
            )
        }
    })
})

