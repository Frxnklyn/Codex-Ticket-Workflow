import { ROOT, path, nextId, slugify, writeIfMissing } from './_shared.mjs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) { console.error('Usage: node create-story.mjs "Story title"'); process.exit(1); }

const dir = path.join(ROOT, 'docs', 'stories', 'backlog');
const id = await nextId(dir, 'STORY');
const slug = slugify(title);
const file = path.join(dir, `${id}-${slug}.md`);

const content = `# ${id}: ${title}\n\n- **ID:** ${id}\n- **Title:** ${title}\n- **Status:** backlog\n\n## Goal\n\n## Context\n\n## Scope\n\n## Out of scope\n\n## Child tickets\n\n## Ticket order\n\n## Acceptance criteria\n- [ ] ...\n\n## Notes\n`;

const created = await writeIfMissing(file, content);
console.log(created ? `Created ${file}` : `Skipped (exists): ${file}`);
