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

Bei dieser Standardinstallation bleibt `.agents/skills/ticket-workflow/.git/` bewusst erhalten. Der Ticket-Workflow ist damit ein separat versioniertes eingebettetes Git-Repository/Subrepo und soll jetzt nicht als normale Dateien in den Git-Index des Hauptprojekts aufgenommen werden. Das bedeutet ausdrücklich nur: nicht adden, nicht committen und nicht pushen. Der Ordner darf dabei **nicht** in `.gitignore`, `.git/info/exclude` oder andere Ignore-/Exclude-Dateien eingetragen werden, damit er später bewusst als eingebettetes Repository, Subrepo oder Submodule im Hauptrepo registriert werden kann.

### Installationsprompt für Codex

```text
Installiere den Codex Ticket Workflow aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git als eingebettetes Git-Repository/Submodule in dieses aktuelle Projekt.

INSTALLATION_MODE=direct

Nutze `.agents/skills/ticket-workflow/` als Zielpfad.
Registriere das Repository im Hauptprojekt als Git-Submodule unter genau diesem Pfad, sodass `.gitmodules` angelegt bzw. aktualisiert wird und der Submodule-Gitlink im Hauptrepo staged/commit-ready sichtbar ist.

Wichtig:
- Lege keinen zusätzlichen Zwischenordner innerhalb von `.agents/skills/ticket-workflow/` an.
- Der Skill soll separat versioniert bleiben.
- Trage `.agents/skills/ticket-workflow/` nicht in `.gitignore`, `.git/info/exclude` oder andere Ignore-/Exclude-Dateien ein.
- Falls bereits eine Ignore-/Exclude-Regel für diesen Pfad existiert, entferne nur diese konkrete Regel.
- Falls der Zielordner schon existiert, überschreibe nichts ungefragt.
- Wenn der Zielordner bereits ein Git-Repository ist, prüfe Remote und HEAD und registriere es als Submodule, statt neu zu klonen.
- Führe keinen Commit und keinen Push aus.
- Änderungen dürfen aber im Hauptrepo staged werden, wenn sie zur Submodule-Registrierung gehören.

Nach der Installation:
1. Prüfe `git status`, `git submodule status` und `.gitmodules`.
2. Schaue in `.agents/skills/ticket-workflow/Init.md`.
3. Arbeite die dort definierten Initialisierungspunkte der Reihe nach ab.
4. Stelle für Beispielstory und Beispielticket die in `Init.md` vorgesehenen Rückfragen; gehe nicht automatisch von Standardwerten oder einem Standard-Ablageort aus.
5. Erkläre bei jeder Rückfrage ausführlich, was gerade passiert, warum du fragst, welche Dateien/Ordner betroffen sind, welche Folgen die Optionen haben und was du nach der Antwort tun wirst.
6. Nutze Standardwerte oder einen Ablageort nur, wenn ich sie im Prompt ausdrücklich vorgebe oder sie in einer Rückfrage bestätige.
7. Überschreibe keine vorhandenen Dateien ungefragt.

Am Ende:
- Gib eine kurze Zusammenfassung aus, welche Punkte erstellt, bereits vorhanden, ignoriert, übersprungen oder blockiert wurden.
- Gib zusätzlich aus, welche Dateien/Einträge im Hauptrepo commit-ready sind.
```


### Optional: echtes Git-Submodule statt losem Subrepo

Wenn SourceTree oder andere Git-Tools den Ticket-Workflow sofort als echtes Submodule erkennen sollen, muss die Installation ausdrücklich als Submodule erfolgen. Das verändert bewusst Metadaten des Hauptrepos, insbesondere `.gitmodules` und den Gitlink im Index:

```bash
git submodule add https://github.com/Frxnklyn/Codex-Ticket-Workflow.git .agents/skills/ticket-workflow
```

Passender Prompt-Baustein:

```text
Richte das Repository als echtes Git-Submodule ein:
git submodule add https://github.com/Frxnklyn/Codex-Ticket-Workflow.git .agents/skills/ticket-workflow

Ändere dafür `.gitmodules` und den Gitlink im Hauptrepo, aber führe keinen Commit und keinen Push aus.
```

