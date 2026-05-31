# Initialisierung des ticket-workflow Skills

Diese Datei ist **nur für die einmalige Initialisierung nach der Installation** gedacht.

## Zweck

Wenn dieser Skill in einem Zielprojekt eingerichtet wird, soll Codex die hier definierten Initialisierungspunkte der Reihe nach abarbeiten. Die vollständige Zielstruktur steht zentral in `references/target-structure.md`.

## Abarbeitungsregel für Codex

Bei der ersten Einrichtung dieses Skills im Zielprojekt:

1. Lies alle Initialisierungspunkte in dieser Datei.
2. Arbeite die Punkte von oben nach unten ab.
3. Führe jeden Punkt idempotent aus: vorhandene passende Dateien oder Ordner gelten als bereits erledigt.
4. Überschreibe keine vorhandenen Dateien oder Ordner ungefragt; wenn dafür eine Nutzerentscheidung nötig ist, nutze bevorzugt strukturierte Nutzereingaben (Codex-Popup).
5. Prüfe den Nutzerprompt auf `ignore:`-Angaben.
6. Ignoriere einen Initialisierungspunkt, wenn nach `ignore:` seine Nummer, seine Überschrift oder sein Kurzname genannt wird.
7. Mehrere zu ignorierende Punkte können kommagetrennt oder zeilenweise angegeben werden.
8. Stelle vor fachlichen Beispielinhalten Rückfragen, sofern der Prompt Rückfragen nicht ausdrücklich verbietet.
9. Formuliere jede Rückfrage ausführlich: erkläre kurz den aktuellen Initialisierungspunkt, warum die Entscheidung nötig ist, welche Dateien/Ordner betroffen sind, welche Folgen die auswählbaren Optionen haben und was Codex nach der Antwort konkret tun wird.
10. Nutze für alle Rückfragen, Bestätigungen und Auswahlentscheidungen bevorzugt ein verfügbares Tool für strukturierte Nutzereingaben, damit Codex ein Popup/Choice-Fenster anzeigt; stelle die Frage nur dann als normale Chat-Rückfrage, wenn kein solches Tool verfügbar ist.
11. Wenn Rückfragen verboten sind und ein Punkt ohne Rückfrage nicht sicher ausführbar ist, überspringe oder blockiere ihn und dokumentiere den Grund. Erfinde keine projektfachlichen Details.
12. Gib am Ende pro Punkt kurz aus, ob er erstellt, bereits vorhanden, ignoriert, übersprungen oder blockiert wurde.

Beispiel für gezieltes Ignorieren im Installationsprompt:

```text
ignore: Beispielstory anlegen, BeispielTicket anlegen
```

## Initialisierungspunkte

### 1. Ordnerstruktur einrichten

**Kurzname:** `Ordnerstruktur einrichten`

**Ziel:** Die minimale Arbeitsstruktur für den Story-/Ticket-Workflow existiert im Zielprojekt.

**Referenz:** `references/target-structure.md`, Abschnitt "Minimalstruktur nach Installation".

**Aktion:**

- Prüfe, ob die dort genannte Minimalstruktur bereits existiert.
- Falls nicht vorhanden, lege nur diese Minimalstruktur an.
- Erzeuge optionale Dateien wie `RULE.md` erst, wenn sie ausdrücklich benötigt werden.

**Ergebnis:**

- Die Minimalstruktur ist vorhanden.
- Es wurden keine fachlichen Beispielinhalte erzeugt.

### 2. Beispielstory anlegen

**Kurzname:** `Beispielstory anlegen`

**Ziel:** Eine erste, klar als Beispiel markierte Story zeigt projektbezogen, wie der Workflow im aktuellen Zielprojekt genutzt wird.

**Voraussetzung:** Punkt 1 ist erledigt oder war bereits vorhanden.

**Interaktive Abfrage:**

Wenn ein Tool für strukturierte Nutzereingaben verfügbar ist, nutze dieses Tool, um vor dem Anlegen als Codex-Popup ausführlich zu fragen:

