'use strict';
const lessons = [
 {title:'발견하고 선택하기',question:'음악은 가수·작곡가 말고 또 어디에서 일하고 있을까?',tasks:['12개 분야 카드와 관련 직업 둘러보기','과제·채점 기준과 AI 활용 약속 확인하기','관심 분야를 골라 활동지 1·2번 쓰기','짝과 선택한 이유를 한 문장씩 나누기'],feedback:'교사: 선택 여부 확인과 미선정 학생 안내 · 동료: 선택 이유를 듣고 질문 한 가지',result:'활동지 1~2번 · 관심 분야와 선택 이유'},
 {title:'묻고 확인하며 탐구하기',question:'내가 고른 산업에서 음악이 사라지면 무엇이 함께 사라질까?',tasks:['AI 답에서 사실 하나를 다른 조사처와 교차 확인하기','3~5번: 하는 일, 직업 2가지 이상, 서로 다른 조사처 2곳 이상','6~8번: 음악이 쓰이는 장면, 사라지는 가치, 나와의 연결','9번: 발표용 핵심 세 문장 쓰기'],feedback:'교사: “친구에게 말로 설명해 볼래?” · 동료: 7번이 산업의 일과 연결되는지 짝 점검',result:'활동지 3~9번 · 산업 조사 40점 + 활용 가치 30점'},
 {title:'1분의 목소리로 전하기',question:'1분 안에 친구를 설득하려면 무엇을 남기고 무엇을 덜어낼까?',tasks:['9번의 세 문장을 바탕으로 1분 타이머로 연습하기','50초~1분 발표 영상 촬영하고 다시 보며 개선하기','교사가 지정한 방법으로 영상 제출하기','함께 보고 이해도·인상 깊은 점·궁금한 점 나누기'],feedback:'자기: 다시 보고 다시 찍기 · 동료: 이해도와 질문 피드백(성적 미반영)',result:'1분 발표 영상 · 발표 수행 30점'},
 {title:'피드백을 진로로 잇기',question:'AI가 음악을 만드는 시대에도 음악 산업의 일은 사람의 몫으로 남을까?',tasks:['성취수준별 피드백 확인하고 익명 7번 우수 문장 나누기','동료가 남긴 질문에 답하며 조사 내용 보완하기','AI가 만든 게임 음악을 듣고 사람의 역할 토의하기','8번을 나의 진로와 연결하는 문장으로 다시 쓰기'],feedback:'교사: 7번 중심 개별 피드백 · 학생: 받은 질문에 답변하고 성찰하기',result:'진로 잇기 한 문장 · 사람의 역할에 대한 나의 생각'}
];
const tablist=document.querySelector('.lesson-tabs');
lessons.forEach((lesson,i)=>{const b=document.createElement('button');b.type='button';b.id=`lesson-${i}`;b.setAttribute('role','tab');b.setAttribute('aria-controls','lesson-panel');b.innerHTML=`<span>0${i+1}차시${i===1?' · 본시':''}</span><strong>${lesson.title}</strong>`;b.addEventListener('click',()=>showLesson(i));b.addEventListener('keydown',e=>{let n=i;if(e.key==='ArrowRight')n=(i+1)%4;else if(e.key==='ArrowLeft')n=(i+3)%4;else if(e.key==='Home')n=0;else if(e.key==='End')n=3;else return;e.preventDefault();showLesson(n);tablist.children[n].focus();});tablist.append(b);});
function showLesson(i){[...tablist.children].forEach((b,n)=>{b.setAttribute('aria-selected',String(n===i));b.tabIndex=n===i?0:-1;});const l=lessons[i];const panel=document.querySelector('#lesson-panel');panel.setAttribute('aria-labelledby',`lesson-${i}`);panel.innerHTML=`<div><span class="mini-label">LESSON 0${i+1}</span><h3>${l.title}</h3><p class="lesson-question">“${l.question}”</p><p>${l.result}</p></div><div><ul>${l.tasks.map(t=>`<li>${t}</li>`).join('')}</ul><p class="feedback">${l.feedback}</p></div>`;}
showLesson(0);
// 분야명은 원문을 따르며, 직업과 탐구 질문은 웹 탐색을 위해 덧붙인 예시입니다.
const industries=[
 ['음원 유통·스트리밍','음원 유통 담당자 · 서비스 기획자','음악이 만들어진 뒤 청취자의 재생 목록에 닿기까지 어떤 과정을 거칠까요?'],
 ['공연 기획·제작','공연 기획자 · 무대 감독','음악, 무대, 관객의 경험은 어떻게 하나의 공연으로 연결될까요?'],
 ['음악 저작권 관리','저작권 관리 담당자 · 음악 라이선싱 담당자','음악을 이용하는 사람과 창작자를 연결하는 일은 왜 필요할까요?'],
 ['음악 교육','음악 교사 · 악기 강사','배우는 사람에 따라 음악을 가르치는 방법은 어떻게 달라질까요?'],
 ['음악 치료','음악 치료사 · 음악 치료 연구자','음악 치료 분야에서 음악과 전문가의 역할은 무엇일까요?'],
 ['영상 음악','영화 음악 작곡가 · 음악 감독','같은 장면에 다른 음악이 흐르면 관객의 경험은 어떻게 바뀔까요?'],
 ['게임 음악','게임 음악 작곡가 · 사운드 디자이너','플레이어의 행동과 상황에 따라 음악은 어떻게 달라질까요?'],
 ['악기 제조·유통','악기 제작자 · 악기 조율사','악기의 소리를 만드는 기술은 연주자의 표현과 어떻게 이어질까요?'],
 ['음향 엔지니어링','녹음 엔지니어 · 공연 음향 엔지니어','같은 연주를 더 잘 전달하기 위해 소리를 어떻게 다룰까요?'],
 ['아티스트 매니지먼트','아티스트 매니저 · A&R 담당자','한 아티스트의 음악 활동을 이어 가기 위해 어떤 협업이 필요할까요?'],
 ['음악 저널리즘·평론','음악 기자 · 음악 평론가','음악을 소개하고 해석하는 글은 듣는 경험에 어떤 영향을 줄까요?'],
 ['인공지능 음악 기술','음악 AI 개발자 · 음악 데이터 연구자','AI가 음악을 만드는 과정에서도 사람이 판단해야 할 일은 무엇일까요?']
];
function renderIndustries(){const q=document.querySelector('#industry-search').value.trim().toLowerCase();const grid=document.querySelector('#industry-grid');grid.replaceChildren();let count=0;industries.forEach(([title,jobs,question],i)=>{if(!`${title} ${jobs}`.toLowerCase().includes(q))return;count++;const card=document.createElement('details');card.className='industry-card';card.innerHTML=`<summary><small>INDUSTRY ${String(i+1).padStart(2,'0')}</small>${title}</summary><p class="jobs">관련 직업 예시 · ${jobs}</p><p>${question}</p><p class="muted">조사 출발어: ${title} 하는 일 / 직업 / 음악의 가치</p><button type="button" class="button secondary">이 분야로 활동지 시작 →</button>`;card.querySelector('button').addEventListener('click',()=>{const field=document.querySelector('#q1');field.value=title;saveAnswers();document.querySelector('#worksheet').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});field.focus({preventScroll:true});});grid.append(card);});document.querySelector('#search-count').textContent=count?`12개 분야 중 ${count}개 분야`:'검색 결과가 없습니다. 다른 분야나 직업으로 찾아보세요.';}
document.querySelector('#industry-search').addEventListener('input',renderIndustries);renderIndustries();
const questions=[['내가 고른 음악 산업은?','12개 분야 가운데 탐구하고 싶은 분야 하나를 적으세요.'],['이 분야를 고른 이유는?','나의 관심이나 경험과 연결해 설명하세요.'],['이 산업은 무슨 일을 하나요?','하는 일과 일의 흐름을 자기 말로 두 문장 이상 적으세요.'],['어떤 직업이 있나요?','직업 두 가지 이상과 각 직업이 하는 일을 함께 쓰세요.'],['어디에서 조사하고, 무엇을 확인했나요?','서로 다른 조사처 2곳 이상. AI에 물은 내용·답 속 사실 / 다른 출처의 제목·주소 / 일치·다름과 근거를 적으세요.'],['음악이 쓰이는 구체적인 장면은?','언제, 어디서, 누구에게 음악이 쓰이는지 구체적으로 설명하세요.'],['이 산업에 음악이 없다면 무엇이 사라질까요?','음악을 지우면 누가 어떤 일을 하는 데 곤란해지는지, 산업의 일과 이어 쓰세요.'],['이 분야는 나와 어떻게 이어지나요?','관심, 강점, 경험, 미래의 진로와 연결해 보세요.'],['1분 발표를 위한 핵심 세 문장은?','① 무슨 분야인가 ② 음악이 어떻게 쓰이는가 ③ 왜 중요한가. 세 문장을 직접 쓰세요.']];
const storageKey='music-industry-ai-worksheet-v1';let stored={};let storageAvailable=true;
try{stored=JSON.parse(localStorage.getItem(storageKey)||'{}');if(!stored||typeof stored!=='object')stored={};}catch{stored={};storageAvailable=false;}
questions.forEach(([title,hint],i)=>{const box=document.createElement('div');box.className=`field${i===6?' highlight':''}`;box.innerHTML=`<label for="q${i+1}">${String(i+1).padStart(2,'0')}. ${title}</label><p class="hint" id="hint${i+1}">${hint}</p><textarea id="q${i+1}" name="q${i+1}" rows="${i===4||i===8?5:3}" aria-describedby="hint${i+1}"></textarea>`;const field=box.querySelector('textarea');field.value=typeof stored[`q${i+1}`]==='string'?stored[`q${i+1}`]:'';field.addEventListener('input',saveAnswers);document.querySelector('#questions').append(box);});
function getAnswers(){return Object.fromEntries(questions.map((_,i)=>[`q${i+1}`,document.querySelector(`#q${i+1}`).value]));}
function updateScript(){document.querySelector('#script-preview').textContent=document.querySelector('#q9').value||'9번에 쓴 핵심 세 문장이 여기에 표시됩니다.';}
function saveAnswers(){try{localStorage.setItem(storageKey,JSON.stringify(getAnswers()));storageAvailable=true;}catch{storageAvailable=false;}document.querySelector('#save-status').textContent=storageAvailable?'이 브라우저에 저장되었습니다. 교사에게 전송되지는 않습니다.':'브라우저 저장을 사용할 수 없습니다. 활동지 파일 저장 버튼으로 내용을 보관하세요.';updateScript();}
updateScript();document.querySelector('#save-status').textContent=storageAvailable?'입력한 내용은 이 브라우저에 자동 저장됩니다. 공용 기기에서는 개인정보를 적지 마세요.':'브라우저 저장을 사용할 수 없습니다. 활동지 파일 저장을 이용하세요.';
document.querySelector('#worksheet-form').addEventListener('submit',e=>e.preventDefault());
document.querySelector('#download').addEventListener('click',()=>{const data=getAnswers();const content='음악으로 먹고사는 사람들 · 조사 활동지\n작성·연습용 — 교사에게 자동 제출되지 않습니다.\n\n'+questions.map(([title],i)=>`${i+1}. ${title}\n${data[`q${i+1}`]||'(미작성)'}\n`).join('\n');const blob=new Blob(['\ufeff',content],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='음악산업탐구_나의활동지.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);});
function preparePrint(){document.querySelectorAll('.print-answer').forEach(e=>e.remove());document.querySelectorAll('.field textarea').forEach(t=>{const p=document.createElement('div');p.className='print-answer';p.textContent=t.value||'(미작성)';p.style.display='none';t.after(p);});}
window.addEventListener('beforeprint',()=>{preparePrint();document.querySelectorAll('.print-answer').forEach(e=>e.style.display='block');document.querySelectorAll('.field textarea').forEach(e=>e.style.display='none');});
window.addEventListener('afterprint',()=>{document.querySelectorAll('.print-answer').forEach(e=>e.remove());document.querySelectorAll('.field textarea').forEach(e=>e.style.display='');});
document.querySelector('#print').addEventListener('click',()=>window.print());
let elapsed=0,start=0,timerId=null;const timerToggle=document.querySelector('#timer-toggle');
function paintTimer(){const seconds=Math.min(60,Math.floor(elapsed/1000));document.querySelector('#timer').textContent=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;document.querySelector('#timer').classList.toggle('target',seconds>=50);document.querySelector('#timer-status').textContent=seconds>=60?'1분이 되었습니다. 핵심과 전달력을 점검해 보세요.':seconds>=50?'목표 시간에 도달했습니다. 마무리해 보세요.':'50초~1분을 목표로 연습하세요.';}
function pauseTimer(){if(timerId!==null){elapsed=Math.min(60000,performance.now()-start);clearInterval(timerId);timerId=null;}timerToggle.textContent=elapsed>=60000?'다시 연습':'계속하기';paintTimer();}
timerToggle.addEventListener('click',()=>{if(timerId!==null){pauseTimer();return;}if(elapsed>=60000)elapsed=0;start=performance.now()-elapsed;timerToggle.textContent='일시정지';timerId=setInterval(()=>{elapsed=Math.min(60000,performance.now()-start);paintTimer();if(elapsed>=60000)pauseTimer();},100);});
document.querySelector('#timer-reset').addEventListener('click',()=>{pauseTimer();elapsed=0;paintTimer();timerToggle.textContent='연습 시작';});
