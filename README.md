# Codex Ticket Workflow

Dieses Repository ist **selbst ein Codex Skill**.

## Installation

Klonen Sie dieses Repository direkt in Ihr Zielprojekt unter `.agents/skills/ticket-workflow/`.

```bash
mkdir -p .agents/skills
git clone https://github.com/Frxnklyn/Codex-Ticket-Workflow.git .agents/skills/ticket-workflow
```

## Wichtige Hinweise

1. Dieses Repo ist der Skill selbst (kein zusätzlicher Wrapper-Ordner).
2. Es ist **kein npm package**.
3. Es braucht **keine extra Installation**.
4. Der Skill wird über `SKILL.md` erkannt.
5. Die `README.md` ist nur Doku und **nicht** die operative Skill-Regeldatei.
6. Die operative Logik liegt in `SKILL.md` sowie in `references/`.

## Wichtige Regeln für **diesen** Skill

Die folgenden Regeln sind ausschließlich auf diesen Skill `ticket-workflow` bezogen:

1. **README-Nutzung durch Codex**
   - Codex soll `README.md` nicht automatisch lesen/auswerten.
   - Ausnahme nur für:
     - Installation dieses Skills
     - Update dieses Skills
2. **Update-Regeln**
   - Direkter Weg:
     - `git pull`
   - Standardisierter Codex-Prompt:
     - `Bitte aktualisiere dieses Tool/Skill auf den neuesten Stand (git pull), prüfe auf Konflikte und gib mir danach eine kurze Zusammenfassung der Änderungen.`

## Update (für Nutzer)

### Option A: Manuell aktualisieren

```bash
git pull
```

### Option B: Codex mit Standardprompt aktualisieren lassen

Nutze diesen Prompt:

```text
Bitte aktualisiere dieses Tool/Skill auf den neuesten Stand.
Führe dafür git pull im Repository aus, prüfe auf Konflikte/Fehler
und gib mir danach eine kurze Zusammenfassung der Änderungen.
```

Zusätzlich liegt ein fertiger Prompt hier:
- `examples/codex-update-prompt.md`

Optional gibt es ein kleines Script für den Update-Flow:
- `node scripts/update-skill.mjs`

## Repository-Struktur

```text
Codex-Ticket-Workflow/
  SKILL.md
  README.md
  .gitignore

  references/
  scripts/
  examples/
```
