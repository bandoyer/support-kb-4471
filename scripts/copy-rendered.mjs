// Copies the prerendered new page to rendered/, the copy the desk reads in the repo.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
mkdirSync('rendered', { recursive: true });
const html = readFileSync('build/kb/incidents/4471/causes.html', 'utf8');
// The page is static, so the rendered copy drops the client scripts and stands alone.
const stripped = html
  .replace(/<link[^>]+rel="modulepreload"[^>]*>\s*/g, '')
  .replace(/<script\b[\s\S]*?<\/script>\s*/g, '');
writeFileSync('rendered/kb-incidents-4471-causes.html', stripped);
