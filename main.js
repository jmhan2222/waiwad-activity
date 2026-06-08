// ===== CASES DATA =====
const CASES = {
  A: {
    subtitle: '난기류 상황인데, 지금 라면 드려도 될까요?',
    route: '인천 → 도쿄 나리타 / 만석 / Seat Belt Sign On',
    scenario: '에어카페 Cart 서비스 중 30C 승객 신라면 주문에 뜨거운 물을 붓던 찰나 Fasten Seat Belt Sign 점등 및 난기류 발생. 승객(30C) "저 에어카페 라면 주문한 것 좀 빨리 가져다 주세요. 배가 많이 고파서요." 전방 승무원들도 착석 상태 유지 중. 30C 승객은 짜증난 표정으로 After Galley 주시 중.',
    questions: [
      { label: 'Q1', text: '여러분이 생각하는 업무의 우선 순위는 무엇입니까?' },
      { label: 'Q2', text: '만약 당신이 사무장이라면 어떻게 지시하겠습니까?' },
      { label: 'Q3', text: '뜨거운 물을 부은 라면을 먼저 드리는 것은 허용 가능한 재량인가요, 조정 불가 영역인가요?' },
      { label: 'Q4', text: '짜증 섞인 표정의 승객(30C)과 눈이 마주쳤을 때, 어떻게 손님을 안정시킬 건가요?' },
      { label: 'Q5', text: '승객(30C)에게 라면을 제공할 때, 여러분의 첫 마디는 무엇인가요?' },
      { label: '추가Q1', text: '다음 편에 같은 상황이 생기면 편조는 어떻게 움직여야 할까요?' },
      { label: '추가Q2', text: '객실브리핑 시 사전에 난기류 관련 서비스 운영 방식을 논의했다면 어떻게 달라졌을까요?' },
    ]
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
    ]
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
    ]
  }
};

// ===== STORAGE =====
const storage = {
  get(key) {
    try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getGroupCount() {
    return this.get('activity:groupCount') || 5;
  },
  setGroupCount(n) {
    this.set('activity:groupCount', n);
  },
  getGroupCase(group) {
    return this.get(`activity:groupCase:${group}`);
  },
  setGroupCase(group, caseKey) {
    this.set(`activity:groupCase:${group}`, caseKey);
  },
  clearGroupCase(group) {
    localStorage.removeItem(`activity:groupCase:${group}`);
  },
  getSubmission(group, caseKey) {
    return this.get(`activity:submission:${group}:${caseKey}`);
  },
  setSubmission(group, caseKey, text) {
    this.set(`activity:submission:${group}:${caseKey}`, {
      group, caseKey, text, submittedAt: new Date().toISOString()
    });
  },
  getAllSubmissions(maxGroup) {
    const result = [];
    for (let g = 1; g <= maxGroup; g++) {
      const caseKey = this.getGroupCase(g);
      if (!caseKey) continue;
      const sub = this.getSubmission(g, caseKey);
      if (sub) result.push(sub);
    }
    return result;
  },
  clearAll() {
    Object.keys(localStorage)
      .filter(k => k.startsWith('activity:submission:') || k.startsWith('activity:groupCase:'))
      .forEach(k => localStorage.removeItem(k));
  }
};

// ===== APP STATE =====
const state = {
  currentGroup: null,
  currentCase: null,
  facilitatorFilter: 'all',
  refreshTimer: null,
  refreshCountdown: 30,
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

  const questionsHtml = cd.questions.map(q => `
    <div class="question-item">
      <span class="q-label">${q.label}</span>
      <span class="q-text">${q.text}</span>
    </div>
  `).join('');

  const inputHtml = existing ? `
    <div class="submitted-banner">
      제출 완료 ✓
      <small>${formatTime(existing.submittedAt)} 제출</small>
    </div>
    <textarea id="answer-input" class="answer-textarea">${escapeHtml(existing.text)}</textarea>
    <button id="btn-submit" class="btn-primary full-width" style="margin-top:12px">다시 제출</button>
  ` : `
    <textarea id="answer-input" class="answer-textarea" placeholder="우리 조의 생각을 자유롭게 적어주세요..."></textarea>
    <button id="btn-submit" class="btn-primary full-width" style="margin-top:12px">제출하기</button>
  `;

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
      <div class="card-label">토의 질문</div>
      <div class="questions-list">${questionsHtml}</div>
    </div>

    <div class="content-card">
      <div class="card-label">우리 조 생각</div>
      ${inputHtml}
    </div>

    <div style="height:24px"></div>
  `;

  document.getElementById('btn-submit').onclick = handleSubmit;
}

function handleSubmit() {
  const textarea = document.getElementById('answer-input');
  const text = textarea.value.trim();
  if (!text) {
    textarea.classList.add('shake');
    textarea.style.borderColor = '#EF4444';
    setTimeout(() => {
      textarea.classList.remove('shake');
      textarea.style.borderColor = '';
    }, 600);
    return;
  }
  storage.setSubmission(state.currentGroup, state.currentCase, text);
  renderActivityContent();
  showToast('제출되었습니다!');
}

// ===== FACILITATOR SCREEN =====
function renderFacilitator() {
  renderGroupCountButtons();
  renderFacilitatorContent();
  startRefreshTimer();
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
  const all = storage.getAllSubmissions(count);
  const filtered = state.facilitatorFilter === 'all'
    ? all
    : all.filter(s => s.caseKey === state.facilitatorFilter);

  filtered.sort((a, b) => a.group - b.group);

  const container = document.getElementById('facilitator-cards');

  if (filtered.length === 0) {
    container.innerHTML = '<p class="empty-msg">아직 제출된 답변이 없습니다</p>';
    return;
  }

  container.innerHTML = filtered.map(sub => `
    <div class="submission-card">
      <div class="sub-header">
        <span class="sub-group">${sub.group}조</span>
        <span class="sub-case">Case ${sub.caseKey}</span>
        <span class="sub-time">${formatTime(sub.submittedAt)}</span>
      </div>
      <p class="sub-text">${escapeHtml(sub.text)}</p>
    </div>
  `).join('');
}

function startRefreshTimer() {
  stopRefreshTimer();
  state.refreshCountdown = 30;
  updateCountdown();
  state.refreshTimer = setInterval(() => {
    state.refreshCountdown--;
    updateCountdown();
    if (state.refreshCountdown <= 0) {
      renderFacilitatorContent();
      state.refreshCountdown = 30;
    }
  }, 1000);
}

function stopRefreshTimer() {
  if (state.refreshTimer) {
    clearInterval(state.refreshTimer);
    state.refreshTimer = null;
  }
}

function updateCountdown() {
  const el = document.getElementById('refresh-countdown');
  if (el) el.textContent = `${state.refreshCountdown}초 후 자동 새로고침`;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
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
    stopRefreshTimer();
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

  // 수동 새로고침
  document.getElementById('btn-manual-refresh').onclick = () => {
    renderFacilitatorContent();
    state.refreshCountdown = 30;
    updateCountdown();
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
