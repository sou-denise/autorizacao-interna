import { BOOK } from "./content";
import coverImg from "@/assets/autorizacao-interna-livro-3d.webp";

/** Apresentação do livro em perspectiva com a capa enviada pela autora. */
export function BookMockup({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <img
        src={coverImg}
        alt={`Capa do livro ${BOOK.title}, de ${BOOK.author}`}
        width={828}
        height={1340}
        className="mx-auto block h-auto w-full max-w-[300px]"
      />
    </figure>
  );
}
