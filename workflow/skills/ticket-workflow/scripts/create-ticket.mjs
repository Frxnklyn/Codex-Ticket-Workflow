import { ROOT, path, nextId, slugify, writeIfMissing } from './_shared.mjs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) { console.error('Usage: node create-ticket.mjs "Ticket title"'); process.exit(1); }

const dir = path.join(ROOT, 'docs', 'tickets', 'backlog');
const id = await nextId(dir, 'TICKET');
const slug = slugify(title);
const file = path.join(dir, `${id}-${slug}.md`);

const content = `# ${id}: ${title}\n\n- **ID:** ${id}\n- **Title:** ${title}\n- **Status:** backlog\n- **Parent story:**\n- **Depends on:** -\n- **Required before start:** -\n\n## Goal\n\n## Context\n\n## Scope\n\n## Out of scope\n\n## Files likely involved\n-\n\n## Acceptance criteria\n- [ ] ...\n\n## Implementation notes\n\n## Done notes\n\n## Review notes\n`;

const created = await writeIfMissing(file, content);
console.log(created ? `Created ${file}` : `Skipped (exists): ${file}`);
