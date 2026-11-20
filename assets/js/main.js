'use strict';

/* ---------- Links de compra ---------- */

function dominioPermitido(hostname) {
  return window.CHECKOUT_DOMINIOS_PERMITIDOS.some(
    (dominio) => hostname === dominio || hostname.endsWith('.' + dominio)
  );
}

/** Retorna a URL de checkout se for HTTPS e de um domínio permitido; senão, null. */
function checkoutValido(valor) {
  if (!valor) return null;
  try {
    const url = new URL(valor);
    if (url.protocol !== 'https:' || !dominioPermitido(url.hostname)) {
      console.warn('Link de checkout ignorado (precisa ser HTTPS e de domínio permitido):', valor);
      return null;
    }
    return url.href;
  } catch {
    console.warn('Link de checkout inválido:', valor);
    return null;
  }
}

function configurarCheckouts() {
  const aviso = document.getElementById('configurar');

  document.querySelectorAll('[data-checkout]').forEach((link) => {
    const url = checkoutValido(window.CHECKOUTS[link.dataset.checkout]);

    if (url) {
      link.href = url;
      link.rel = 'noopener';
    } else {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        aviso.showModal();
      });
    }
  });
}

/* ---------- "Como você gosta de se organizar?" ---------- */

const RECOMENDACOES = {
  digital: {
    titulo: 'Planner Digital no Notion',
    texto: 'Para organizar sua vida profissional e pessoal em duas áreas no Notion.',
    destino: '#produto-digital',
  },
  papel: {
    titulo: 'Planner Físico para Impressão',
    texto: 'Para quem prefere colocar as ideias no papel. Você imprime seu material.',
    destino: '#produto-papel',
  },
  tudo: {
    titulo: 'Combo Master CEO',
    texto: 'Os três produtos e um encontro ao vivo de planejamento com a Dra. Anária.',
    destino: '#master',
  },
};

function configurarRecomendacao() {
  const botoes = document.querySelectorAll('[data-choice]');
  const titulo = document.getElementById('rec-title');
  const texto = document.getElementById('rec-copy');
  const link = document.getElementById('rec-link');

  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      botoes.forEach((item) => {
        const ativo = item === botao;
        item.classList.toggle('active', ativo);
        item.setAttribute('aria-pressed', String(ativo));
      });

      const recomendacao = RECOMENDACOES[botao.dataset.choice];
      titulo.textContent = recomendacao.titulo;
      texto.textContent = recomendacao.texto;
      link.href = recomendacao.destino;
    });
  });
}

configurarCheckouts();
configurarRecomendacao();
