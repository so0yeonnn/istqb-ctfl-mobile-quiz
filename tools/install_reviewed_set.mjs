import fs from 'node:fs';
import vm from 'node:vm';

const modulePath = process.argv[2];
if (!modulePath) throw new Error('usage: node tools/install_reviewed_set.mjs reviewed-sets/prediction-N.mjs');
const incoming = (await import(new URL(`../${modulePath}`, import.meta.url))).default;
if (!Array.isArray(incoming) || incoming.length !== 40) throw new Error('reviewed set must contain exactly 40 questions');
const setName = incoming[0]?.set;
if (!setName || incoming.some(q => q.set !== setName)) throw new Error('inconsistent set name');

const bankPath = new URL('../bank.js', import.meta.url);
const src = fs.readFileSync(bankPath, 'utf8');
const box = {};
vm.runInNewContext(`${src}; globalThis.__bank = QUESTION_BANK;`, box);
const review = {
  status: 'verified', date: '2026-07-21',
  basis: 'ISTQB CTFL v4.0.1 syllabus and official Sample Exams A-D',
  checks: ['learning-objective','k-level','answer','distractors','explanation','language','duplicate-screening']
};
const bank = box.__bank.filter(q => q.set !== setName).concat(incoming.map(q => ({...q, review})));
fs.writeFileSync(bankPath, `const QUESTION_BANK = ${JSON.stringify(bank, null, 2)};\n`, 'utf8');
