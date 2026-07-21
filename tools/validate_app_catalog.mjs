import fs from 'node:fs';
import vm from 'node:vm';

const root=new URL('../',import.meta.url);
const app=fs.readFileSync(new URL('app-v2.js',root),'utf8');
const html=fs.readFileSync(new URL('index.html',root),'utf8');
const bankSource=fs.readFileSync(new URL('bank.js',root),'utf8');
const box={};
vm.runInNewContext(`${bankSource};globalThis.bank=QUESTION_BANK;`,box);
const bank=box.bank;
const authored=[1,2,4,5,6,7,8,10,11,12,13,14,15,17,18,19,20,21,22,24,25];
const official=[3,9,16,23];
const all=[...authored,...official].sort((a,b)=>a-b);
if(all.join(',')!==Array.from({length:25},(_,i)=>i+1).join(',')) throw new Error('25-slot catalog is incomplete');
const listed=app.match(/const verifiedSets = new Set\(\[([^\]]+)\]\)/)?.[1].split(',').map(Number);
if(!listed || listed.join(',')!==authored.join(',')) throw new Error('verified set menu does not match reviewed sets');
for(const n of official) if(!new RegExp(`\\b${n}:\\{name:`).test(app)) throw new Error(`official sample slot ${n} missing`);
for(const n of authored){
  const qs=bank.filter(q=>q.set===`prediction-${n}`);
  if(qs.length!==40) throw new Error(`prediction-${n}: expected 40, got ${qs.length}`);
  const positions=[0,0,0,0];
  for(const q of qs){
    if(!Array.isArray(q.answer) || q.answer.length<1 || q.answer.some(i=>!Number.isInteger(i) || i<0 || i>=q.options.length) || new Set(q.answer).size!==q.answer.length) throw new Error(`${q.id}: invalid answer`);
    if(q.answer.length>1 && !/(TWO|두 개|2개)/i.test(q.text)) throw new Error(`${q.id}: multiple answers without selection instruction`);
    if(q.answer.length===1) positions[q.answer[0]]++;
    if(q.review?.status!=='verified') throw new Error(`${q.id}: not marked verified`);
  }
  if(Math.max(...positions)-Math.min(...positions)>2) throw new Error(`prediction-${n}: skewed single-answer positions ${positions}`);
}
for(const id of ['set-grid','official-links','options','share-button','download-button','reset-button']) if(!html.includes(`id="${id}"`)) throw new Error(`missing DOM target ${id}`);
if(!html.includes('840문항은 모두 개별 검수')) throw new Error('final review status copy missing');
console.log('PASS: 25 selectable slots = 21 reviewed mock sets (840 questions) + 4 official Sample A-D links; answers balanced and DOM targets present.');
