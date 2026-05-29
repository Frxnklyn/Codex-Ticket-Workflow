# Zielstruktur

Diese Datei ist die zentrale Referenz für die Ordner- und Dateistruktur des `ticket-workflow` Skills. Andere Dokumente sollen auf diese Datei verweisen, statt die Struktur erneut vollständig zu beschreiben.

## Vollständiges Arbeitsmodell im Zielprojekt

```txt
.project-work/
  RULE.md                         # optional, globale Projektarbeitsregeln
  storys/
    RULE.md                       # optional, Regeln für aktive Storys
    story-001-short-name/
      STORY.story.md
      STATUS.md
      NOTES.md
      RULE.md                     # optional, Story-spezifische Regeln
      tickets/
        RULE.md                   # optional, Ticket-spezifische Regeln für diese Story
        001-short-ticket-name.ticket.md
        002-another-ticket.ticket.md
  archive/
    2026/
      story-000-finished-example/
        STORY.story.md
        STATUS.md
        NOTES.md
        tickets/
          001-finished-ticket.ticket.md
```

## Minimalstruktur nach Installation

Bei der einmaligen Initialisierung müssen zunächst nur diese Ordner existieren:

```txt
.project-work/
  storys/
  archive/
```

`RULE.md`, Story-Ordner, Tickets und Archiv-Jahresordner werden erst angelegt, wenn sie fachlich benötigt werden.

## Verweise

- Initialisierung: `Init.md`
- Operative Skill-Regeln: `SKILL.md`
- Allgemeine Workflow-Regeln: `references/workflow-rules.md`
- Story-Regeln: `references/story-rules.md`
- Ticket-Regeln: `references/ticket-rules.md`
