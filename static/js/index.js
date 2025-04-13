const elementos = document.querySelectorAll('.cardAlc-conteudo');

function mostrarElementosScroll() {
    const alturaTela = window.innerHeight;

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;

        if (posicao < alturaTela - 100) {
            if (el.classList.contains('esquerda')) {
                el.classList.add('show-left');
            } else if (el.classList.contains('direita')) {
                el.classList.add('show-right');
            }
            el.classList.remove('hidden');
        }
    });
}

window.addEventListener('scroll', mostrarElementosScroll);
mostrarElementosScroll(); 
