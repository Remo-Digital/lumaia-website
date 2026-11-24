# Blog-Artikel

Ein Artikel ist eine MDX-Datei pro Sprache. Der **Ordner bestimmt die Sprache**, das Frontmatter-Feld `slug` die URL. Der Dateiname ist frei wählbar.

```
content/blog/de-ch/*.mdx  →  /de-ch/blog/<slug>
content/blog/en-ch/*.mdx  →  /en-ch/blog/<slug>
```

Die übrigen Märkte haben keinen eigenen Ordner und übernehmen die Artikel ihrer Basissprache: `de-de` und `de-at` zeigen die Artikel aus `de-ch`, `en-us` und `en-uk` die aus `en-ch` (gleicher Slug, eigene URL, hreflang für alle Varianten). Braucht ein Markt eigene Artikel, einen Ordner `content/blog/<locale>/` anlegen; dann gilt nur dieser Ordner.

## Frontmatter

```yaml
---
title: "Was ist Agentic Marketing? Einfach erklärt | LumAIa"  # Pflicht; " | LumAIa" wird in der Anzeige entfernt
description: "…"                      # Pflicht, auch Meta-Description
slug: "was-ist-agentic-marketing"     # URL-Slug (sonst Dateiname)
alternateSlug: "what-is-agentic-marketing"  # Slug der anderen Sprachfassung → hreflang + Sprachumschalter
date: "2026-11-24"                    # Pflicht, bestimmt die Reihenfolge
updated: "2026-11-24"                 # optional, dateModified
author:
  name: "Remo Girard"
  role: "Co-Founder LumAIa, CEO Dewave GmbH"
  bio: "…"                            # optional, Autorenbox am Artikelende + Person.description
  url: "/de-ch/team/remo-girard"      # optional, Profilseite (Person.url)
  sameAs: ["https://www.linkedin.com/in/…"]  # optional, externe Profile (Person.sameAs)
  image: "/images/team/remo.webp"     # optional, Porträt in der Autorenbox
category: "Agentic Commerce"          # erscheint als Label auf Karte und Artikel
tags: ["…"]                           # optional, keywords im JSON-LD
readingTime: 8                        # optional, Minuten
image: "/images/blog/<slug>.webp"     # optional, Titelbild (in public/)
imageAlt: "…"
toc: true                             # optional: Inhaltsverzeichnis aus den ##-Überschriften
faq:                                  # optional → FAQPage-JSON-LD
  - question: "…"
    answer: "…"
draft: true                           # optional: nur in `npm run dev` sichtbar, nie im Build
---
```

Weitere Felder (z. B. `locale`, `schema`) werden ignoriert. Das strukturierte JSON-LD (BlogPosting, Person, WebPage, BreadcrumbList, FAQPage, ImageObject) wird automatisch erzeugt; Quellenlinks im Text landen als `citation` im BlogPosting.

## Inhalt

- Ein `# Titel` am Anfang wird nicht angezeigt, die Seite zeigt den Frontmatter-Titel als `h1`. Gliederung ab `##`: Jede `##`-Überschrift wird mit ihrem Inhalt zu einer `<section>` mit Anker-ID.
- Die Autorenbox kommt aus dem Frontmatter (`author.bio`), nicht in den Text schreiben.
- Tabellen (GitHub-Markdown) werden unterstützt.
- Interne Links mit Sprachpräfix: `/de-ch/...` bzw. `/en-ch/...` (englische Slugs, z. B. `/en-ch/platform/...`).
- Bilder unter `public/` ablegen, z. B. `public/images/blog/…` → `/images/blog/…`. Ein Bild allein im Absatz wird zur `<figure>`; der Bildtitel wird zur Bildunterschrift: `![Alt-Text](/images/blog/x.webp "Bildunterschrift")`.
- Zitate und Testimonials mit Quelle:

  ```mdx
  <Quote author="Name" role="Rolle, Firma" cite="https://quelle.ch">Zitat …</Quote>
  ```
