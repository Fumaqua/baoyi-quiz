/* 保一考古 — application logic
 * Vanilla JS, localStorage, no build step required.
 */
(function () {
  "use strict";

  const DATA = window.QUIZ_DATA;
  const PAPERS = DATA.papers;
  const QUESTIONS = DATA.questions;
  const PAPER_BY_ID = Object.fromEntries(PAPERS.map((p) => [p.id, p]));
  const QUESTION_BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));
  const TONE = {
    fire113: "#b4552f",
    civildefense: "#34506b",
    basiclaw: "#5d6b44",
    chengqing: "#47707c",
    airdefense: "#7c5968",
    police: "#8a6a3b"
  };
  const STORE_KEY = "baoyi-quiz-v1";
  const LETTERS = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5" };

  const ICONS = {
    arrowLeft: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l2.4 5 5.6.8-4 3.9.9 5.5-4.9-2.6L7.1 19l.9-5.5-4-3.9L9.6 9z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',
    grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg>',
    target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
    flame: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c1 4-3 5-3 9a3 3 0 0 0 6 0c0-1-.3-2-1-3 3 1 4 3.5 4 6a6 6 0 0 1-12 0c0-5 4-7 6-12z"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 18.5V5.5A2.5 2.5 0 0 1 6.5 3"/></svg>',
    chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    save: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h11l3 3v13H5z"/><path d="M8 4v5h7V4M8 14h8"/></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v5M14 11v5"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 6.3M20 4v7h-7"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/></svg>',
    alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2.5 20h19z"/><path d="M12 9v5M12 17.5v.5"/></svg>'
  };

  /* ---------------- storage ---------------- */

  function defaultStore() {
    return { version: 1, progress: {}, history: [], daily: {}, createdAt: Date.now() };
  }

  function loadStore() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultStore();
      const parsed = JSON.parse(raw);
      return {
        version: 1,
        progress: parsed.progress && typeof parsed.progress === "object" ? parsed.progress : {},
        history: Array.isArray(parsed.history) ? parsed.history : [],
        daily: parsed.daily && typeof parsed.daily === "object" ? parsed.daily : {},
        createdAt: parsed.createdAt || Date.now()
      };
    } catch (err) {
      console.warn("讀取進度失敗", err);
      return defaultStore();
    }
  }

  let store = loadStore();

  function saveStore() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (err) {
      console.warn("儲存進度失敗", err);
    }
  }

  function ensureProgress(qid) {
    if (!store.progress[qid]) {
      store.progress[qid] = {
        attempts: 0,
        correct: 0,
        wrong: 0,
        correctStreak: 0,
        lastChoice: null,
        lastCorrect: null,
        lastAt: 0,
        bookmarked: false,
        cleared: false
      };
    }
    return store.progress[qid];
  }

  function recordAnswer(q, choice, correct) {
    const p = ensureProgress(q.id);
    p.attempts += 1;
    if (correct) {
      p.correct += 1;
      p.correctStreak += 1;
    } else {
      p.wrong += 1;
      p.correctStreak = 0;
      p.cleared = false;
    }
    p.lastChoice = choice;
    p.lastCorrect = correct;
    p.lastAt = Date.now();

    const key = dayKey();
    if (!store.daily[key]) store.daily[key] = { answered: 0, correct: 0 };
    store.daily[key].answered += 1;
    if (correct) store.daily[key].correct += 1;
    saveStore();
  }

  /* ---------------- helpers ---------------- */

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
  }

  function pad2(n) { return String(n).padStart(2, "0"); }

  function dayKey(date) {
    const d = date || new Date();
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  function shortDate(ts) {
    if (!ts) return "尚未作答";
    const d = new Date(ts);
    return `${d.getMonth() + 1}/${d.getDate()} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
  }

  function formatDuration(totalSeconds) {
    const s = Math.max(0, Math.floor(totalSeconds));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return h > 0 ? `${h}:${pad2(m)}:${pad2(sec)}` : `${pad2(m)}:${pad2(sec)}`;
  }

  function formatScore(value) {
    const n = Number(value) || 0;
    return Number.isInteger(n) ? String(n) : n.toFixed(1);
  }

  function shuffle(arr) {
    const out = arr.slice();
    for (let i = out.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function getPaper(id) { return PAPER_BY_ID[id] || PAPERS[0]; }

  function questionsOfPaper(paperId) {
    return QUESTIONS.filter((q) => q.paper === paperId);
  }

  function qCount(paperId) {
    const qs = questionsOfPaper(paperId);
    return {
      total: qs.length,
      tf: qs.filter((q) => q.type === "tf").length,
      mc: qs.filter((q) => q.type === "mc").length
    };
  }

  function isWrong(qid) {
    const p = store.progress[qid];
    return Boolean(p && p.wrong > 0 && p.correctStreak < 2 && !p.cleared);
  }

  function wrongEntries() {
    return Object.keys(store.progress)
      .filter((qid) => QUESTION_BY_ID[qid] && isWrong(qid))
      .map((qid) => ({ q: QUESTION_BY_ID[qid], p: store.progress[qid] }))
      .sort((a, b) => (b.p.lastAt || 0) - (a.p.lastAt || 0));
  }

  function savedEntries() {
    return Object.keys(store.progress)
      .filter((qid) => QUESTION_BY_ID[qid] && store.progress[qid].bookmarked)
      .map((qid) => ({ q: QUESTION_BY_ID[qid], p: store.progress[qid] }))
      .sort((a, b) => (b.p.lastAt || 0) - (a.p.lastAt || 0));
  }

  function overall() {
    let attempts = 0;
    let correct = 0;
    let answered = 0;
    let mastered = 0;
    Object.keys(store.progress).forEach((qid) => {
      if (!QUESTION_BY_ID[qid]) return;
      const p = store.progress[qid];
      if (p.attempts > 0) answered += 1;
      if (p.correctStreak >= 2) mastered += 1;
      attempts += p.attempts;
      correct += p.correct;
    });
    return {
      attempts,
      correct,
      answered,
      mastered,
      total: QUESTIONS.length,
      accuracy: attempts ? Math.round((correct / attempts) * 100) : 0,
      wrong: wrongEntries().length,
      saved: savedEntries().length
    };
  }

  function paperStats(paperId) {
    const qs = questionsOfPaper(paperId);
    let answered = 0;
    let correct = 0;
    let attempts = 0;
    let mastered = 0;
    qs.forEach((q) => {
      const p = store.progress[q.id];
      if (!p) return;
      if (p.attempts > 0) answered += 1;
      if (p.correctStreak >= 2) mastered += 1;
      attempts += p.attempts;
      correct += p.correct;
    });
    return {
      total: qs.length,
      answered,
      mastered,
      accuracy: attempts ? Math.round((correct / attempts) * 100) : 0,
      percent: qs.length ? Math.round((answered / qs.length) * 100) : 0
    };
  }

  function todayCount() {
    const d = store.daily[dayKey()];
    return d ? d.answered : 0;
  }

  function calcStreak() {
    const d = new Date();
    if (!store.daily[dayKey(d)] || !store.daily[dayKey(d)].answered) {
      d.setDate(d.getDate() - 1);
    }
    let count = 0;
    while (count < 3650) {
      const rec = store.daily[dayKey(d)];
      if (!rec || !rec.answered) break;
      count += 1;
      d.setDate(d.getDate() - 1);
    }
    return count;
  }

  function answerText(q, value) {
    if (!value) return "未作答";
    if (q.type === "tf") return value === "O" ? "○ 正確" : "✕ 錯誤";
    const opt = (q.options || []).find((o) => o.value === value);
    return opt ? `(${value}) ${opt.text}` : `(${value})`;
  }

  function answerKeyHtml(q) {
    return `<span class="answer-key">${esc(answerText(q, q.answer))}</span>`;
  }

  function paperName(id) { return getPaper(id).name; }

  /* ---------------- UI state ---------------- */

  let session = null;
  let lastResult = null;
  let currentView = "home";
  let timerId = null;
  let toastTimer = null;
  let modalConfirm = null;
  const ui = {
    wrongTab: "all",
    savedTab: "all",
    setup: { paper: "all", count: 20, time: 15 },
    paletteOpen: false
  };

  const app = document.getElementById("app");
  const modalRoot = document.getElementById("modal-root");
  const toastEl = document.getElementById("toast");

  /* ---------------- navigation ---------------- */

  function go(path) {
    const target = `#${path}`;
    if (location.hash === target) {
      renderRoute();
    } else {
      location.hash = target;
    }
  }

  function parseRoute() {
    return (location.hash || "#home").replace(/^#\/?/, "").split("?")[0] || "home";
  }

  function renderRoute() {
    clearTimer();
    closeModal();
    currentView = parseRoute();
    ui.paletteOpen = false;

    const routes = {
      home: renderHome,
      wrong: renderWrong,
      saved: renderSaved,
      stats: renderStats,
      setup: renderSetup,
      quiz: renderQuiz,
      result: renderResult
    };

    if (currentView === "quiz" && !session) currentView = "home";
    if (currentView === "result" && !lastResult) currentView = "home";

    const renderer = routes[currentView] || renderHome;
    renderer();
    updateChrome();
    window.scrollTo(0, 0);
  }

  function viewTitle() {
    if (currentView === "home") return "首頁";
    if (currentView === "wrong") return "錯題本";
    if (currentView === "saved") return "收藏";
    if (currentView === "stats") return "統計";
    if (currentView === "setup") return "模擬測驗";
    if (currentView === "quiz") return session ? session.title : "練習";
    if (currentView === "result") {
      if (!lastResult || lastResult.mode !== "exam") return "練習結果";
      return lastResult.origin && lastResult.origin.formal ? "正式考試結果" : "測驗結果";
    }
    return "首頁";
  }

  function updateChrome() {
    const title = viewTitle();
    document.getElementById("topbar-title").textContent = title;
    document.title = `${title === "首頁" ? "" : title + "｜"}保一考古`;
    document.getElementById("streak-text").textContent = `${calcStreak()} 天`;
    document.getElementById("today-pill").textContent = `今日 ${todayCount()} 題`;
    document.getElementById("nav-wrong-count").textContent = String(wrongEntries().length);

    document.querySelectorAll("[data-nav]").forEach((el) => {
      const nav = el.dataset.nav;
      const active =
        (nav === "home" && currentView === "home") ||
        (nav === "wrong" && currentView === "wrong") ||
        (nav === "saved" && currentView === "saved") ||
        (nav === "stats" && currentView === "stats");
      el.classList.toggle("is-active", active);
    });

    const side = document.getElementById("side-papers");
    if (side) {
      side.innerHTML = PAPERS.map((p) => {
        const s = paperStats(p.id);
        return `<button type="button" class="side-paper" data-action="paper" data-paper="${p.id}" style="--tone:${TONE[p.id]}">
          <span class="side-paper-dot"></span>
          <span class="side-paper-name">${esc(p.name)}</span>
          <span class="side-paper-count">${s.answered}/${s.total}</span>
        </button>`;
      }).join("");
    }
  }

  /* ---------------- home ---------------- */

  function renderHome() {
    const o = overall();
    const wrongs = wrongEntries();
    const streak = calcStreak();

    app.innerHTML = `<div class="view">
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow on-dark">113 年 · 替代役民防役專業訓練</span>
          <h1>保一<em>考古</em></h1>
          <p class="hero-desc">六份試卷、一百一十道題。先用練習把觀念補齊，再用模擬測驗檢查手感；錯過的題目會自動留在錯題本，直到你真正記住。</p>
          <div class="hero-meta">
            <span class="chip">6 份試卷</span>
            <span class="chip">110 題</span>
            <span class="chip">25 是非 · 85 選擇</span>
          </div>
          <div class="hero-actions">
            <button type="button" class="btn btn-primary btn-lg" data-action="formal-exam">
              ${ICONS.target}<span>正式考試</span>
            </button>
            <button type="button" class="btn btn-light btn-lg" data-action="quick">
              ${ICONS.play}<span>隨機 20 題</span>
            </button>
            <button type="button" class="btn btn-outline-light btn-lg" data-action="exam-setup">
              ${ICONS.clock}<span>模擬測驗</span>
            </button>
          </div>
          <p class="hero-note">正式考試：10 是非 + 15 選擇，每題 4 分，滿分 100。</p>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="paper-stack">
            <div class="paper-head"><b>保一考古</b><span>替代役民防役・專業訓練</span></div>
            <div class="paper-lines"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <div class="paper-stamp">必勝</div>
          </div>
        </div>
      </section>

      <section class="stat-strip">
        <div class="stat-card">
          <div class="stat-label">${ICONS.book}<span>已練習</span></div>
          <div class="stat-value"><b>${o.answered}</b><span>/ ${o.total} 題</span></div>
          <div class="stat-sub">完成度 ${Math.round((o.answered / o.total) * 100)}%</div>
        </div>
        <div class="stat-card accent">
          <div class="stat-label">${ICONS.target}<span>總正確率</span></div>
          <div class="stat-value"><b>${o.accuracy}</b><span>%</span></div>
          <div class="stat-sub">累計作答 ${o.attempts} 次</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${ICONS.flame}<span>連續練習</span></div>
          <div class="stat-value"><b>${streak}</b><span>天</span></div>
          <div class="stat-sub">今日已答 ${todayCount()} 題</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${ICONS.alert}<span>待加強</span></div>
          <div class="stat-value"><b>${wrongs.length}</b><span>題</span></div>
          <div class="stat-sub">連續答對 2 次即畢業</div>
        </div>
      </section>

      <div class="section-head">
        <div>
          <span class="eyebrow">試卷</span>
          <h2>選一份開始</h2>
          <p>依原卷順序練習，或直接進入模擬測驗。</p>
        </div>
        <a class="section-link" href="#stats">查看統計 ${ICONS.arrowRight}</a>
      </div>

      <section class="paper-grid">
        ${PAPERS.map((p) => paperCardHTML(p)).join("")}
      </section>

      <section class="wrong-banner">
        <span class="wrong-banner-icon">${ICONS.alert}</span>
        <div>
          <h3>${wrongs.length ? `錯題本還有 ${wrongs.length} 題` : "錯題本是空的"}</h3>
          <p>${wrongs.length ? "把不熟的題目集中掃一遍，比從頭再刷更有效率。" : "目前沒有待加強題目。繼續保持，或去收藏幾道容易忘的題目。"}</p>
        </div>
        <button type="button" class="btn ${wrongs.length ? "btn-primary" : "btn-paper"}" data-action="${wrongs.length ? "wrong-all" : "saved"}">
          ${wrongs.length ? "開始錯題衝刺" : "查看收藏"} ${ICONS.arrowRight}
        </button>
      </section>

      <div class="home-note">
        <span>※</span>
        <span><b>關於答案：</b>多數題目依原卷括號標記整理，以「原卷標記」標示；其中幾題已校正明顯錯誤，法規未明文或屬實務判斷者標為「參考答案」，建議搭配現行法規與講義複習。「防空避難」已補齊是非題 1–5 與選擇題 1–5；另新增「警察勤務介紹與協勤要領」全卷 20 題。</span>
      </div>
    </div>`;
  }

  function paperCardHTML(p) {
    const s = paperStats(p.id);
    const c = qCount(p.id);
    const wrong = wrongEntries().filter((e) => e.q.paper === p.id).length;
    return `<article class="paper-card" style="--tone:${TONE[p.id]}">
      <div class="paper-card-top">
        <span class="paper-badge">${esc(p.short)}</span>
        <span class="paper-percent">${s.percent}%</span>
      </div>
      <h3>${esc(p.name)}</h3>
      <div class="paper-sub">${esc(p.subtitle)}</div>
      <p class="paper-desc">${esc(p.description)}</p>
      <div class="paper-card-meta">
        <span><b>${c.total}</b> 題</span>
        <span>是非 <b>${c.tf}</b></span>
        <span>選擇 <b>${c.mc}</b></span>
      </div>
      <div class="paper-bar"><span style="width:${s.percent}%"></span></div>
      <div class="paper-actions">
        <button type="button" class="btn btn-ink btn-sm" data-action="paper" data-paper="${p.id}">
          ${ICONS.play}<span>開始練習</span>
        </button>
        <button type="button" class="btn btn-paper btn-sm" data-action="paper-wrong" data-paper="${p.id}" ${wrong ? "" : "disabled"}>
          錯題 ${wrong}
        </button>
      </div>
      ${p.answerNote ? `<div class="paper-note">${esc(p.answerNote)}</div>` : ""}
    </article>`;
  }

  /* ---------------- quiz engine ---------------- */

  function startQuiz(opts) {
    const config = {
      paperIds: opts.paperIds || [],
      count: opts.count || "all",
      mode: opts.mode || "practice",
      order: opts.order || "smart",
      source: opts.source || "all",
      timeLimit: opts.timeLimit || 0,
      questionIds: opts.questionIds || null,
      formal: Boolean(opts.formal),
      pointsPerQuestion: Number(opts.pointsPerQuestion) || 0,
      title: opts.title || ""
    };

    let pool;
    if (config.formal) {
      const tfPool = shuffle(QUESTIONS.filter((q) => q.type === "tf")).slice(0, 10);
      const mcPool = shuffle(QUESTIONS.filter((q) => q.type === "mc")).slice(0, 15);
      pool = shuffle([...tfPool, ...mcPool]);
    } else if (config.questionIds && config.questionIds.length) {
      pool = config.questionIds.map((id) => QUESTION_BY_ID[id]).filter(Boolean);
    } else {
      pool = QUESTIONS.slice();
      if (config.paperIds.length) {
        pool = pool.filter((q) => config.paperIds.includes(q.paper));
      }
      if (config.source === "wrong") pool = pool.filter((q) => isWrong(q.id));
      if (config.source === "saved") pool = pool.filter((q) => store.progress[q.id] && store.progress[q.id].bookmarked);
    }

    if (!pool.length) {
      showToast("這個範圍目前沒有題目");
      return;
    }

    if (config.mode === "exam" || config.order === "random") {
      pool = shuffle(pool);
    } else if (config.order === "smart") {
      pool = smartSort(pool);
    }

    if (config.count !== "all") {
      const n = Number(config.count);
      if (Number.isFinite(n) && n > 0) pool = pool.slice(0, n);
    }

    let title = config.title;
    if (!title) {
      if (config.mode === "exam") title = "模擬測驗";
      else if (config.paperIds.length === 1) title = getPaper(config.paperIds[0]).name;
      else if (config.source === "wrong") title = "錯題衝刺";
      else if (config.source === "saved") title = "收藏練習";
      else if (config.questionIds && config.questionIds.length === 1) title = "單題複習";
      else title = "綜合練習";
    }

    session = {
      mode: config.mode,
      title,
      qids: pool.map((q) => q.id),
      index: 0,
      answers: {},
      startedAt: Date.now(),
      timeLimit: config.timeLimit,
      endsAt: config.timeLimit ? Date.now() + config.timeLimit * 60 * 1000 : 0,
      submitted: false,
      config
    };
    lastResult = null;
    ui.paletteOpen = false;
    go("quiz");
  }

  function smartSort(pool) {
    return pool
      .map((q) => {
        const p = store.progress[q.id] || {};
        let score = 10;
        if (p.wrong > 0 && p.correctStreak < 2) score = 100;
        else if (!p.attempts) score = 55;
        if (p.lastCorrect === false) score += 15;
        return { q, score: score + Math.random() * 9 };
      })
      .sort((a, b) => b.score - a.score)
      .map((x) => x.q);
  }

  function currentQuestion() {
    if (!session) return null;
    return QUESTION_BY_ID[session.qids[session.index]] || null;
  }

  function renderQuiz() {
    if (!session) { renderHome(); return; }
    const q = currentQuestion();
    if (!q) { finishPractice(); return; }

    const total = session.qids.length;
    const index = session.index;
    const answered = session.answers[q.id];
    const reveal = session.mode === "practice" && answered && answered.revealed;
    const isExam = session.mode === "exam";
    const isFormal = Boolean(session.config.formal);
    const modeLabel = isFormal ? "正式考試" : isExam ? "模擬測驗" : "練習模式";
    const paper = getPaper(q.paper);
    const progress = Math.round(((index + 1) / total) * 100);
    const answeredCount = Object.keys(session.answers).length;

    const metaChips = [
      `<span class="chip">${esc(q.section)}</span>`,
      `<span class="chip">${q.type === "tf" ? "是非" : "選擇"}</span>`,
      q.source === "reference" ? '<span class="chip chip-red">參考答案</span>' : '<span class="chip chip-green">原卷標記</span>',
      isFormal ? '<span class="chip">每題 4 分</span>' : ""
    ].join("");

    const bookmark = store.progress[q.id] && store.progress[q.id].bookmarked;

    app.innerHTML = `<div class="view quiz-shell">
      <div class="quiz-top">
        <button type="button" class="icon-btn" data-action="quit" aria-label="離開練習">${ICONS.arrowLeft}</button>
        <div class="quiz-top-copy">
          <span class="eyebrow">${modeLabel} · ${esc(paper.short)}</span>
          <h2>${esc(session.title)}</h2>
        </div>
        <div class="quiz-top-right">
          <span class="quiz-clock" id="quiz-clock">${ICONS.clock}<span>00:00</span></span>
          <button type="button" class="icon-btn ${bookmark ? "is-on" : ""}" data-action="toggle-bookmark" data-id="${q.id}" aria-label="收藏這題" title="收藏這題">${ICONS.star}</button>
        </div>
      </div>

      <div class="quiz-progress-wrap">
        <div class="quiz-progress"><span style="width:${progress}%"></span></div>
        <span class="quiz-progress-label">${pad2(index + 1)} / ${pad2(total)}</span>
      </div>

      ${isExam ? `<div class="exam-bar">
        <span>已答 <b>${answeredCount}</b> / ${total} 題 · 未答 <b>${total - answeredCount}</b> 題</span>
        <span style="display:flex;gap:6px;">
          <button type="button" class="btn btn-paper btn-sm" data-action="palette">${ICONS.grid}<span>答題卡</span></button>
          <button type="button" class="btn btn-primary btn-sm" data-action="submit">交卷</button>
        </span>
      </div>` : ""}

      <article class="qcard" style="--tone:${TONE[q.paper]}">
        <div class="qmeta">
          <span class="qnum">Q${pad2(q.number)}</span>
          ${metaChips}
          <span class="spacer"></span>
          <span class="chip">${esc(paper.short)}</span>
        </div>
        <h1 class="qstem">${esc(q.stem)}</h1>
        ${renderOptions(q, answered, reveal, isExam)}
        ${reveal ? feedbackHTML(q, answered) : ""}
      </article>

      ${isExam && ui.paletteOpen ? paletteHTML() : ""}

      <div class="quiz-nav">
        <button type="button" class="btn btn-paper" data-action="prev" ${index === 0 ? "disabled" : ""}>${ICONS.arrowLeft}<span>上一題</span></button>
        <span class="spacer"></span>
        ${isExam
          ? `<button type="button" class="btn btn-ink" data-action="next">${index === total - 1 ? "檢查" : "下一題"}${ICONS.arrowRight}</button>`
          : `<button type="button" class="btn btn-ink" data-action="${index === total - 1 ? "finish" : "next"}" ${!answered ? "disabled" : ""}>${index === total - 1 ? "完成練習" : "下一題"}${ICONS.arrowRight}</button>`}
      </div>
      <div class="quiz-hint">${isExam ? "作答期間不顯示答案，交卷後一次檢討。" : "選答後立即顯示解析。可用 <kbd>1</kbd>–<kbd>4</kbd> 作答、<kbd>←</kbd><kbd>→</kbd> 切換。"}</div>
    </div>`;

    startTimer();
  }

  function renderOptions(q, answered, reveal, isExam) {
    const selected = answered ? answered.choice : null;
    const options = q.type === "tf" && (!q.options || !q.options.length)
      ? [{ value: "O", text: "正確" }, { value: "X", text: "錯誤" }]
      : q.options || [];
    const disabled = reveal ? "disabled" : "";

    if (q.type === "tf") {
      return `<div class="options tf-grid">
        ${options.map((opt) => {
          let cls = "tf-option";
          if (reveal) {
            if (opt.value === q.answer) cls += " is-correct";
            else if (opt.value === selected) cls += " is-wrong";
            else cls += " is-dim";
          } else if (selected === opt.value) {
            cls += " is-selected";
          }
          return `<button type="button" class="${cls}" data-action="answer" data-value="${opt.value}" ${disabled}>
            <span class="tf-symbol">${opt.value === "O" ? "○" : "✕"}</span>
            <span class="tf-label">${opt.value === "O" ? "正確" : "錯誤"}</span>
          </button>`;
        }).join("")}
      </div>`;
    }

    return `<div class="options">
      ${options.map((opt) => {
        let cls = "option";
        let mark = "";
        if (reveal) {
          if (opt.value === q.answer) { cls += " is-correct"; mark = ICONS.check; }
          else if (opt.value === selected) { cls += " is-wrong"; mark = ICONS.x; }
          else cls += " is-dim";
        } else if (selected === opt.value) {
          cls += " is-selected";
          mark = ICONS.check;
        }
        return `<button type="button" class="${cls}" data-action="answer" data-value="${opt.value}" ${disabled}>
          <span class="option-key">${esc(opt.value)}</span>
          <span class="option-text">${esc(opt.text)}</span>
          <span class="option-mark">${mark}</span>
        </button>`;
      }).join("")}
    </div>`;
  }

  function feedbackHTML(q, answered) {
    const correct = answered.correct;
    return `<div class="feedback ${correct ? "" : "is-wrong"}">
      <span class="feedback-icon">${correct ? ICONS.check : ICONS.x}</span>
      <div>
        <div class="feedback-head">
          <b>${correct ? "答對了" : "答錯了"}</b>
          <span>正確答案 ${answerKeyHtml(q)}</span>
        </div>
        <p>${esc(q.explanation || "本題尚無解析。")}</p>
        ${q.source === "reference" ? '<span class="chip chip-red reference-note">參考答案，建議搭配現行法規或講義複習</span>' : ""}
      </div>
    </div>`;
  }

  function paletteHTML() {
    const total = session.qids.length;
    return `<div class="palette">
      <div class="palette-head">
        <b>答題卡</b>
        <span class="chip">${Object.keys(session.answers).length} / ${total} 已答</span>
      </div>
      <div class="palette-grid">
        ${session.qids.map((qid, i) => {
          const ans = session.answers[qid];
          let cls = "palette-btn";
          if (ans) cls += " is-answered";
          if (i === session.index) cls += " is-current";
          return `<button type="button" class="${cls}" data-action="jump" data-index="${i}">${i + 1}</button>`;
        }).join("")}
      </div>
    </div>`;
  }

  function answerQuestion(value) {
    if (!session) return;
    const q = currentQuestion();
    if (!q) return;

    if (session.mode === "practice") {
      if (session.answers[q.id] && session.answers[q.id].revealed) return;
      const correct = value === q.answer;
      session.answers[q.id] = { choice: value, correct, revealed: true };
      recordAnswer(q, value, correct);
    } else {
      session.answers[q.id] = { choice: value };
    }
    renderQuiz();
    updateChrome();
  }

  function nextQuestion() {
    if (!session) return;
    if (session.mode === "practice") {
      const q = currentQuestion();
      if (!session.answers[q.id]) { showToast("先選一個答案，再繼續"); return; }
      if (session.index === session.qids.length - 1) { finishPractice(); return; }
    } else if (session.index === session.qids.length - 1) {
      openSubmitModal();
      return;
    }
    session.index += 1;
    ui.paletteOpen = false;
    renderQuiz();
  }

  function prevQuestion() {
    if (!session || session.index === 0) return;
    session.index -= 1;
    ui.paletteOpen = false;
    renderQuiz();
  }

  function finishPractice() {
    if (!session) return;
    const total = session.qids.length;
    const items = session.qids.map((qid) => {
      const q = QUESTION_BY_ID[qid];
      const a = session.answers[qid];
      return {
        qid,
        choice: a ? a.choice : null,
        correct: Boolean(a && a.correct)
      };
    });
    const correct = items.filter((i) => i.correct).length;
    const answered = items.filter((i) => i.choice).length;
    const result = {
      mode: session.mode,
      title: session.title,
      total,
      correct,
      answered,
      wrong: answered - correct,
      unanswered: total - answered,
      duration: Math.floor((Date.now() - session.startedAt) / 1000),
      items,
      origin: { ...session.config },
      finishedAt: Date.now()
    };
    pushHistory(result);
    lastResult = result;
    session = null;
    clearTimer();
    go("result");
  }

  function openSubmitModal() {
    if (!session) return;
    const total = session.qids.length;
    const answered = Object.keys(session.answers).length;
    const left = total - answered;
    openModal({
      kicker: "交卷",
      title: left ? `還有 ${left} 題未作答` : "確定要交卷嗎？",
      body: left
        ? `目前已答 ${answered} / ${total} 題。未作答的題目會以「未答」計入本次成績，但不會放進錯題本。`
        : `已答完 ${total} 題。交卷後會立即計分並顯示逐題檢討。`,
      confirmText: "交卷",
      onConfirm: () => submitExam(false)
    });
  }

  function submitExam(auto) {
    if (!session || session.submitted) return;
    session.submitted = true;
    clearTimer();
    const total = session.qids.length;
    const items = session.qids.map((qid) => {
      const q = QUESTION_BY_ID[qid];
      const a = session.answers[qid];
      const choice = a ? a.choice : null;
      const correct = Boolean(choice && choice === q.answer);
      if (choice) recordAnswer(q, choice, correct);
      return { qid, choice, correct };
    });
    const correct = items.filter((i) => i.correct).length;
    const answered = items.filter((i) => i.choice).length;
    const result = {
      mode: "exam",
      title: session.title,
      total,
      correct,
      answered,
      wrong: answered - correct,
      unanswered: total - answered,
      duration: session.timeLimit
        ? session.timeLimit * 60 - Math.max(0, Math.ceil((session.endsAt - Date.now()) / 1000))
        : Math.floor((Date.now() - session.startedAt) / 1000),
      items,
      origin: { ...session.config },
      finishedAt: Date.now(),
      autoSubmitted: Boolean(auto)
    };
    pushHistory(result);
    lastResult = result;
    session = null;
    go("result");
  }

  function pushHistory(result) {
    store.history.push({
      at: result.finishedAt,
      mode: result.mode,
      title: result.title,
      total: result.total,
      correct: result.correct,
      accuracy: result.total ? Math.round((result.correct / result.total) * 100) : 0,
      duration: result.duration
    });
    if (store.history.length > 300) store.history = store.history.slice(-300);
    saveStore();
  }

  /* ---------------- result ---------------- */

  function renderResult() {
    const r = lastResult;
    if (!r) { renderHome(); return; }
    const pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
    const points = Number(r.origin && r.origin.pointsPerQuestion) || 0;
    const isFormal = Boolean(r.origin && r.origin.formal);
    const maxScore = points ? Math.round(r.total * points * 10) / 10 : 0;
    const score = points ? Math.round(r.correct * points * 10) / 10 : 0;
    const ringPct = maxScore ? Math.round((score / maxScore) * 100) : pct;
    const ringValue = maxScore ? formatScore(score) : pct;
    const ringColor = pct >= 85 ? "#3e6a51" : pct >= 60 ? "#a98246" : "#b23a2b";
    const message =
      pct === 100 ? "全對。這份考古題已經被你吃掉了。" :
      r.answered === 0 ? "這次沒有作答。下次先從第一題開始，把節奏抓回來；未答不會進錯題本。" :
      pct >= 85 ? "很穩。再把錯題掃一遍，就萬無一失。" :
      pct >= 60 ? "在及格線之上。錯題本會幫你把洞補起來。" :
      "先把錯的逐題看過，再回來刷第二次。";
    const wrongItems = r.items.filter((i) => !i.correct);
    const reviewTitle = r.wrong && r.unanswered
      ? "這次錯的與未答的題目"
      : r.wrong
        ? "這次錯的題目"
        : r.unanswered
          ? "這次未作答的題目"
          : "這次沒有錯題";
    const reviewNote = r.wrong && r.unanswered
      ? "答錯與未答的題目都列在這裡，交卷後一次補齊。"
      : r.wrong
        ? "每一題都附上正確答案與簡短解析。"
        : r.unanswered
          ? "未答的題目不會進錯題本，可以在這裡先看過一輪。"
          : "可以再練一次，確認不是猜對的。";
    const reviewLabel = !wrongItems.length
      ? "沒有錯題"
      : r.wrong && r.unanswered
        ? `練習錯題與未答（${wrongItems.length}）`
        : r.wrong
          ? `只練錯題（${wrongItems.length}）`
          : `練習未答題（${wrongItems.length}）`;
    const timeText = formatDuration(r.duration);

    app.innerHTML = `<div class="view">
      <section class="result-hero">
        <div class="score-ring" style="--score:${ringPct};--ring:${ringColor}">
          <div class="score-inner"><b>${ringValue}</b><span>${maxScore ? `得分 / ${maxScore}` : "正確率"}</span></div>
        </div>
        <div class="result-copy">
          <span class="eyebrow">${isFormal ? "正式考試結果" : r.mode === "exam" ? "模擬測驗結果" : "練習完成"}</span>
          <h1>${r.answered === 0 ? "這次先熱身。" : pct >= 85 ? "漂亮的一輪。" : pct >= 60 ? "再多刷一輪。" : "先把錯題讀懂。"}</h1>
          <p>${isFormal ? `本卷滿分 ${maxScore} 分，每題 ${points} 分。` : ""}${esc(message)}${r.autoSubmitted ? " 本次因時間到自動交卷。" : ""}</p>
          <div class="result-metrics">
            <div><b>${r.correct}</b><span>答對</span></div>
            <div><b>${r.wrong}</b><span>答錯</span></div>
            <div><b>${r.unanswered}</b><span>未答</span></div>
            <div><b>${timeText}</b><span>花費時間</span></div>
          </div>
          <div class="result-actions">
            <button type="button" class="btn btn-ink" data-action="retry">${ICONS.refresh}<span>再練一次</span></button>
            <button type="button" class="btn btn-primary" data-action="review-wrong" ${wrongItems.length ? "" : "disabled"}>${ICONS.target}<span>${reviewLabel}</span></button>
            <button type="button" class="btn btn-paper" data-action="home">${ICONS.home}<span>回首頁</span></button>
          </div>
        </div>
      </section>

      <div class="section-head">
        <div>
          <span class="eyebrow">檢討</span>
          <h2>${reviewTitle}</h2>
          <p>${reviewNote}</p>
        </div>
        <span class="chip">${esc(r.title)}</span>
      </div>

      ${wrongItems.length ? `<div class="review-list">
        ${wrongItems.map((item) => {
          const q = QUESTION_BY_ID[item.qid];
          return `<article class="review-item">
            <div class="review-item-head">
              <span class="review-num">${q.type === "tf" ? "TF" + pad2(q.number) : "Q" + pad2(q.number)}</span>
              ${isFormal ? `<span class="chip" style="flex-shrink:0">${esc(getPaper(q.paper).short)}</span>` : ""}
              <div class="review-stem">${esc(q.stem)}</div>
            </div>
            <div class="review-answer">
              <span class="chip chip-red">你的答案：${esc(answerText(q, item.choice))}</span>
              <span class="chip chip-green">正確答案：${esc(answerText(q, q.answer))}</span>
              ${q.source === "reference" ? '<span class="chip">參考答案</span>' : ""}
            </div>
            <p class="review-explain">${esc(q.explanation || "本題尚無解析。")}</p>
          </article>`;
        }).join("")}
      </div>` : `<div class="review-empty">全部答對。錯題本沒有新增題目。</div>`}
    </div>`;
  }

  /* ---------------- wrong / saved ---------------- */

  function tabCounts(entries) {
    const map = { all: entries.length };
    PAPERS.forEach((p) => { map[p.id] = entries.filter((e) => e.q.paper === p.id).length; });
    return map;
  }

  function tabsHTML(active, counts, action) {
    return `<div class="tabs">
      <button type="button" class="tab-btn ${active === "all" ? "is-active" : ""}" data-action="${action}" data-tab="all">全部 <span class="tab-count">${counts.all || 0}</span></button>
      ${PAPERS.map((p) => `<button type="button" class="tab-btn ${active === p.id ? "is-active" : ""}" data-action="${action}" data-tab="${p.id}">${esc(p.short)} <span class="tab-count">${counts[p.id] || 0}</span></button>`).join("")}
    </div>`;
  }

  function renderWrong() {
    const all = wrongEntries();
    const counts = tabCounts(all);
    if (ui.wrongTab !== "all" && !PAPER_BY_ID[ui.wrongTab]) ui.wrongTab = "all";
    const list = ui.wrongTab === "all" ? all : all.filter((e) => e.q.paper === ui.wrongTab);

    app.innerHTML = `<div class="view">
      <div class="page-head">
        <div>
          <span class="eyebrow">複習</span>
          <h1>錯題本</h1>
          <p>答錯會進來；連續答對 2 次後自動畢業。也可以手動移除已弄懂的題目。</p>
        </div>
        <div class="page-head-actions">
          <button type="button" class="btn btn-primary" data-action="wrong-practice" data-tab="${ui.wrongTab}" ${list.length ? "" : "disabled"}>${ICONS.play}<span>練習這 ${list.length} 題</span></button>
        </div>
      </div>

      ${tabsHTML(ui.wrongTab, counts, "wrong-tab")}

      ${list.length ? `<div class="qlist">
        ${list.map(({ q, p }) => qrowHTML(q, p, "wrong")).join("")}
      </div>` : `<div class="empty" style="margin-top:16px;">
        <span class="empty-icon">${ICONS.check}</span>
        <h3>${all.length ? "這個分類沒有錯題" : "錯題本目前是空的"}</h3>
        <p>${all.length ? "切換其他試卷看看，或回首頁開始新一輪練習。" : "答錯的題目會自動出現在這裡，連續答對兩次就會畢業。"}</p>
        <div style="margin-top:16px;"><a class="btn btn-paper btn-sm" href="#home">回首頁</a></div>
      </div>`}
    </div>`;
  }

  function qrowHTML(q, p, kind) {
    const paper = getPaper(q.paper);
    return `<article class="qrow">
      <div class="qrow-main">
        <div class="qrow-meta">
          <span class="chip chip-red">${esc(paper.short)}</span>
          <span class="chip">${esc(q.section)}</span>
          ${kind === "wrong" ? `<span class="chip">錯 ${p.wrong} 次</span>` : ""}
        </div>
        <div class="qrow-stem">${esc(q.stem)}</div>
        <div class="qrow-sub">${kind === "wrong" ? `上次作答 ${shortDate(p.lastAt)}` : "收藏題目"}</div>
      </div>
      <div class="qrow-actions">
        <button type="button" class="btn btn-paper btn-sm" data-action="practice-one" data-id="${q.id}">練這題</button>
        ${kind === "wrong"
          ? `<button type="button" class="btn btn-ghost btn-sm" data-action="clear-wrong" data-id="${q.id}" title="從錯題本移除">${ICONS.check}</button>`
          : `<button type="button" class="btn btn-ghost btn-sm" data-action="unsave" data-id="${q.id}" title="取消收藏">${ICONS.x}</button>`}
      </div>
    </article>`;
  }

  function renderSaved() {
    const all = savedEntries();
    const counts = tabCounts(all);
    if (ui.savedTab !== "all" && !PAPER_BY_ID[ui.savedTab]) ui.savedTab = "all";
    const list = ui.savedTab === "all" ? all : all.filter((e) => e.q.paper === ui.savedTab);

    app.innerHTML = `<div class="view">
      <div class="page-head">
        <div>
          <span class="eyebrow">書籤</span>
          <h1>收藏</h1>
          <p>把容易忘、常搞混的題目收在這裡，考前只看這一份。</p>
        </div>
        <div class="page-head-actions">
          <button type="button" class="btn btn-ink" data-action="saved-practice" data-tab="${ui.savedTab}" ${list.length ? "" : "disabled"}>${ICONS.play}<span>練習這 ${list.length} 題</span></button>
        </div>
      </div>

      ${tabsHTML(ui.savedTab, counts, "saved-tab")}

      ${list.length ? `<div class="qlist">
        ${list.map(({ q, p }) => qrowHTML(q, p, "saved")).join("")}
      </div>` : `<div class="empty" style="margin-top:16px;">
        <span class="empty-icon">${ICONS.star}</span>
        <h3>${all.length ? "這個分類沒有收藏" : "還沒有收藏題目"}</h3>
        <p>練習時點題目右上角的星號，就會出現在這裡。</p>
        <div style="margin-top:16px;"><a class="btn btn-paper btn-sm" href="#home">去練習</a></div>
      </div>`}
    </div>`;
  }

  /* ---------------- setup ---------------- */

  function setupPoolCount() {
    const ids = ui.setup.paper === "all" ? PAPERS.map((p) => p.id) : [ui.setup.paper];
    return QUESTIONS.filter((q) => ids.includes(q.paper)).length;
  }

  function renderSetup() {
    const poolCount = setupPoolCount();
    const requested = ui.setup.count === "all" ? poolCount : Math.min(Number(ui.setup.count), poolCount);
    const timeLabel = ui.setup.time === 0 ? "不限時" : `${ui.setup.time} 分鐘`;

    app.innerHTML = `<div class="view">
      <div class="setup-head">
        <span class="eyebrow">模擬測驗</span>
        <h1>先設定，再上場。</h1>
        <p>測驗模式不顯示答案，交卷後才逐題檢討。建議至少 20 題、15 分鐘，模擬實際考試的節奏。</p>
      </div>

      <div class="setup-grid">
        <div class="setup-block">
          <h3>測驗範圍</h3>
          <div class="seg">
            <button type="button" class="seg-btn ${ui.setup.paper === "all" ? "is-active" : ""}" data-action="setup-option" data-key="paper" data-value="all">全部 6 卷</button>
            ${PAPERS.map((p) => `<button type="button" class="seg-btn ${ui.setup.paper === p.id ? "is-active" : ""}" data-action="setup-option" data-key="paper" data-value="${p.id}">${esc(p.short)}</button>`).join("")}
          </div>
          <p style="margin-top:12px;color:var(--ink-3);font-size:10.5px;">此範圍共 ${poolCount} 題。</p>
        </div>

        <div class="setup-block">
          <h3>題數</h3>
          <div class="seg">
            ${[10, 20].map((n) => `<button type="button" class="seg-btn ${ui.setup.count === n ? "is-active" : ""}" data-action="setup-option" data-key="count" data-value="${n}">${n} 題</button>`).join("")}
            <button type="button" class="seg-btn ${ui.setup.count === "all" ? "is-active" : ""}" data-action="setup-option" data-key="count" data-value="all">全部</button>
          </div>
          <p style="margin-top:12px;color:var(--ink-3);font-size:10.5px;">不足時以範圍內實際題數為準。</p>
        </div>

        <div class="setup-block">
          <h3>時間</h3>
          <div class="seg">
            ${[10, 15, 20].map((n) => `<button type="button" class="seg-btn ${ui.setup.time === n ? "is-active" : ""}" data-action="setup-option" data-key="time" data-value="${n}">${n} 分</button>`).join("")}
            <button type="button" class="seg-btn ${ui.setup.time === 0 ? "is-active" : ""}" data-action="setup-option" data-key="time" data-value="0">不限時</button>
          </div>
          <p style="margin-top:12px;color:var(--ink-3);font-size:10.5px;">時間到會自動交卷。</p>
        </div>

        <div class="setup-block">
          <h3>作答方式</h3>
          <p style="color:var(--ink-2);font-size:11.5px;line-height:1.9;">可自由跳題、修改答案；交卷前不顯示對錯。交卷後會列出未答與答錯的題目。</p>
        </div>
      </div>

      <div class="setup-summary">
        <div>範圍<b>${ui.setup.paper === "all" ? "全部試卷" : esc(getPaper(ui.setup.paper).name)}</b></div>
        <div>題數<b>${requested} 題</b></div>
        <div>時間<b>${timeLabel}</b></div>
        <button type="button" class="btn btn-light btn-lg" data-action="start-exam">${ICONS.play}<span>開始測驗</span></button>
      </div>
    </div>`;
  }

  /* ---------------- stats ---------------- */

  function renderStats() {
    const o = overall();
    const streak = calcStreak();
    const masteryPct = o.total ? Math.round((o.mastered / o.total) * 100) : 0;

    const days = [];
    for (let i = 6; i >= 0; i -= 1) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = dayKey(d);
      const rec = store.daily[key] || { answered: 0, correct: 0 };
      days.push({
        key,
        label: i === 0 ? "今天" : `${d.getMonth() + 1}/${d.getDate()}`,
        answered: rec.answered,
        correct: rec.correct,
        today: i === 0
      });
    }
    const maxDay = Math.max(1, ...days.map((d) => d.answered));

    const recent = store.history.slice(-5).reverse();

    app.innerHTML = `<div class="view">
      <div class="page-head">
        <div>
          <span class="eyebrow">進度</span>
          <h1>統計</h1>
          <p>所有紀錄只存在這台裝置的瀏覽器裡，不上傳。</p>
        </div>
      </div>

      <section class="stats-grid">
        <div class="stat-card">
          <div class="stat-label">${ICONS.book}<span>已練習</span></div>
          <div class="stat-value"><b>${o.answered}</b><span>/ ${o.total} 題</span></div>
          <div class="stat-sub">累計作答 ${o.attempts} 次</div>
        </div>
        <div class="stat-card accent">
          <div class="stat-label">${ICONS.target}<span>總正確率</span></div>
          <div class="stat-value"><b>${o.accuracy}</b><span>%</span></div>
          <div class="stat-sub">以所有作答次數計算</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${ICONS.flame}<span>連續練習</span></div>
          <div class="stat-value"><b>${streak}</b><span>天</span></div>
          <div class="stat-sub">今日已答 ${todayCount()} 題</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">${ICONS.check}<span>已掌握</span></div>
          <div class="stat-value"><b>${o.mastered}</b><span>題</span></div>
          <div class="stat-sub">連續答對 2 次</div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>近 7 天</h2>
          <span>每日作答題數</span>
        </div>
        <div class="chart">
          ${days.map((d) => `<div class="chart-col">
            <div class="chart-bar-wrap">
              <div class="chart-bar ${d.today ? "today" : ""}" style="height:${Math.max(3, Math.round((d.answered / maxDay) * 100))}%">
                ${d.answered ? `<span class="chart-val">${d.answered}</span>` : ""}
              </div>
            </div>
            <span class="chart-label ${d.today ? "today" : ""}">${d.label}</span>
          </div>`).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>各卷熟練度</h2>
          <span>已答題數 / 總題數 · 正確率</span>
        </div>
        ${PAPERS.map((p) => {
          const s = paperStats(p.id);
          return `<div class="paper-stat-row" style="--tone:${TONE[p.id]}">
            <div class="paper-stat-name">${esc(p.name)}<span>${esc(p.short)}</span></div>
            <div class="paper-stat-bar"><span style="width:${s.percent}%"></span></div>
            <div class="paper-stat-num">${s.answered}/${s.total}</div>
            <div class="paper-stat-pct">${s.accuracy}<small>%</small></div>
          </div>`;
        }).join("")}
      </section>

      <section class="panel">
        <div class="panel-head">
          <h2>掌握度</h2>
          <span>連續答對 2 次才算掌握</span>
        </div>
        <div class="mastery">
          <div class="mastery-ring" style="--pct:${masteryPct}">
            <div><b>${masteryPct}%</b><span>已掌握</span></div>
          </div>
          <div class="mastery-copy">
            <p>目前有 ${o.mastered} 題連續答對 2 次，還有 ${o.total - o.mastered} 題需要再見幾次。錯題本裡待加強 ${o.wrong} 題、收藏 ${o.saved} 題。</p>
            <div class="mastery-legend">
              <span><i></i>已掌握 ${o.mastered}</span>
              <span><i class="unseen"></i>未掌握 ${o.total - o.mastered}</span>
            </div>
          </div>
        </div>
      </section>

      ${recent.length ? `<section class="panel">
        <div class="panel-head"><h2>最近紀錄</h2><span>最多顯示 5 筆</span></div>
        ${recent.map((h) => `<div class="paper-stat-row" style="grid-template-columns:minmax(0,1fr) 90px 60px;">
          <div class="paper-stat-name">${esc(h.title)}<span>${new Date(h.at).getMonth() + 1}/${new Date(h.at).getDate()} ${pad2(new Date(h.at).getHours())}:${pad2(new Date(h.at).getMinutes())}</span></div>
          <div class="paper-stat-num">${h.correct}/${h.total} 題</div>
          <div class="paper-stat-pct">${h.accuracy}<small>%</small></div>
        </div>`).join("")}
      </section>` : ""}

      <div class="danger-zone">
        <div>
          <b style="font-family:var(--serif);font-size:13px;">重設所有進度</b>
          <p>會清除作答紀錄、錯題、收藏與統計，題庫本身不會受影響。</p>
        </div>
        <button type="button" class="btn btn-danger-ghost btn-sm" data-action="reset">${ICONS.trash}<span>重設</span></button>
      </div>
    </div>`;
  }

  /* ---------------- timer ---------------- */

  function clearTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function startTimer() {
    clearTimer();
    if (!session) return;
    const tick = () => {
      if (!session) { clearTimer(); return; }
      const el = document.getElementById("quiz-clock");
      if (!el) return;
      let seconds;
      if (session.mode === "exam" && session.timeLimit) {
        seconds = Math.max(0, Math.ceil((session.endsAt - Date.now()) / 1000));
        el.classList.toggle("is-low", seconds <= 60);
        if (seconds <= 0) {
          clearTimer();
          submitExam(true);
          return;
        }
      } else {
        seconds = Math.floor((Date.now() - session.startedAt) / 1000);
      }
      const label = el.querySelector("span");
      if (label) label.textContent = formatDuration(seconds);
      else el.innerHTML = `${ICONS.clock}<span>${formatDuration(seconds)}</span>`;
    };
    tick();
    timerId = setInterval(tick, 1000);
  }

  /* ---------------- modal / toast ---------------- */

  function openModal({ kicker, title, body, confirmText, cancelText, danger, onConfirm }) {
    modalConfirm = onConfirm || null;
    modalRoot.innerHTML = `<div class="modal-root is-open" id="modal-overlay">
      <div class="modal-backdrop" data-modal="cancel"></div>
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        ${kicker ? `<span class="eyebrow">${esc(kicker)}</span>` : ""}
        <h2 id="modal-title">${esc(title)}</h2>
        <p>${body}</p>
        <div class="modal-actions">
          <button type="button" class="btn btn-ghost" data-modal="cancel">${esc(cancelText || "取消")}</button>
          <button type="button" class="btn ${danger ? "btn-primary" : "btn-ink"}" data-modal="confirm">${esc(confirmText || "確定")}</button>
        </div>
      </div>
    </div>`;
    document.body.classList.add("modal-open");
    const focusBtn = modalRoot.querySelector('[data-modal="confirm"]');
    if (focusBtn) setTimeout(() => focusBtn.focus(), 30);
  }

  function closeModal() {
    modalRoot.innerHTML = "";
    modalConfirm = null;
    document.body.classList.remove("modal-open");
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-show"), 1900);
  }

  /* ---------------- actions ---------------- */

  function handleAction(action, el) {
    switch (action) {
      case "quick":
        startQuiz({ mode: "practice", count: 20, order: "smart" });
        break;
      case "exam-setup":
        go("setup");
        break;
      case "formal-exam":
        startQuiz({
          mode: "exam",
          formal: true,
          pointsPerQuestion: 4,
          count: "all",
          order: "random",
          timeLimit: 20,
          title: "正式考試"
        });
        break;
      case "paper": {
        const id = el.dataset.paper;
        startQuiz({ mode: "practice", paperIds: [id], count: "all", order: "seq", title: getPaper(id).name });
        break;
      }
      case "paper-wrong": {
        const id = el.dataset.paper;
        startQuiz({ mode: "practice", paperIds: [id], count: "all", order: "random", source: "wrong", title: `錯題｜${getPaper(id).name}` });
        break;
      }
      case "wrong-all":
        startQuiz({ mode: "practice", count: "all", order: "random", source: "wrong", title: "錯題衝刺" });
        break;
      case "wrong-practice": {
        const tab = el.dataset.tab || "all";
        startQuiz({
          mode: "practice",
          paperIds: tab === "all" ? [] : [tab],
          count: "all",
          order: "random",
          source: "wrong",
          title: tab === "all" ? "錯題衝刺" : `錯題｜${getPaper(tab).name}`
        });
        break;
      }
      case "saved-all":
        startQuiz({ mode: "practice", count: "all", order: "random", source: "saved", title: "收藏練習" });
        break;
      case "saved-practice": {
        const tab = el.dataset.tab || "all";
        startQuiz({
          mode: "practice",
          paperIds: tab === "all" ? [] : [tab],
          count: "all",
          order: "random",
          source: "saved",
          title: tab === "all" ? "收藏練習" : `收藏｜${getPaper(tab).name}`
        });
        break;
      }
      case "saved":
        go("saved");
        break;
      case "wrong-tab":
        ui.wrongTab = el.dataset.tab;
        renderWrong();
        break;
      case "saved-tab":
        ui.savedTab = el.dataset.tab;
        renderSaved();
        break;
      case "practice-one":
        startQuiz({ mode: "practice", questionIds: [el.dataset.id], count: "all", title: "單題複習" });
        break;
      case "clear-wrong": {
        const p = store.progress[el.dataset.id];
        if (p) { p.cleared = true; saveStore(); renderWrong(); updateChrome(); showToast("已從錯題本移除"); }
        break;
      }
      case "unsave": {
        const p = store.progress[el.dataset.id];
        if (p) { p.bookmarked = false; saveStore(); renderSaved(); showToast("已取消收藏"); }
        break;
      }
      case "toggle-bookmark": {
        const p = ensureProgress(el.dataset.id);
        p.bookmarked = !p.bookmarked;
        saveStore();
        renderQuiz();
        showToast(p.bookmarked ? "已加入收藏" : "已取消收藏");
        break;
      }
      case "answer":
        answerQuestion(el.dataset.value);
        break;
      case "next":
        nextQuestion();
        break;
      case "prev":
        prevQuestion();
        break;
      case "finish":
        finishPractice();
        break;
      case "jump":
        session.index = Number(el.dataset.index);
        ui.paletteOpen = false;
        renderQuiz();
        break;
      case "palette":
        ui.paletteOpen = !ui.paletteOpen;
        renderQuiz();
        break;
      case "submit":
        openSubmitModal();
        break;
      case "quit": {
        if (!session) { go("home"); break; }
        openModal({
          kicker: "離開",
          title: "要離開這次練習嗎？",
          body: session.mode === "exam"
            ? "尚未交卷，離開後這次作答不會計分。"
            : "已作答的題目已計入統計，離開後可以從錯題本再練。",
          confirmText: "離開",
          danger: true,
          onConfirm: () => {
            session = null;
            clearTimer();
            go("home");
          }
        });
        break;
      }
      case "retry": {
        if (!lastResult) break;
        const origin = { ...lastResult.origin };
        startQuiz(origin);
        break;
      }
      case "review-wrong": {
        if (!lastResult) break;
        const ids = lastResult.items.filter((i) => !i.correct).map((i) => i.qid);
        if (!ids.length) { showToast("這次沒有錯題"); break; }
        startQuiz({ mode: "practice", questionIds: ids, count: "all", title: "錯題複習" });
        break;
      }
      case "home":
        go("home");
        break;
      case "setup-option": {
        const key = el.dataset.key;
        let value = el.dataset.value;
        if (key === "count") value = value === "all" ? "all" : Number(value);
        if (key === "time") value = Number(value);
        ui.setup[key] = value;
        renderSetup();
        break;
      }
      case "start-exam": {
        const paperIds = ui.setup.paper === "all" ? PAPERS.map((p) => p.id) : [ui.setup.paper];
        startQuiz({
          mode: "exam",
          paperIds,
          count: ui.setup.count,
          timeLimit: ui.setup.time,
          order: "random",
          title: "模擬測驗"
        });
        break;
      }
      case "reset":
        openModal({
          kicker: "危險操作",
          title: "確定要重設進度嗎？",
          body: "所有作答紀錄、錯題、收藏與統計都會被清除，且無法復原。",
          confirmText: "確定重設",
          danger: true,
          onConfirm: () => {
            store = defaultStore();
            saveStore();
            renderStats();
            updateChrome();
            showToast("進度已重設");
          }
        });
        break;
      default:
        break;
    }
  }

  /* ---------------- events ---------------- */

  document.addEventListener("click", (event) => {
    const modalBtn = event.target.closest("[data-modal]");
    if (modalBtn) {
      const kind = modalBtn.dataset.modal;
      if (kind === "cancel") {
        closeModal();
      } else if (kind === "confirm") {
        const fn = modalConfirm;
        closeModal();
        if (fn) fn();
      }
      return;
    }

    const el = event.target.closest("[data-action]");
    if (!el) return;
    handleAction(el.dataset.action, el);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (modalRoot.querySelector(".modal-root")) { closeModal(); return; }
    }
    if (modalRoot.querySelector(".modal-root")) return;
    if (currentView !== "quiz" || !session) return;
    if (event.target && /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName)) return;

    const q = currentQuestion();
    if (event.key === "ArrowLeft") { event.preventDefault(); prevQuestion(); return; }
    if (event.key === "ArrowRight") { event.preventDefault(); nextQuestion(); return; }
    if (!q || session.mode !== "practice" || (session.answers[q.id] && session.answers[q.id].revealed)) return;

    if (q.type === "tf") {
      if (event.key.toLowerCase() === "o") { event.preventDefault(); answerQuestion("O"); }
      if (event.key.toLowerCase() === "x") { event.preventDefault(); answerQuestion("X"); }
    } else if (/^[1-5]$/.test(event.key)) {
      const opt = (q.options || []).find((o) => o.value === event.key);
      if (opt) { event.preventDefault(); answerQuestion(event.key); }
    }
  });

  window.addEventListener("hashchange", renderRoute);

  /* ---------------- boot ---------------- */

  function boot() {
    if (!location.hash) {
      try { history.replaceState(null, "", "#home"); } catch (err) { location.hash = "home"; }
    }
    renderRoute();
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch((err) => console.warn("Service worker 註冊失敗", err));
      });
    }
  }

  boot();
})();
