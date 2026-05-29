import { ROOT, fs, path, slugify, writeIfMissing } from './_shared.mjs';

const args = process.argv.slice(2);
const storyIndex = args.indexOf('--story');
let storySlug = '';
if (storyIndex !== -1) {
  storySlug = args[storyIndex + 1] || '';
  args.splice(storyIndex, 2);
}

const title = args.join(' ').trim();
if (!title) { console.error('Usage: node create-ticket.mjs [--story story-001-name] "Ticket title"'); process.exit(1); }

let dir;
let story = 'none';
if (storySlug) {
  const storyDir = path.join(ROOT, '.project-work', 'storys', storySlug);
  dir = path.join(storyDir, 'tickets');
  story = storySlug.match(/^(story-\d+)/)?.[1] || storySlug;
} else {
  dir = path.join(ROOT, '.project-work', 'tickets');
}

await fs.mkdir(dir, { recursive: true });
const items = await fs.readdir(dir).catch(() => []);
let max = 0;
for (const item of items) {
  const match = item.match(/^(\d{3,})-/);
  if (match) max = Math.max(max, Number(match[1]));
}
const number = String(max + 1).padStart(3, '0');
const id = `ticket-${number}`;
const slug = slugify(title);
const today = new Date().toISOString().slice(0, 10);
const file = path.join(dir, `${number}-${slug}.ticket.md`);

const content = `---
type: ticket
id: ${id}
story: ${story}
title: ${title}
status: backlog
priority: medium
area: unknown
tools: []
created: ${today}
updated: ${today}
---

# Ticket ${number}: ${title}

## Aufgabe

...

## Kontext

...

## Anforderungen

- ...

## Akzeptanzkriterien

- [ ] ...

## Nicht-Ziele

- ...

## Betroffene Bereiche

- ...

## Hinweise für Codex

...

## Arbeitsnotizen

Noch keine Bearbeitung erfolgt.
`;

const created = await writeIfMissing(file, content);
console.log(created ? `Created ${file}` : `Skipped (exists): ${file}`);
