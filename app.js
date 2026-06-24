let state = {
  chapterId: null,
  subtopicId: null,
  expandedChapter: null,
  tab: "notes", // notes | mcqs | quiz
  jumble: false,
  quiz: {
    questions: [],
    current: 0,
    score: 0,
    answered: [],
    mode: "menu" // menu | running | result
  }
};

function getChapter(id) {
  return courseData.chapters.find(c => c.id === id);
}

function getSubtopic(chapterId, subtopicId) {
  const ch = getChapter(chapterId);
  return ch ? ch.subtopics.find(s => s.id === subtopicId) : null;
}

function allMcqsForChapter(chapterId) {
  const ch = getChapter(chapterId);
  if (!ch) return [];
  let all = [];
  ch.subtopics.forEach(s => { all = all.concat(s.mcqs); });
  return all;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderSidebar() {
  const nav = document.getElementById("sidebar");
  nav.innerHTML = "";

  if (state.expandedChapter === null) {
    state.expandedChapter = state.chapterId || courseData.chapters[0].id;
  }

  courseData.chapters.forEach(chapter => {
    const isOpen = state.expandedChapter === chapter.id;

    const h3 = document.createElement("h3");
    h3.className = "chapter-toggle" + (isOpen ? " open" : "");
    h3.textContent = chapter.title;
    h3.onclick = () => {
      state.expandedChapter = isOpen ? null : chapter.id;
      renderSidebar();
    };
    nav.appendChild(h3);

    if (!isOpen) return;

    const list = document.createElement("div");
    list.className = "chapter-list";
    chapter.subtopics.forEach(sub => {
      const btn = document.createElement("button");
      btn.className = "subtopic-btn" + (state.chapterId === chapter.id && state.subtopicId === sub.id ? " active" : "");
      btn.textContent = sub.title;
      btn.onclick = () => {
        state.chapterId = chapter.id;
        state.subtopicId = sub.id;
        state.expandedChapter = chapter.id;
        state.tab = "notes";
        renderAll();
      };
      list.appendChild(btn);
    });
    nav.appendChild(list);
  });
}

function renderTabs() {
  const tabsDiv = document.getElementById("tabs");
  tabsDiv.innerHTML = "";

  const quizBtn = document.createElement("button");
  quizBtn.className = "tab-btn" + (state.tab === "quiz" && !state.subtopicId ? " active" : "");
  quizBtn.textContent = "Practice Quiz";
  quizBtn.onclick = () => {
    state.tab = "quiz";
    state.subtopicId = null;
    state.quiz.mode = "menu";
    renderAll();
  };
  tabsDiv.appendChild(quizBtn);

  if (!state.subtopicId) return;

  ["notes", "mcqs", "quiz"].forEach(tab => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (state.tab === tab ? " active" : "");
    btn.textContent = tab === "notes" ? "Notes" : tab === "mcqs" ? "MCQs" : "Quiz (this topic)";
    btn.onclick = () => {
      state.tab = tab;
      if (tab === "quiz") {
        const sub = getSubtopic(state.chapterId, state.subtopicId);
        startQuiz(sub.mcqs);
      }
      renderAll();
    };
    tabsDiv.appendChild(btn);
  });
}

function renderContent() {
  const main = document.getElementById("content");
  main.innerHTML = "";

  if (state.tab === "quiz" && !state.subtopicId) {
    renderQuiz();
    return;
  }

  if (!state.subtopicId) {
    main.innerHTML = `<div class="card"><h2>Welcome</h2><p style="text-align:center">Select a subtopic from the left sidebar to view notes/MCQs, or click "Practice Quiz" above to start a quiz across the whole unit.</p></div>`;
    return;
  }

  const sub = getSubtopic(state.chapterId, state.subtopicId);
  if (!sub) return;

  if (state.tab === "notes") {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2>${sub.title}</h2>`;
    if (!sub.notes || sub.notes.length === 0) {
      const p = document.createElement("p");
      p.style.textAlign = "center";
      p.style.color = "var(--muted)";
      p.textContent = "This site contains only the MCQ question bank shared by the faculty. Use the MCQs or Quiz tab above to study.";
      card.appendChild(p);
    } else {
      const ul = document.createElement("ul");
      ul.className = "notes-list";
      sub.notes.forEach(n => {
        const li = document.createElement("li");
        li.textContent = n;
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }
    main.appendChild(card);
  } else if (state.tab === "mcqs") {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2>${sub.title} — MCQs</h2>`;
    sub.mcqs.forEach((m, i) => {
      const div = document.createElement("div");
      div.className = "mcq-item";
      const qDiv = document.createElement("div");
      qDiv.className = "mcq-question";
      qDiv.textContent = `${i + 1}. ${m.q}`;
      div.appendChild(qDiv);
      const ol = document.createElement("ul");
      ol.className = "mcq-options";
      m.options.forEach((opt, idx) => {
        const li = document.createElement("li");
        li.textContent = opt;
        if (m.answer !== null && idx === m.answer) li.classList.add("correct");
        ol.appendChild(li);
      });
      div.appendChild(ol);
      if (m.answer === null) {
        const note = document.createElement("div");
        note.className = "no-answer-note";
        note.textContent = "Note: the source answer key did not match any listed option for this question, so no option is marked correct.";
        div.appendChild(note);
      }
      if (m.solution) {
        const sol = document.createElement("div");
        sol.className = "mcq-solution";
        sol.innerHTML = `<strong>Solution:</strong> ${m.solution}`;
        div.appendChild(sol);
      }
      card.appendChild(div);
    });
    main.appendChild(card);
  } else if (state.tab === "quiz") {
    renderQuiz();
  }
}

