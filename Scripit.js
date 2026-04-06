  // Função que mostra o vídeo quando o botão é clicado

function abrirVideo() {
    const modal = document.getElementById('modalVideo');
    const video = document.getElementById('meuVideo');
    
    modal.classList.add('ativo');
    video.play();
}

function fecharVideo() {
    const modal = document.getElementById('modalVideo');
    const video = document.getElementById('meuVideo');
    
    modal.classList.remove('ativo');
    video.pause();
    video.currentTime = 0; // Volta o vídeo para o início
}

// Fecha o modal se clicar fora do vídeo
document.getElementById('modalVideo').addEventListener('click', (evento) => {
    if (evento.target.id === 'modalVideo') {
        fecharVideo();
    }
});




// Seleciona o botão voltar e avançar
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Seleciona todos os itens do slider
const items = document.querySelectorAll('.list .item');

let currentIndex = 0; // índice do item ativo

// Função para atualizar o item ativo
const updateActiveItem = () => {
  // Remove a classe 'active' de todos os itens
  items.forEach(item => item.classList.remove('active'));

  // Adiciona 'active' no item atual
  items[currentIndex].classList.add('active');
};

// Evento para botão voltar
prevButton.addEventListener('click', () => {
  // Diminui o índice ou volta para o último se estiver no primeiro
  currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  updateActiveItem();
});

// Evento para botão avançar
nextButton.addEventListener('click', () => {
  // Incrementa o índice ou volta para o primeiro se estiver no último
  currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
  updateActiveItem();
});

// Inicializa o slider setando o primeiro item ativo
