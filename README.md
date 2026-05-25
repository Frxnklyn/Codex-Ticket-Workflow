# Codex Ticket Workflow

Ein wiederverwendbares Repository, um einen **Ticket-/Story-Workflow für Codex** in beliebige Projekte zu übernehmen – **primär per Prompt**, nicht per klassischem Installer.

## Was dieses Repository macht

Dieses Repository enthält einen vollständigen, kopierbaren Workflow für:

- Story- und Ticket-Dateien in `docs/stories/` und `docs/tickets/`
- einen Codex-Skill unter `.agents/skills/ticket-workflow/`
- klar getrennte Regeldateien und Templates
- kleine Node.js-Skripte (ESM, ohne externe Dependencies) zur Unterstützung

## Wichtige Klarstellung

- Dieses Repository ist **kein npm package**.
- Die **Hauptinstallation** läuft über einen **Codex-Installationsprompt** (siehe unten).
- Ein klassischer Installer ist optionaler Komfort, aber **nicht der primäre Weg**.

## Zielstruktur im Zielprojekt

Nach der Installation in ein beliebiges Zielprojekt soll die Struktur mindestens so aussehen:

```text
target-project/
  AGENTS.md

  .agents/
    skills/
      ticket-workflow/
        SKILL.md
        references/
          workflow-rules.md
          story-rules.md
          ticket-rules.md
          question-rules.md
          branch-rules.md
          stop-rules.md
          story-template.md
          ticket-template.md
          bug-ticket-template.md
          refactor-ticket-template.md
        scripts/
          create-story.mjs
          create-ticket.mjs
          move-ticket.mjs
          read-local-preferences.mjs
          update-local-preferences.mjs

  docs/
    stories/
      backlog/
      active/
      done/

    tickets/
      backlog/
      active/
      done/

  .codex-ticket-workflow.local.json
```

## AGENTS.md Integration

Die Zielprojekt-`AGENTS.md` bekommt **nur einen kleinen Verweisblock** (kein komplettes Regelwerk). Dieser Block darf nur innerhalb von Markern gepflegt werden:

- `<!-- CODEX-TICKET-WORKFLOW:START -->`
- `<!-- CODEX-TICKET-WORKFLOW:END -->`

## Lokale Präferenzen

Die Datei `.codex-ticket-workflow.local.json` speichert lokale Entscheidungen (pro Entwickler/Umgebung), z. B. ob immer ein Branch erstellt werden soll.

Beispiel:

```json
{
  "alwaysCreateBranch": null,
  "alwaysStopBeforeNextTicket": null,
  "alwaysStopBeforeNextStoryTicket": null
}
```

Bedeutung:

- `null` = jedes Mal fragen
- `true` = immer ja
- `false` = immer nein

Diese Datei muss im **Zielprojekt** in `.gitignore` stehen und darf nicht gepusht werden.

## Installationsprinzip (wichtig)

Codex soll beim Installieren:

1. vorhandene Projektstruktur zuerst prüfen,
2. bestehende Dateien respektieren,
3. nichts ungefragt überschreiben,
4. bei Konflikten nachfragen,
5. AGENTS.md nur im Marker-Bereich ergänzen/aktualisieren.

## Installationsprompt (Hauptweg)

> Diesen Prompt in Codex im **Zielprojekt** einfügen.

```text
Installiere den Codex Ticket Workflow aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git in dieses aktuelle Projekt.

Ziel:
Richte den Ticket-Workflow direkt in diesem Projekt ein.

Installationsregeln:
- Prüfe zuerst die vorhandene Ordnerstruktur.
- Nutze .agents/skills/ als Skill-Ziel.
- Erstelle .agents/skills/ticket-workflow/, falls nicht vorhanden.
- Kopiere oder rekonstruiere die Dateien aus workflow/skills/ticket-workflow/.
- Erstelle docs/stories/backlog, docs/stories/active, docs/stories/done.
- Erstelle docs/tickets/backlog, docs/tickets/active, docs/tickets/done.
- Lege .codex-ticket-workflow.local.json an, falls nicht vorhanden.
- Trage .codex-ticket-workflow.local.json in .gitignore ein.
- Lege AGENTS.md an, falls nicht vorhanden.
- Ergänze AGENTS.md nur innerhalb dieser Marker:

<!-- CODEX-TICKET-WORKFLOW:START -->
...
<!-- CODEX-TICKET-WORKFLOW:END -->

- Überschreibe keine bestehenden Dateien ungefragt.
- Wenn eine Datei bereits existiert, prüfe, ob sie erhalten bleiben muss.
- Falls Konflikte entstehen, frage nach.
- Am Ende gib eine Zusammenfassung aus, welche Dateien erstellt, geändert oder übersprungen wurden.
```

## Annahmen

- Node.js ist im Zielprojekt verfügbar (für optionale Skript-Nutzung).
- Der Workflow wird in projektnahen Markdown-Dateien geführt.
- Teams können Templates/Regeln später projektindividuell anpassen.

## Beispiele

Unter `examples/` liegen direkt nutzbare Prompt-Beispiele für Installation, Story-Erstellung und Ticket-/Story-Bearbeitung.
