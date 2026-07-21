const STORAGE_KEY = 'istqb-ctfl-v3-session';
const WRONG_KEY = 'istqb-ctfl-v3-wrongs';
const canonicalChapter = value => value
  .replace('1장 테스트의 기초','1장 테스트 기초')
  .replace('2장 소프트웨어 개발 수명주기 전반의 테스트','2장 SDLC 전반의 테스팅');
const questionBank = QUESTION_BANK.map(q=>({...q,chapter:canonicalChapter(q.chapter)}));
const chapters = [...new Set(questionBank.map(q => q.chapter))];
const letters = ['A','B','C','D','E'];
const verifiedSets = new Set([1,2,4,5,6,7,8,10,11,12,13,14]);
const officialSamples = {
  3:{name:'A',version:'1.7'},
  9:{name:'B',version:'1.7'},
  16:{name:'C',version:'1.6'},
  23:{name:'D',version:'1.5'}
};
let exam = [];
let examName = '';
let answers = [];
let flags = [];
let current = 0;
let remaining = 0;
let timerId = null;

const $ = id => document.getElementById(id);
const screens = ['start-screen','quiz-screen','overview-screen','result-screen'];
const show = id => screens.forEach(x => $(x).classList.toggle('active', x === id));
const same = (a,b) => JSON.stringify([...(a||[])].sort()) === JSON.stringify([...(b||[])].sort());
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function getSet(n) {
  if (!verifiedSets.has(n)) return [];
  return questionBank.filter(q=>q.set===`prediction-${n}`);
}

function renderStart() {
  const grid=$('set-grid'); grid.innerHTML='';
  for(let n=1;n<=25;n++) {
    const official=officialSamples[n];
    const verified=verifiedSets.has(n);
    const b=document.createElement('button');
    b.className=`set-button ${verified?'curated':''} ${official?'official':''} ${!verified&&!official?'locked':''}`;
    b.disabled=!verified&&!official;
    b.innerHTML=`${n}회<small>${verified?'개별 검수 완료':official?`공식 ${official.name}`:'개별 검수 중'}</small>`;
    b.addEventListener('click',()=>{
      if(official){
        const base='https://www.istqb.org/wp-content/uploads/sdm-uploads/';
        $('official-links').innerHTML=`<strong>${n}회차 · ISTQB 공식 Sample ${official.name}</strong><a href="${base}ISTQB_CTFL_v4.0_Sample-Exam-${official.name}-Questions_v${official.version}.pdf" target="_blank" rel="noopener">문제 PDF 열기</a><a href="${base}ISTQB_CTFL_v4.0_Sample-Exam-${official.name}-Answers_v${official.version}.pdf" target="_blank" rel="noopener">답안·해설 PDF 열기</a><p>공식 문항은 저작권 보호를 위해 ISTQB 원문 PDF로 연결합니다.</p>`;
        $('official-links').classList.remove('hidden');
        $('official-links').scrollIntoView({behavior:'smooth',block:'nearest'});
        return;
      }
      $('official-links').classList.add('hidden');
      startExam(getSet(n),`실전 예측 ${n}회차`);
    });
    grid.appendChild(b);
  }
  $('chapter-picker').innerHTML=chapters.map((c,i)=>`<label class="chapter-check"><input type="checkbox" value="${i}" checked><span>${escapeHtml(c)}</span></label>`).join('');
  const wrongCount=readWrongs().length;
  $('wrong-start').classList.toggle('hidden',!wrongCount);
  if(wrongCount) $('wrong-start').textContent=`저장된 오답 ${wrongCount}문제 다시 풀기`;
  $('resume-button').classList.toggle('hidden',!localStorage.getItem(STORAGE_KEY));
}

function startExam(items,name,resume=null) {
  exam=items; examName=name; current=resume?.current||0;
  answers=resume?.answers||items.map(()=>[]); flags=resume?.flags||items.map(()=>false);
  remaining=resume?.remaining ?? Math.ceil(items.length*90);
  show('quiz-screen'); renderQuestion(); startTimer(); save(); window.scrollTo(0,0);
}

