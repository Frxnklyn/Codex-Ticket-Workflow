Installiere den Codex Ticket Workflow aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git in dieses aktuelle Projekt.

Ziel:
Richte den Ticket-Workflow direkt in diesem Projekt ein.

Installationsregeln:
- Prüfe zuerst die vorhandene Ordnerstruktur.
- Nutze `.agents/skills/` als Skill-Ziel.
- Erstelle `.agents/skills/ticket-workflow/`, falls nicht vorhanden.
- Klone oder kopiere den Skill nach `.agents/skills/ticket-workflow/`.
- Überschreibe keine bestehenden Dateien ungefragt.
- Wenn eine Datei bereits existiert, prüfe, ob sie erhalten bleiben muss.
- Falls Konflikte entstehen, frage nach.

Nach der Installation:
- Bitte schaue in `.agents/skills/ticket-workflow/Init.md`, sobald du fertig bist.
- Arbeite nur die dort definierten Initialisierungspunkte der Reihe nach ab.
- Beachte `ignore:`-Angaben im Prompt: Wenn dort eine Punktnummer, Überschrift oder ein Kurzname genannt wird, überspringe diesen Initialisierungspunkt bewusst.
- Wenn keine `ignore:`-Angaben gesetzt sind, führe auch die Beispielstory- und BeispielTicket-Punkte projektbezogen aus.
- Beispiel, wenn keine Beispiele angelegt werden sollen: `ignore: Beispielstory anlegen, BeispielTicket anlegen`.

Ignore-Regel für spätere Arbeit:
- Ergänze vorhandene Codex-/Agent-Regeln sinngemäß um folgenden Hinweis, falls solche Regeln im Projekt gepflegt werden:
  - `Ignoriere .agents/skills/ticket-workflow/Init.md bei normaler Story- oder Ticket-Bearbeitung. Lies diese Datei nur unmittelbar nach der Installation oder wenn ausdrücklich eine erneute Initialisierung verlangt wird.`

Am Ende:
- Gib eine Zusammenfassung aus, welche Dateien und Ordner erstellt, geändert oder übersprungen wurden.
