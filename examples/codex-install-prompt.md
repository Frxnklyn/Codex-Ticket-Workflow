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
