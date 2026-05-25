import { fs, ROOT, path } from './_shared.mjs';

const file = path.join(ROOT, '.codex-ticket-workflow.local.json');
try {
  const raw = await fs.readFile(file, 'utf8');
  console.log(raw);
} catch {
  console.log(JSON.stringify({ alwaysCreateBranch: null, alwaysStopBeforeNextTicket: null, alwaysStopBeforeNextStoryTicket: null }, null, 2));
}
