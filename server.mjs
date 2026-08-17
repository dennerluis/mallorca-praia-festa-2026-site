import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = new URL('.', import.meta.url).pathname;
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/manifest+json', '.jpg': 'image/jpeg', '.png': 'image/png' };

createServer(async (req, res) => {
  const requested = req.url?.split('?')[0] || '/';
  const file = normalize(join(root, requested === '/' ? 'index.html' : requested));
  if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
  try { const body = await readFile(file); res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' }); res.end(body); }
  catch { res.writeHead(404); res.end('Not found'); }
}).listen(4174, () => console.log('Mallorca site ready on port 4174'));
