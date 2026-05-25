# Codex Ticket Workflow

Dieses Repository ist ein **kopierbares Regel-Repository für Codex**.
Es ist **kein npm package** und wird **primär per Codex-Prompt** in ein Zielprojekt übernommen.

## Was dieses Repository macht

- Liefert Regeln, Templates und Skripte für Ticket-/Story-Arbeit.
- Soll in einem Zielprojekt direkt unter `.agents/skills/` abgelegt werden.
- Codex nutzt diese Regeln dann als Skill-Basis für Ticket-/Story-/Backlog-Arbeit.

## Wichtig

- **Kein npm package**.
- **Kein Installer als Hauptweg**.
- Hauptweg = Prompt in Codex einfügen, damit Codex das Repo in das aktuelle Projekt unter `.agents/skills/` klont.

## Zielidee im Zielprojekt

```text
target-project/
  .agents/
    skills/
      Codex-Ticket-Workflow/
        README.md
        workflow/
          skills/
            ticket-workflow/
              SKILL.md
              references/
              scripts/
```

## AGENTS.md Verhalten (wichtig)

Codex muss beim Installieren prüfen:

1. Existiert `AGENTS.md`?
   - **Ja**: Nutzer fragen, ob eine zusätzliche Zeile/ein kurzer Hinweis auf Tickets/Stories ergänzt werden soll.
   - **Nein**: Nutzer fragen, ob `AGENTS.md` angelegt werden soll.

Es darf **nichts ungefragt** in `AGENTS.md` geschrieben werden.

## Installationsprompt (Hauptweg)

> Diesen Prompt im Zielprojekt in Codex einfügen.

```text
Installiere den Codex Ticket Workflow aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git in dieses aktuelle Projekt.

WICHTIG:
Dieses Repo soll als ganzes nach .agents/skills/ geklont werden (nicht in einen anderen Zielpfad).

Vorgehen:
1) Prüfe, ob .agents/skills existiert.
2) Wenn .agents/skills existiert:
   - Führe git clone https://github.com/Frxnklyn/Codex-Ticket-Workflow.git .agents/skills/Codex-Ticket-Workflow aus.
3) Wenn .agents/skills nicht existiert:
   - Lege den Ordner zuerst an.
   - Führe danach git clone https://github.com/Frxnklyn/Codex-Ticket-Workflow.git .agents/skills/Codex-Ticket-Workflow aus.

AGENTS.md-Regeln:
- Prüfe, ob AGENTS.md vorhanden ist.
- Wenn AGENTS.md vorhanden ist: frage, ob ein zusätzlicher kurzer Hinweis auf Ticket-/Story-Workflow ergänzt werden soll.
- Wenn AGENTS.md nicht vorhanden ist: frage, ob AGENTS.md angelegt werden soll.
- Schreibe nicht ungefragt in AGENTS.md.

Zusatz:
- Lege docs/stories/backlog, docs/stories/active, docs/stories/done an, falls sie fehlen.
- Lege docs/tickets/backlog, docs/tickets/active, docs/tickets/done an, falls sie fehlen.
- Lege .codex-ticket-workflow.local.json an, falls sie fehlt.
- Trage .codex-ticket-workflow.local.json in .gitignore ein, falls noch nicht enthalten.
- Überschreibe keine bestehenden Dateien ungefragt.
- Bei Konflikten fragen.
- Gib am Ende eine Zusammenfassung aus (erstellt/geändert/übersprungen).
```

## Lokale Präferenzdatei

Datei: `.codex-ticket-workflow.local.json`

Beispiel:

```json
{
  "alwaysCreateBranch": null,
  "alwaysStopBeforeNextTicket": null,
  "alwaysStopBeforeNextStoryTicket": null
}
```

Bedeutung:
- `null` = immer fragen
- `true` = immer ja
- `false` = immer nein

Diese Datei muss in `.gitignore` stehen und darf nicht gepusht werden.

## Annahmen

- Git ist im Zielsystem verfügbar.
- Node.js ist verfügbar, wenn Skripte unter `workflow/skills/ticket-workflow/scripts/` genutzt werden.
