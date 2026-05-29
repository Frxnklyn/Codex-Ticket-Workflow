# Codex Ticket Workflow

Dieses Repository ist ein wiederverwendbares **Codex-Regelwerk (Skill)** für einen einfachen Story-/Ticket-Workflow.

## Kernziel

Ein einheitliches, schnell beschreibbares Arbeitsmodell, das Codex zuverlässig lesen und bearbeiten kann. Die verbindliche Zielstruktur steht zentral in `references/target-structure.md`; andere Dokumente verweisen darauf, statt die Struktur zu duplizieren.

## Installation

### Installationsmodus

Für die Installation gibt es eine bewusst benannte Variable:

```text
INSTALLATION_MODE=direct
```

Erlaubte Werte:

- `direct` (Standard): Das Repository wird direkt nach `.agents/skills/ticket-workflow/` geklont und bleibt dort als eingebettetes Git-Repository/Subrepo mit eigenem inneren `.git/` erhalten. Es entsteht **kein zusätzlicher Zwischenordner** wie `.agents/skills/ticket-workflow/Codex-Ticket-Workflow/`.
- `temporary-copy`: Das Repository wird zuerst in einen temporären Ersatzordner geklont und danach wird der **Inhalt des Repositorys** nach `.agents/skills/ticket-workflow/` kopiert. Auch hier darf im Ziel kein zusätzlicher Projekt-Unterordner entstehen. Dieser Modus ist keine Subrepo-Installation, weil der innere `.git/`-Ordner nach erfolgreicher Initialisierung entfernt wird.

`temporary-copy` ist nur sinnvoll, wenn Codex vor dem Kopieren prüfen oder filtern soll. Wenn dieser Modus genutzt wird, müssen nach der Initialisierung überflüssige Installationsdateien aus der Zielinstallation entfernt werden, sofern sie nicht ausdrücklich behalten werden sollen:

- `.git/`
- `Init.md` nach erfolgreicher Initialisierung
- `LICENSE`
- `README.md`

Die operativ benötigten Skill-Bestandteile bleiben erhalten, insbesondere:

- `SKILL.md`
- `templates/`
- `references/`
- `scripts/`
- `examples/`

### Standardinstallation als Subrepo

```bash
mkdir -p .agents/skills
git clone https://github.com/Frxnklyn/Codex-Ticket-Workflow.git .agents/skills/ticket-workflow
```

Bei dieser Standardinstallation bleibt `.agents/skills/ticket-workflow/.git/` bewusst erhalten. Der Ticket-Workflow ist damit ein separat versioniertes eingebettetes Git-Repository/Subrepo und soll nicht als normale Dateien in den Git-Index des Hauptprojekts aufgenommen werden.

### Installationsprompt für Codex

```text
Installiere den Codex Ticket Workflow aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git als eingebettetes Git-Repository/Subrepo in dieses aktuelle Projekt.

INSTALLATION_MODE=direct

Nutze `.agents/skills/ticket-workflow/` als Zielordner.
Klone das Repository direkt nach `.agents/skills/ticket-workflow/`; lege keinen zusätzlichen Zwischenordner innerhalb von `.agents/skills/ticket-workflow/` an.
Lasse den inneren `.git/`-Ordner in `.agents/skills/ticket-workflow/.git/` erhalten, damit der Skill separat versioniert bleibt.
Nimm keine Änderungen am Git-Index des Hauptprojekts vor: Führe dort kein `git add`, keinen Commit und keinen Push aus.
Nimm `.agents/skills/ticket-workflow/` nicht als normale Dateien in das Hauptrepo auf.
Wenn du mit der Installation fertig bist: Bitte schaue in `.agents/skills/ticket-workflow/Init.md` und arbeite nur die dort definierten Initialisierungspunkte der Reihe nach ab.
Überschreibe keine vorhandenen Dateien ungefragt; wenn dafür eine Nutzerentscheidung nötig ist, nutze bevorzugt strukturierte Nutzereingaben (Codex-Popup).
Optional kannst du einzelne Initialisierungspunkte ignorieren, indem du sie nach `ignore:` nennst. Beispiel: `ignore: Beispielstory anlegen, BeispielTicket anlegen`
Gib am Ende eine kurze Zusammenfassung aus, welche Punkte erstellt, bereits vorhanden, ignoriert, übersprungen oder blockiert wurden.
```

### Temporärer Installationsprompt

