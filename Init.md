# Initialisierung des ticket-workflow Skills

Diese Datei ist **nur für die einmalige Initialisierung nach der Installation** gedacht.

## Zweck

Wenn dieser Skill in einem Zielprojekt eingerichtet wird, soll Codex direkt die grundlegende Arbeitsstruktur anlegen.

## Einmalig anzulegende Ordnerstruktur

```txt
.project-work/
  storys/
  archive/
```

Optional kann zusätzlich eine globale Regeldatei vorbereitet werden:

```txt
.project-work/RULE.md
```

## Initialisierungsregel für Codex

Bei der ersten Einrichtung dieses Skills im Zielprojekt:

1. Prüfe, ob `.project-work/` bereits existiert.
2. Falls nicht vorhanden, lege `.project-work/`, `.project-work/storys/` und `.project-work/archive/` an.
3. Überschreibe keine vorhandenen Dateien oder Ordner ungefragt.
4. Lege noch keine Beispiel-Story und kein Beispiel-Ticket an, außer der Nutzer fordert es ausdrücklich an.
5. Gib am Ende kurz aus, welche Ordner erstellt oder bereits gefunden wurden.

## Danach ignorieren

Nach der Initialisierung ist `Init.md` für den normalen Story-/Ticket-Workflow irrelevant. Codex soll diese Datei bei späterer Story- oder Ticket-Bearbeitung nicht lesen, außer der Nutzer fordert ausdrücklich eine erneute Initialisierung oder Installation an.