- Erkläre, dass Codex gerade den Initialisierungspunkt `Beispielstory anlegen` ausführt.
- Erkläre, dass die Beispielstory eine klar markierte Start-/Demostory im aktiven Story-Ort erzeugen würde.
- Nenne die voraussichtlich betroffenen Dateien/Ordner, insbesondere den neuen Story-Ordner, `STORY.story.md`, `STATUS.md`, `NOTES.md` und den leeren `tickets/`-Ordner.
- Erkläre die Optionen und Folgen:
  - Ja, mit Standardwerten: Codex legt die Beispielstory mit abgeleitetem Projektnamen, nächster freier Story-ID und Standard-Story-Namen an.
  - Nein, überspringen: Codex legt keine Beispielstory an und dokumentiert den Punkt als übersprungen.
- Frage danach: Soll eine Beispielstory erstellt werden?

Wenn kein solches Tool verfügbar ist, stelle dieselbe Frage mit derselben Erklärung als normale Chat-Rückfrage.

**Standardwerte bei Zustimmung:**

- Projektname aus dem Repository-/Ordnernamen ableiten.
- Nächste freie Story-ID verwenden, normalerweise `story-001`.
- Story-Name: `story-001-<projektname>-workflow-einfuehren`.

**Aktion:**

- Ermittle einen kurzen Projektnamen aus dem Zielprojekt (z. B. Repository- oder Ordnername).
- Frage mit der oben beschriebenen interaktiven Abfrage vor dem Anlegen nach, ob eine Beispielstory erstellt werden soll.
- Wenn der Nutzer `Nein, überspringen` wählt, überspringe diesen Punkt bewusst.
- Wenn der Nutzer `Ja, mit Standardwerten` wählt, lege die Beispielstory mit den genannten Standardwerten an.
- Stelle zusätzliche Rückfragen nur, wenn die Standardwerte nicht sicher oder kollisionsfrei anwendbar sind; nutze auch dafür bevorzugt strukturierte Nutzereingaben.
- Wenn Rückfragen verboten sind und der Prompt keine ausdrückliche Zustimmung zur Beispielstory enthält, überspringe diesen Punkt statt Annahmen zu erfinden.
- Lege eine Beispielstory unter dem in `references/target-structure.md` beschriebenen aktiven Story-Ort an.
- Nutze `templates/STORY.story.md`, `templates/STATUS.md` und `templates/NOTES.md` als Grundlage.
- Markiere die Story in Titel, Ziel oder Hinweistext eindeutig als Beispiel/Startpunkt, damit Menschen sie später anpassen oder löschen können.
- Erzeuge den leeren `tickets/`-Ordner innerhalb der Story.
- Überschreibe keine vorhandene Story.

**Ergebnis:**

- Eine projektbezogene Beispielstory existiert oder wurde bewusst ignoriert.
- Die Story verweist in ihrer Ticketübersicht nur auf Tickets, die tatsächlich angelegt wurden.

### 3. BeispielTicket anlegen

**Kurzname:** `BeispielTicket anlegen`

**Ziel:** Ein erstes Beispiel-Ticket zeigt, wie eine kleine konkrete Aufgabe formuliert wird. Es darf innerhalb einer Beispielstory oder als story-loses Ticket unter `.project-work/tickets/` angelegt werden.

**Voraussetzung:** Punkt 1 ist erledigt oder war bereits vorhanden. Wenn das Ticket in einer Beispielstory liegen soll, muss Punkt 2 erledigt, bereits vorhanden oder ausdrücklich gewünscht sein.

**Aktion:**

