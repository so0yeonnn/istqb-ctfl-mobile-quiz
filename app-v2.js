const STORAGE_KEY = 'istqb-ctfl-v3-session';
const WRONG_KEY = 'istqb-ctfl-v3-wrongs';
const CODEX_THREAD_URL = 'codex://threads/019f7f7d-3300-7d63-9b8e-2cba380e9a49';
const canonicalChapter = value => value
  .replace('1장 테스트의 기초','1장 테스트 기초')
  .replace('2장 소프트웨어 개발 수명주기 전반의 테스트','2장 SDLC 전반의 테스팅');
const questionBank = QUESTION_BANK.map(q=>({...q,chapter:canonicalChapter(q.chapter)}));
const chapters = [...new Set(questionBank.map(q => q.chapter))];
const letters = ['A','B','C','D','E'];
const shuffle = items => {
  const result = [...items];
  for (let i=result.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
};
const verifiedSets = new Set([1,2,4,5,6,7,8,10,11,12,13,14,15,17,18,19,20,21,22,24,25]);
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
const officialChapter = lo => ({
  1:'1장 테스트 기초',
  2:'2장 SDLC 전반의 테스팅',
  3:'3장 정적 테스팅',
  4:'4장 테스트 분석 및 설계',
  5:'5장 테스트 활동 관리',
  6:'6장 테스트 도구'
})[Number(String(lo)[0])];
const normalizeOfficial = items => items.map(q=>({...q,chapter:officialChapter(q.lo)||q.chapter}));

function officialLayout(q) {
  const layouts = {
    'OA-13': `
      <h2>장애 유형과 테스트 레벨을 올바르게 연결한 것은?</h2>
      <ol>
        <li>사용자의 비즈니스 요구와 다른 시스템 동작으로 인한 장애</li>
        <li>컴포넌트 간 통신 실패로 인한 장애</li>
        <li>코드 내 논리로 인한 장애</li>
        <li>올바르게 구현되지 않은 비즈니스 규칙으로 인한 장애</li>
      </ol>
      <div class="question-table-wrap"><table class="question-table">
        <thead><tr><th>기호</th><th>테스트 레벨</th></tr></thead>
        <tbody><tr><th>A</th><td>단위 테스팅</td></tr><tr><th>B</th><td>단위 통합 테스팅</td></tr><tr><th>C</th><td>시스템 테스팅</td></tr><tr><th>D</th><td>인수 테스팅</td></tr></tbody>
      </table></div>`,
    'OA-14': `
      <p>세 가지 인수 조건 AC1, AC2, AC3을 각각 TC1, TC2, TC3으로 테스트한다. 결함을 수정해 새 버전을 만들 때마다 테스트를 다시 수행했다.</p>
      <div class="question-table-wrap"><table class="question-table">
        <thead><tr><th>테스트</th><th>첫 번째 실행</th><th>두 번째 실행</th><th>세 번째 실행</th></tr></thead>
        <tbody>
          <tr><th>TC1</th><td>(1) 실패</td><td>(4) 합격</td><td>(7) 합격</td></tr>
          <tr><th>TC2</th><td>(2) 합격</td><td>(5) 실패</td><td>(8) 합격</td></tr>
          <tr><th>TC3</th><td>(3) 실패</td><td>(6) 실패</td><td>(9) 합격</td></tr>
        </tbody>
      </table></div>
      <h2>다음 중 리그레션 테스트로 수행된 테스트는?</h2>`,
    'OA-17': `
      <h2>조직에서 수행하는 리뷰의 특징은 다음과 같다.</h2>
      <ul><li>서기 역할을 하는 사람이 있다.</li><li>주요 목적은 품질을 평가하는 것이다.</li><li>작업 산출물 작성자가 회의를 주도한다.</li><li>개별 준비 단계가 있다.</li><li>리뷰 보고서를 작성한다.</li></ul>
      <p class="question-note">사용하고 있는 리뷰 유형일 가능성이 가장 높은 것은?</p>`,
    'OA-20': `
      <p>검색 옵션이 두 개인 아파트 검색 기능을 테스트한다.</p>
      <ul><li><strong>층:</strong> 지상 층, 1층, 2층 이상</li><li><strong>정원:</strong> 정원 없음, 작은 정원, 큰 정원</li></ul>
      <p>지상 층 아파트에는 정원이 있고, 더 높은 층에는 정원이 없다. 규칙을 위반한 검색은 허용하지 않는다.</p>
      <h2>100% 유효한 동등분할 커버리지를 달성하기 위한 최소 테스트 케이스 수는?</h2>`,
    'OA-21': `
      <p>학생의 최종 점수에 따라 성적을 배정한다.</p>
      <ul><li>0~50점: 탈락</li><li>51~60점: 보통</li><li>61~70점: 양호</li><li>71~80점: 우수</li><li>81~100점: 최우수</li></ul>
      <h2>3값 경계값 분석으로 100% 커버리지를 달성하는 테스트 입력 집합은?</h2>`,
    'OA-22': `
      <p>자전거 대여점 고객 관리 시스템의 기능은 다음과 같다.</p>
      <ul><li>누구나 자전거를 빌릴 수 있고 회원은 20% 할인을 받는다.</li><li>반납기한을 어기면 할인이 적용되지 않는다.</li><li>15회 대여 후 회원은 티셔츠를 받는다.</li></ul>
      <div class="question-table-wrap"><table class="question-table">
        <thead><tr><th>조건/결과</th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th><th>R8</th></tr></thead>
        <tbody>
          <tr><th>회원</th><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr>
          <tr><th>반납기한 경과</th><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td></tr>
          <tr><th>15회 대여</th><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr>
          <tr><th>20% 할인</th><td></td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td></tr>
          <tr><th>티셔츠 선물</th><td></td><td></td><td>X</td><td>X</td><td></td><td></td><td>X</td><td>X</td></tr>
        </tbody>
      </table></div>
      <h2>기능 설명만을 기준으로 불가능한 상황은?</h2>`,
    'OA-23': `
      <p>시스템은 INIT 상태에서 시작하고 OFF 상태에서 동작을 종료한다.</p>
      <img class="question-diagram" src="./assets/official/sample-a-q23-state.png" alt="INIT, DEBUG MODE, IN OPERATION, ON HOLD, OFF 상태와 test, run, error, pause, resume, done 전이를 나타낸 상태 전이 다이어그램">
      <h2>100% 유효 전이 커버리지를 달성하기 위한 최소 테스트 케이스 수는?</h2>`,
    'OA-29': `
      <p><strong>사용자 스토리:</strong> 편집자로서 문서가 게시되기 전에 내용을 리뷰해 문법이 정확한지 확인하고 싶다.</p>
      <p><strong>인수 조건:</strong></p>
      <ul><li>문서의 맞춤법 오류를 식별한다.</li><li>문서의 문법 오류를 식별한다.</li><li>문서를 게시할 수 있는지 표시한다.</li></ul>
      <h2>ATDD 접근법에 가장 적절한 테스트 케이스는?</h2>`,
    'OA-32': `
      <p>3점 추정 기법으로 리스크가 높은 기능의 테스트 노력을 추정한다.</p>
      <ul><li>가장 낙관적인 추정: 2 인일</li><li>가장 가능성 높은 추정: 6 인일</li><li>가장 비관적인 추정: 14 인일</li></ul>
      <h2>최종 추정치는?</h2>`,
    'OA-33': `
      <p>숫자가 작을수록 우선순위가 높다. 논리적 종속성을 먼저 만족해야 한다.</p>
      <div class="question-table-wrap"><table class="question-table">
        <thead><tr><th>번호</th><th>커버되는 테스트 컨디션</th><th>우선순위</th><th>논리적 종속성</th></tr></thead>
        <tbody>
          <tr><th>TC001</th><td>음식 종류 선택</td><td>3</td><td>없음</td></tr>
          <tr><th>TC002</th><td>음식점 선택</td><td>2</td><td>TC001</td></tr>
          <tr><th>TC003</th><td>경로 획득</td><td>1</td><td>TC002</td></tr>
          <tr><th>TC004</th><td>식당에 전화하기</td><td>2</td><td>TC002</td></tr>
          <tr><th>TC005</th><td>예약하기</td><td>3</td><td>TC002</td></tr>
        </tbody>
      </table></div>
      <h2>세 번째로 실행할 테스트 케이스는?</h2>`,
    'OA-34': `
      <p><strong>테스트 유형</strong></p><ol><li>사용성 테스팅</li><li>단위 테스팅</li><li>기능 테스팅</li><li>신뢰성 테스팅</li></ol>
      <div class="question-table-wrap"><table class="question-table">
        <thead><tr><th>기호</th><th>애자일 테스팅 사분면</th></tr></thead>
        <tbody><tr><th>A</th><td>1사분면: 기술 측면, 개발팀 지원</td></tr><tr><th>B</th><td>2사분면: 비즈니스 측면, 개발팀 지원</td></tr><tr><th>C</th><td>3사분면: 비즈니스 측면, 제품 평가</td></tr><tr><th>D</th><td>4사분면: 기술 측면, 제품 평가</td></tr></tbody>
      </table></div>
      <h2>올바르게 짝지어진 것은?</h2>`,
    'OA-35': `
      <p><strong>식별된 리스크:</strong> 보고서 생성에 너무 많은 시간이 걸린다.</p>
      <ul><li><strong>발생 가능성:</strong> 중간</li><li><strong>영향도:</strong> 높음</li><li><strong>대응:</strong><ul><li>시스템 테스팅 중 독립 테스트팀이 성능 효율성 테스팅 수행</li><li>최종 사용자 표본 집단으로 릴리스 전 알파·베타 테스팅 수행</li></ul></li></ul>
      <h2>제안된 리스크 대응 방법은?</h2>`
  };
  return layouts[q.id] || '';
}

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
    b.addEventListener('click',async()=>{
      if(official){
        const oldText=b.innerHTML;
        b.disabled=true;
        b.innerHTML=`${n}회<small>공식 ${official.name} 불러오는 중…</small>`;
        try {
          const module=await import(`./reviewed-sets/official-${official.name}.mjs?v=20260723table`);
          startExam(normalizeOfficial(module.default),`공식 Sample ${official.name} · ${n}회차`);
        } catch (error) {
          console.error(error);
          b.disabled=false;
          b.innerHTML=oldText;
          $('official-links').innerHTML=`<strong>공식 Sample ${official.name}을 불러오지 못했습니다.</strong><p>인터넷 연결을 확인한 뒤 다시 눌러 주세요.</p>`;
          $('official-links').classList.remove('hidden');
        }
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
  const layout=officialLayout(q);
  $('question-text').textContent=q.text;
  $('question-text').classList.toggle('hidden',Boolean(layout));
  $('question-detail').innerHTML=layout;
  $('question-detail').classList.toggle('hidden',!layout);
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

function finish(){
  clearInterval(timerId);
  localStorage.removeItem(STORAGE_KEY);
  const correct=exam.filter((q,i)=>same(q.answer,answers[i])).length;
  const newWrongs=exam.filter((q,i)=>!same(q.answer,answers[i]));
  const merged=new Map([...readWrongs(),...newWrongs].map(q=>[q.sourceId||q.id,q]));
  localStorage.setItem(WRONG_KEY,JSON.stringify([...merged.values()]));
  show('result-screen');
  $('timer').textContent='완료';
  const pct=Math.round(correct/exam.length*100);
  $('result-label').textContent=examName;
  $('result-title').textContent=`${correct} / ${exam.length} (${pct}%)`;
  $('result-summary').textContent=pct>=65?'합격 기준 65%를 넘었습니다. 오답의 학습목표를 다시 확인하세요.':'합격 기준 65% 미만입니다. 취약 장을 먼저 복습하세요.';
  renderResults();
  window.scrollTo(0,0);
}

function renderResults(){
  const groups=[...chapters.map(c=>({name:c,items:exam.map((q,i)=>({q,i})).filter(x=>x.q.chapter===c)})),{name:'인지 수준 K1',items:exam.map((q,i)=>({q,i})).filter(x=>x.q.level==='K1')},{name:'인지 수준 K2',items:exam.map((q,i)=>({q,i})).filter(x=>x.q.level==='K2')},{name:'인지 수준 K3',items:exam.map((q,i)=>({q,i})).filter(x=>x.q.level==='K3')}].filter(g=>g.items.length);
  $('chapter-results').innerHTML=groups.map(g=>{const n=g.items.filter(x=>same(x.q.answer,answers[x.i])).length,p=Math.round(n/g.items.length*100);return `<div class="chapter-row"><span>${escapeHtml(g.name)}</span><strong>${n}/${g.items.length}</strong><div class="chapter-bar"><span style="width:${p}%"></span></div></div>`}).join('');
  const bad=exam.map((q,i)=>({q,i})).filter(x=>!same(x.q.answer,answers[x.i]));
  $('wrong-answers').innerHTML=bad.length?bad.map(({q,i})=>`<article class="wrong"><h4>${i+1}. ${escapeHtml(q.text)}</h4><p class="answer-bad">내 답: ${answers[i].length?answers[i].map(x=>letters[x]).join(', '):'미응답'}</p><p class="answer-good">정답: ${q.answer.map(x=>letters[x]).join(', ')}</p><p class="explanation">${escapeHtml(q.explanation)}</p><small>${escapeHtml(q.chapter)} · LO ${q.lo} · ${q.level}</small></article>`).join(''):'<p>모든 문제를 맞혔습니다.</p>';
}

function readWrongs(){
  try {
    const saved=JSON.parse(localStorage.getItem(WRONG_KEY)||'[]');
    return saved
      .map(item=>typeof item==='string'?questionBank.find(q=>(q.sourceId||q.id)===item):item)
      .filter(Boolean)
      .map(item=>/^O[A-D]-/.test(item.id||'')?{...item,chapter:officialChapter(item.lo)||item.chapter}:item);
  } catch {
    return [];
  }
}
function exportText(){ const correct=exam.filter((q,i)=>same(q.answer,answers[i])).length; const bad=exam.map((q,i)=>({q,i})).filter(x=>!same(x.q.answer,answers[x.i])); return `# ISTQB CTFL ${examName} 결과\n\n- 점수: ${correct}/${exam.length} (${Math.round(correct/exam.length*100)}%)\n- 제출일: ${new Date().toLocaleString('ko-KR')}\n\n## 오답\n\n${bad.map(({q,i})=>`### ${i+1}번 · ${q.chapter} · LO ${q.lo} · ${q.level}\n- 문제: ${q.text}\n- 내 답: ${answers[i].length?answers[i].map(x=>letters[x]).join(', '):'미응답'}\n- 정답: ${q.answer.map(x=>letters[x]).join(', ')}\n- 해설: ${q.explanation}`).join('\n\n')}`; }

async function copyText(text){
  if(navigator.clipboard?.writeText){
    try{await navigator.clipboard.writeText(text);return;}catch{}
  }
  const area=document.createElement('textarea');
  area.value=text;
  area.setAttribute('readonly','');
  area.style.cssText='position:fixed;left:-9999px;top:0;opacity:0';
  document.body.appendChild(area);
  area.focus();
  area.select();
  area.setSelectionRange(0,area.value.length);
  const copied=document.execCommand('copy');
  area.remove();
  if(!copied) throw new Error('copy failed');
}

async function copyResult(openCodex){
  try{
    await copyText(exportText());
    $('export-status').textContent=openCodex?'결과를 복사했습니다. Codex가 열리지 않으면 앱으로 돌아와 붙여넣으세요.':'결과를 복사했습니다. Codex 채팅에 붙여넣으세요.';
    if(openCodex) window.setTimeout(()=>{window.location.href=CODEX_THREAD_URL;},120);
  }catch{
    $('export-status').textContent='자동 복사에 실패했습니다. 결과 파일 저장을 이용하세요.';
  }
}

$('custom-start').onclick=()=>{const selected=[...document.querySelectorAll('#chapter-picker input:checked')].map(x=>chapters[Number(x.value)]);if(!selected.length){alert('한 개 이상의 장을 선택하세요.');return;}const pool=questionBank.filter(q=>selected.includes(q.chapter));const count=Math.min(Number($('question-count').value),pool.length);startExam(shuffle(pool).slice(0,count),'맞춤 랜덤 연습');};
$('wrong-start').onclick=()=>{const items=readWrongs();if(items.length)startExam(shuffle(items),'\uC624\uB2F5 \uB2E4\uC2DC \uD480\uAE30');};
$('resume-button').onclick=()=>{try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY));startExam(s.exam,s.examName,s)}catch{localStorage.removeItem(STORAGE_KEY);renderStart();}};
$('prev-button').onclick=()=>{if(current>0){current--;renderQuestion();save();}};
$('next-button').onclick=()=>{if(current<exam.length-1){current++;renderQuestion();save();window.scrollTo(0,0);}else showOverview();};
$('flag-button').onclick=()=>{flags[current]=!flags[current];renderQuestion();save();};
$('open-overview').onclick=showOverview;$('return-button').onclick=()=>{show('quiz-screen');renderQuestion();startTimer();};
$('finish-button').onclick=()=>{
  const unanswered=answers.filter(a=>!a.length).length;
  if(unanswered && !window.confirm(`\uBBF8\uC751\uB2F5 ${unanswered}\uAC1C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uB3C4 \uCC44\uC810\uD560\uAE4C\uC694?`)) return;
  finish();
};
$('cancel-finish').onclick=()=>$('finish-dialog').close();$('confirm-finish').onclick=()=>{$('finish-dialog').close();finish();};
$('reset-button').onclick=()=>{show('start-screen');renderStart();window.scrollTo(0,0);};
$('download-button').onclick=()=>{const blob=new Blob([exportText()],{type:'text/markdown;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`istqb-${examName.replaceAll(' ','-')}.md`;a.click();URL.revokeObjectURL(a.href);};
$('share-button').onclick=()=>copyResult(true);
$('copy-button').onclick=()=>copyResult(false);
if('serviceWorker' in navigator) window.addEventListener('load',async()=>{
  const registration=await navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'});
  registration.update();
});
renderStart();
