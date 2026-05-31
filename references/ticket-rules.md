# Ticket Rules

## Ticket-Konzept

- Ein Ticket ist eine einzelne, klar umsetzbare Aufgabe.
- Alle Tickets liegen zentral unter `.project-work/tickets/`.
- Tickets können über `story: story-XXX` einer Story zugeordnet sein oder mit `story: none` story-los bleiben.
- Tickets werden einzeln und strikt im Scope bearbeitet.
- Tickets zu schreiben oder zu planen bedeutet noch nicht, sie umzusetzen.

## Ticket-Struktur

- Speicherort gemäß `references/target-structure.md`: immer `.project-work/tickets/`.
- Namensschema: `001-kurzer-ticket-name.ticket.md`
- Nummern sind innerhalb von `.project-work/tickets/` fortlaufend.

Pflichtfelder im Frontmatter:

- `type: ticket`
- `id: ticket-XXX`
- `story: story-XXX` für Story-bezogene Tickets oder `story: none` bei story-losen Tickets
- `title`
- `status`
- `priority`
- `area`
- `tools`
- `created`
- `updated`

## Bei Neuerstellung

- Nächste freie Ticketnummer unter `.project-work/tickets/` verwenden.
- Bei Story-bezogenen Tickets die Ticketübersicht in `STORY.story.md` direkt ergänzen.
- Bei story-losen Tickets keine Story-Ticketübersicht aktualisieren.
- Nach dem Anlegen nicht automatisch mit der Ticket-Umsetzung beginnen.

## Bei Bearbeitung

- Bei Story-bezogenen Tickets Parent Story lesen; bei story-losen Tickets entfällt dieser Schritt.
- `RULE.md`-Kaskade prüfen.
- `tools` prüfen und optionale Toolregeln laden.
- Anforderungen/AC/Nicht-Ziele einhalten.
- Danach Ticketstatus + Arbeitsnotizen + `updated` pflegen.
