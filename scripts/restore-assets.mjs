/**
 * Restaura os arquivos de imagem do projeto a partir das versões codificadas em
 * base64 Commitadas em `assets/`.
 *
 * Por que este passo existe: o projeto é publicado via GitHub Pages a partir de um
 * repositório novo e os binários (capas e foto da autora) não podem ser
 * enviados diretamente pelo fluxo de automação usado na publicação. Guardamos
 * então os originais em base64 (texto puro, versionável) e materializamos os
 * arquivos reais antes de qualquer build.
 *
 * Execute com:  node scripts/restore-assets.mjs
 * (também roda automaticamente em `bun run dev` e `bun run build`).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Origem (base64) -> destino (binário) */
const ASSETS = [
  {
    from: "assets/autorizacao-interna-livro-3d.webp.b64",
    to: "src/assets/autorizacao-interna-livro-3d.webp",
  },
  {
    from: "assets/denise-machado-autora.webp.b64",
    to: "src/assets/denise-machado-autora.webp",
  },
  {
    from: "assets/autorizacao-interna-capa.png.b64",
    to: "public/images/autorizacao-interna-capa.png",
  },
  {
    from: "assets/favicon.ico.b64",
    to: "public/favicon.ico",
  },
];

let restored = 0;

for (const { from, to } of ASSETS) {
  const source = join(ROOT, from);
  const target = join(ROOT, to);

  if (!existsSync(source)) {
    throw new Error(`Arquivo base64 ausente: ${from}`);
  }

  const encoded = readFileSync(source, "utf8").replace(/\s+/g, "");
  const bytes = Buffer.from(encoded, "base64");

  if (bytes.length === 0) {
    throw new Error(`Arquivo base64 vazio ou inválido: ${from}`);
  }

  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, bytes);
  restored += 1;
  console.log(`✓ ${to} (${(bytes.length / 1024).toFixed(1)} KB)`);
}

console.log(`\n${restored} imagem(ns) restaurada(s).`);
