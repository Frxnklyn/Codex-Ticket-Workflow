import { fs, ROOT, path, ensureDir } from './_shared.mjs';

const [from, to] = process.argv.slice(2);
if (!from || !to) { console.error('Usage: node move-ticket.mjs <source-file> <backlog|active|done>'); process.exit(1); }

const targetDir = path.join(ROOT, 'docs', 'tickets', to);
await ensureDir(targetDir);
const dest = path.join(targetDir, path.basename(from));
await fs.rename(path.resolve(from), dest);
console.log(`Moved to ${dest}`);
