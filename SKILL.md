---
name: ticket-workflow
description: Markdown-based Story and Ticket workflow for Codex project planning. Use when the user asks about tickets, storys/stories, backlog, acceptance criteria, status reports, splitting a story into tickets, writing tickets, sorting tickets, or working through story/ticket tasks.
---

# ticket-workflow Skill

## Zweck

Wiederverwendbares Codex-Regelwerk fuer einen einfachen Story-/Ticket-Workflow auf Markdown-Basis.

Die verbindliche Zielstruktur im Zielprojekt steht zentral in `references/target-structure.md`. Diese Datei ist die massgebliche Quelle fuer Ordner- und Dateistruktur; hier im Skill werden nur die operativen Regeln ergaenzt.

## Pflichtstart

- Bei jeder Story-, Ticket- oder Backlog-Aufgabe diesen Skill zuerst lesen, bevor Storys, Tickets, Statusberichte oder Notizen geschrieben oder geaendert werden.
- Danach die relevanten Referenzen aus dem Abschnitt `Referenzen` lesen, mindestens `references/target-structure.md` und bei Ticketarbeit `references/ticket-rules.md`.
- Erst nach diesem Leseschritt Workflow-Artefakte anlegen, verschieben oder aktualisieren.

## Wann dieser Skill verwendet werden soll

Verwenden, wenn der Nutzer z. B. sagt:
- Ticket, Story, Backlog
- Acceptance Criteria, Arbeitsnotizen, Statusbericht
- Story in Tickets zerlegen
- einzelnes Ticket bearbeiten
- ganze Story abarbeiten

## Kernmodell

- Story und Ticket sind strukturell aehnlich (Markdown + YAML-Frontmatter).
- Story = uebergeordneter Arbeitscontainer.
- Ticket = einzelne konkret umsetzbare Aufgabe.
- Story-bezogene Tickets liegen im `tickets/`-Unterordner der jeweiligen Story.
- Story-lose Einzeltickets liegen unter `.project-work/tickets/`.
- Story-Zugehoerigkeit wird ueber das Frontmatter-Feld `story: story-XXX`, den Story-internen Ticketordner und die Ticketuebersicht der Story beschrieben.
- `.project-work/tickets/` ist der feste Zielpfad fuer story-lose Einzeltickets und optionale story-lose Ticket-Repos/Subrepos.
- Story gilt erst als abgeschlossen, wenn relevante Tickets `done` oder `discarded` sind.
- Storys oder Tickets zu schreiben ist Planungsarbeit. Dabei niemals direkt mit der fachlichen Umsetzung beginnen.

## Verbindliche Statuswerte

- `backlog`
- `ready`
- `in_progress`
- `blocked`
- `done`
- `discarded`

Status wird immer im Frontmatter gepflegt (nicht ueber Status-Ordner).

## Tools-Feld

Jede Story und jedes Ticket enthaelt:

```yaml
tools: []
```

Bearbeitungsregel:
1. `tools` in Story/Ticket pruefen.
2. Falls Eintraege vorhanden sind: passende Tool-Regeln suchen und anwenden.
3. Bei leerem `tools` gelten allgemeine Regeln + optionale `RULE.md`.

## RULE.md-Kaskade

`RULE.md` ist optional und kann auf mehreren Ebenen liegen.

Beim Bearbeiten eines Story-bezogenen Tickets gilt (allgemein -> spezifisch):
1. `.project-work/RULE.md`
2. `.project-work/storys/RULE.md`
3. `.project-work/storys/<story>/RULE.md`
4. `.project-work/storys/<story>/tickets/RULE.md`

Beim Bearbeiten eines story-losen Tickets gilt:
1. `.project-work/RULE.md`
2. `.project-work/tickets/RULE.md`

Spezifischere Regeln ergaenzen/ueberschreiben allgemeinere Regeln.

## Arbeitsablauf Ticket-Bearbeitung

1. Bei Story-bezogenen Tickets Story oeffnen; bei story-losen Tickets direkt das Ticket oeffnen.
2. Relevante `RULE.md` lesen.
3. `tools` aus Story und Ticket pruefen.
4. Ticket (Aufgabe/Anforderungen/Nicht-Ziele/AC) lesen.
5. Nur Ticket-Scope bearbeiten.
6. Ticket aktualisieren (`status`, `updated`, AC, Arbeitsnotizen).
7. Bei Story-bezogenen Tickets `STATUS.md` aktualisieren.
8. Bei Story-bezogenen Tickets Ticketuebersicht in `STORY.story.md` aktualisieren; bei story-losen Tickets entfallen Story-Dateien.

## Storys und Tickets schreiben

- Beim Anlegen oder Ausformulieren von Storys und Tickets nur die Workflow-Artefakte schreiben.
- Keine fachliche Umsetzung starten: keinen Produktivcode aendern, keine Build-/Config-Anpassungen vornehmen, keine Ticket-Aufgabe bereits miterledigen.
- Neue Tickets initial mit `status: backlog` oder `status: ready` anlegen, nicht mit `in_progress` oder `done`.
- Erst mit der Umsetzung beginnen, wenn der Nutzer ausdruecklich ein Ticket oder eine Story zur Bearbeitung freigibt.

## Story anlegen

- Zielpfad und Pflichtdateien gemaess `references/target-structure.md`.
- Namensdetails gemaess `references/story-rules.md`.
- Templates: `templates/`.

## Ticket anlegen

- Speicherort fuer Story-Tickets: `.project-work/storys/<story>/tickets/`.
- Speicherort fuer story-lose Einzeltickets: `.project-work/tickets/`.
- Fuer Story-Tickets `story: story-XXX` setzen und die Story-Ticketuebersicht mit relativem Pfad `tickets/<datei>.ticket.md` aktualisieren.
- Fuer story-lose Tickets `story: none` setzen; Story-Dateien entfallen.
- Name: `001-kurzer-ticket-name.ticket.md`
- Nummern sind innerhalb des jeweiligen Ticketordners fortlaufend.
- Nach Anlage eines Story-Tickets Story-Ticketuebersicht sofort aktualisieren; bei story-losen Tickets entfaellt dieser Schritt.

## Archivierung

- Aktive und archivierte Story-Orte gemaess `references/target-structure.md`.
- Nur wenn Story-Status `done` oder `discarded`.
- Immer komplette Story verschieben, inklusive Story-internem `tickets/`-Ordner.

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

- `Init.md` ist nur fuer die einmalige Initialisierung nach Installation dieses Skills relevant und kann mehrere Initialisierungspunkte enthalten.
- Im normalen Story-/Ticket-Workflow ist `Init.md` irrelevant.
- Codex soll `Init.md` nicht lesen oder auswerten, ausser der Nutzer fordert ausdruecklich Installation oder erneute Initialisierung an; dann sind die Punkte von oben nach unten abzuarbeiten und `ignore:`-Angaben im Nutzerprompt zu beachten.

## README-Regel

- Diese Regel gilt ausschliesslich fuer diesen Skill (`ticket-workflow`).
- Codex soll README-Dateien nicht automatisch lesen/auswerten.
- Ausnahme nur fuer Installation/Update dieses Skills.
