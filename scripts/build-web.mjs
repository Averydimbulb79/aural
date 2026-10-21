import { mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
await mkdir(join(root,'dist'),{recursive:true});
await copyFile(join(root,'index.html'),join(root,'dist','index.html'));
console.log('Aural studio web bundle copied to dist/index.html');
