# Initialisierung des ticket-workflow Skills

Diese Datei ist **nur für die einmalige Initialisierung nach der Installation** gedacht.

## Zweck

Wenn dieser Skill in einem Zielprojekt eingerichtet wird, soll Codex die hier definierten Initialisierungspunkte der Reihe nach abarbeiten. Die vollständige Zielstruktur steht zentral in `references/target-structure.md`.

## Abarbeitungsregel für Codex

Bei der ersten Einrichtung dieses Skills im Zielprojekt:

1. Lies alle Initialisierungspunkte in dieser Datei.
2. Arbeite die Punkte von oben nach unten ab.
3. Führe jeden Punkt idempotent aus: vorhandene passende Dateien oder Ordner gelten als bereits erledigt.
4. Überschreibe keine vorhandenen Dateien oder Ordner ungefragt.
5. Prüfe den Nutzerprompt auf `ignore:`-Angaben.
6. Ignoriere einen Initialisierungspunkt, wenn nach `ignore:` seine Nummer, seine Überschrift oder sein Kurzname genannt wird.
7. Mehrere zu ignorierende Punkte können kommagetrennt oder zeilenweise angegeben werden.
8. Stelle vor fachlichen Beispielinhalten Rückfragen, sofern der Prompt Rückfragen nicht ausdrücklich verbietet.
9. Wenn Rückfragen verboten sind und ein Punkt ohne Rückfrage nicht sicher ausführbar ist, überspringe oder blockiere ihn und dokumentiere den Grund. Erfinde keine projektfachlichen Details.
10. Gib am Ende pro Punkt kurz aus, ob er erstellt, bereits vorhanden, ignoriert, übersprungen oder blockiert wurde.

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

**Aktion:**

- Ermittle einen kurzen Projektnamen aus dem Zielprojekt (z. B. Repository- oder Ordnername).
- Frage vor dem Anlegen nach, ob eine Beispielstory erstellt werden soll.
- Frage, falls nötig, nach Projektbezug, gewünschtem Story-Namen und ob Standardwerte verwendet werden dürfen.
- Wenn Rückfragen verboten sind und der Prompt keine ausdrückliche Zustimmung zur Beispielstory enthält, überspringe diesen Punkt statt Annahmen zu erfinden.
- Lege eine Beispielstory unter dem in `references/target-structure.md` beschriebenen aktiven Story-Ort an.
- Verwende die nächste freie Story-ID, normalerweise `story-001`.
- Verwende einen projektbezogenen Namen wie `story-001-<projektname>-workflow-einfuehren`.
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

- Frage vor dem Anlegen nach, ob ein Beispielticket erstellt werden soll.
- Frage nach dem gewünschten Ablageort: im `tickets/`-Ordner der Beispielstory oder als story-loses Ticket unter `.project-work/tickets/`.
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

## Danach ignorieren

Nach der Initialisierung ist `Init.md` für den normalen Story-/Ticket-Workflow irrelevant. Codex soll diese Datei bei späterer Story- oder Ticket-Bearbeitung nicht lesen, außer der Nutzer fordert ausdrücklich eine erneute Initialisierung oder Installation an.
