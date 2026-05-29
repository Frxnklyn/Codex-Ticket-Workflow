# Question Rules

## Grundsatz: strukturierte Nutzereingaben bevorzugen

Wenn eine Entscheidung, Rückfrage, Bestätigung oder Auswahl durch den Nutzer nötig ist, muss Codex bevorzugt ein verfügbares Tool für strukturierte Nutzereingaben verwenden, sodass die Frage als Codex-Popup/Choice-Dialog erscheint.

Dies gilt insbesondere für:

- Ja/Nein-Entscheidungen
- Auswahl aus mehreren festen Optionen
- Branch-, Story-, Ticket- und Initialisierungsentscheidungen
- Rückfragen vor dem Erzeugen von Beispielinhalten
- Stop-/Weiter-Entscheidungen im Story- oder Ticket-Workflow

## Fallback ohne strukturiertes Eingabetool

Nur wenn kein Tool für strukturierte Nutzereingaben verfügbar ist, stellt Codex die Frage als normale Chat-Rückfrage.

## Standardoptionen für allgemeine Ja/Nein-Entscheidungen

Wenn eine allgemeine Ja/Nein-Entscheidung nötig ist und keine spezielleren Optionen vorgegeben sind, nutze exakt diese 4 Optionen:

1. Ja
2. Nein
3. Ja, nicht mehr fragen
4. Nein, nicht mehr fragen

Auch diese 4 Optionen sollen über das Tool für strukturierte Nutzereingaben abgefragt werden, sofern ein solches Tool verfügbar ist.

## Spezifische Optionen haben Vorrang

Wenn eine Regel, ein Initialisierungspunkt oder ein Prompt konkrete Optionen vorgibt, haben diese Optionen Vorrang vor den allgemeinen 4 Standardoptionen. Auch dann gilt: strukturierte Nutzereingabe per Codex-Popup bevorzugen, Chat-Rückfrage nur als Fallback.
