import fs from 'node:fs';
import vm from 'node:vm';

const bankSrc=fs.readFileSync(new URL('../bank.js',import.meta.url),'utf8');
const box={}; vm.runInNewContext(`${bankSrc};globalThis.__bank=QUESTION_BANK;`,box);
const numbers=[...new Set(box.__bank.map(q=>Number(q.set.replace('prediction-',''))))].sort((a,b)=>a-b);
if(numbers.some(n=>!Number.isInteger(n))) throw new Error('invalid prediction set name');

const appPath=new URL('../app-v2.js',import.meta.url);
let app=fs.readFileSync(appPath,'utf8');
app=app.replace(/const verifiedSets = new Set\(\[[^\]]*\]\);/,`const verifiedSets = new Set([${numbers.join(',')}]);`);
if(!app.includes(`new Set([${numbers.join(',')}])`)) throw new Error('verified set publication failed');
fs.writeFileSync(appPath,app,'utf8');

const swPath=new URL('../sw.js',import.meta.url);
let sw=fs.readFileSync(swPath,'utf8').replace(/const CACHE = '[^']+';/,`const CACHE = 'istqb-ctfl-reviewed-${numbers.length}-sets';`);
fs.writeFileSync(swPath,sw,'utf8');
console.log(`published reviewed sets: ${numbers.join(', ')}`);
