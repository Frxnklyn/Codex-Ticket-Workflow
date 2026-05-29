import { ROOT, fs, path, nextId, slugify, writeIfMissing } from './_shared.mjs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) { console.error('Usage: node create-story.mjs "Story title"'); process.exit(1); }

const baseDir = path.join(ROOT, '.project-work', 'storys');
const id = await nextId(baseDir, 'story');
const slug = slugify(title);
const dir = path.join(baseDir, `${id}-${slug}`);
const today = new Date().toISOString().slice(0, 10);

await fs.mkdir(path.join(dir, 'tickets'), { recursive: true });

const story = `---
type: story
id: ${id}
title: ${title}
status: backlog
priority: medium
created: ${today}
updated: ${today}
tools: []
---

# Story: ${title}

## Ziel

...

## Kontext

...

## Anforderungen

- ...

## Tickets

Noch keine Tickets angelegt.

## Akzeptanzkriterien

- [ ] ...

## Hinweise für Codex

...
`;

const status = `# Status: ${title}

## Aktueller Stand

- Status: backlog
- Zuletzt aktualisiert: ${today}

## Offene Punkte

- ...

## Blocker

Keine bekannt.
`;

const notes = `# Notizen: ${title}

Noch keine Notizen.
`;

const createdStory = await writeIfMissing(path.join(dir, 'STORY.story.md'), story);
await writeIfMissing(path.join(dir, 'STATUS.md'), status);
await writeIfMissing(path.join(dir, 'NOTES.md'), notes);

console.log(createdStory ? `Created ${dir}` : `Skipped existing story files in ${dir}`);
