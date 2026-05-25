# ticket-workflow Skill

## Wann dieser Skill verwendet werden soll

Verwenden, wenn der Nutzer z. B. sagt:
- Ticket, Story, Backlog
- Acceptance Criteria, Done Notes
- Story in Tickets zerlegen
- einzelnes Ticket bearbeiten
- ganze Story abarbeiten
- Tickets nacheinander bearbeiten

## Wann nicht

Nicht verwenden für:
- kurze allgemeine Codefragen
- allgemeine Erklärungen ohne Ticketbezug
- einfache Refactorings ohne Ticketkontext
- Architekturfragen ohne Ticket-/Storybezug

## Kernregeln

1. Erst Datei lesen (Ticket/Story), dann handeln.
2. Depends on / Required before start strikt prüfen.
3. Bei Blockern: nachfragen, nicht still weitermachen.
4. Scope/Out-of-scope respektieren.
5. Acceptance Criteria vor Abschluss prüfen.
6. Done Notes ergänzen.
7. Nicht automatisch mehrere Tickets durchlaufen; im Zweifel stoppen.

## Story-Modus

Wenn "Bearbeite diese Story":
1. Story lesen.
2. Child-Tickets sammeln.
3. Reihenfolge prüfen.
4. Beim ersten offenen Ticket starten.
5. Vor Start Branch-Frage (außer Präferenz gesetzt).
6. Nach Ticket AC prüfen.
7. Done Notes ergänzen.
8. Nach done verschieben oder Empfehlung geben.
9. Vor nächstem Ticket stoppen/fragen (Präferenz beachten).
10. Niemals spätere Tickets bearbeiten, wenn required Vorgänger offen sind.

## Ticket-Modus

Wenn "Bearbeite dieses Ticket":
1. Ticket lesen.
2. Parent Story lesen (falls angegeben).
3. Dependencies prüfen.
4. Fehlen Voraussetzungen: nachfragen.
5. Vor Start Branch-Frage (außer Präferenz).
6. Nur Ticket-Scope umsetzen.
7. AC prüfen.
8. Done Notes ergänzen.
9. Vor nächstem Ticket stoppen/fragen.

## Fragesystem (genau vier Optionen)

1. Ja
2. Nein
3. Ja, nicht mehr fragen
4. Nein, nicht mehr fragen

Persistenz:
- "Ja, nicht mehr fragen" => `true`
- "Nein, nicht mehr fragen" => `false`
- "Ja"/"Nein" => keine dauerhafte Speicherung

## Branch-Regeln

Vor Story-/Ticket-Start prüfen:
- `alwaysCreateBranch === true` => Branch nutzen
- `alwaysCreateBranch === false` => kein Branch
- `null` => fragen

Namensformat:
- `ticket/TICKET-001-short-title`
- `story/STORY-001-short-title`

Wenn Branch-Erstellung technisch nicht möglich: transparent informieren, nicht stillschweigend fortfahren.

## Referenzen

- `references/workflow-rules.md`
- `references/story-rules.md`
- `references/ticket-rules.md`
- `references/question-rules.md`
- `references/branch-rules.md`
- `references/stop-rules.md`

## README-Regel (wichtig)

- Codex soll **README-Dateien nicht automatisch lesen oder auswerten**.
- Ausnahme: README darf nur genutzt werden für:
  1. **Installation genau dieses Tools/Skills**
  2. **Update dieses Tools/Skills**
- Für alle anderen Aufgaben sind stattdessen Ticket-, Story- und Referenzdateien dieses Skills maßgeblich.

## Update-Regel

Wenn der Nutzer ein Update möchte, sind folgende Wege erlaubt:

1. **Direkt per Git aktualisieren**
   - Standardbefehl:
     - `git pull`
   - Optional danach kurz bestätigen, was aktualisiert wurde (z. B. neuer Commit-Stand).

2. **Codex um Update bitten (standardisierter Prompt)**
   - Verwende dafür diesen Prompt:
   - `Bitte aktualisiere dieses Tool/Skill auf den neuesten Stand (git pull), prüfe auf Konflikte und gib mir danach eine kurze Zusammenfassung der Änderungen.`