function renderQuestion() {
  const q=exam[current];
  $('question-number').textContent=`${current+1} / ${exam.length}`;
  $('answered-count').textContent=`응답 ${answers.filter(a=>a.length).length}개`;
  $('progress-fill').style.width=`${(current+1)/exam.length*100}%`;
  $('exam-name').textContent=examName; $('chapter').textContent=q.chapter; $('syllabus').textContent=`LO ${q.lo}`; $('level').textContent=q.level;
  $('question-text').textContent=q.text;
  $('multi-hint').classList.toggle('hidden',q.answer.length===1);
  if(q.answer.length>1) $('multi-hint').textContent=`복수 정답 · ${q.answer.length}개 선택`;
  const type=q.answer.length>1?'checkbox':'radio';
  $('options').innerHTML=q.options.map((o,i)=>`<label class="option"><input type="${type}" name="answer" value="${i}" ${answers[current].includes(i)?'checked':''}><span><strong>${letters[i]}.</strong> ${escapeHtml(o)}</span></label>`).join('');
  $('options').querySelectorAll('input').forEach(input=>input.addEventListener('change',e=>{
    const v=Number(e.target.value);
    if(type==='radio') answers[current]=[v];
    else if(e.target.checked) { if(answers[current].length<q.answer.length) answers[current]=[...answers[current],v]; else e.target.checked=false; }
    else answers[current]=answers[current].filter(x=>x!==v);
    $('answered-count').textContent=`응답 ${answers.filter(a=>a.length).length}개`; save();
  }));
  $('prev-button').disabled=current===0; $('next-button').textContent=current===exam.length-1?'전체 보기':'다음';
  $('flag-button').classList.toggle('flagged',flags[current]); $('flag-button').setAttribute('aria-pressed',flags[current]);
}

function startTimer(){ clearInterval(timerId); updateTimer(); timerId=setInterval(()=>{remaining--;updateTimer();save();if(remaining<=0)finish();},1000); }
function updateTimer(){ const m=Math.max(0,Math.floor(remaining/60));const s=Math.max(0,remaining%60);$('timer').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }
function save(){ localStorage.setItem(STORAGE_KEY,JSON.stringify({exam,examName,answers,flags,current,remaining})); }
function showOverview(){ clearInterval(timerId);show('overview-screen');$('overview-summary').textContent=`응답 ${answers.filter(a=>a.length).length}개 · 미응답 ${answers.filter(a=>!a.length).length}개 · 검토 ${flags.filter(Boolean).length}개`;$('question-grid').innerHTML=exam.map((q,i)=>`<button class="${answers[i].length?'answered':''} ${flags[i]?'flagged':''}" data-i="${i}">${i+1}</button>`).join('');$('question-grid').querySelectorAll('button').forEach(b=>b.onclick=()=>{current=Number(b.dataset.i);show('quiz-screen');renderQuestion();startTimer();}); }

function finish(){ clearInterval(timerId); localStorage.removeItem(STORAGE_KEY); const correct=exam.filter((q,i)=>same(q.answer,answers[i])).length; const wrongs=exam.filter((q,i)=>!same(q.answer,answers[i])).map(q=>q.sourceId||q.id); localStorage.setItem(WRONG_KEY,JSON.stringify([...new Set([...readWrongs(),...wrongs])])); show('result-screen'); $('timer').textContent='완료'; const pct=Math.round(correct/exam.length*100); $('result-label').textContent=examName; $('result-title').textContent=`${correct} / ${exam.length} (${pct}%)`; $('result-summary').textContent=pct>=65?'합격 기준 65%를 넘었습니다. 오답의 학습목표를 다시 확인하세요.':'합격 기준 65% 미만입니다. 취약 장을 먼저 복습하세요.'; renderResults(); window.scrollTo(0,0); }

