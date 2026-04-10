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

// Variáveis para rastrear charadas já exibidas
let charadasExibidas = new Set()
let tentativasMaximas = 10

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

        let tentativa = 0
        let dados
        let charadaRepetida = true

        // Tenta buscar uma charada que não tenha sido exibida
        while (charadaRepetida && tentativa < tentativasMaximas) {
            const respostaApi = await fetch(baseUrl + endPoint)
            
            // Verifica se a resposta é válida
            if (!respostaApi.ok) {
                throw new Error(`Erro HTTP: ${respostaApi.status}`)
            }

            dados = await respostaApi.json()

            // Valida se os dados não estão vazios
            if (!dados.pergunta || !dados.resposta || dados.pergunta.trim() === '' || dados.resposta.trim() === '') {
                console.warn("Charada vazia recebida, tentando novamente...")
                tentativa++
                continue
            }

            // Verifica se a charada já foi exibida
            if (charadasExibidas.has(dados.pergunta)) {
                console.log("Charada repetida, buscando uma nova...")
                tentativa++
                continue
            }

            charadaRepetida = false
        }

        // Se excedeu tentativas, limpa o histórico e mostra a charada mesmo assim
        if (tentativa >= tentativasMaximas) {
            console.warn("Limite de tentativas atingido. Limpando histórico.")
            charadasExibidas.clear()
        }

        campoPergunta.textContent = dados.pergunta
        campoResposta.textContent = dados.resposta

        // Adiciona a pergunta ao conjunto de charadas exibidas
        charadasExibidas.add(dados.pergunta)

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
