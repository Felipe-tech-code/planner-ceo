/*
 * LINKS DE COMPRA
 * Cole aqui a URL de checkout de cada oferta (copiada do painel da Kiwify).
 * Enquanto um link estiver vazio, o botão mostra o aviso "Compra ainda não disponível".
 *
 * Por segurança, só são aceitos links HTTPS dos domínios listados em
 * CHECKOUT_DOMINIOS_PERMITIDOS. Se trocar de plataforma, adicione o novo domínio lá.
 */
window.CHECKOUTS = Object.freeze({
  digital:  '', // Planner Digital no Notion
  fisico:   '', // Planner Físico para Impressão
  planilha: '', // Planilha Financeira Empresarial
  planners: '', // Combo 2 Planners
  completo: '', // Combo 2 Planners + Planilha
  master:   '', // Combo Master
});

window.CHECKOUT_DOMINIOS_PERMITIDOS = Object.freeze([
  'kiwify.com.br',
  'kiwify.com',
]);
