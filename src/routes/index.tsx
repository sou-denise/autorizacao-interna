import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BookMockup } from "@/components/landing/BookMockup";
import authorPhoto from "@/assets/denise-machado-autora.webp";
import {
  AMAZON_URL, AUDIENCE, AUTHOR, BOOK, FAQ, FINAL_CTA, HERO, IDENTIFICATION, PRESENTATION, TURN,
} from "@/components/landing/content";

const TITLE = "Autorização Interna — livro de Denise Machado";
const DESC =
  "Por que mulheres inteligentes não ocupam o próprio lugar e como romper a culpa para existir por inteiro. Disponível na Amazon.";
const SITE_URL = "https://sou-denise.github.io/autorizacao-interna/";
const COVER_URL = `${SITE_URL}images/autorizacao-interna-capa.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "book" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: COVER_URL },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: COVER_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Landing,
});

/* ---------- peças reutilizáveis ---------- */
function BuyButton({ children }: { children: ReactNode }) {
  return (
    <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="btn-buy">
      {children} <span aria-hidden>→</span>
    </a>
  );
}

function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`px-6 py-20 md:py-28 ${className}`}><div className="mx-auto max-w-3xl">{children}</div></section>;
}

function Signature() {
  return <p className="font-script text-4xl text-accent md:text-5xl">Denise Machado</p>;
}

/* ---------- página ---------- */
function Landing() {
  return (
    <main className="paper min-h-screen bg-background text-foreground">
      {/* 1. HERO */}
      <header className="px-6 pb-20 pt-12 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_1fr]">
          <div className="animate-rise text-center md:text-left">
            <p className="eyebrow">{HERO.badge}</p>
            <h1 className="mt-6 text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-6xl">{HERO.headline}</h1>
            <p className="mt-6 font-serif text-xl italic text-muted-foreground md:text-2xl">{HERO.subheadline}</p>
            <div className="rule-gold mx-auto mt-8 md:mx-0" />
            <p className="mt-6 font-serif text-2xl tracking-wide text-primary">{BOOK.title}</p>
            <p className="mt-1 text-sm tracking-[0.2em] text-muted-foreground">DENISE MACHADO</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:mx-0">{BOOK.subtitle}</p>
            <div className="mt-9"><BuyButton>{HERO.cta}</BuyButton></div>
          </div>
          <BookMockup className="animate-rise" />
        </div>
      </header>

      {/* 2. IDENTIFICAÇÃO */}
      <Section className="border-t border-border bg-card/60">
        <p className="eyebrow">{IDENTIFICATION.eyebrow}</p>
        <div className="mt-8 space-y-6 font-serif text-2xl leading-snug text-primary md:text-3xl">
          {IDENTIFICATION.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <p className="mt-10 border-l border-gold pl-5 text-sm leading-relaxed text-muted-foreground">{IDENTIFICATION.note}</p>
      </Section>

      {/* 3. VIRADA */}
      <Section className="text-center">
        <span className="font-serif text-6xl text-gold" aria-hidden>“</span>
        <h2 className="text-3xl italic leading-tight text-primary md:text-5xl">{TURN.question}</h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-5 text-left leading-relaxed text-muted-foreground md:text-lg">
          {TURN.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </Section>

      {/* 4. APRESENTAÇÃO DO LIVRO */}
      <section className="bg-primary px-6 py-20 text-primary-foreground md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_1.3fr]">
          <BookMockup className="[&_figcaption]:text-primary-foreground/60" />
          <div>
            <p className="eyebrow text-gold">{PRESENTATION.eyebrow}</p>
            <h2 className="mt-5 text-4xl md:text-5xl">{BOOK.title}</h2>
            <p className="mt-4 font-serif text-xl italic opacity-85">{BOOK.subtitle}</p>
            <div className="mt-8 space-y-4 text-sm leading-relaxed opacity-85 md:text-base">
              {PRESENTATION.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer"
              className="btn-buy mt-9 bg-primary-foreground text-primary border-primary-foreground">
              {PRESENTATION.cta} <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. PARA QUEM É */}
      <Section>
        <p className="eyebrow">{AUDIENCE.eyebrow}</p>
        <h2 className="mt-5 text-3xl leading-tight text-primary md:text-4xl">{AUDIENCE.title}</h2>
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {AUDIENCE.items.map((item, i) => (
            <li key={item} className="flex gap-6 py-6">
              <span className="font-serif text-2xl italic text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 font-serif text-xl italic text-muted-foreground">{AUDIENCE.note}</p>
      </Section>

      {/* 6. SOBRE A AUTORA */}
      <Section className="border-t border-border bg-card/60 text-center">
        <p className="eyebrow">{AUTHOR.eyebrow}</p>
        <img
          src={authorPhoto}
          alt="Denise Machado, autora de Autorização Interna"
          width={256}
          height={256}
          loading="lazy"
          className="mx-auto mt-8 block aspect-square w-56 rounded-sm object-cover md:w-64"
        />
        <div className="mt-6"><Signature /></div>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground md:text-lg">{AUTHOR.text}</p>
      </Section>

      {/* 7. FAQ */}
      <Section>
        <p className="eyebrow">Perguntas frequentes</p>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-xl text-primary md:text-2xl">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {f.a}{" "}
                {f.link && (
                  <a href={AMAZON_URL} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                    Acessar a página na Amazon
                  </a>
                )}
              </p>
            </details>
          ))}
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <section className="border-t border-border bg-secondary px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="rule-gold mx-auto" />
          <div className="mt-10 space-y-4 font-serif text-3xl leading-tight text-primary md:text-4xl">
            <p>{FINAL_CTA.lines[0]}</p>
            <p className="italic text-accent">{FINAL_CTA.lines[1]}</p>
          </div>
          <div className="mt-12"><BuyButton>{FINAL_CTA.cta}</BuyButton></div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border px-6 py-10 text-center text-xs leading-relaxed text-muted-foreground">
        <p>© {new Date().getFullYear()} Denise Machado. Todos os direitos reservados.</p>
        <p className="mt-1">A compra é realizada diretamente na Amazon.</p>
      </footer>
    </main>
  );
}
