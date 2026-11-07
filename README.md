# AUTORIZAÇÃO INTERNA — landing page

Landing page oficial do livro **AUTORIZAÇÃO INTERNA**, de **Denise Machado**.

> *Por que mulheres inteligentes não ocupam o próprio lugar e como romper a culpa para existir por inteiro.*

**Site publicado em:** https://sou-denise.github.io/autorizacao-interna/
**Compra (Amazon):** https://www.amazon.com.br/dp/B0GKYYPYFC?dplnkId=b3aaa36f-b8e0-4b1c-a974-5a09e54bdd47&nodl=1

---

## Identidade visual

Direção editorial e literária: fundo marfim com textura sutil de papel, paleta de
bege quente, marrom profundo, cobre e dourado envelhecido. Tipografia serifada
(Cormorant Garamond) nos títulos combinada com sans-serif discreta (Jost) no
texto, mais a assinatura manuscrita em Pinyon Script. Espaçamento generoso,
composição responsiva e animações discretas.

## Estrutura da página

1. **Hero** — selo, headline, subheadline, título/subtítulo/autor e CTA para a Amazon.
2. **Identificação** — o reconhecimento da tensão entre capacidade e hesitação.
3. **Virada** — a dificuldade de se autorizar como questão central.
4. **Apresentação do livro** — a obra em fundo escuro, com o mockup da capa.
5. **Para quem é** — o público leitor.
6. **Sobre a autora** — foto, assinatura e apresentação.
7. **Perguntas frequentes** — três perguntas com link para a Amazon.
8. **CTA final** e rodapé discreto com aviso de compra na Amazon.

Todos os textos ficam em um único lugar, `src/components/landing/content.ts`,
inclusive o link oficial de compra (`AMAZON_URL`), usado em todos os botões.

## Stack

- React 19 + TanStack Start / TanStack Router
- Tailwind CSS v4 com design tokens em `src/styles.css`
- Vite 8 + Nitro, com **prerender** para gerar HTML estático

## Desenvolvimento

```sh
bun install
bun run dev
```

O script `restore-assets` roda automaticamente antes de `dev` e `build` (veja
[Imagens](#imagens)).

## Build e publicação

```sh
bun run build   # gera o site estático em dist/client
```

O build gera HTML estático (prerender) em `dist/client`, pronto para o
GitHub Pages. O site é servido no subcaminho `/autorizacao-interna/`, por isso
o `base` do Vite e o `basepath` do TanStack Router estão fixados nesse prefixo
(`vite.config.ts` e `src/router.tsx`).

### Publicar no GitHub Pages

O workflow de publicação está em [`ci/pages.yml`](ci/pages.yml). Para colocá-lo
em funcionamento são **dois passos manuais** (ambos feitos uma única vez):

1. **Copie `ci/pages.yml` para `.github/workflows/pages.yml`.**
   O GitHub Actions só lê workflows nesse caminho exato. A cópia pode ser feita
   pela interface do GitHub: *Add file → Create new file*, nomeando o arquivo
   `.github/workflows/pages.yml`, e colando o conteúdo de `ci/pages.yml`.

2. **Ative o Pages:** em *Settings → Pages → Build and deployment → Source*,
   escolha **GitHub Actions**.
   O GitHub exige essa configuração manual porque o token do próprio Actions
   não tem permissão para criar o site do Pages.

Depois disso, todo push em `main` constrói o site e publica em
<https://sou-denise.github.io/autorizacao-interna/>. O workflow também pode ser
disparado manualmente pela aba *Actions*.

## Imagens

Os arquivos de imagem (capa 3D do livro, foto da autora e capa plana usada em
`og:image`) estão versionados em `assets/` **em base64**, dentro de arquivos
`.b64`. O script `scripts/restore-assets.mjs` os materializa em `src/assets/`
e `public/images/` antes de qualquer build ou execução local.

```sh
bun run restore-assets
```

Os binários restaurados são ignorados pelo Git — os originais em base64 são a
fonte da verdade.

## Licença e direitos

© Denise Machado. Todos os direitos reservados. A compra é realizada
diretamente na Amazon.

---

Projeto construído com [Lovable](https://lovable.dev).