function startQuiz(questionPool, count) {
  let pool = questionPool;
  if (count && count < pool.length) {
    pool = shuffle(pool).slice(0, count);
  } else if (state.quizRandom) {
    pool = shuffle(pool);
  }
  if (state.jumble) {
    pool = pool.map(q => {
      const optIdx = q.options.map((o, i) => i);
      const shuffled = shuffle(optIdx);
      return {
        q: q.q,
        options: shuffled.map(i => q.options[i]),
        answer: q.answer === null ? null : shuffled.indexOf(q.answer),
        solution: q.solution
      };
    });
  }
  state.quiz = {
    questions: pool,
    current: 0,
    score: 0,
    answered: new Array(pool.length).fill(null),
    mode: "running"
  };
}

function renderQuiz() {
  const main = document.getElementById("content");
  const q = state.quiz;

  if (!state.subtopicId && q.mode === "menu") {
    const card = document.createElement("div");
    card.className = "card quiz-menu";
    card.innerHTML = `<h2>Practice Quiz — Unit I</h2><p style="color:var(--muted)">Choose how many questions you want to attempt (random from all Unit I topics)</p>`;
    const ul = document.createElement("ul");
    [10, 25, 50, 100, "All"].forEach(n => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = n === "All" ? `All Questions` : `${n} Random Questions`;
      btn.onclick = () => {
        state.quizRandom = true;
        const pool = allMcqsForChapter(state.chapterId || courseData.chapters[0].id);
        startQuiz(pool, n === "All" ? pool.length : n);
        renderAll();
      };
      li.appendChild(btn);
      ul.appendChild(li);
    });
    const seqLi = document.createElement("li");
    const seqBtn = document.createElement("button");
    seqBtn.textContent = "Sequential (all topics, in order)";
    seqBtn.onclick = () => {
      state.quizRandom = false;
      const pool = allMcqsForChapter(state.chapterId || courseData.chapters[0].id);
      startQuiz(pool);
      renderAll();
    };
    seqLi.appendChild(seqBtn);
    ul.appendChild(seqLi);
    card.appendChild(ul);

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = state.jumble;
    checkbox.onchange = (e) => { state.jumble = e.target.checked; };
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" Jumble options"));
    card.appendChild(label);

    main.appendChild(card);
    return;
  }

  const card = document.createElement("div");
  card.className = "card";

  if (q.current >= q.questions.length) {
    card.innerHTML = `
      <div class="score-box">
        <p>Quiz Complete!</p>
        <div class="big-score">${q.score} / ${q.questions.length}</div>
        <p>${Math.round((q.score / q.questions.length) * 100)}% correct</p>
      </div>`;
    const navDiv = document.createElement("div");
    navDiv.className = "quiz-nav";
    const retryBtn = document.createElement("button");
    retryBtn.className = "primary-btn";
    retryBtn.textContent = "Retry";
    retryBtn.onclick = () => {
      startQuiz(q.questions);
      renderAll();
    };
    const menuBtn = document.createElement("button");
    menuBtn.className = "secondary-btn";
    menuBtn.textContent = "Back to Quiz Menu";
    menuBtn.onclick = () => {
      state.quiz.mode = "menu";
      state.subtopicId = null;
      renderAll();
    };
    navDiv.appendChild(retryBtn);
    navDiv.appendChild(menuBtn);
    card.appendChild(navDiv);
    main.appendChild(card);
    return;
  }

  const status = document.createElement("div");
  status.className = "status";
  status.textContent = `Question ${q.current + 1} of ${q.questions.length} | Score: ${q.score}`;
  main.appendChild(status);

  const question = q.questions[q.current];
  card.innerHTML = `<div class="mcq-question">${question.q}</div>`;

  const optionsDiv = document.createElement("div");
  question.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = opt;
    const already = q.answered[q.current] !== null;
    if (already && question.answer !== null) {
      if (idx === question.answer) btn.classList.add("reveal-correct");
      if (idx === q.answered[q.current] && idx !== question.answer) btn.classList.add("selected-wrong");
    } else if (already && idx === q.answered[q.current]) {
      btn.classList.add("selected-neutral");
    }
    btn.disabled = already;
    btn.onclick = () => {
      q.answered[q.current] = idx;
      if (question.answer !== null && idx === question.answer) q.score++;
      renderAll();
    };
    optionsDiv.appendChild(btn);
  });
  card.appendChild(optionsDiv);

  if (q.answered[q.current] !== null && question.answer === null) {
    const note = document.createElement("div");
    note.className = "no-answer-note";
    note.textContent = "Note: the source answer key did not match any listed option for this question, so this one isn't scored.";
    card.appendChild(note);
  }
  if (q.answered[q.current] !== null && question.solution) {
    const sol = document.createElement("div");
    sol.className = "mcq-solution";
    sol.innerHTML = `<strong>Solution:</strong> ${question.solution}`;
    card.appendChild(sol);
  }

  const navDiv = document.createElement("div");
  navDiv.className = "quiz-nav";
  const nextBtn = document.createElement("button");
  nextBtn.className = "primary-btn";
  nextBtn.textContent = q.current === q.questions.length - 1 ? "Finish" : "Next";
  nextBtn.disabled = q.answered[q.current] === null;
  nextBtn.onclick = () => { q.current++; renderAll(); };
  navDiv.appendChild(nextBtn);
  card.appendChild(navDiv);

  main.appendChild(card);
}

function renderAll() {
  renderSidebar();
  renderTabs();
  renderContent();
}

renderAll();
