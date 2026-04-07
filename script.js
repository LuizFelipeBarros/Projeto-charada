/// Capturando os elementos HTML
const cardInner = document.getElementById('card-inner')
const campoPergunta = document.getElementById('pergunta')
const campoResposta = document.getElementById('resposta')
const btnNova = document.getElementById('btn-nova')

/// Evento que faz o card girar
cardInner.addEventListener('click', function girar(){
    cardInner.classList.toggle('[transform:rotateY(180deg)]')
})


// Função que irá buscar as charadas no backend
async function buscandoCharada(params) {
    try {

        const baseUrl = 'https://api-charada-ten.vercel.app'
        const endPoint = '/charadas/aleatorias'

        // volta o card pra frente
        cardInner.classList.remove('[transform:rotateY(180deg)]')

        // impressão no console log para verificação da rota concatenada
        // console.log(baseUrl+endPoint)
        // busca assíncrona da rota concatenada
        const respostaApi = await fetch(baseUrl+endPoint)
        console.log(respostaApi)

        const dados = await respostaApi.json()
         console.log(dados)
         console.log(dados.pergunta)
         console.log(dados.resposta)
         campoPergunta.textContent = dados.pergunta
         campoResposta.textContent = dados.resposta

    } catch (erro) {
        campoPergunta.textContent = "Erro ao conectar com o servido backend"
        console.error("Erro na busca", erro);
    }
}

btnNova.addEventListener('click', buscandoCharada)

buscandoCharada()