# Zielstruktur

Diese Datei ist die zentrale Referenz fuer die Ordner- und Dateistruktur des `ticket-workflow` Skills. Andere Dokumente sollen auf diese Datei verweisen, statt die Struktur erneut vollstaendig zu beschreiben.

## Vollstaendiges Arbeitsmodell im Zielprojekt

```txt
.project-work/
  RULE.md                         # optional, globale Projektarbeitsregeln
  tickets/                        # story-lose Einzeltickets; optional eigenes Repo/Subrepo
    RULE.md                       # optional, Regeln fuer story-lose Tickets
    001-standalone-ticket.ticket.md
  storys/
    RULE.md                       # optional, Regeln fuer aktive Storys
    story-001-short-name/
      STORY.story.md
      STATUS.md
      NOTES.md
      RULE.md                     # optional, Story-spezifische Regeln
      tickets/                    # Tickets, die zu dieser Story gehoeren
        RULE.md                   # optional, Regeln fuer Tickets dieser Story
        001-story-ticket.ticket.md
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

Bei der einmaligen Initialisierung muessen zunaechst nur diese Ordner existieren:

```txt
.project-work/
  tickets/
  storys/
  archive/
```

`RULE.md`, Story-Ordner, Story-interne `tickets/`-Ordner, konkrete Ticketdateien und Archiv-Jahresordner werden erst angelegt, wenn sie fachlich benoetigt werden.

## Ticketablage

Story-bezogene Tickets liegen im Unterordner `.project-work/storys/<story>/tickets/`. Sie setzen im Frontmatter `story: story-XXX` und werden in der Ticketuebersicht der jeweiligen `STORY.story.md` mit relativem Pfad `tickets/<datei>.ticket.md` verlinkt.

Story-lose Einzeltickets liegen unter `.project-work/tickets/`. Sie verwenden dasselbe Ticket-Template; das Frontmatter-Feld `story` wird auf `none` gesetzt. Der Ordnername `tickets` bleibt dort unveraendert, wenn dieser Bereich als eigenes Git-Repository, loses Subrepo oder echtes Submodule fuer story-lose Tickets angebunden wird.

Beim Schreiben oder Planen von Storys und Tickets wird nur die Workflow-Struktur gepflegt. Die fachliche Umsetzung der Tickets beginnt erst nach ausdruecklicher Nutzerfreigabe.

## Verweise

- Initialisierung: `Init.md`
- Operative Skill-Regeln: `SKILL.md`
- Allgemeine Workflow-Regeln: `references/workflow-rules.md`
- Story-Regeln: `references/story-rules.md`
- Ticket-Regeln: `references/ticket-rules.md`
