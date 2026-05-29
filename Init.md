# Initialisierung des ticket-workflow Skills

Diese Datei ist **nur für die einmalige Initialisierung nach der Installation** gedacht.

## Zweck

Wenn dieser Skill in einem Zielprojekt eingerichtet wird, soll Codex direkt die grundlegende Arbeitsstruktur anlegen. Die vollständige Zielstruktur steht zentral in `references/target-structure.md`.

## Einmalig anzulegende Ordnerstruktur

Lege bei der Initialisierung nur die Minimalstruktur aus `references/target-structure.md` an. Optionale Dateien wie `RULE.md` werden erst erzeugt, wenn sie ausdrücklich benötigt werden.

## Initialisierungsregel für Codex

Bei der ersten Einrichtung dieses Skills im Zielprojekt:

1. Prüfe, ob die in `references/target-structure.md` genannte Minimalstruktur bereits existiert.
2. Falls nicht vorhanden, lege nur diese Minimalstruktur an.
3. Überschreibe keine vorhandenen Dateien oder Ordner ungefragt.
4. Lege noch keine Beispiel-Story und kein Beispiel-Ticket an, außer der Nutzer fordert es ausdrücklich an.
5. Gib am Ende kurz aus, welche Ordner erstellt oder bereits gefunden wurden.

## Danach ignorieren

Nach der Initialisierung ist `Init.md` für den normalen Story-/Ticket-Workflow irrelevant. Codex soll diese Datei bei späterer Story- oder Ticket-Bearbeitung nicht lesen, außer der Nutzer fordert ausdrücklich eine erneute Initialisierung oder Installation an.
