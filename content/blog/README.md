# Blog-Artikel

Jeder Artikel ist eine MDX-Datei pro Sprache, **mit gleichem Dateinamen (= Slug) in beiden Ordnern**:

```
content/blog/de-ch/<slug>.mdx   →  /de-ch/blog/<slug>
content/blog/en-ch/<slug>.mdx   →  /en-ch/blog/<slug>
```

Gibt es einen Artikel nur in einer Sprache, wird er auch nur dort ausgeliefert (hreflang entsprechend).

## Metadaten

Am Anfang jeder Datei:

```js
export const meta = {
  title: '…',                 // Pflicht
  description: '…',           // Pflicht, auch Meta-Description
  date: '2026-11-23',         // Pflicht, ISO-Datum, bestimmt die Reihenfolge
  author: 'Remo Girard',      // Pflicht
  image: '/blog/<slug>.webp', // optional, 800×450 .webp, max 200 KB, in public/blog/
  imageAlt: '…',              // optional
  tags: ['Agentic Commerce'], // optional, erster Tag erscheint auf der Karte
  draft: true,                // optional: nur in `npm run dev` sichtbar, nie im Build
}
```

Danach normaler Markdown-Text (inkl. Tabellen). Überschriften ab `##`, da der Titel bereits die `h1` ist.

Vorlage: `beispielartikel.mdx`.
