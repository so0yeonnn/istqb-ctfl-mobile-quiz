import fs from 'node:fs';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const read = file => fs.readFileSync(new URL(file, root), 'utf8');

const reverseSource = read('reverse-bank.js');
new Function(reverseSource);
const context = {};
vm.runInNewContext(`${reverseSource};this.items=REVERSE_CONCEPTS;this.build=buildReverseQuestions`, context);

if (context.items.length !== 64) throw new Error(`Expected 64 concepts, received ${context.items.length}`);
if (new Set(context.items.map(item => item[0])).size !== 64) throw new Error('Duplicate learning objective');

const questions = context.build([{lo: '1.1.1', chapter: '1장 테스트 기초'}]);
if (questions.length !== 64) throw new Error(`Expected 64 questions, received ${questions.length}`);
for (const question of questions) {
  if (question.options.length !== 4) throw new Error(`${question.id}: option count`);
  if (new Set(question.options).size !== 4) throw new Error(`${question.id}: duplicate option`);
  if (question.answer.length !== 1 || question.answer[0] < 0 || question.answer[0] > 3) {
    throw new Error(`${question.id}: invalid answer`);
  }
}

new Function(read('app-v2.js'));
const html = read('index.html');
for (const id of ['reverse-start', 'reverse-chapter-picker', 'reverse-question-count']) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Missing element: ${id}`);
}
if (!html.includes('reverse-bank.js')) throw new Error('Missing reverse-bank.js script');
if (!read('sw.js').includes('./reverse-bank.js')) throw new Error('Service worker does not cache reverse-bank.js');

console.log(`reverse=${questions.length} uniqueLO=64 options=ok appSyntax=ok html=ok sw=ok`);
