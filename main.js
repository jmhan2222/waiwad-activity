// ===== CASES DATA =====
const CASES = {
  A: {
    subtitle: '난기류 상황인데, 지금 라면 드려도 될까요?',
    route: '인천 → 도쿄 나리타 / 만석 / Seat Belt Sign On',
    scenario: '에어카페 Cart 서비스 중 30C 승객 신라면 주문에 뜨거운 물을 붓던 찰나 Fasten Seat Belt Sign 점등 및 난기류 발생. 승객(30C) "저 라면 주문한 것 좀 빨리 가져다 주세요. 배가 많이 고파서요." 전방 승무원들도 착석 상태 유지 중. 30C 승객은 짜증난 표정으로 AFT Galley 주시 중.',
    questions: [
      { label: 'Q1', text: '여러분이 생각하는 업무의 우선 순위는 무엇입니까?' },
      { label: 'Q2', text: '만약 당신이 사무장이라면 어떻게 지시하겠습니까?' },
      { label: 'Q3', text: '뜨거운 물을 부은 라면을 먼저 드리는 것은 허용 가능한 재량인가요, 조정 불가 영역인가요?' },
      { label: 'Q4', text: '짜증 섞인 표정의 승객(30C)과 눈이 마주쳤을 때, 어떻게 손님을 안정시킬 건가요?' },
      { label: 'Q5', text: '승객(30C)에게 라면을 제공할 때, 여러분의 첫 마디는 무엇인가요?' },
      { label: '추가Q1', text: '다음 편에 같은 상황이 생기면 편조는 어떻게 움직여야 할까요?' },
      { label: '추가Q2', text: '객실브리핑 시 사전에 난기류 관련 서비스 운영 방식을 논의했다면 어떻게 달라졌을까요?' },
    ],
    presQ: '난기류 상황에서 승객을 응대하는 우선 순위가 어떻게 달랐나요?'
  },
  B: {
    subtitle: '제 기내식 먼저 주시겠어요?',
    route: '비엔티안 → 인천 / 만석 / 사전기내식 40ea / 에어카페 서비스 중',
    scenario: '어린 아이를 동반한 3D 승객이 조심스럽게 사무장을 찾는다. 승객(3D) "저.. 혹시 예약한 기내식 좀 먼저 주시겠어요? 애가 계속 배고프다고 하고, 저희 시부모님도 아까 저녁 식사를 못하셔서요." 한편 15A 승객이 손을 번쩍 들며 FR을 부른다. 승객(15A) "저 아까 맥주 한 캔 사먹었는데 (딸꾹), 똑같은 걸로 한 캔 더 주세요." 얼굴이 붉어져 있으며 딸꾹질이 멈추지 않는 등 취기가 상당히 느껴진다.',
    questions: [
      { label: 'Q1', text: '여러분이 생각하는 업무의 우선 순위는 무엇입니까?' },
      { label: 'Q2', text: '사전 기내식을 먼저 드리는 것은 허용 가능한 재량인가요, 조정 불가 영역인가요?' },
      { label: 'Q3', text: '만약 사전 기내식을 우선 제공하는 모습을 보고 다른 승객들이 개별적으로 요청한다면 어떻게 대처하시겠어요?' },
      { label: 'Q4', text: '만일 승객(15A)이 맥주를 구입하지 못해서 화가 났다면 — FR 혼자 감당해야 할까요?' },
      { label: 'Q5', text: '승객(15A)에게 주류 판매를 거절한다면, 여러분의 응대 멘트는 무엇인가요?' },
      { label: '추가Q1', text: '승객(15A)이 하기 후 컴플레인을 넣겠다고 한다면 어떻게 대응하시겠어요?' },
      { label: '추가Q2', text: '여러분이 생각하는 기내에서 해결 가능한 것과 불가능한 것의 경계는 무엇일까요?' },
    ],
    presQ: '각각의 상황에서 승객을 응대하는 첫 마디는 무엇이었나요?'
  },
  C: {
    subtitle: '이 상황은 무엇이 먼저이고, 어디까지 해드릴 수 있을까요?',
    route: '인천 → 싱가포르 / 장거리 국제선 / 주간편 / Boarding 시점',
    scenario: 'Boarding 중 사무장(이감귤)은 비즈니스라이트 승객 Welcome Greeting과 짐 정리에 분주하다. 승객(1A) "제 가방 그냥 바닥에 둬도 되죠? 안되면 위로 올려주세요" 승객(2D) "저 배고파서 그런데, 신라면이랑 비빔밥 좀 먼저 살게요." 승객(3A) "저 몸이 좀 안좋아서 그런데.. 기내에 약 있어요?" 이때 탑승권을 검사하던 FR 승무원이 손님이 탑승권을 잃어버렸다며 다급하게 사무장을 찾는다. 동시에 AR 승무원(강제코)이 난처한 표정으로 "사무장님, 24D 손님이 지난번에 비행기 탔을 때 춥다고 하니 승무원이 담요를 빌려주었다며 이번에도 담요를 달라고 하시는데, 어떻게 할까요?"',
    questions: [
      { label: 'Q1', text: '여러분이 생각하는 업무의 우선 순위는 무엇입니까?' },
      { label: 'Q2', text: '만약 당신이 사무장이라면 어떻게 지시하겠습니까?' },
      { label: 'Q3', text: '만일 승무원 간 업무를 분담했다면, 어떻게 나누었으며 기준은 무엇이었나요?' },
      { label: 'Q4', text: '이 상황에서 객실사무장에게 보고하는 타이밍은 언제가 적절한가요?' },
      { label: 'Q5', text: '승객(24D)에게 응급 담요를 드리는 것은 허용 가능한 재량인가요, 조정 불가 영역인가요?' },
      { label: '추가Q1', text: "다수의 개별 요청 속에서 '잘 마무리된 서비스'로 만들려면 무엇이 필요할까요?" },
      { label: '추가Q2', text: '편조원들과의 소통에서 효과적인 방법에는 어떤 것들이 있을까요?' },
    ],
    presQ: '사무장의 지시가 조원들마다 상이했나요? 어떻게 달랐고, 왜 달랐는지 이야기해주세요.'
  }
};

