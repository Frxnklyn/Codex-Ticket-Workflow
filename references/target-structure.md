# Zielstruktur

Diese Datei ist die zentrale Referenz für die Ordner- und Dateistruktur des `ticket-workflow` Skills. Andere Dokumente sollen auf diese Datei verweisen, statt die Struktur erneut vollständig zu beschreiben.

## Vollständiges Arbeitsmodell im Zielprojekt

```txt
.project-work/
  RULE.md                         # optional, globale Projektarbeitsregeln
  tickets/                         # zentrale Ticketablage; optional eigenes Ticket-Repo/Subrepo
    RULE.md                       # optional, Regeln für alle Tickets
    001-story-ticket.ticket.md
    002-standalone-ticket.ticket.md
  storys/
    RULE.md                       # optional, Regeln für aktive Storys
    story-001-short-name/
      STORY.story.md
      STATUS.md
      NOTES.md
      RULE.md                     # optional, Story-spezifische Regeln
  archive/
    2026/
      story-000-finished-example/
        STORY.story.md
        STATUS.md
        NOTES.md
```

## Minimalstruktur nach Installation

Bei der einmaligen Initialisierung müssen zunächst nur diese Ordner existieren:

```txt
.project-work/
  tickets/
  storys/
  archive/
```

`RULE.md`, Story-Ordner, konkrete Ticketdateien und Archiv-Jahresordner werden erst angelegt, wenn sie fachlich benötigt werden.

## Zentrale Ticketablage

Alle Ticketdateien liegen unter `.project-work/tickets/`. Der Ordnername `tickets` bleibt auch dann unverändert, wenn dieser Bereich als eigenes Git-Repository, loses Subrepo oder echtes Submodule angebunden wird.

Story-bezogene Tickets setzen im Frontmatter `story: story-XXX` und werden in der Ticketübersicht der jeweiligen `STORY.story.md` verlinkt. Story-lose Tickets verwenden dasselbe Ticket-Template; das Frontmatter-Feld `story` wird auf `none` gesetzt.

Beim Schreiben oder Planen von Storys und Tickets wird nur die Workflow-Struktur gepflegt. Die fachliche Umsetzung der Tickets beginnt erst nach ausdrücklicher Nutzerfreigabe.

## Verweise

- Initialisierung: `Init.md`
- Operative Skill-Regeln: `SKILL.md`
- Allgemeine Workflow-Regeln: `references/workflow-rules.md`
- Story-Regeln: `references/story-rules.md`
- Ticket-Regeln: `references/ticket-rules.md`
