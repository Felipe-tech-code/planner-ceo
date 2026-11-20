/*
 * LINKS DE COMPRA
 * Cole aqui a URL de checkout de cada oferta (copiada do painel da Kiwify).
 * Enquanto um link estiver vazio, o botão mostra o aviso "Compra ainda não disponível".
 *
 * Por segurança, só são aceitos links HTTPS dos domínios listados em
 * CHECKOUT_DOMINIOS_PERMITIDOS. Se trocar de plataforma, adicione o novo domínio lá.
 */
window.CHECKOUTS = Object.freeze({
  digital:  'https://pay.kiwify.com.br/payIFG3', // Planner Digital no Notion
  fisico:   'https://pay.kiwify.com.br/t5Q7NEm', // Planner Físico para Impressão
  planilha: 'https://pay.kiwify.com.br/sazTXUQ', // Planilha Financeira Empresarial
  planners: 'https://pay.kiwify.com.br/2TuKayf', // Combo 2 Planners
  completo: 'https://pay.kiwify.com.br/zG3n9CK', // Combo 2 Planners + Planilha
  master:   'https://pay.kiwify.com.br/EC9JgUQ', // Combo Master
});

window.CHECKOUT_DOMINIOS_PERMITIDOS = Object.freeze([
  'kiwify.com.br',
  'kiwify.com',
]);