- Frage vor dem Anlegen per strukturierter Nutzereingabe (Codex-Popup), sofern verfügbar, ob ein Beispielticket erstellt werden soll.
- Formuliere die Frage ausführlich: erkläre, dass Codex gerade den Initialisierungspunkt `BeispielTicket anlegen` ausführt, dass das Ticket eine kleine Beispielaufgabe zur Prüfung/Dokumentation der `.project-work/`-Struktur erzeugen würde und welche Datei voraussichtlich neu angelegt wird.
- Erkläre bei der Ja/Nein-Entscheidung die Folgen: Bei Zustimmung legt Codex ein Beispiel-Ticket an; bei Ablehnung wird kein Ticket erzeugt und der Punkt als übersprungen dokumentiert.
- Frage den gewünschten Ablageort per strukturierter Nutzereingabe (Codex-Popup), sofern verfügbar, ab: im `tickets/`-Ordner der Beispielstory oder als story-loses Ticket unter `.project-work/tickets/`.
- Erkläre bei der Ablageort-Frage ausführlich, was die Optionen bedeuten: innerhalb der Beispielstory wird zusätzlich die Ticketübersicht der Story aktualisiert; als story-loses Ticket bleibt das Ticket unabhängig unter `.project-work/tickets/`.
- Stelle diese Fragen nur als normale Chat-Rückfragen, wenn kein Tool für strukturierte Nutzereingaben verfügbar ist, und übernimm dann dieselben Erklärungen in die Chat-Frage.
- Wenn Rückfragen verboten sind und der Prompt keinen Ablageort vorgibt, überspringe diesen Punkt statt Annahmen zu erfinden.
- Lege das Ticket am bestätigten Ablageort an.
- Verwende die nächste freie Ticketnummer am gewählten Ablageort, normalerweise `001`.
- Verwende einen projektbezogenen Namen wie `001-workflow-struktur-pruefen.ticket.md`.
- Nutze `templates/TICKET.ticket.md` als Grundlage.
- Formuliere Aufgabe, Kontext, Anforderungen und Akzeptanzkriterien passend zum Zielprojekt: Das Ticket soll die angelegte `.project-work/`-Struktur prüfen und bei Bedarf dokumentieren.
- Aktualisiere die Ticketübersicht in `STORY.story.md` der Beispielstory nur, wenn das Ticket innerhalb dieser Story angelegt wurde.
- Überschreibe kein vorhandenes Ticket.

**Ergebnis:**

- Ein projektbezogenes Beispiel-Ticket existiert oder wurde bewusst ignoriert/übersprungen.
- Die Beispielstory referenziert das Ticket nur, wenn es tatsächlich innerhalb dieser Story angelegt wurde.

### 4. Bonus: Ticket-Repo als Subrepo anbinden

**Kurzname:** `Ticket-Repo als Subrepo anbinden`

**Ziel:** Wenn der Installations- oder Re-Initialisierungsprompt ausdrücklich einen Repository-Link für Tickets enthält, wird der Ticket-Bereich als separat versioniertes eingebettetes Repository/Subrepo vorbereitet. Dadurch können Tickets unabhängig vom Hauptprojekt versioniert, geteilt oder später bewusst als Submodule registriert werden.

**Voraussetzung:** Punkt 1 ist erledigt oder war bereits vorhanden. Der Prompt enthält einen eindeutigen Git-Repository-Link für das Ticket-Repo und benennt erkennbar, dass dieser Link für Tickets bzw. den Ticket-Bereich gedacht ist.

**Erkennung im Prompt:**

- Suche nach einem Git-Repository-Link, z. B. `https://...git`, `git@...:owner/repo.git` oder einem vergleichbaren Git-Remote.
- Nutze den Link für diesen Bonus nur, wenn der Prompt ihn ausdrücklich als Ticket-Repo, Ticket-Subrepo, `.project-work/tickets/`-Repo oder ähnlich beschreibt.
- Wenn mehrere Repository-Links vorkommen oder der Zweck des Links nicht eindeutig ist, frage strukturiert nach oder blockiere diesen Bonus, falls Rückfragen verboten sind.
- Verwende niemals automatisch den Link des `ticket-workflow` Skills selbst als Ticket-Repo.

**Interaktive Abfrage:**

Wenn ein Tool für strukturierte Nutzereingaben verfügbar ist, nutze dieses Tool, um vor dem Anlegen/Anbinden als Codex-Popup ausführlich zu fragen:

