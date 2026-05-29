Installiere den Codex Ticket Workflow aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git in dieses aktuelle Projekt.

Ziel:
Richte den Ticket-Workflow direkt in diesem Projekt ein.

Installationsmodus:
- `INSTALLATION_MODE=direct`
- Standard ist `direct`: Klone den Repository-Inhalt direkt nach `.agents/skills/ticket-workflow/`.
- Lege keinen Zwischenordner wie `.agents/skills/ticket-workflow/Codex-Ticket-Workflow/` an.
- Nur wenn ich ausdrücklich `INSTALLATION_MODE=temporary-copy` angebe, darfst du zuerst in einen temporären Ersatzordner klonen und danach den Inhalt nach `.agents/skills/ticket-workflow/` kopieren.

Installationsregeln:
- Prüfe zuerst die vorhandene Ordnerstruktur.
- Nutze `.agents/skills/` als Skill-Ziel.
- Erstelle `.agents/skills/ticket-workflow/`, falls nicht vorhanden.
- Klone oder kopiere den Inhalt des Skills direkt nach `.agents/skills/ticket-workflow/`.
- Überschreibe keine bestehenden Dateien ungefragt; wenn dafür eine Nutzerentscheidung nötig ist, nutze bevorzugt strukturierte Nutzereingaben (Codex-Popup).
- Wenn eine Datei bereits existiert, prüfe, ob sie erhalten bleiben muss.
- Falls Konflikte entstehen, frage per strukturierter Nutzereingabe (Codex-Popup) nach, sofern verfügbar.
- Wenn `INSTALLATION_MODE=temporary-copy` genutzt wird, entferne nach erfolgreicher Initialisierung aus `.agents/skills/ticket-workflow/` unnötige Installationsdateien: `.git/`, `Init.md`, `LICENSE` und `README.md`.

Nach der Installation:
- Bitte schaue in `.agents/skills/ticket-workflow/Init.md`, sobald du fertig bist.
- Arbeite nur die dort definierten Initialisierungspunkte der Reihe nach ab.
- Beachte `ignore:`-Angaben im Prompt: Wenn dort eine Punktnummer, Überschrift oder ein Kurzname genannt wird, überspringe diesen Initialisierungspunkt bewusst.
- Bei Beispielstory und Beispielticket darfst du Rückfragen stellen, bevor du fachliche Beispielinhalte anlegst; nutze dafür bevorzugt strukturierte Nutzereingaben (Codex-Popup), sofern verfügbar.
- Wenn keine `ignore:`-Angaben gesetzt sind, führe die nicht ignorierten Punkte gemäß `Init.md` aus.
- Beispiel, wenn keine Beispiele angelegt werden sollen: `ignore: Beispielstory anlegen, BeispielTicket anlegen`.

Optionaler Zusatz, wenn Rückfragen verboten sind:
- `Rückfragen sind verboten. Wenn ein Initialisierungspunkt ohne Rückfrage nicht sicher ausführbar ist, überspringe oder blockiere ihn und dokumentiere das Ergebnis kurz. Erfinde keine projektfachlichen Details.`

Ignore-Regel für spätere Arbeit:
- Ergänze vorhandene Codex-/Agent-Regeln sinngemäß um folgenden Hinweis, falls solche Regeln im Projekt gepflegt werden:
  - `Ignoriere .agents/skills/ticket-workflow/Init.md bei normaler Story- oder Ticket-Bearbeitung. Lies diese Datei nur unmittelbar nach der Installation oder wenn ausdrücklich eine erneute Initialisierung verlangt wird.`

Am Ende:
- Gib eine Zusammenfassung aus, welche Dateien und Ordner erstellt, geändert oder übersprungen wurden.
