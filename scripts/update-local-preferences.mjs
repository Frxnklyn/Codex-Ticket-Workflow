import { fs, ROOT, path } from './_shared.mjs';

const [key, value] = process.argv.slice(2);
const allowed = new Set(['alwaysCreateBranch', 'alwaysStopBeforeNextTicket', 'alwaysStopBeforeNextStoryTicket']);
if (!allowed.has(key) || !['true', 'false', 'null'].includes(value)) {
  console.error('Usage: node update-local-preferences.mjs <key> <true|false|null>');
  process.exit(1);
}

const file = path.join(ROOT, '.codex-ticket-workflow.local.json');
let current = { alwaysCreateBranch: null, alwaysStopBeforeNextTicket: null, alwaysStopBeforeNextStoryTicket: null };
try { current = JSON.parse(await fs.readFile(file, 'utf8')); } catch {}
current[key] = value === 'null' ? null : value === 'true';
await fs.writeFile(file, JSON.stringify(current, null, 2) + '\n', 'utf8');
console.log(`Updated ${key}=${String(current[key])}`);
