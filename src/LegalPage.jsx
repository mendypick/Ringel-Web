import { legalCopy, legalDocument, legalParts } from "./legal.js";
import { pathFor } from "./routes.js";

function Rich({ text, lang, onOpenDoc }) {
  return legalParts(text).map((part, index) => {
    if (part.type === "text") return <span key={index}>{part.value}</span>;
    if (part.type === "doc") {
      return (
        <a
          key={index}
          href={pathFor(lang, part.doc)}
          onClick={(event) => {
            event.preventDefault();
            onOpenDoc(part.doc);
          }}
        >
          {part.value}
        </a>
      );
    }
    if (part.type === "mail") {
      return (
        <a key={index} href={`mailto:${part.value}`}>
          {part.value}
        </a>
      );
    }
    return (
      <a key={index} href={part.value} target="_blank" rel="noreferrer">
        {part.value}
      </a>
    );
  });
}

export function LegalPage({ lang, id, onBack, onOpenDoc }) {
  const copy = legalCopy[lang];
  const { title, date, body } = legalDocument(copy[id]);

  return (
    <article className="doc">
      <div className="wrap doc-inner">
        <a
          className="back"
          href={pathFor(lang)}
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          {copy.back}
        </a>
        <h1>{title}</h1>
        {date && <p className="doc-date">{date}</p>}
        {body.map((line, index) => (
          <p key={index}>
            <Rich text={line} lang={lang} onOpenDoc={onOpenDoc} />
          </p>
        ))}
      </div>
    </article>
  );
}
