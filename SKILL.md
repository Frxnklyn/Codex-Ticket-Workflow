# ticket-workflow Skill

## Zweck

Wiederverwendbares Codex-Regelwerk für einen einfachen Story-/Ticket-Workflow auf Markdown-Basis.

Die verbindliche Zielstruktur im Zielprojekt steht zentral in `references/target-structure.md`. Diese Datei ist die maßgebliche Quelle für Ordner- und Dateistruktur; hier im Skill werden nur die operativen Regeln ergänzt.

## Wann dieser Skill verwendet werden soll

Verwenden, wenn der Nutzer z. B. sagt:
- Ticket, Story, Backlog
- Acceptance Criteria, Arbeitsnotizen, Statusbericht
- Story in Tickets zerlegen
- einzelnes Ticket bearbeiten
- ganze Story abarbeiten

## Kernmodell

- Story und Ticket sind strukturell ähnlich (Markdown + YAML-Frontmatter).
- Story = übergeordneter Arbeitscontainer.
- Ticket = einzelne konkret umsetzbare Aufgabe.
- Story gilt erst als abgeschlossen, wenn relevante Tickets `done` oder `discarded` sind.

## Verbindliche Statuswerte

- `backlog`
- `ready`
- `in_progress`
- `blocked`
- `done`
- `discarded`

Status wird immer im Frontmatter gepflegt (nicht über Status-Ordner).

## Tools-Feld

Jede Story und jedes Ticket enthält:

```yaml
tools: []
```

Bearbeitungsregel:
1. `tools` in Story/Ticket prüfen.
2. Falls Einträge vorhanden sind: passende Tool-Regeln suchen und anwenden.
3. Bei leerem `tools` gelten allgemeine Regeln + optionale `RULE.md`.

## RULE.md-Kaskade

`RULE.md` ist optional und kann auf mehreren Ebenen liegen.

Beim Bearbeiten eines Tickets gilt (allgemein -> spezifisch):
1. `.project-work/RULE.md`
2. `.project-work/storys/RULE.md`
3. `.project-work/storys/<story>/RULE.md`
4. `.project-work/storys/<story>/tickets/RULE.md`

Spezifischere Regeln ergänzen/überschreiben allgemeinere Regeln.

## Arbeitsablauf Ticket-Bearbeitung

1. Story öffnen.
2. Relevante `RULE.md` lesen.
3. `tools` aus Story und Ticket prüfen.
4. Ticket (Aufgabe/Anforderungen/Nicht-Ziele/AC) lesen.
5. Nur Ticket-Scope bearbeiten.
6. Ticket aktualisieren (`status`, `updated`, AC, Arbeitsnotizen).
7. `STATUS.md` aktualisieren.
8. Ticketübersicht in `STORY.story.md` aktualisieren.

## Story anlegen

- Zielpfad und Pflichtdateien gemäß `references/target-structure.md`.
- Namensdetails gemäß `references/story-rules.md`.
- Templates: `templates/`.

## Ticket anlegen

- Speicherort: `<story>/tickets/`
- Name: `001-kurzer-ticket-name.ticket.md`
- Nach Anlage Story-Ticketübersicht sofort aktualisieren.

## Archivierung

- Aktive und archivierte Story-Orte gemäß `references/target-structure.md`.
- Nur wenn Story-Status `done` oder `discarded`.
- Immer komplette Story verschieben.

## Bestehende Spezialregeln erhalten

- Bestehende, kompatible Spezialregeln bleiben bestehen.
- Speziellere bestehende Regeln haben Vorrang vor allgemeinen Standardregeln.
- Bei Konflikten nur minimal-invasive Anpassung.

## Referenzen

- `references/target-structure.md`
- `references/workflow-rules.md`
- `references/story-rules.md`
- `references/ticket-rules.md`
- `references/branch-rules.md`
- `references/question-rules.md`
- `references/stop-rules.md`
- `references/story-template.md`
- `references/ticket-template.md`


## Init.md-Regel

- `Init.md` ist nur für die einmalige Initialisierung nach Installation dieses Skills relevant.
- Im normalen Story-/Ticket-Workflow ist `Init.md` irrelevant.
- Codex soll `Init.md` nicht lesen oder auswerten, außer der Nutzer fordert ausdrücklich Installation oder erneute Initialisierung an.

## README-Regel (bestehend, beibehalten)

- Diese Regel gilt ausschließlich für diesen Skill (`ticket-workflow`).
- Codex soll README-Dateien nicht automatisch lesen/auswerten.
- Ausnahme nur für Installation/Update dieses Skills.
