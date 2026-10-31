import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const args = ['run', ...(process.argv.includes('--debug') ? ['--debug'] : []), resolve(root, 'samples/transactions')];
const application = spawn(process.env.NORM_EXECUTABLE ?? 'norm', args, { cwd: root, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
let diagnostics = '';
application.stdout.on('data', chunk => { diagnostics += chunk; });
const ready = new Promise((resolveReady, reject) => {
  const timer = setTimeout(() => reject(new Error(diagnostics)), 120_000);
  application.stderr.on('data', chunk => {
    diagnostics += chunk;
    const match = diagnostics.match(/Micronaut: (http:\/\/127\.0\.0\.1:\d+)/);
    if (match) { clearTimeout(timer); resolveReady(match); }
  });
  application.once('error', error => { clearTimeout(timer); reject(error); });
  application.once('exit', code => { clearTimeout(timer); reject(new Error(`${code}: ${diagnostics}`)); });
});
try {
  const address = (await ready)[1];
  const text = async path => { const response = await fetch(address + path, { signal: AbortSignal.timeout(20_000) }); const body = await response.text(); if (response.status !== 200) throw new Error(`${response.status} ${body}`); return body; };
  if (await text('/hello/Database') !== 'Hello, Database!') throw new Error('HTTP database greeting');
  const before = await text('/transactions/count');
  const id = await text('/transactions/create/Database');
  if (await text(`/transactions/read/${id}`) !== 'Database') throw new Error('database read');
  const committed = await text('/transactions/count');
  if (BigInt(committed) !== BigInt(before) + 1n) throw new Error('commit');
  if (await text('/transactions/rollback/Database') !== 'rolled back') throw new Error('rollback exception');
  if (await text('/transactions/count') !== committed) throw new Error('rollback persisted');
  console.log('Public dependencies: HTTP, DI, Hibernate/H2 commit/read/rollback passed');
} catch (error) { console.error(diagnostics); throw error; }
finally { if (application.pid !== undefined && application.exitCode === null) { const exited = once(application, 'exit'); application.kill(); await exited; } }
