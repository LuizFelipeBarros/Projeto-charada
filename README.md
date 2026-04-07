# Gerador de Charadas

Um projeto simples de frontend para gerar charadas aleatórias usando uma API externa. O aplicativo apresenta uma interface interativa com um card que gira para revelar a resposta.

## Funcionalidades

- Geração de charadas aleatórias ao clicar no botão "Nova Charada".
- Interface com efeito de giro de card para mostrar pergunta e resposta.
- Design responsivo usando Tailwind CSS.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS**: Estilização com Tailwind CSS (via CDN).
- **JavaScript**: Lógica para buscar dados da API e manipular o DOM.
- **API Externa**: [API de Charadas](https://api-charada-ten.vercel.app) para obter charadas aleatórias.

## Como Usar

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em um navegador web.
3. Clique no botão "Nova Charada" para gerar uma nova charada.
4. Clique no card para girá-lo e ver a resposta.

## Estrutura do Projeto

- `index.html`: Arquivo principal da interface.
- `script.js`: Lógica JavaScript para interação com a API.
- `desenho.excalidraw`: Diagrama ou esboço do projeto (formato Excalidraw).

## API

O projeto utiliza a API hospedada em `https://api-charada-ten.vercel.app/charadas/aleatorias` para buscar charadas aleatórias. A resposta da API inclui campos como `pergunta` e `resposta`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Abra uma issue ou envie um pull request.

## Licença

Este projeto é de código aberto e está sob a licença MIT.

## Site

https://projeto-charada-ivory.vercel.app/

## Versão Back

https://api-charada-ten.vercel.app/