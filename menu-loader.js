// Carrega o menu.html dentro da div #menu-placeholder em qualquer página
// e liga os eventos de clique (hambúrguer e dropdowns) depois que o menu existir no DOM.
 
fetch('/menu.html')
    .then(resposta => resposta.text())
    .then(html => {
        const placeholder = document.getElementById('menu-placeholder');
        if (!placeholder) {
            console.error('Não encontrei a div com id="menu-placeholder" nesta página.');
            return;
        }
        placeholder.innerHTML = html;
        ativarMenu();
        ajustarEspacoDoMenu();
    })
    .catch(erro => console.error('Erro ao carregar o menu:', erro));
 
// Empurra o conteúdo da página para baixo, na altura exata do menu,
// já que o menu agora é "fixed" e sai do fluxo normal da página.
function ajustarEspacoDoMenu() {
    const nav = document.querySelector('.navegacao');
    if (nav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    }
}
 
// Reajusta se a tela for redimensionada (ex: virar o celular, ou
// o menu mudar de layout desktop para o modo hambúrguer)
window.addEventListener('resize', ajustarEspacoDoMenu);
 
function ativarMenu() {
    // Abre/fecha o menu hambúrguer (mobile)
    const menubtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.menu');
 
    if (menubtn && navbar) {
        menubtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menubtn.classList.toggle('active');
        });
    }
 
    // Abre/fecha submenu principal (SOBRE, MISSÕES)
    const dropdownlinks = document.querySelectorAll('.dropdown > a');
    dropdownlinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('active');
        });
    });
 
    // Abre/fecha submenu interno (GERACIONAIS, ESPECÍFICAS)
    const hasSubmenuLinks = document.querySelectorAll('.has-submenu > a');
    hasSubmenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const submenuRight = this.nextElementSibling;
            if (submenuRight && submenuRight.classList.contains('submenu-right')) {
                e.preventDefault();
                submenuRight.classList.toggle('active');
            }
        });
    });
}