Dieser Submodule-Modus ist etwas anderes als die Standardinstallation als loses eingebettetes Repository/Subrepo. Er darf nur genutzt werden, wenn die Änderung am Hauptrepo ausdrücklich gewünscht ist.

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

### Bonus: Ticket-Repo als Subrepo anbinden

`Init.md` enthält zusätzlich einen optionalen Bonuspunkt für Projekte, die ihre Tickets in einem eigenen Repository führen möchten. Wenn der Installations- oder Re-Initialisierungsprompt einen eindeutigen Git-Repository-Link für den Ticket-Bereich enthält, kann Codex `.project-work/tickets/` als separat versioniertes Ticket-Subrepo anlegen oder anbinden. Ziel ist, Tickets unabhängig vom Hauptprojekt versionieren oder teilen zu können, ohne vorhandene Projektdateien ungefragt zu überschreiben.

Der Bonus wird nur ausgeführt, wenn der Link klar als Ticket-Repo gemeint ist, zum Beispiel als Ticket-Repo, Ticket-Subrepo oder Repo für `.project-work/tickets/`. Der Link des `ticket-workflow` Skills selbst darf nicht automatisch als Ticket-Repo verwendet werden. Wenn der Pfad bereits ein Git-Repo/Submodule ist, prüft Codex Remote und HEAD; wenn dort bereits Dateien liegen, fragt Codex nach oder blockiert den Bonus, falls Rückfragen verboten sind.

Kleines Extra-Feld für den Installationsprompt mit passendem Bonus:

```text
BONUS_TICKET_SUBREPO_REPO=<GIT-REPO-LINK-FUER-TICKETS>
BONUS_TICKET_SUBREPO_MODE=loose-subrepo

Wenn `BONUS_TICKET_SUBREPO_REPO` gesetzt ist, nutze diesen Link nur für `.project-work/tickets/` und binde den Ticket-Bereich nach der Ordnerstruktur-Initialisierung als Ticket-Subrepo an.
Ziel: Die Tickets sollen separat versioniert unter `.project-work/tickets/` liegen.
Nutze standardmäßig ein loses eingebettetes Git-Repository/Subrepo mit eigenem innerem `.git/`.
Registriere es nur dann als echtes Git-Submodule mit `.gitmodules` und Gitlink, wenn ich `BONUS_TICKET_SUBREPO_MODE=submodule` angebe oder diese Option in einer Rückfrage ausdrücklich bestätige.
Überschreibe, verschiebe oder lösche vorhandene Tickets nicht ungefragt.
Führe keinen Commit und keinen Push aus.
```

Wenn dieser Bonus nicht gewünscht ist, lasse das Extra-Feld weg oder ignoriere den Init-Punkt ausdrücklich:

```text
ignore: Ticket-Repo als Subrepo anbinden
```

### Rückfragen bei der Initialisierung

`Init.md` darf bei Beispielinhalten Rückfragen stellen. Das ist beabsichtigt, weil Beispielstory und Beispielticket projektbezogene Namen, Ziele und Ticketorte haben können.

Wenn Codex Rückfragen, Bestätigungen oder Auswahlentscheidungen stellt, soll Codex bevorzugt ein verfügbares Tool für strukturierte Nutzereingaben verwenden. Dadurch erscheinen die Fragen als Codex-Popup/Choice-Fenster. Jede Frage soll ausführlich erklären, was gerade passiert, warum die Entscheidung nötig ist, welche Dateien oder Ordner betroffen sind, welche Folgen die Optionen haben und was Codex nach der Antwort tun wird. Nur wenn kein solches Tool verfügbar ist, soll Codex dieselbe ausführliche Frage als normale Chat-Rückfrage stellen.

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
- Lokale Agent-Verknüpfung: `assets/Ticket Monkey Agent Verknüpfung.url`

## Ticket Monkey Agent

Die Datei `assets/Ticket Monkey Agent Verknüpfung.url` öffnet per Doppelklick den ChatGPT-Agenten:

```text
https://chatgpt.com/g/g-6a5b37594a648191981307d18f951534-ticket-monkey
```

