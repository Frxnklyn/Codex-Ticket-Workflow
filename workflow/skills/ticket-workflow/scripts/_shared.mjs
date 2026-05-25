import fs from 'node:fs/promises';
import path from 'node:path';

export const ROOT = process.cwd();

export function slugify(input) {
  return input.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 48) || 'untitled';
}

export async function ensureDir(dir) { await fs.mkdir(dir, { recursive: true }); }

export async function nextId(dir, prefix) {
  await ensureDir(dir);
  const items = await fs.readdir(dir).catch(() => []);
  const re = new RegExp(`^${prefix}-(\\d{3,})`, 'i');
  let max = 0;
  for (const n of items) {
    const m = n.match(re);
    if (m) max = Math.max(max, Number(m[1]));
  }
  return `${prefix}-${String(max + 1).padStart(3, '0')}`;
}

export async function writeIfMissing(file, content) {
  try { await fs.access(file); return false; } catch {}
  await fs.writeFile(file, content, 'utf8');
  return true;
}

export { fs, path };
