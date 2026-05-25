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