```text
Installiere den Codex Ticket Workflow aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git in dieses aktuelle Projekt.

INSTALLATION_MODE=temporary-copy

Klone das Repository zuerst in einen temporären Ersatzordner.
Kopiere anschließend den Inhalt des geklonten Repositories direkt nach `.agents/skills/ticket-workflow/`.
Lege keinen zusätzlichen Zwischenordner innerhalb von `.agents/skills/ticket-workflow/` an.
Entferne nach erfolgreicher Initialisierung aus `.agents/skills/ticket-workflow/` alles, was für die spätere Skill-Nutzung nicht benötigt wird: `.git/`, `Init.md`, `LICENSE` und `README.md`.
Überschreibe keine vorhandenen Dateien ungefragt; wenn dafür eine Nutzerentscheidung nötig ist, nutze bevorzugt strukturierte Nutzereingaben (Codex-Popup).
```

### Rückfragen bei der Initialisierung

`Init.md` darf bei Beispielinhalten Rückfragen stellen. Das ist beabsichtigt, weil Beispielstory und Beispielticket projektbezogene Namen, Ziele und Ticketorte haben können.

Wenn Codex Rückfragen, Bestätigungen oder Auswahlentscheidungen stellt, soll Codex bevorzugt ein verfügbares Tool für strukturierte Nutzereingaben verwenden. Dadurch erscheinen die Fragen als Codex-Popup/Choice-Fenster. Nur wenn kein solches Tool verfügbar ist, soll Codex dieselbe Frage als normale Chat-Rückfrage stellen.

Für die Beispielstory fragt Codex vor dem Anlegen strukturiert:

- Soll eine Beispielstory erstellt werden?
  - Ja, mit Standardwerten
  - Nein, überspringen

Bei Zustimmung nutzt Codex die Standardwerte aus `Init.md`: Projektname aus Repository-/Ordnername, nächste freie Story-ID und Story-Name `story-001-<projektname>-workflow-einfuehren`.

Wenn Codex **keine Rückfragen stellen darf**, ergänze den Prompt ausdrücklich, zum Beispiel:

```text
Rückfragen sind verboten. Wenn ein Initialisierungspunkt ohne Rückfrage nicht sicher ausführbar ist, überspringe oder blockiere ihn und dokumentiere das Ergebnis kurz. Erfinde keine projektfachlichen Details.
```

### Init-Punkte ignorieren

`Init.md` kann mehrere Initialisierungspunkte enthalten. Codex soll einen Punkt ignorieren, wenn der Installations- oder Re-Initialisierungsprompt nach `ignore:` die Nummer, Überschrift oder den Kurznamen des Punkts nennt.

Beispiel:

```text
ignore: Beispielstory anlegen, BeispielTicket anlegen
```

## Init.md und Ignore-Regel

`Init.md` ist nur für die einmalige Initialisierung direkt nach der Installation relevant. Im normalen Story-/Ticket-Workflow ist diese Datei irrelevant; Codex soll sie nicht lesen oder auswerten, außer der Nutzer fordert ausdrücklich Installation oder erneute Initialisierung an.

Prompt-Baustein, falls ein Projekt eigene Codex-/Agent-Regeln ergänzt:

```text
Ignoriere `.agents/skills/ticket-workflow/Init.md` bei normaler Story- oder Ticket-Bearbeitung. Lies diese Datei nur unmittelbar nach der Installation des ticket-workflow Skills oder wenn ich ausdrücklich eine erneute Initialisierung verlange.
```

## Enthaltene Bausteine

- Operative Skill-Regeldatei: `SKILL.md`
- Zentrale Zielstruktur: `references/target-structure.md`
- Ausführliche Teilregeln: `references/`
- Wiederverwendbare Templates: `templates/`
- Hilfsskripte: `scripts/`
- Beispiel-Prompts: `examples/`

## Was dieses Regelwerk festlegt

1. Story-Struktur und Story-Anlage
2. Ticket-Struktur und Ticket-Anlage
3. Ticket-Bearbeitungsablauf
4. Pflege von `STATUS.md`
5. Auflösung von `RULE.md`-Kaskaden
6. Nutzung von `tools: []`
7. Archivierung abgeschlossener/verworferner Storys
8. Namenskonventionen
9. Zulässige Statuswerte
10. Pflicht-Nachbearbeitung nach Ticket-Umsetzung

## Wichtiger Kompatibilitätssatz

Bestehende, projektspezifische Spezialregeln sollen erhalten bleiben, sofern sie nicht direkt mit dem Story-/Ticket-System kollidieren. Das Regelwerk ergänzt bestehende Logik und ersetzt sie nicht pauschal.

## Update

```bash
git pull
```
