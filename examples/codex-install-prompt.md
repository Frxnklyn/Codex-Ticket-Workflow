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
