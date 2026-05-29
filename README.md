# Codex Ticket Workflow

Dieses Repository ist ein wiederverwendbares **Codex-Regelwerk (Skill)** für einen einfachen Story-/Ticket-Workflow.

## Kernziel

Ein einheitliches, schnell beschreibbares Arbeitsmodell, das Codex zuverlässig lesen und bearbeiten kann. Die verbindliche Zielstruktur steht zentral in `references/target-structure.md`; andere Dokumente verweisen darauf, statt die Struktur zu duplizieren.

## Installation

```bash
mkdir -p .agents/skills
git clone https://github.com/Frxnklyn/Codex-Ticket-Workflow.git .agents/skills/ticket-workflow
```

### Installationsprompt für Codex

```text
Installiere den Codex Ticket Workflow aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git in dieses aktuelle Projekt.

Nutze `.agents/skills/ticket-workflow/` als Zielordner.
Wenn du mit der Installation fertig bist: Bitte schaue in `.agents/skills/ticket-workflow/Init.md` und führe nur die dort beschriebene einmalige Initialisierung aus.
Überschreibe keine vorhandenen Dateien ungefragt.
Gib am Ende eine kurze Zusammenfassung aus, welche Dateien und Ordner erstellt, geändert oder übersprungen wurden.
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
