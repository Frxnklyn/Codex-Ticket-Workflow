# Ticket Rules

## Ticket-Konzept

- Ein Ticket ist eine einzelne, klar umsetzbare Aufgabe innerhalb einer Story.
- Tickets werden einzeln und strikt im Scope bearbeitet.

## Ticket-Struktur

- Speicherort gemäß `references/target-structure.md` im `tickets/`-Ordner der jeweiligen Story.
- Namensschema: `001-kurzer-ticket-name.ticket.md`
- Nummern sind innerhalb der Story fortlaufend.

Pflichtfelder im Frontmatter:

- `type: ticket`
- `id: ticket-XXX`
- `story: story-XXX`
- `title`
- `status`
- `priority`
- `area`
- `tools`
- `created`
- `updated`

## Bei Neuerstellung

- Nächste freie Ticketnummer verwenden.
- Ticketübersicht in `STORY.story.md` direkt ergänzen.

## Bei Bearbeitung

- Parent Story lesen.
- `RULE.md`-Kaskade prüfen.
- `tools` prüfen und optionale Toolregeln laden.
- Anforderungen/AC/Nicht-Ziele einhalten.
- Danach Ticketstatus + Arbeitsnotizen + `updated` pflegen.
