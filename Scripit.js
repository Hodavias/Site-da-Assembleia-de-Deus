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







// parte das missões 

 
  const track     = document.getElementById('track');
  const prevBtn   = document.getElementById('prevBtn');
  const nextBtn   = document.getElementById('nextBtn');
  const dotsEl    = document.getElementById('dots');
  const thumbsEl  = document.getElementById('thumbs');
 
  const cards = Array.from(track.querySelectorAll('.card'));
  const total  = cards.length;
 
  // Labels e cores para as miniaturas
  const info = [
    { label: 'Adolescentes',   color: '#660a0a' },
    { label: 'Jovens',   color: '#444129' },
    { label: 'Homens',   color: '#378add' },
    { label: 'Mulheres', color: '#d4537e' },
    { label: 'Crianças', color: '#ef9f27' },
    { label: 'Eventos', color: '#c0c0c0' },
    { label: 'Idosos',   color: '#888780' },
    

  ];
 
  let current = 0;
 
  // Quantos cards visíveis conforme largura
  function getVisible() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }
 
  function maxIndex() {
    return Math.max(0, total - getVisible());
  }
 
  // ── CRIAR DOTS ────────────────────────────────────────────
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Ir para missão ${i + 1}`);
    dot.addEventListener('click', () => goTo(Math.min(i, maxIndex())));
    dotsEl.appendChild(dot);
  });
 
  // ── CRIAR MINIATURAS ──────────────────────────────────────
  info.forEach((item, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    thumb.setAttribute('role', 'button');
    thumb.setAttribute('aria-label', item.label);
    thumb.innerHTML = `
      <div class="thumb-inner" style="background:${item.color}22;">
        <div class="thumb-dot" style="background:${item.color};"></div>
        <span class="thumb-label">${item.label}</span>
      </div>`;
    thumb.addEventListener('click', () => goTo(Math.min(i, maxIndex())));
    thumbsEl.appendChild(thumb);
  });
 
  // ── NAVEGAR ───────────────────────────────────────────────
  function goTo(index) {
    current = Math.max(0, Math.min(index, maxIndex()));
    render();
  }
 
  function move(dir) {
    goTo(current + dir);
  }
 
  prevBtn.addEventListener('click', () => move(-1));
  nextBtn.addEventListener('click', () => move(1));
 
  // ── RENDERIZAR ────────────────────────────────────────────
  function render() {
    const cardWidth = cards[0].offsetWidth + 16; // 16 = gap
    track.style.transform = `translateX(-${current * cardWidth}px)`;
 
    const dots   = dotsEl.querySelectorAll('.dot');
    const thumbs = thumbsEl.querySelectorAll('.thumb');
 
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    thumbs.forEach((t, i) => t.classList.toggle('active', i === current));
 
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= maxIndex();
  }
 
  // ── SWIPE (TOUCH/MOBILE) ──────────────────────────────────
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) move(diff > 0 ? 1 : -1);
  });
 
  // ── TECLADO ───────────────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  move(-1);
    if (e.key === 'ArrowRight') move(1);
  });
 
  // ── RESIZE ────────────────────────────────────────────────
  window.addEventListener('resize', () => {
    current = Math.min(current, maxIndex());
    render();
  });
 
  // ── INIT ──────────────────────────────────────────────────
  render();






  
//animação dos numeros 

const numeros = document.querySelectorAll('.numero');
numeros.forEach(numero => {
  const valorFinal = parseInt(numero.getAttribute('data-valor'), 10);
  let valorAtual = 0; // começa em zero 
const incremento = Math.ceil(valorFinal / 100); // invremento para animação suave 
const intervalo = setInterval(()=> {
  valorAtual += incremento;
  if (valorAtual >= valorFinal){
    valorAtual = valorFinal;
clearInterval(intervalo

)
  }
  numero.textContent = valorAtual.toLocaleString('pt-BR'); // formata o número com separadores de milhar
},50);
});


/* Parte do mantenha-se informado */ 









// Parte do botão de doação 

 