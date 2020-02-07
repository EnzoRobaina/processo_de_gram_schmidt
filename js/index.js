import { 
    calcularProdutoEscalar, 
    calcularNorma, 
    subtrairVetores, 
    multiplicarPorEscalar, 
    calcularProjecao,
    ortonormalizarGramSchmidt,
    obterNumeroAleatorio,
    toFixedVetor,
    vetoresSaoIguais,
    gerarVetorNulo
} from './mat.js'

const v1 = [1, 2, 3]
const v2 = [4, 5, 6]
const v3 = [7, 8, 9]

$(document).ready(function(){
    function getTamanhoVetor(dimensao){
        return `<div class="col-md-${(dimensao == 5) ? 2 : Math.floor((12-3)/dimensao)}"><input type="number" class="form-control" value="0"></div>`.repeat(dimensao)
        + `<div class="ml-auto pl-1 col-md-${(dimensao == 5) ? 1: 2}"><button class = "btn-dice btn btn-block btn-outline-primary"><i class="fas fa-random"></i></button></div>`
    }

    function removerInputs(){
        $("form").find("input[type='number']").parents(".form-group.row.row-vetor").remove()
        $("#btn-calcular").parents(".form-group.row").remove()
    }

    $("form").on('click', '.btn-dice', function(event) {
        event.preventDefault()
        $(this).parents(".row-vetor").find($("input[type='number']")).each(function(indice, elemento){
            $(elemento).val(obterNumeroAleatorio(0, 99))
        })
    })
    

    $("#dimensao").on('change', function(){
        removerInputs()
        if ($(this).val() == 0){ return }

        let dimensao = $(this).val()
        for (let i = 0; i < dimensao; i++){
            $("form").append(
                `<div class="form-group row row-vetor">
                    <label class="col-md-1 col-form-label">#${i+1}:</label>
                    ${getTamanhoVetor(dimensao)}
                </div>`
            )
        }
        $("form").append(
            `<div class="form-group row">
                <div class = "ml-auto pl-1 col-md-2">
                    <button id = "btn-calcular" class = "btn btn-block btn-success"><i class="fas fa-calculator mr-1"></i>Calcular!</button>
                </div>
            </div>`
        )
    })

    function preencherModal(vetores){
        let modal = $("#resultadoModal")
        modal.find(".modal-body").html('')
        let dimensao = vetores[0].length

        vetores.forEach(function(vetor, indice){
            modal.find(".modal-body").append(
                `<div class = "py-2"><h6 class = "inline">v${indice + 1}:</h6> <h4 class = "inline">(${toFixedVetor(vetor).join(', ')})</h4></div>`
            )
        })
        
        
        modal.modal('show')
    }

    $("form").on('click', '#btn-calcular', function(event){
        event.preventDefault()
        let vetores = []
        $(".row-vetor").each(function(i, e){
            let vetorInterno = []
            $(this).find("input[type='number']").each(function(indice, elemento){
                vetorInterno.push(parseInt(elemento.value))
            })
            // console.log(vetorInterno)
            vetores.push(vetorInterno)
        })
        // console.log(ortonormalizarGramSchmidt(vetores))
        if (vetores.some(e=> vetoresSaoIguais(e, gerarVetorNulo(vetores[0].length)))){
            alert("Certifique-se de não enviar vetor nulo!")
            return
        }

        preencherModal(ortonormalizarGramSchmidt(vetores))
    })
})

