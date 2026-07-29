import { access, copyFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, '..', 'dist');

await copyFile(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));

const sourceCname = path.join(__dirname, '..', 'CNAME');
const distCname = path.join(distDir, 'CNAME');

try {
  await access(sourceCname, constants.R_OK);
  await copyFile(sourceCname, distCname);
  console.log('Copied CNAME to dist');
} catch {
  // No CNAME found at repo root; skip custom domain copy.
}
