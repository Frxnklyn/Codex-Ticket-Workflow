# Ticket Rules

## Ticket-Konzept

- Ein Ticket ist eine einzelne, klar umsetzbare Aufgabe.
- Story-bezogene Tickets liegen im `tickets/`-Unterordner der jeweiligen Story.
- Story-lose Einzeltickets liegen unter `.project-work/tickets/`.
- Tickets koennen ueber `story: story-XXX` einer Story zugeordnet sein oder mit `story: none` story-los bleiben.
- Tickets werden einzeln und strikt im Scope bearbeitet.
- Tickets zu schreiben oder zu planen bedeutet noch nicht, sie umzusetzen.

## Ticket-Struktur

- Speicherort gemaess `references/target-structure.md`:
  - Story-Tickets: `.project-work/storys/<story>/tickets/`
  - story-lose Einzeltickets: `.project-work/tickets/`
- Namensschema: `001-kurzer-ticket-name.ticket.md`
- Nummern sind innerhalb des jeweiligen Ticketordners fortlaufend.

Pflichtfelder im Frontmatter:

- `type: ticket`
- `id: ticket-XXX`
- `story: story-XXX` fuer Story-bezogene Tickets oder `story: none` bei story-losen Tickets
- `title`
- `status`
- `priority`
- `area`
- `tools`
- `created`
- `updated`

## Bei Neuerstellung

- Bei Story-bezogenen Tickets die naechste freie Ticketnummer unter `.project-work/storys/<story>/tickets/` verwenden.
- Bei story-losen Tickets die naechste freie Ticketnummer unter `.project-work/tickets/` verwenden.
- Bei Story-bezogenen Tickets die Ticketuebersicht in `STORY.story.md` direkt mit `tickets/<datei>.ticket.md` ergaenzen.
- Bei story-losen Tickets keine Story-Ticketuebersicht aktualisieren.
- Nach dem Anlegen nicht automatisch mit der Ticket-Umsetzung beginnen.

## Bei Bearbeitung

- Bei Story-bezogenen Tickets Parent Story lesen; bei story-losen Tickets entfaellt dieser Schritt.
- `RULE.md`-Kaskade pruefen.
- `tools` pruefen und optionale Toolregeln laden.
- Anforderungen/AC/Nicht-Ziele einhalten.
- Danach Ticketstatus + Arbeitsnotizen + `updated` pflegen.