function renderResults(){
  const groups=[...chapters.map(c=>({name:c,items:exam.map((q,i)=>({q,i})).filter(x=>x.q.chapter===c)})),{name:'인지 수준 K1',items:exam.map((q,i)=>({q,i})).filter(x=>x.q.level==='K1')},{name:'인지 수준 K2',items:exam.map((q,i)=>({q,i})).filter(x=>x.q.level==='K2')},{name:'인지 수준 K3',items:exam.map((q,i)=>({q,i})).filter(x=>x.q.level==='K3')}].filter(g=>g.items.length);
  $('chapter-results').innerHTML=groups.map(g=>{const n=g.items.filter(x=>same(x.q.answer,answers[x.i])).length,p=Math.round(n/g.items.length*100);return `<div class="chapter-row"><span>${escapeHtml(g.name)}</span><strong>${n}/${g.items.length}</strong><div class="chapter-bar"><span style="width:${p}%"></span></div></div>`}).join('');
  const bad=exam.map((q,i)=>({q,i})).filter(x=>!same(x.q.answer,answers[x.i]));
  $('wrong-answers').innerHTML=bad.length?bad.map(({q,i})=>`<article class="wrong"><h4>${i+1}. ${escapeHtml(q.text)}</h4><p class="answer-bad">내 답: ${answers[i].length?answers[i].map(x=>letters[x]).join(', '):'미응답'}</p><p class="answer-good">정답: ${q.answer.map(x=>letters[x]).join(', ')}</p><p class="explanation">${escapeHtml(q.explanation)}</p><small>${escapeHtml(q.chapter)} · LO ${q.lo} · ${q.level}</small></article>`).join(''):'<p>모든 문제를 맞혔습니다.</p>';
}

function readWrongs(){ try{return JSON.parse(localStorage.getItem(WRONG_KEY)||'[]')}catch{return[]} }
function exportText(){ const correct=exam.filter((q,i)=>same(q.answer,answers[i])).length; const bad=exam.map((q,i)=>({q,i})).filter(x=>!same(x.q.answer,answers[x.i])); return `# ISTQB CTFL ${examName} 결과\n\n- 점수: ${correct}/${exam.length} (${Math.round(correct/exam.length*100)}%)\n- 제출일: ${new Date().toLocaleString('ko-KR')}\n\n## 오답\n\n${bad.map(({q,i})=>`### ${i+1}번 · ${q.chapter} · LO ${q.lo} · ${q.level}\n- 문제: ${q.text}\n- 내 답: ${answers[i].length?answers[i].map(x=>letters[x]).join(', '):'미응답'}\n- 정답: ${q.answer.map(x=>letters[x]).join(', ')}\n- 해설: ${q.explanation}`).join('\n\n')}`; }

$('custom-start').onclick=()=>{const selected=[...document.querySelectorAll('#chapter-picker input:checked')].map(x=>chapters[Number(x.value)]);if(!selected.length){alert('한 개 이상의 장을 선택하세요.');return;}const pool=questionBank.filter(q=>selected.includes(q.chapter));const count=Math.min(Number($('question-count').value),pool.length);startExam(shuffle(pool).slice(0,count),'맞춤 랜덤 연습');};
$('wrong-start').onclick=()=>{const ids=readWrongs();const items=questionBank.filter(q=>ids.includes(q.id));if(items.length)startExam(shuffle(items),'오답 다시 풀기');};
$('resume-button').onclick=()=>{try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));startExam(s.exam,s.examName,s)}catch{localStorage.removeItem(STORAGE_KEY);renderStart();}};
$('prev-button').onclick=()=>{if(current>0){current--;renderQuestion();save();}};
$('next-button').onclick=()=>{if(current<exam.length-1){current++;renderQuestion();save();window.scrollTo(0,0);}else showOverview();};
$('flag-button').onclick=()=>{flags[current]=!flags[current];renderQuestion();save();};
$('open-overview').onclick=showOverview;$('return-button').onclick=()=>{show('quiz-screen');renderQuestion();startTimer();};
$('finish-button').onclick=()=>{$('finish-dialog-text').textContent=`미응답 ${answers.filter(a=>!a.length).length}개가 있습니다.`;$('finish-dialog').showModal();};
$('cancel-finish').onclick=()=>$('finish-dialog').close();$('confirm-finish').onclick=()=>{$('finish-dialog').close();finish();};
$('reset-button').onclick=()=>{show('start-screen');renderStart();window.scrollTo(0,0);};
$('download-button').onclick=()=>{const blob=new Blob([exportText()],{type:'text/markdown;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`istqb-${examName.replaceAll(' ','-')}.md`;a.click();URL.revokeObjectURL(a.href);};
$('share-button').onclick=async()=>{const text=exportText();try{if(navigator.share){await navigator.share({title:`ISTQB ${examName} 결과`,text});$('export-status').textContent='공유 화면을 열었습니다.';}else{await navigator.clipboard.writeText(text);$('export-status').textContent='결과를 복사했습니다. Codex 채팅에 붙여넣으세요.';}}catch{$('export-status').textContent='공유가 취소되었습니다. 결과 파일 저장을 이용하세요.';}};
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
renderStart();
