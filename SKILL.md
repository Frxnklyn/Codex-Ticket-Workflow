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
- Tickets liegen zentral unter `.project-work/tickets/`.
- Story-Zugehörigkeit wird über das Frontmatter-Feld `story: story-XXX` und die Ticketübersicht der Story beschrieben.
- `.project-work/tickets/` ist auch der feste Zielpfad, wenn Tickets als eigenes Repository/Subrepo angebunden werden.
- Story gilt erst als abgeschlossen, wenn relevante Tickets `done` oder `discarded` sind.
- Storys oder Tickets zu schreiben ist Planungsarbeit. Dabei niemals direkt mit der fachlichen Umsetzung beginnen.

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

Beim Bearbeiten eines Story-bezogenen Tickets gilt (allgemein -> spezifisch):
1. `.project-work/RULE.md`
2. `.project-work/storys/RULE.md`
3. `.project-work/storys/<story>/RULE.md`
4. `.project-work/tickets/RULE.md`

Beim Bearbeiten eines story-losen Tickets gilt:
1. `.project-work/RULE.md`
2. `.project-work/tickets/RULE.md`

Spezifischere Regeln ergänzen/überschreiben allgemeinere Regeln.

## Arbeitsablauf Ticket-Bearbeitung

1. Bei Story-bezogenen Tickets Story öffnen; bei story-losen Tickets direkt das Ticket öffnen.
2. Relevante `RULE.md` lesen.
3. `tools` aus Story und Ticket prüfen.
4. Ticket (Aufgabe/Anforderungen/Nicht-Ziele/AC) lesen.
5. Nur Ticket-Scope bearbeiten.
6. Ticket aktualisieren (`status`, `updated`, AC, Arbeitsnotizen).
7. Bei Story-bezogenen Tickets `STATUS.md` aktualisieren.
8. Bei Story-bezogenen Tickets Ticketübersicht in `STORY.story.md` aktualisieren; bei story-losen Tickets entfallen Story-Dateien.

## Storys und Tickets schreiben

- Beim Anlegen oder Ausformulieren von Storys und Tickets nur die Workflow-Artefakte schreiben.
- Keine fachliche Umsetzung starten: keinen Produktivcode ändern, keine Build-/Config-Anpassungen vornehmen, keine Ticket-Aufgabe bereits miterledigen.
- Neue Tickets initial mit `status: backlog` oder `status: ready` anlegen, nicht mit `in_progress` oder `done`.
- Erst mit der Umsetzung beginnen, wenn der Nutzer ausdrücklich ein Ticket oder eine Story zur Bearbeitung freigibt.

## Story anlegen

- Zielpfad und Pflichtdateien gemäß `references/target-structure.md`.
- Namensdetails gemäß `references/story-rules.md`.
- Templates: `templates/`.

## Ticket anlegen

- Speicherort: immer `.project-work/tickets/`.
- Für Story-Tickets `story: story-XXX` setzen und die Story-Ticketübersicht aktualisieren.
- Für story-lose Tickets `story: none` setzen; Story-Dateien entfallen.
- Name: `001-kurzer-ticket-name.ticket.md`
- Nach Anlage eines Story-Tickets Story-Ticketübersicht sofort aktualisieren; bei story-losen Tickets entfällt dieser Schritt.

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

- `Init.md` ist nur für die einmalige Initialisierung nach Installation dieses Skills relevant und kann mehrere Initialisierungspunkte enthalten.
- Im normalen Story-/Ticket-Workflow ist `Init.md` irrelevant.
- Codex soll `Init.md` nicht lesen oder auswerten, außer der Nutzer fordert ausdrücklich Installation oder erneute Initialisierung an; dann sind die Punkte von oben nach unten abzuarbeiten und `ignore:`-Angaben im Nutzerprompt zu beachten.

## README-Regel (bestehend, beibehalten)

- Diese Regel gilt ausschließlich für diesen Skill (`ticket-workflow`).
- Codex soll README-Dateien nicht automatisch lesen/auswerten.
- Ausnahme nur für Installation/Update dieses Skills.
