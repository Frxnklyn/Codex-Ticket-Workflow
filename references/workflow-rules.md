# Workflow Rules (Story/Ticket)

## Zielmodell

Arbeite nach dieser Struktur:

```txt
.project-work/
  storys/
    story-001-short-name/
      STORY.story.md
      STATUS.md
      tickets/
        001-short-ticket-name.ticket.md
      NOTES.md
```

## Grundregeln

- Storys und Tickets sind Markdown-Dateien mit YAML-Frontmatter.
- Status wird **immer** im Frontmatter gepflegt (nicht über Status-Ordner).
- Zulässige Statuswerte:
  - `backlog`
  - `ready`
  - `in_progress`
  - `blocked`
  - `done`
  - `discarded`
- `tools: []` ist ein optionaler Regelerweiterungs-Mechanismus.

## Reihenfolge bei Ticket-Bearbeitung

1. Zugehörige Story öffnen.
2. Relevante `RULE.md` in Scope-Reihenfolge lesen.
3. `tools` aus Story und Ticket prüfen.
4. Falls Tool-Regeln existieren: vor Umsetzung berücksichtigen.
5. Ticketanforderungen, Nicht-Ziele, AC prüfen.
6. Nur Ticket-Scope bearbeiten.
7. Nach Umsetzung Ticket, `STATUS.md` und Story-Ticketliste aktualisieren.

## Pflicht-Nachbearbeitung

Nach jeder Ticket-Bearbeitung:

- Ticket:
  - `status` und `updated` anpassen
  - AC abhaken
  - Arbeitsnotizen ergänzen
- Story (`STORY.story.md`):
  - Ticketübersicht aktualisieren
  - `updated` aktualisieren
  - Story-Status bei Bedarf anpassen
- `STATUS.md`:
  - Aktuellen Status, Erledigt/Offen/Blocker, KI-Arbeitsbericht und nächsten Schritt pflegen
