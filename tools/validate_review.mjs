import fs from 'node:fs';
import vm from 'node:vm';

const src = fs.readFileSync(new URL('../bank.js', import.meta.url), 'utf8');
const box = {};
vm.runInNewContext(`${src}; globalThis.__bank = QUESTION_BANK;`, box);
const bank = box.__bank;

const loLevels = {
  '1.1.1':'K1','1.1.2':'K2','1.2.1':'K2','1.2.2':'K1','1.2.3':'K2','1.3.1':'K2',
  '1.4.1':'K2','1.4.2':'K2','1.4.3':'K2','1.4.4':'K2','1.4.5':'K2','1.5.1':'K2','1.5.2':'K1','1.5.3':'K2',
  '2.1.1':'K2','2.1.2':'K1','2.1.3':'K1','2.1.4':'K2','2.1.5':'K2','2.1.6':'K2','2.2.1':'K2','2.2.2':'K2','2.2.3':'K2','2.3.1':'K2',
  '3.1.1':'K1','3.1.2':'K2','3.1.3':'K2','3.2.1':'K1','3.2.2':'K2','3.2.3':'K1','3.2.4':'K2','3.2.5':'K1',
  '4.1.1':'K2','4.2.1':'K3','4.2.2':'K3','4.2.3':'K3','4.2.4':'K3','4.3.1':'K2','4.3.2':'K2','4.3.3':'K2','4.4.1':'K2','4.4.2':'K2','4.4.3':'K2','4.5.1':'K2','4.5.2':'K2','4.5.3':'K3',
  '5.1.1':'K2','5.1.2':'K1','5.1.3':'K2','5.1.4':'K3','5.1.5':'K3','5.1.6':'K1','5.1.7':'K2','5.2.1':'K1','5.2.2':'K2','5.2.3':'K2','5.2.4':'K2','5.3.1':'K1','5.3.2':'K2','5.3.3':'K2','5.4.1':'K2','5.5.1':'K3','6.1.1':'K2','6.2.1':'K1'
};
const expectedChapters = {'1':8,'2':6,'3':4,'4':11,'5':9,'6':2};
const expectedLevels = {K1:8,K2:24,K3:8};
const errors = [];
if (bank.length !== 80) errors.push(`expected 80 verified questions, got ${bank.length}`);
const ids = new Set();
for (const q of bank) {
  if (ids.has(q.id)) errors.push(`duplicate id ${q.id}`); ids.add(q.id);
  if (loLevels[q.lo] !== q.level) errors.push(`${q.id}: ${q.lo} must be ${loLevels[q.lo]}, got ${q.level}`);
  if (![4,5].includes(q.options.length)) errors.push(`${q.id}: invalid option count`);
  if (!Array.isArray(q.answer) || q.answer.length < 1 || q.answer.some(i=>i<0 || i>=q.options.length)) errors.push(`${q.id}: invalid answer`);
  if (!q.explanation?.trim()) errors.push(`${q.id}: missing explanation`);
  if (q.review?.status !== 'verified' || !q.review.checks?.includes('duplicate-screening')) errors.push(`${q.id}: missing review evidence`);
}
for (const set of ['prediction-1','prediction-2']) {
  const qs=bank.filter(q=>q.set===set);
  if (qs.length!==40) errors.push(`${set}: expected 40, got ${qs.length}`);
  const chapters={}; const levels={};
  for(const q of qs){chapters[q.lo[0]]=(chapters[q.lo[0]]||0)+1;levels[q.level]=(levels[q.level]||0)+1;}
  if(JSON.stringify(chapters)!==JSON.stringify(expectedChapters)) errors.push(`${set}: chapter blueprint ${JSON.stringify(chapters)}`);
  if(JSON.stringify(levels)!==JSON.stringify(expectedLevels)) errors.push(`${set}: K-level blueprint ${JSON.stringify(levels)}`);
}
const norm=s=>s.replace(/[^가-힣a-z0-9]/gi,'').toLowerCase();
for(let i=0;i<bank.length;i++) for(let j=i+1;j<bank.length;j++) {
  if(norm(bank[i].text)===norm(bank[j].text)) errors.push(`identical question text: ${bank[i].id}/${bank[j].id}`);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('PASS: 80 individually reviewed questions; LO/K, answers, explanations, blueprint, IDs, and exact duplicates validated.');
