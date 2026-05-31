# Initialisierung des ticket-workflow Skills

Diese Datei ist nur fuer die einmalige Initialisierung nach der Installation gedacht. Im normalen Story-/Ticket-Workflow ist sie irrelevant.

## Pflicht vor Ausfuehrung

1. Zuerst `SKILL.md` lesen.
2. Danach `references/target-structure.md` lesen.
3. Danach diese Initialisierungspunkte von oben nach unten abarbeiten.
4. Vor fachlichen Beispielinhalten nachfragen, sofern der Prompt Rueckfragen nicht ausdruecklich verbietet.
5. Keine vorhandenen Dateien oder Ordner ungefragt ueberschreiben.

## Aktuelle Ticketablage

- Story-bezogene Tickets liegen immer unter `.project-work/storys/<story>/tickets/`.
- Story-lose Einzeltickets liegen immer unter `.project-work/tickets/`.
- Story-Ticketlisten verlinken Story-Tickets mit `tickets/<datei>.ticket.md`.

## Initialisierungspunkte

### 1. Ordnerstruktur einrichten

**Kurzname:** `Ordnerstruktur einrichten`

**Ziel:** Die minimale Arbeitsstruktur fuer den Story-/Ticket-Workflow existiert im Zielprojekt.

**Referenz:** `references/target-structure.md`, Abschnitt "Minimalstruktur nach Installation".

**Aktion:**

- Pruefe, ob die dort genannte Minimalstruktur bereits existiert.
- Falls nicht vorhanden, lege nur diese Minimalstruktur an.
- Erzeuge optionale Dateien wie `RULE.md` erst, wenn sie ausdruecklich benoetigt werden.

**Ergebnis:**

- Die Minimalstruktur ist vorhanden.
- Es wurden keine fachlichen Beispielinhalte erzeugt.

### 2. Beispielstory anlegen

**Kurzname:** `Beispielstory anlegen`

**Ziel:** Eine erste, klar als Beispiel markierte Story zeigt projektbezogen, wie der Workflow im aktuellen Zielprojekt genutzt wird.

**Voraussetzung:** Punkt 1 ist erledigt oder war bereits vorhanden.

**Aktion:**

- Frage vor dem Anlegen, ob eine Beispielstory erstellt werden soll.
- Lege die Beispielstory unter `.project-work/storys/story-XXX-kurzer-name/` an.
- Nutze `templates/STORY.story.md`, `templates/STATUS.md` und `templates/NOTES.md` als Grundlage.
- Lege den Story-internen Ordner `tickets/` erst an, wenn fuer diese Story mindestens ein Ticket angelegt wird.
- Ueberschreibe keine vorhandene Story.

**Ergebnis:**

- Eine projektbezogene Beispielstory existiert oder wurde bewusst ignoriert.
- Die Story verweist in ihrer Ticketuebersicht nur auf Tickets, die tatsaechlich angelegt wurden.

### 3. BeispielTicket anlegen

**Kurzname:** `BeispielTicket anlegen`

**Ziel:** Ein erstes Beispiel-Ticket zeigt, wie eine kleine konkrete Aufgabe formuliert wird.

**Voraussetzung:** Punkt 1 ist erledigt oder war bereits vorhanden. Wenn das Ticket einer Beispielstory zugeordnet werden soll, muss Punkt 2 erledigt, bereits vorhanden oder ausdruecklich gewuenscht sein.

**Aktion:**

- Frage vor dem Anlegen, ob ein Beispielticket erstellt werden soll.
- Frage, ob das Ticket einer Beispielstory zugeordnet oder story-los sein soll.
- Bei Zuordnung zu einer Story: Lege das Ticket unter `.project-work/storys/<story>/tickets/` an, setze `story: story-XXX` und aktualisiere die Ticketuebersicht der Story mit `tickets/<datei>.ticket.md`.
- Bei story-losem Ticket: Lege das Ticket unter `.project-work/tickets/` an und setze `story: none`.
- Verwende die naechste freie Ticketnummer im jeweiligen Ticketordner.
- Nutze `templates/TICKET.ticket.md` als Grundlage.
- Beginne nach dem Anlegen des Beispiel-Tickets nicht mit dessen Umsetzung.
- Ueberschreibe kein vorhandenes Ticket.

**Ergebnis:**

- Ein projektbezogenes Beispiel-Ticket existiert oder wurde bewusst ignoriert/uebersprungen.
- Eine Beispielstory referenziert das Ticket nur, wenn es tatsaechlich dieser Story zugeordnet wurde.

### 4. Bonus: Ticket-Repo als Subrepo anbinden

**Kurzname:** `Ticket-Repo als Subrepo anbinden`

**Ziel:** Wenn der Installations- oder Re-Initialisierungsprompt ausdruecklich einen Repository-Link fuer story-lose Tickets enthaelt, kann `.project-work/tickets/` als separat versionierter Bereich vorbereitet werden.

**Wichtig:**

- Dieser Bonus betrifft nur story-lose Tickets unter `.project-work/tickets/`.
- Story-bezogene Tickets bleiben im jeweiligen Story-Ordner unter `.project-work/storys/<story>/tickets/`.
- Nutze den Link nur, wenn der Prompt ihn eindeutig als Ticket-Repo fuer `.project-work/tickets/` beschreibt.
- Verwende niemals automatisch den Link des `ticket-workflow` Skills selbst als Ticket-Repo.

**Aktion:**

- Fuehre diesen Bonus nur mit ausdruecklicher Zustimmung aus.
- Wenn `.project-work/tickets/` bereits ein Git-Repository oder Submodule ist, pruefe Remote und HEAD und dokumentiere das Ergebnis.
- Wenn `.project-work/tickets/` existiert und Dateien enthaelt, ueberschreibe, verschiebe oder loesche nichts ungefragt.
- Wenn `.project-work/tickets/` leer ist oder noch nicht existiert, kann das Ticket-Repo dort angebunden werden.

**Ergebnis:**

- Der story-lose Ticket-Bereich ist als separates Ticket-Subrepo angebunden oder der Bonus wurde bewusst ignoriert, uebersprungen oder blockiert.
