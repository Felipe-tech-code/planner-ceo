# Planner CEO

Landing page estática do Planner CEO, publicada em **https://plannerceo.com.br** via GitHub Pages.
Paleta branco, cinza e bordô `#550000`. Não usa frameworks, build nem dependências externas.

## Estrutura

```
index.html              Conteúdo da página (textos, seções, ofertas)
assets/
  css/style.css         Todo o visual
  js/checkouts.js       ⚙️ Links de compra — o arquivo que você mais vai editar
  js/main.js            Comportamento (botões de compra e "Como você gosta de se organizar?")
  img/dra-anaria.png    Retrato da capa (fundo removido por IA)
CNAME                   Domínio personalizado do GitHub Pages
```

## Configurar os links de compra

Abra `assets/js/checkouts.js` e cole a URL de checkout de cada oferta:

| Chave      | Oferta                          |
|------------|---------------------------------|
| `digital`  | Planner Digital no Notion       |
| `fisico`   | Planner Físico para Impressão   |
| `planilha` | Planilha Financeira Empresarial |
| `planners` | Combo 2 Planners                |
| `completo` | Combo 2 Planners + Planilha     |
| `master`   | Combo Master                    |

- Enquanto um link estiver vazio, o botão abre o aviso "Compra ainda não disponível".
- Só são aceitos links **HTTPS** de domínios em `CHECKOUT_DOMINIOS_PERMITIDOS` (Kiwify por padrão).
  Um link de outro domínio é ignorado e aparece um aviso no console do navegador.
- Nos botões do HTML, o atributo `data-checkout="..."` liga o botão à chave correspondente.

## Editar conteúdo

- **Textos:** direto no `index.html`; cada seção está indentada e separada.
- **Recomendações do seletor "Como você gosta de se organizar?":** objeto `RECOMENDACOES` em `assets/js/main.js`.
- **Foto da capa:** substitua `assets/img/dra-anaria.png` (mantendo o nome) ou altere o `src` da `<img>` dentro de `.hero-portrait`.
- **Prévias de Notion e Excel:** são ilustrações feitas em HTML/CSS (blocos `.screen`); os dados financeiros são fictícios.

## Visualizar localmente

Como a página usa arquivos separados e uma política de segurança (CSP), abra-a por um servidor local em vez de dar dois cliques no arquivo:

```
python -m http.server 8000
```

e acesse http://localhost:8000.

## Segurança

- `Content-Security-Policy` no `<head>`: só permite CSS, JS e imagens do próprio site. Não há scripts de terceiros nem estilos inline.
  Se no futuro adicionar Google Analytics, Meta Pixel, fontes externas etc., será preciso liberar esses domínios na CSP.
- Links de compra validados (HTTPS + lista de domínios permitidos).
- Nenhum formulário ou coleta de dados na página.

## Publicação

Todo push na branch `main` atualiza o site automaticamente (GitHub Pages, ~1 minuto).

## Antes de divulgar

Configure e teste os seis links de compra. Confirme que as páginas de pagamento informam requisitos, entrega/acesso e os detalhes reais do encontro ao vivo (data, duração, gravação, plataforma). O planner para impressão não é anunciado como exemplar físico enviado.
