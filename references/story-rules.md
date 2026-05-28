# Story Rules

## Story-Konzept

- Eine Story ist ein übergeordneter Arbeitscontainer mit größerem Ziel.
- Eine Story enthält oder referenziert mehrere Tickets.
- Eine Story ist abgeschlossen, wenn relevante Tickets `done` oder bewusst `discarded` sind.

## Story-Struktur

Pflichtdateien je Story-Ordner:

- `STORY.story.md`
- `STATUS.md`
- `tickets/`
- `NOTES.md`

Namensschema Story-Ordner:

- `story-XXX-kurzer-name` (XXX = fortlaufend, dreistellig)

## Story-Anlage

- Neue Story in `.project-work/storys/` anlegen.
- Mindestens die Templates aus `templates/` verwenden.
- Story-ID (`story-XXX`) und Ordnernamen konsistent halten.

## Archivierung

- Archivziel: `.project-work/archive/YYYY/`
- Archiv nur bei Story-Status `done` oder `discarded`.
- Immer komplette Story verschieben (inkl. `tickets/`, `STATUS.md`, `NOTES.md`, optional `RULE.md`).
