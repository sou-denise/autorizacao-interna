// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/**
 * Publicação no GitHub Pages: https://sou-denise.github.io/autorizacao-interna/
 *
 * O site é servido no subcaminho /autorizacao-interna/, então o `base` do Vite e o
 * `basepath` do TanStack Router precisam apontar para lá. Sem isso, os assets
 * (CSS, JS, imagens) seriam resolvidos a partir da raiz do domínio.
 */
const BASE_PATH = "/autorizacao-interna/";

export default defineConfig({
  vite: {
    base: BASE_PATH,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this.
    server: { entry: "server" },
    // Prefixo de rotas do TanStack Router (sem barra final).
    router: { basepath: "/autorizacao-interna" },
    // Gera HTML estático para cada rota — o GitHub Pages não executa servidor Node.
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
  // Saída 100% estática (arquivos HTML/JS/CSS), compatível com GitHub Pages.
  nitro: false,
});