- Erkläre, dass Codex gerade den Bonus `Ticket-Repo als Subrepo anbinden` ausführt.
- Erkläre, dass der im Prompt gefundene Ticket-Repository-Link genutzt werden kann, um `.project-work/tickets/` als eigenes eingebettetes Git-Repository/Subrepo anzulegen.
- Nenne die voraussichtlich betroffenen Dateien/Ordner, insbesondere `.project-work/tickets/`, optional `.gitmodules` bei ausdrücklich gewünschtem Submodule-Modus und den Git-Status des Hauptprojekts.
- Erkläre die Optionen und Folgen:
  - Ja, als loses Subrepo: Codex klont oder verbindet das Ticket-Repo unter `.project-work/tickets/`, lässt dessen inneres `.git/` erhalten und nimmt die Ticket-Dateien nicht als normale Dateien in den Git-Index des Hauptprojekts auf.
  - Ja, als echtes Submodule: Codex registriert das Ticket-Repo unter `.project-work/tickets/` als Git-Submodule, wodurch `.gitmodules` und ein Gitlink im Hauptrepo entstehen können. Diese Option darf nur genutzt werden, wenn der Prompt Submodule ausdrücklich erlaubt oder die Rückfrage bestätigt wird.
  - Nein, überspringen: Codex legt kein Ticket-Subrepo an und dokumentiert den Bonus als übersprungen.
- Frage danach: Soll der Ticket-Bereich aus dem gefundenen Repo-Link als Subrepo angebunden werden?

Wenn kein solches Tool verfügbar ist, stelle dieselbe Frage mit derselben Erklärung als normale Chat-Rückfrage.

**Aktion:**

- Führe diesen Bonus nur aus, wenn ein eindeutiger Ticket-Repo-Link vorhanden ist und der Nutzer bzw. Prompt das Anbinden bestätigt.
- Prüfe zuerst, ob `.project-work/tickets/` bereits ein Git-Repository oder Submodule ist. Wenn ja, prüfe Remote und HEAD und dokumentiere das Ergebnis, statt ungefragt neu zu klonen.
- Wenn `.project-work/tickets/` existiert und Dateien enthält, überschreibe, verschiebe oder lösche nichts ungefragt. Frage nach, ob und wie zusammengeführt werden soll; wenn Rückfragen verboten sind, blockiere diesen Bonus.
- Wenn `.project-work/tickets/` leer ist oder noch nicht existiert, lege das Ticket-Repo am Pfad `.project-work/tickets/` an.
- Prüfe nach einem erfolgreichen Klonen oder Anbinden, ob das Ticket-Repo bereits eigene Daten enthält (also relevante Dateien/Ordner außerhalb von `.git/`). Nur in diesem Fall gelten fachliche Beispielinhalte aus der Initialisierung, insbesondere Beispielstorys oder Beispiel-Tickets für den Ticket-Bereich, als zu ignorieren bzw. nicht zusätzlich anzulegen; bei einem leeren Ticket-Repo bleiben die Beispielpunkte normal nach Nutzerentscheidung ausführbar.
- Beim losen Subrepo bleibt der innere `.git/`-Ordner erhalten. Der Ordner wird nicht automatisch in `.gitignore`, `.git/info/exclude` oder andere Ignore-/Exclude-Dateien eingetragen; vorhandene projektbewusste Regeln bleiben erhalten, außer der Nutzer verlangt eine konkrete Änderung.
- Beim echten Submodule-Modus dürfen `.gitmodules` und der Gitlink im Hauptrepo nur erstellt/aktualisiert werden, wenn diese Option ausdrücklich bestätigt wurde.
- Führe keinen Commit und keinen Push aus.
- Dokumentiere am Ende Remote, Pfad, Modus und ob Änderungen im Hauptrepo commit-ready sind.

**Ergebnis:**

- Der Ticket-Bereich ist als separates Ticket-Subrepo angebunden oder der Bonus wurde bewusst ignoriert, übersprungen oder blockiert.
- Bereits vorhandene Tickets oder Projektdateien wurden nicht ungefragt überschrieben.

## Danach ignorieren

Nach der Initialisierung ist `Init.md` für den normalen Story-/Ticket-Workflow irrelevant. Codex soll diese Datei bei späterer Story- oder Ticket-Bearbeitung nicht lesen, außer der Nutzer fordert ausdrücklich eine erneute Initialisierung oder Installation an.
