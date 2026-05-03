// Selecionar o botão e avançar 
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// selecionar todos os itens do slider 
const items = document.querySelectorAll('.list .item');

let currentIndex = 0; // índice do item ativo

// função para atualizar o item ativo 
const updateActiveItem = () => {
    // Remove a classe que está ativa 
    items.forEach(item => item.classList.remove('active'));
    // Adiciona a classe ao item atual 
    items[currentIndex].classList.add('active'); 
};


// evento de quando o botão clicar 
prevButton.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? items.length -1 : currentIndex -1; 
    updateActiveItem();
});

// evento para o botão avançar 
nextButton.addEventListener('click', () => {
    currentIndex = currentIndex === items.length -1 ? 0 : currentIndex +1; 
    updateActiveItem();
});

// inicializa o slider setando o primeiro item ativo