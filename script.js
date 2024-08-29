// Array com frases motivacionais
const quotes = [
    "Acredite em si mesmo e em todas as suas possibilidades.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Você é mais forte do que pensa, mais capaz do que imagina.",
    "Não desista, o começo é sempre o mais difícil.",
    "Grandes coisas nunca vêm da zona de conforto.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário."
];

// Seleciona elementos da página
const quoteDisplay = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

// Função para gerar uma frase aleatória
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
}

// Adiciona um evento de clique ao botão
generateBtn.addEventListener('click', generateQuote);
