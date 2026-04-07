const cardInner = document.getElementById('card-inner')
const campoPergunta = document.getElementById('pergunta')
const campoResposta = document.getElementById('resposta')

// Novos elementos
const btnCerto = document.getElementById('btn-certo')
const btnErrado = document.getElementById('btn-errado')
const displayAcertos = document.getElementById('acertos')
const displayErros = document.getElementById('erros')

// Variáveis de controle do placar
let acertos = 0
let erros = 0

// Evento que faz o card girar
cardInner.addEventListener('click', function girar(){
    cardInner.classList.toggle('[transform:rotateY(180deg)]')
})

// Função principal de busca
async function buscandoCharada() {
    try {
        const baseUrl = 'https://api-charada-ten.vercel.app'
        const endPoint = '/charadas/aleatorias'

        // Garante que o card volte para a frente antes de mostrar a nova pergunta
        cardInner.classList.remove('[transform:rotateY(180deg)]')
        
        campoPergunta.textContent = "Buscando..."

        const respostaApi = await fetch(baseUrl + endPoint)
        const dados = await respostaApi.json()

        campoPergunta.textContent = dados.pergunta
        campoResposta.textContent = dados.resposta

    } catch (erro) {
        campoPergunta.textContent = "Erro ao conectar com o servidor"
        console.error("Erro na busca", erro);
    }
}

// Lógica dos botões de pontuação
btnCerto.addEventListener('click', () => {
    acertos++
    displayAcertos.textContent = acertos
    buscandoCharada()
})

btnErrado.addEventListener('click', () => {
    erros++
    displayErros.textContent = erros
    buscandoCharada()
})

// Carrega a primeira charada ao abrir o site
buscandoCharada()
