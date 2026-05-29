# Ticket Rules

## Ticket-Konzept

- Ein Ticket ist eine einzelne, klar umsetzbare Aufgabe.
- Tickets können innerhalb einer Story oder als story-lose Tickets unter `.project-work/tickets/` existieren.
- Tickets werden einzeln und strikt im Scope bearbeitet.

## Ticket-Struktur

- Speicherort gemäß `references/target-structure.md`: entweder im `tickets/`-Ordner der jeweiligen Story oder story-los unter `.project-work/tickets/`.
- Namensschema: `001-kurzer-ticket-name.ticket.md`
- Nummern sind je Ticket-Ablageort fortlaufend.

Pflichtfelder im Frontmatter:

- `type: ticket`
- `id: ticket-XXX`
- `story: story-XXX` für Story-Tickets oder `story: none` bei story-losen Tickets
- `title`
- `status`
- `priority`
- `area`
- `tools`
- `created`
- `updated`

## Bei Neuerstellung

- Nächste freie Ticketnummer am gewählten Ablageort verwenden.
- Bei Story-Tickets die Ticketübersicht in `STORY.story.md` direkt ergänzen.
- Bei story-losen Tickets keine Story-Ticketübersicht aktualisieren.

## Bei Bearbeitung

- Bei Story-Tickets Parent Story lesen; bei story-losen Tickets entfällt dieser Schritt.
- `RULE.md`-Kaskade prüfen.
- `tools` prüfen und optionale Toolregeln laden.
- Anforderungen/AC/Nicht-Ziele einhalten.
- Danach Ticketstatus + Arbeitsnotizen + `updated` pflegen.