// ===== FIREBASE =====
const firebaseConfig = {
  apiKey: "AIzaSyBWUn0QYb5036L3Jl5s2Yz2rOb5aGCd_Ks",
  authDomain: "waiwad-activity.firebaseapp.com",
  databaseURL: "https://waiwad-activity-default-rtdb.firebaseio.com",
  projectId: "waiwad-activity",
  storageBucket: "waiwad-activity.firebasestorage.app",
  messagingSenderId: "645659474342",
  appId: "1:645659474342:web:8e12e2e2a58acb83993767"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// 로컬 미러 — Firebase 리스너가 항상 최신 상태로 유지
const appData = { groupCount: 5, groupCase: {}, submission: {} };

// ===== STORAGE =====
const storage = {
  getGroupCount() { return appData.groupCount; },
  setGroupCount(n) {
    appData.groupCount = n;
    db.ref('activity/groupCount').set(n);
  },
  getGroupCase(group) { return (appData.groupCase || {})[group] || null; },
  setGroupCase(group, caseKey) {
    if (!appData.groupCase) appData.groupCase = {};
    appData.groupCase[group] = caseKey;
    db.ref(`activity/groupCase/${group}`).set(caseKey);
  },
  clearGroupCase(group) {
    if (appData.groupCase) delete appData.groupCase[group];
    db.ref(`activity/groupCase/${group}`).remove();
  },
  getSubmission(group, caseKey) {
    return ((appData.submission || {})[group] || {})[caseKey] || null;
  },
  setSubmission(group, caseKey, answers) {
    const data = { group, caseKey, answers, submittedAt: new Date().toISOString() };
    if (!appData.submission[group]) appData.submission[group] = {};
    appData.submission[group][caseKey] = data;
    db.ref(`activity/submission/${group}/${caseKey}`).set(data);
  },
  getAllSubmissions(maxGroup) {
    const result = [];
    for (let g = 1; g <= maxGroup; g++) {
      const caseKey = (appData.groupCase || {})[g];
      if (!caseKey) continue;
      const sub = ((appData.submission || {})[g] || {})[caseKey];
      if (sub) result.push(sub);
    }
    return result;
  },
  clearAll() {
    appData.groupCase = {};
    appData.submission = {};
    db.ref('activity/groupCase').remove();
    db.ref('activity/submission').remove();
  }
};

// ===== FIREBASE REAL-TIME LISTENER =====
function setupFirebaseListeners() {
  db.ref('activity').on('value', snap => {
    const data = snap.val() || {};
    appData.groupCount  = data.groupCount  || 5;
    appData.groupCase   = data.groupCase   || {};
    appData.submission  = data.submission  || {};
    refreshCurrentView();
  });
}

function refreshCurrentView() {
  const active = document.querySelector('.screen.active')?.id;
  if (active === 'screen-group-select') renderGroupSelect();
  else if (active === 'screen-facilitator') renderFacilitatorContent();
  // 활동 화면은 입력 중이므로 자동 갱신 안 함
}

// ===== APP STATE =====
const state = {
  currentGroup: null,
  currentCase: null,
  facilitatorFilter: 'all',
};

// ===== UTILITIES =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  el.classList.add('active');
  el.scrollTop = 0;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

function formatTime(iso) {
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ===== GROUP SELECT SCREEN =====
function renderGroupSelect() {
  const count = storage.getGroupCount();
  const container = document.getElementById('group-buttons');
  container.innerHTML = '';
  for (let i = 1; i <= count; i++) {
    const selectedCase = storage.getGroupCase(i);
    const submitted = selectedCase ? !!storage.getSubmission(i, selectedCase) : false;
    const btn = document.createElement('button');
    btn.className = 'group-btn' + (submitted ? ' submitted' : selectedCase ? ' case-selected' : '');
    btn.innerHTML = `
      <span class="group-num">${i}조</span>
      ${selectedCase ? `<span class="group-case-badge case-${selectedCase}">Case ${selectedCase}</span>` : ''}
      ${submitted ? '<span class="group-check">✓</span>' : ''}
    `;
    btn.onclick = () => enterGroup(i);
    container.appendChild(btn);
  }
}

// ===== CASE SELECT SCREEN =====
function enterGroup(groupNum) {
  state.currentGroup = groupNum;
  const savedCase = storage.getGroupCase(groupNum);

  if (savedCase) {
    // 이미 케이스가 선택되어 있으면 바로 활동 화면으로
    state.currentCase = savedCase;
    renderActivityContent();
    showScreen('screen-activity');
  } else {
    // 케이스 선택 화면으로
    document.getElementById('case-select-group-name').textContent = `${groupNum}조`;
    renderCaseSelectGrid();
    showScreen('screen-case-select');
  }
}

function renderCaseSelectGrid() {
  const container = document.getElementById('case-select-grid');
  container.innerHTML = ['A', 'B', 'C'].map(key => {
    const cd = CASES[key];
    return `
      <button class="case-option-card" data-case="${key}">
        <div class="case-option-badge">Case ${key}</div>
        <div class="case-option-title">${cd.subtitle}</div>
        <div class="case-option-route">${cd.route.split(' / ')[0]}</div>
      </button>
    `;
  }).join('');

  container.querySelectorAll('.case-option-card').forEach(card => {
    card.onclick = () => selectCase(card.dataset.case);
  });
}

function selectCase(caseKey) {
  storage.setGroupCase(state.currentGroup, caseKey);
  state.currentCase = caseKey;
  renderActivityContent();
  showScreen('screen-activity');
}

// ===== ACTIVITY SCREEN =====
function renderActivityContent() {
  const g = state.currentGroup;
  const c = state.currentCase;
  const cd = CASES[c];
  const existing = storage.getSubmission(g, c);

  // 헤더 업데이트
  document.getElementById('activity-group-label').textContent = `${g}조`;
  document.getElementById('activity-case-label').textContent = `Case ${c}`;
  // 제출 후에는 케이스 변경 불가
  document.getElementById('btn-change-case').style.display = existing ? 'none' : '';

  const mainQuestions = cd.questions.filter(q => !q.label.startsWith('추가'));
  const extraQuestions = cd.questions.filter(q => q.label.startsWith('추가'));
  const savedAnswers = existing ? (existing.answers || {}) : {};

  function qaBlockHtml(q) {
    const saved = savedAnswers[q.label] || '';
    return `
      <div class="qa-block">
        <div class="question-row">
          <span class="q-label">${q.label}</span>
          <span class="q-text">${q.text}</span>
        </div>
        <textarea
          class="qa-textarea"
          data-question="${q.label}"
          placeholder="우리 조의 생각을 입력하세요..."
        >${escapeHtml(saved)}</textarea>
      </div>
    `;
  }

  const submitBtnLabel = existing ? '다시 제출' : '제출하기';
  const submittedBannerHtml = existing ? `
    <div class="submitted-banner">
      제출 완료 ✓ <small>${formatTime(existing.submittedAt)} 제출</small>
    </div>
  ` : '';

  const main = document.getElementById('activity-main');
  main.innerHTML = `
    <div class="case-hero case-hero-${c}">
      <div class="case-hero-badge">Case ${c}</div>
      <h2 class="case-hero-title">${cd.subtitle}</h2>
      <div class="case-hero-route">${cd.route}</div>
    </div>

    <div class="content-card">
      <div class="card-label">시나리오</div>
      <p class="scenario-text">${cd.scenario}</p>
    </div>

    <div class="content-card">
      <div class="card-label">토의 질문 · 답변</div>
      ${submittedBannerHtml}
      <div class="qa-list">
        ${mainQuestions.map(qaBlockHtml).join('')}
      </div>
      ${extraQuestions.length ? `
        <div class="extra-divider">추가 토의</div>
        <div class="qa-list">
          ${extraQuestions.map(qaBlockHtml).join('')}
        </div>
      ` : ''}
      ${cd.presQ ? `
        <div class="extra-divider pres-divider">발표 질문</div>
        <div class="qa-list">
          ${qaBlockHtml({ label: '발표Q', text: cd.presQ })}
        </div>
      ` : ''}
    </div>

    <button id="btn-submit" class="btn-primary submit-btn">${submitBtnLabel}</button>
    <div style="height:24px"></div>
  `;

  document.getElementById('btn-submit').onclick = handleSubmit;
}

function handleSubmit() {
  const answers = {};
  document.querySelectorAll('.qa-textarea').forEach(ta => {
    const val = ta.value.trim();
    if (val) answers[ta.dataset.question] = val;
  });

  if (Object.keys(answers).length === 0) {
    const first = document.querySelector('.qa-textarea');
    if (first) {
      first.classList.add('shake');
      first.style.borderColor = '#EF4444';
      first.focus();
      setTimeout(() => {
        first.classList.remove('shake');
        first.style.borderColor = '';
      }, 600);
    }
    showToast('최소 한 개 이상 답변을 입력해 주세요');
    return;
  }
  storage.setSubmission(state.currentGroup, state.currentCase, answers);
  renderActivityContent();
  showToast('제출되었습니다!');
}

// ===== FACILITATOR SCREEN =====
function renderFacilitator() {
  renderGroupCountButtons();
  renderFacilitatorContent();
  updateSyncStatus(true);
}

function renderGroupCountButtons() {
  const count = storage.getGroupCount();
  document.querySelectorAll('.count-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.count) === count);
  });
  document.getElementById('group-count-display').textContent = `현재 설정: ${count}조`;
}

function renderFacilitatorContent() {
  renderGroupStatusRow();
  renderSubmissionCards();
}

function renderGroupStatusRow() {
  const count = storage.getGroupCount();
  const container = document.getElementById('group-status-row');
  let html = '';
  for (let g = 1; g <= count; g++) {
    const selectedCase = storage.getGroupCase(g);
    const submitted = selectedCase ? !!storage.getSubmission(g, selectedCase) : false;
    const cls = submitted ? 'status-chip done' : selectedCase ? 'status-chip selected' : 'status-chip pending';
    html += `
      <div class="${cls}">
        <span class="chip-group">${g}조</span>
        <span class="chip-case">${selectedCase ? `Case ${selectedCase}` : '—'}</span>
        ${submitted ? '<span class="chip-check">✓</span>' : ''}
      </div>
    `;
  }
  container.innerHTML = html;
}

function renderSubmissionCards() {
  const count = storage.getGroupCount();
  const allSubs = storage.getAllSubmissions(count);
  const casesToShow = state.facilitatorFilter === 'all' ? ['A', 'B', 'C'] : [state.facilitatorFilter];
  const container = document.getElementById('facilitator-cards');

  container.innerHTML = casesToShow.map(caseKey => {
    const cd = CASES[caseKey];
    const subs = allSubs.filter(s => s.caseKey === caseKey).sort((a, b) => a.group - b.group);

    const mainQs = cd.questions.filter(q => !q.label.startsWith('추가'));
    const extraQs = cd.questions.filter(q => q.label.startsWith('추가'));

    const questionsHtml = `
      <div class="f-q-list">
        ${mainQs.map(q => `
          <div class="f-q-item">
            <span class="q-label">${q.label}</span>
            <span class="q-text">${q.text}</span>
          </div>
        `).join('')}
        ${extraQs.length ? `
          <div class="extra-divider" style="margin:10px 0 10px">추가 토의</div>
          ${extraQs.map(q => `
            <div class="f-q-item">
              <span class="q-label">${q.label}</span>
              <span class="q-text">${q.text}</span>
            </div>
          `).join('')}
        ` : ''}
        ${cd.presQ ? `
          <div class="extra-divider pres-divider" style="margin:10px 0 10px">발표 질문</div>
          <div class="f-q-item">
            <span class="q-label">발표Q</span>
            <span class="q-text">${cd.presQ}</span>
          </div>
        ` : ''}
      </div>
    `;

    const subsHtml = subs.length === 0
      ? '<p class="empty-sub-msg">아직 제출된 답변이 없습니다</p>'
      : subs.map(sub => {
          const answers = sub.answers || {};
          const allQs = [
            ...cd.questions,
            ...(cd.presQ ? [{ label: '발표Q', text: cd.presQ, isPres: true }] : [])
          ];
          const qaHtml = allQs
            .filter(q => answers[q.label])
            .map((q, i, arr) => {
              const divider = q.isPres
                ? `<div class="extra-divider pres-divider" style="margin:8px 0 8px;font-size:10px">발표 질문</div>`
                : (q.label === '추가Q1' ? `<div class="extra-divider" style="margin:8px 0 8px;font-size:10px">추가 토의</div>` : '');
              return `
                ${divider}
                <div class="sub-qa-item">
                  <span class="sub-q-label">${q.label}</span>
                  <p class="sub-q-answer">${escapeHtml(answers[q.label])}</p>
                </div>
              `;
            }).join('');
          return `
            <div class="submission-card">
              <div class="sub-header">
                <span class="sub-group">${sub.group}조</span>
                <span class="sub-time">${formatTime(sub.submittedAt)}</span>
              </div>
              <div class="sub-qa-list">${qaHtml || '<p class="sub-empty">답변 없음</p>'}</div>
            </div>
          `;
        }).join('');

    return `
      <div class="case-section" id="f-case-${caseKey}">
        <div class="case-section-hd" onclick="toggleCaseSection('${caseKey}')">
          <div class="case-section-info">
            <span class="case-section-badge">Case ${caseKey}</span>
            <span class="case-section-title">${cd.subtitle}</span>
            <span class="case-section-route">${cd.route}</span>
          </div>
          <span class="case-section-chevron">▾</span>
        </div>
        <div class="case-section-body" id="f-case-body-${caseKey}">
          <div class="f-block f-scenario-block">
            <div class="f-block-label">시나리오</div>
            <p class="f-scenario-text">${cd.scenario}</p>
          </div>
          <div class="f-block f-questions-block">
            <div class="f-block-label">토의 질문</div>
            ${questionsHtml}
          </div>
          <div class="f-block f-subs-block">
            <div class="f-block-label f-subs-label">
              제출 답변
              <span class="f-sub-count">${subs.length}개</span>
            </div>
            ${subsHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleCaseSection(caseKey) {
  const section = document.getElementById(`f-case-${caseKey}`);
  section.classList.toggle('collapsed');
}

// ===== PRINT / SAVE =====
function handlePrint() {
  const count = storage.getGroupCount();
  const now = new Date();
  const dateStr = now.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  const timeStr = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });

  let caseSectionsHtml = '';
  for (const caseKey of ['A', 'B', 'C']) {
    const cd = CASES[caseKey];
    const subs = storage.getAllSubmissions(count)
      .filter(s => s.caseKey === caseKey)
      .sort((a, b) => a.group - b.group);
    if (subs.length === 0) continue;

    const allPrintQs = [
      ...cd.questions,
      ...(cd.presQ ? [{ label: '발표Q', text: cd.presQ, isPres: true }] : [])
    ];
    const questionsHtml = allPrintQs.map(q => {
      const divider = q.isPres
        ? `<div style="font-size:9px;font-weight:800;color:#FF6600;text-transform:uppercase;letter-spacing:.8px;margin:8px 0 6px;padding-top:6px;border-top:1px solid #E0E0E0">발표 질문</div>`
        : (q.label === '추가Q1' ? `<div style="font-size:9px;font-weight:800;color:#aaa;text-transform:uppercase;letter-spacing:.8px;margin:8px 0 6px;padding-top:6px;border-top:1px solid #E0E0E0">추가 토의</div>` : '');
      return `${divider}<div class="q-row">
        <span class="q-lbl">${q.label}</span>
        <span class="q-txt">${q.text}</span>
      </div>`;
    }).join('');

    const subsHtml = subs.map(sub => {
      const answers = sub.answers || {};
      const qaHtml = allPrintQs
        .filter(q => answers[q.label])
        .map(q => {
          const divider = q.isPres
            ? `<div style="font-size:9px;font-weight:800;color:#FF6600;text-transform:uppercase;letter-spacing:.8px;margin:6px 0 4px;padding-top:4px;border-top:1px solid #F0F0F0">발표 질문</div>`
            : (q.label === '추가Q1' ? `<div style="font-size:9px;font-weight:800;color:#aaa;text-transform:uppercase;letter-spacing:.8px;margin:6px 0 4px;padding-top:4px;border-top:1px solid #F0F0F0">추가 토의</div>` : '');
          return `${divider}<div class="ans-row">
            <span class="ans-lbl">${q.label}</span>
            <p class="ans-txt">${answers[q.label].replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\n/g,'<br>')}</p>
          </div>`;
        }).join('');
      return `
        <div class="sub-card">
          <div class="sub-card-hd">
            <strong>${sub.group}조</strong>
            <span>${formatTime(sub.submittedAt)} 제출</span>
          </div>
          <div class="sub-card-body">${qaHtml || '<p style="color:#aaa;font-size:11px">답변 없음</p>'}</div>
        </div>`;
    }).join('');

    caseSectionsHtml += `
      <div class="case-block">
        <div class="case-hd">
          <span class="case-badge-p">Case ${caseKey}</span>
          <div class="case-title-p">${cd.subtitle}</div>
          <div class="case-route-p">${cd.route}</div>
        </div>
        <div class="section-block">
          <div class="sec-lbl">시나리오</div>
          <p class="scenario-p">${cd.scenario}</p>
        </div>
        <div class="section-block">
          <div class="sec-lbl">토의 질문</div>
          <div class="q-list">${questionsHtml}</div>
        </div>
        <div class="section-block">
          <div class="sec-lbl">제출 답변 · ${subs.length}개</div>
          ${subsHtml}
        </div>
      </div>`;
  }

  if (!caseSectionsHtml) {
    showToast('아직 제출된 답변이 없습니다');
    return;
  }

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>제주항공 객실서비스 교육 결과 · ${dateStr}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Noto Sans KR',sans-serif;
  color:#1A1A1A;font-size:12px;line-height:1.65;padding:28px;max-width:860px;margin:0 auto}
.print-hd{display:flex;align-items:center;gap:14px;
  border-bottom:2.5px solid #FF6600;padding-bottom:14px;margin-bottom:28px}
.print-hd-icon{font-size:30px;color:#FF6600}
.print-hd-text h1{font-size:18px;font-weight:800;color:#FF6600;letter-spacing:1px}
.print-hd-text p{font-size:11px;color:#666;margin-top:3px}
.case-block{margin-bottom:32px;border:1.5px solid #E0E0E0;border-radius:8px;overflow:hidden;page-break-inside:avoid}
.case-hd{background:#FF6600;color:white;padding:12px 16px}
.case-badge-p{font-size:9px;font-weight:800;background:rgba(255,255,255,.25);
  padding:2px 8px;border-radius:12px;display:inline-block;margin-bottom:5px;letter-spacing:.5px}
.case-title-p{font-size:13px;font-weight:700;line-height:1.4;margin-bottom:3px}
.case-route-p{font-size:10px;opacity:.85}
.section-block{padding:10px 16px;border-bottom:1px solid #F0F0F0}
.section-block:last-child{border-bottom:none}
.sec-lbl{font-size:9px;font-weight:800;color:#FF6600;text-transform:uppercase;letter-spacing:.8px;margin-bottom:7px}
.scenario-p{font-size:11px;color:#333;line-height:1.8}
.q-list{}
.q-row{display:flex;gap:8px;padding:4px 0;border-bottom:1px solid #F8F8F8;align-items:flex-start}
.q-row:last-child{border-bottom:none}
.q-lbl{font-size:9px;font-weight:800;color:#FF6600;min-width:38px;white-space:nowrap;padding-top:1px;flex-shrink:0}
.q-txt{font-size:11px;color:#333}
.sub-card{border:1px solid #E8E8E8;border-radius:6px;margin-bottom:8px;overflow:hidden}
.sub-card:last-child{margin-bottom:0}
.sub-card-hd{display:flex;justify-content:space-between;align-items:center;
  background:#F7F7F7;padding:6px 10px;font-size:11px;border-bottom:1px solid #EBEBEB}
.sub-card-hd strong{font-weight:800;font-size:12px}
.sub-card-hd span{color:#999;font-size:10px}
.sub-card-body{padding:8px 10px}
.ans-row{display:flex;gap:8px;padding:5px 0;border-bottom:1px solid #F8F8F8;align-items:flex-start}
.ans-row:last-child{border-bottom:none}
.ans-lbl{font-size:9px;font-weight:800;color:#FF6600;min-width:38px;white-space:nowrap;padding-top:2px;flex-shrink:0}
.ans-txt{font-size:11px;color:#333;line-height:1.65;margin:0}
@media print{body{padding:0}.case-block{page-break-inside:avoid}}
</style>
</head>
<body>
<div class="print-hd">
  <div class="print-hd-icon">✈</div>
  <div class="print-hd-text">
    <h1>JEJU AIR 객실서비스 교육</h1>
    <p>조별 토의 활동 결과 &nbsp;·&nbsp; ${dateStr} ${timeStr} 저장</p>
  </div>
</div>
${caseSectionsHtml}
</body></html>`;

  const win = window.open('', '_blank');
  if (!win) {
    showToast('팝업이 차단되었습니다. 브라우저에서 팝업을 허용해 주세요.');
    return;
  }
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 600);
}

function updateSyncStatus(ok) {
  const el = document.getElementById('refresh-countdown');
  if (el) el.textContent = ok ? '● 실시간 연결됨' : '○ 연결 중...';
  if (el) el.style.color = ok ? '#22C55E' : '#999';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  setupFirebaseListeners();
  renderGroupSelect();

  // 진행자 화면 진입
  document.getElementById('btn-go-facilitator').onclick = () => {
    document.getElementById('facilitator-pw-input').value = '';
    document.getElementById('pw-error').classList.add('hidden');
    showScreen('screen-facilitator-login');
  };

  // 케이스 선택 화면 뒤로가기
  document.getElementById('btn-back-from-case').onclick = () => {
    showScreen('screen-group-select');
  };

  // 활동 화면 뒤로가기
  document.getElementById('btn-back-to-groups').onclick = () => {
    renderGroupSelect();
    showScreen('screen-group-select');
  };

  // 케이스 변경 버튼 (미제출 상태에서만 표시됨)
  document.getElementById('btn-change-case').onclick = () => {
    storage.clearGroupCase(state.currentGroup);
    state.currentCase = null;
    document.getElementById('case-select-group-name').textContent = `${state.currentGroup}조`;
    renderCaseSelectGrid();
    showScreen('screen-case-select');
  };

  // 비밀번호 확인
  const pwConfirm = () => {
    const pw = document.getElementById('facilitator-pw-input').value;
    if (pw === '1234') {
      document.getElementById('pw-error').classList.add('hidden');
      showScreen('screen-facilitator');
      renderFacilitator();
    } else {
      document.getElementById('pw-error').classList.remove('hidden');
      document.getElementById('facilitator-pw-input').value = '';
    }
  };
  document.getElementById('btn-pw-confirm').onclick = pwConfirm;
  document.getElementById('facilitator-pw-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') pwConfirm();
  });

  // 로그인 화면 뒤로가기
  document.getElementById('btn-pw-back').onclick = () => {
    showScreen('screen-group-select');
  };

  // 진행자 나가기
  document.getElementById('btn-facilitator-exit').onclick = () => {
    renderGroupSelect();
    showScreen('screen-group-select');
  };

  // 조 수 설정
  document.querySelectorAll('.count-btn').forEach(btn => {
    btn.onclick = () => {
      storage.setGroupCount(parseInt(btn.dataset.count));
      renderGroupCountButtons();
      renderFacilitatorContent();
    };
  });

  // 케이스 필터
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
      state.facilitatorFilter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSubmissionCards();
    };
  });

  // 저장 / 인쇄
  document.getElementById('btn-save-all').onclick = handlePrint;

  // 수동 새로고침
  document.getElementById('btn-manual-refresh').onclick = () => {
    renderFacilitatorContent();
  };

  // 전체 초기화
  document.getElementById('btn-reset-all').onclick = () => {
    if (confirm('모든 조의 케이스 선택과 제출 답변을 초기화하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) {
      storage.clearAll();
      renderFacilitatorContent();
      showToast('초기화되었습니다');
    }
  };
});