Die Verknüpfung enthält bewusst keinen lokalen `IconFile`-Pfad, damit keine benutzerspezifischen Windows-Pfade ins Repository gelangen. Das Icon liegt weiterhin unter `assets/Ticket Monkey Icon.ico` und kann lokal bei Bedarf manuell für die Verknüpfung gesetzt werden.

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

### Update bei umgelagerter Kopie ohne Submodule

Wenn dieses Repository ursprünglich in einen Zwischenordner geklont und danach als normale Dateien in den Zielordner umgelagert wurde, ist der Zielordner meistens **kein** Submodule und enthält oft keinen eigenen `.git/`-Ordner mehr. In diesem Fall reicht `git pull` im Zielordner nicht aus. Stattdessen muss der aktuelle Stand dieses Repositorys neu geklont und anschließend in den bestehenden Zielordner umgelagert/kopiert werden.

> [!CAUTION]
> **ACHTUNG: Dieser Update-Weg überschreibt alles im Zielordner.**
> Wenn dort eigene Änderungen, projektspezifische Anpassungen oder Dateien liegen, die nicht überschrieben werden dürfen, müssen diese Ausnahmen im Prompt ausdrücklich angegeben werden. Ohne solche Ausnahmen soll Codex davon ausgehen, dass der aktuelle Stand aus diesem Repository vollständig übernommen werden soll.

Der Standardprompt liegt zusätzlich direkt im Repository unter `examples/codex-update-relocated-copy-prompt.md` und kann von dort kopiert oder als Aufgabenbeschreibung verwendet werden.

```text
Aktualisiere den Codex Ticket Workflow in diesem Projekt, obwohl die bestehende Installation kein Git-Submodule ist.

Ausgangslage:
- Das Repository wurde früher über einen Zwischenordner geklont.
- Danach wurde der Inhalt in den Zielordner umgelagert/kopiert.
- Dadurch ist der Zielordner kein Submodule und möglicherweise kein eigenes Git-Repository mehr.

Ziel:
- Übernimm den aktuellen Stand aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git vollständig in den bestehenden Zielordner.
- Dafür musst du das Repository zuerst frisch in einen temporären Ordner klonen.
- Danach musst du den Inhalt des frisch geklonten Repositorys in den bestehenden Zielordner umlagern/kopieren.

Zielpfad:
.agents/skills/ticket-workflow/

ACHTUNG:
- Dieser Update-Weg darf den bestehenden Inhalt im Zielordner überschreiben.
- Eigene Änderungen werden dadurch ersetzt.
- Wenn etwas nicht überschrieben werden soll, nenne ich es ausdrücklich unter "Nicht überschreiben".
- Wenn keine Ausnahmen genannt sind, soll der aktuelle Stand aus dem Repository vollständig übernommen werden.

Nicht überschreiben:
- Keine Ausnahmen.

Vorgehen:
1. Prüfe zuerst, ob der Zielpfad existiert.
2. Klone https://github.com/Frxnklyn/Codex-Ticket-Workflow.git in einen temporären Ordner außerhalb des Zielpfads.
3. Kopiere/umlagere den Inhalt des frisch geklonten Repositorys in den Zielpfad.
4. Entferne im Zielpfad den inneren `.git/`-Ordner, damit daraus nicht versehentlich ein Submodule/Subrepo wird.
5. Lege keinen zusätzlichen Zwischenordner innerhalb des Zielpfads an.
6. Führe keinen Commit und keinen Push aus.
7. Prüfe danach `git status` im Hauptprojekt und fasse zusammen, welche Dateien geändert wurden.
```

## Projektstand

- Zuletzt aktualisiert: **2026-07-18**
- Repository: https://github.com/Frxnklyn/Codex-Ticket-Workflow
- Ticket Monkey Agent: https://chatgpt.com/g/g-6a5b37594a648191981307d18f951534-ticket-monkey
- ChatGPT-System-Prompt: [`examples/chatgpt-system-prompt.md`](examples/chatgpt-system-prompt.md)
- Zweck: Wiederverwendbares Codex-Regelwerk zum strukturierten Erstellen, Prüfen und Pflegen von Storys und Tickets.
