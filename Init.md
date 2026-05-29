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
5. Lege keine Beispiel-Story und kein Beispiel-Ticket an, außer der Nutzer fordert es ausdrücklich an.
6. Gib am Ende pro Punkt kurz aus, ob er erstellt, bereits vorhanden, übersprungen oder blockiert wurde.

## Initialisierungspunkte

### 1. Ordnerstruktur einrichten

**Ziel:** Die minimale Arbeitsstruktur für den Story-/Ticket-Workflow existiert im Zielprojekt.

**Referenz:** `references/target-structure.md`, Abschnitt "Minimalstruktur nach Installation".

**Aktion:**

- Prüfe, ob die dort genannte Minimalstruktur bereits existiert.
- Falls nicht vorhanden, lege nur diese Minimalstruktur an.
- Erzeuge optionale Dateien wie `RULE.md` erst, wenn sie ausdrücklich benötigt werden.

**Ergebnis:**

- Die Minimalstruktur ist vorhanden.
- Keine Story, kein Ticket und keine Beispielinhalte wurden automatisch erzeugt.

## Danach ignorieren

Nach der Initialisierung ist `Init.md` für den normalen Story-/Ticket-Workflow irrelevant. Codex soll diese Datei bei späterer Story- oder Ticket-Bearbeitung nicht lesen, außer der Nutzer fordert ausdrücklich eine erneute Initialisierung oder Installation an.
