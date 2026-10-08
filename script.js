// ==========================================================================
// TRIVIKRAM — JAVA PROGRAMMING LABORATORY RECORD
// Roll No: 25EU02067 | Dept of AI & ML | Batch 2025-2029
// BLUE AND WHITE THEME — NEO-BRUTALIST DEVELOPER WORKSPACE
// ==========================================================================

const student = {
  name: "Trivikram",
  rollNo: "25EU02067",
  year: "II Year (2nd Year)",
  branch: "Artificial Intelligence & Machine Learning (AI & ML)",
  section: "Section B",
  subject: "Java Programming (23AI5351)",
  college: "Siddhartha Academy of Higher Education (Deemed to be University)",
  batch: "2025 – 2029"
};

let currentWeekId = 1;
let currentProgramIdx = 0;
let currentFilter = "";

document.addEventListener("DOMContentLoaded", () => {
  renderTopChips();
  setupKeyboardShortcuts();
  navigateTo("home");
});

// ==========================================================================
// ROUTER & NAVIGATION
// ==========================================================================
function navigateTo(page, params = {}) {
  // Update chip active states
  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.page === page);
  });

  if (page === "home") {
    renderHome();
  } else if (page === "profile") {
    renderProfile();
  } else if (page.startsWith("week-")) {
    const id = parseInt(page.split("-")[1], 10);
    currentWeekId = id;
    currentFilter = "";
    renderWeek(id);
  } else if (page === "program") {
    const weekId = params.weekId !== undefined ? params.weekId : currentWeekId;
    const progIdx = params.programIdx !== undefined ? params.programIdx : currentProgramIdx;
    currentWeekId = weekId;
    currentProgramIdx = progIdx;
    renderProgram(weekId, progIdx);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render the top week navigation chips
function renderTopChips() {
  const container = document.getElementById("weekChipsContainer");
  if (!container || !window.weeks) return;

  container.innerHTML = weeks.map(w => {
    const isViva = w.id === 4 || w.id === 5;
    const label = isViva ? `W${String(w.id).padStart(2, "0")} (Viva)` : `W${String(w.id).padStart(2, "0")}`;
    return `
      <button class="chip" data-page="week-${w.id}" onclick="navigateTo('week-${w.id}')">
        ${label}
      </button>
    `;
  }).join("");
}

// ==========================================================================
// PAGE: HOME
// ==========================================================================
function renderHome() {
  const app = document.getElementById("app");
  if (!app) return;

  const totalProgs = weeks.reduce((sum, w) => sum + w.programs.length, 0);

  app.innerHTML = `
    <!-- Hero Header -->
    <section class="hero-section">
      <div class="hero-kicker">✦ Department of AI &bull; Batch 2025&ndash;2029</div>
      
      <h1 class="hero-big-title">
        JAVA LAB <span class="badge">RECORD</span>
      </h1>

      <p class="hero-lead">
        Interactive academic workspace for <strong>Trivikram (25EU02067)</strong>, 
        featuring 100+ verified object-oriented implementations, architectural comparative matrices, 
        and live terminal execution outputs.
      </p>

      <div class="hero-actions-row">
        <button class="btn-chunky primary" onclick="scrollToCurriculum()">
          🚀 Explore Weekly Labs &rarr;
        </button>
        <button class="btn-chunky" onclick="navigateTo('profile')">
          👤 View Student Profile
        </button>
        <button class="btn-chunky sky" onclick="openSearchModal()">
          🔍 Search All Programs (Ctrl+K)
        </button>
      </div>

      <!-- Student Profile Card (.me) -->
      <div class="me-card">
        <div class="me-avatar-wrap">
          <img class="me-avatar-img" src="assets/profile.png" alt="Trivikram" onerror="handleAvatarFallback(this)">
          <span class="me-verified-pill">Verified Record</span>
        </div>

        <div class="me-details">
          <div class="me-heading">
            Trivikram
            <span style="font-size: 13px; font-weight: 800; background: var(--blue-primary); color: #fff; padding: 2px 8px; border: 2px solid var(--ink);">AI &amp; ML</span>
          </div>
          <div class="me-subheading">B.Tech Undergraduate &bull; Section B &bull; 2025&ndash;2029</div>

          <div class="me-grid">
            <div class="me-item">
              <dt>Roll Number</dt>
              <dd>25EU02067</dd>
            </div>
            <div class="me-item">
              <dt>Academic Year</dt>
              <dd>II Year (2nd Year)</dd>
            </div>
            <div class="me-item">
              <dt>Branch &amp; Dept</dt>
              <dd>AI &amp; ML</dd>
            </div>
            <div class="me-item">
              <dt>Section</dt>
              <dd>Section B</dd>
            </div>
            <div class="me-item">
              <dt>Course &amp; Subject</dt>
              <dd>Java Programming (23AI5351)</dd>
            </div>
            <div class="me-item">
              <dt>University</dt>
              <dd>Siddhartha Academy</dd>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Metrics Stats Row -->
    <div class="stats-row">
      <div class="stat-tile">
        <div class="stat-num">11</div>
        <div class="stat-info">
          <span class="stat-label">Lab Weeks</span>
          <span class="stat-sub">Complete Curriculum</span>
        </div>
      </div>
      <div class="stat-tile">
        <div class="stat-num">${totalProgs}+</div>
        <div class="stat-info">
          <span class="stat-label">Programs</span>
          <span class="stat-sub">Executable Code</span>
        </div>
      </div>
      <div class="stat-tile">
        <div class="stat-num">100%</div>
        <div class="stat-info">
          <span class="stat-label">Compilation</span>
          <span class="stat-sub">Output Verified</span>
        </div>
      </div>
      <div class="stat-tile">
        <div class="stat-num">21</div>
        <div class="stat-info">
          <span class="stat-label">Java Standard</span>
          <span class="stat-sub">LTS Platform</span>
        </div>
      </div>
    </div>

    <!-- Weekly Tiles Grid -->
    <h2 class="section-headline" id="curriculumHeader">Weekly Laboratory Portfolio</h2>

    <div class="tiles">
      ${weeks.map(w => {
        const isViva = w.id === 4 || w.id === 5;
        const pillText = isViva ? "Viva Exam" : `${w.programs.length} Programs`;
        return `
          <div class="tile" onclick="navigateTo('week-${w.id}')">
            <div>
              <div class="tile-top">
                <b class="week-num">${String(w.id).padStart(2, "0")}</b>
                <span class="tile-pill">${pillText}</span>
              </div>
              <h3 class="tile-title">${w.title}</h3>
              <p class="tile-desc">${w.subtitle}</p>
            </div>
            <div class="tile-footer">
              <span>Inspect Lab Sheet</span>
              <span>&rarr;</span>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function scrollToCurriculum() {
  document.getElementById("curriculumHeader")?.scrollIntoView({ behavior: "smooth" });
}

// ==========================================================================
// PAGE: STUDENT PROFILE
// ==========================================================================
function renderProfile() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div style="margin-bottom: 20px;">
      <button class="btn-chunky" onclick="navigateTo('home')">&larr; Back to Home</button>
    </div>

    <div class="me-card">
      <div class="me-avatar-wrap">
        <img class="me-avatar-img" src="assets/profile.png" alt="Trivikram" onerror="handleAvatarFallback(this)">
        <span class="me-verified-pill">Official Record</span>
      </div>

      <div class="me-details">
        <div class="me-heading">
          Trivikram
          <span style="font-size: 13px; font-weight: 800; background: var(--blue-primary); color: #fff; padding: 2px 8px; border: 2px solid var(--ink);">Verified Student</span>
        </div>
        <div class="me-subheading">B.Tech in Artificial Intelligence &amp; Machine Learning (Batch 2025&ndash;2029)</div>

        <div class="me-grid">
          <div class="me-item">
            <dt>Student Name</dt>
            <dd>Trivikram</dd>
          </div>
          <div class="me-item">
            <dt>Roll Number</dt>
            <dd>25EU02067</dd>
          </div>
          <div class="me-item">
            <dt>Academic Year</dt>
            <dd>II Year (2nd Year)</dd>
          </div>
          <div class="me-item">
            <dt>Branch &amp; Dept</dt>
            <dd>AI &amp; ML</dd>
          </div>
          <div class="me-item">
            <dt>Section</dt>
            <dd>Section B</dd>
          </div>
          <div class="me-item">
            <dt>Course &amp; Subject</dt>
            <dd>Java Programming (23AI5351)</dd>
          </div>
          <div class="me-item">
            <dt>Institution</dt>
            <dd>Siddhartha Academy of Higher Education</dd>
          </div>
          <div class="me-item">
            <dt>Development Platform</dt>
            <dd>Oracle JDK &amp; OpenJDK 21 LTS</dd>
          </div>
        </div>
      </div>
    </div>

    <div class="aim-box" style="margin-top: 24px;">
      <div class="aim-label">Academic Portfolio Overview</div>
      <div class="aim-text" style="font-weight: 500; font-size: 14.5px; line-height: 1.7;">
        This virtual laboratory record documents the practical exercises, program solutions, 
        and compilation outputs developed by <strong>Trivikram</strong> for the Java Programming course. 
        It spans comprehensive foundational concepts, object-oriented design principles, custom package 
        hierarchies, interface polymorphism, robust exception handling, and concurrent multithreading.
      </div>
    </div>

    <h2 class="section-headline" style="margin-top: 32px;">Core Lab Competencies</h2>
    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px;">
      <span class="btn-chunky" style="box-shadow: 3px 3px 0 var(--ink);">Object-Oriented Programming (OOP)</span>
      <span class="btn-chunky" style="box-shadow: 3px 3px 0 var(--ink);">Dynamic Method Dispatch</span>
      <span class="btn-chunky" style="box-shadow: 3px 3px 0 var(--ink);">User-Defined Packages &amp; CLASSPATH</span>
      <span class="btn-chunky" style="box-shadow: 3px 3px 0 var(--ink);">Interface-Based Polymorphism</span>
      <span class="btn-chunky" style="box-shadow: 3px 3px 0 var(--ink);">Checked &amp; Unchecked Exceptions</span>
      <span class="btn-chunky" style="box-shadow: 3px 3px 0 var(--ink);">Byte &amp; Character Streams</span>
      <span class="btn-chunky" style="box-shadow: 3px 3px 0 var(--ink);">Multithreaded Synchronization</span>
      <span class="btn-chunky" style="box-shadow: 3px 3px 0 var(--ink);">Garbage Collection &amp; Memory Safety</span>
    </div>
  `;
}

// ==========================================================================
// PAGE: WEEK VIEW
// ==========================================================================
function renderWeek(weekId, filterQuery = "") {
  const app = document.getElementById("app");
  if (!app) return;

  const week = weeks.find(w => w.id === weekId);
  if (!week) return;

  // Week 1: 20-Parameter Comparative Table
  if (weekId === 1) {
    renderWeek1ComparativeTable(week);
    return;
  }

  // Week 4 & 5: Viva Voce Exams
  if (weekId === 4 || weekId === 5) {
    renderVivaView(week);
    return;
  }

  let progs = week.programs;
  if (filterQuery && filterQuery.trim()) {
    const q = filterQuery.toLowerCase().trim();
    progs = week.programs.filter((p, i) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      `program ${i + 1}`.includes(q)
    );
  }

  app.innerHTML = `
    <div style="margin-bottom: 16px;">
      <button class="btn-chunky" onclick="navigateTo('home')">&larr; Back to All Weeks</button>
    </div>

    <div class="week-banner">
      <div class="week-banner-top">
        <span class="week-banner-badge">WEEK ${String(week.id).padStart(2, "0")}</span>
        <span style="font-weight: 800; font-size: 13px; text-transform: uppercase;">
          ${week.programs.length} Program${week.programs.length === 1 ? "" : "s"} Assigned
        </span>
      </div>
      <h1 class="week-banner-title">${week.title}</h1>
      <p class="week-banner-sub">${week.subtitle}</p>

      <div class="filter-input-wrap">
        <input 
          type="text" 
          class="filter-input" 
          placeholder="Filter programs in Week ${week.id} by keyword (e.g. constructor, array, method)..." 
          value="${escapeHtml(filterQuery)}"
          oninput="handleWeekFilter(event, ${weekId})"
        >
      </div>
    </div>

    <div class="program-rows-list">
      ${progs.length > 0 ? progs.map(program => {
        const originalIndex = week.programs.indexOf(program);
        return `
          <div class="row" onclick="navigateTo('program', { weekId: ${week.id}, programIdx: ${originalIndex} })">
            <b class="prog-tag">P${String(originalIndex + 1).padStart(2, "0")}</b>
            <div class="row-content">
              <div class="row-title">${program.title}</div>
              <div class="row-desc">${program.description}</div>
            </div>
            <div class="row-arrow">&rarr;</div>
          </div>
        `;
      }).join("") : `
        <div class="viva-card" style="padding: 30px;">
          <h3>No programs matching "${escapeHtml(filterQuery)}"</h3>
          <p>Try searching for a different keyword or view all programs.</p>
        </div>
      `}
    </div>
  `;
}

function handleWeekFilter(event, weekId) {
  renderWeek(weekId, event.target.value);
}

// ==========================================================================
// WEEK 1: 20-PARAMETER COMPARATIVE TABLE (BLUE & WHITE)
// ==========================================================================
function renderWeek1ComparativeTable(week) {
  const app = document.getElementById("app");
  if (!app) return;

  const tableData = window.comparativeTableData || [];

  app.innerHTML = `
    <div style="margin-bottom: 16px;">
      <button class="btn-chunky" onclick="navigateTo('home')">&larr; Back to All Weeks</button>
    </div>

    <div class="week-banner">
      <div class="week-banner-top">
        <span class="week-banner-badge">WEEK 01</span>
        <span style="font-weight: 800; font-size: 13px; text-transform: uppercase;">
          20 Parameters &bull; 5 Languages
        </span>
      </div>
      <h1 class="week-banner-title">Comparative Table — Java, C, C++, Python &amp; JavaScript</h1>
      <p class="week-banner-sub">
        Comprehensive comparative study analyzing syntax, paradigm, compilation model, memory allocation, 
        and industry applications across 5 mainstream programming languages.
      </p>

      <div class="filter-input-wrap">
        <input 
          type="text" 
          id="tableFilterInput"
          class="filter-input" 
          placeholder="Filter comparative parameters (e.g. Memory, Speed, Creator, OOP)..." 
          oninput="filterTableRows(this.value)"
        >
      </div>
    </div>

    <div class="table-wrap">
      <table class="comp-tbl" id="mainCompTable">
        <thead>
          <tr>
            <th style="min-width: 170px;">Parameter</th>
            <th style="min-width: 210px;">Java (Java 21 LTS)</th>
            <th style="min-width: 210px;">C (ISO/IEC 9899)</th>
            <th style="min-width: 210px;">C++ (Modern C++)</th>
            <th style="min-width: 210px;">Python (3.12+)</th>
            <th style="min-width: 210px;">JavaScript (ES2024)</th>
          </tr>
        </thead>
        <tbody id="compTableTbody">
          ${tableData.map(item => `
            <tr data-search="${escapeHtml((item.param + ' ' + item.java + ' ' + item.c + ' ' + item.cpp + ' ' + item.python + ' ' + item.js).toLowerCase())}">
              <td>${item.id}. ${item.param}</td>
              <td>${item.java}</td>
              <td>${item.c}</td>
              <td>${item.cpp}</td>
              <td>${item.python}</td>
              <td>${item.js}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <div class="aim-box" style="margin-top: 20px;">
      <div class="aim-label">Analytical Conclusion</div>
      <div class="aim-text">
        Java establishes an optimal enterprise foundation through JVM portability ("Write Once, Run Anywhere"), 
        strong static type checking, and automatic garbage collection. C and C++ provide direct hardware execution 
        for systems and gaming engines, Python provides rapid scripting for machine learning and AI, and JavaScript 
        powers dynamic web applications.
      </div>
    </div>
  `;
}

function filterTableRows(query) {
  const q = query.toLowerCase().trim();
  const rows = document.querySelectorAll("#compTableTbody tr");
  rows.forEach(r => {
    const text = r.getAttribute("data-search") || "";
    r.style.display = text.includes(q) ? "" : "none";
  });
}

// ==========================================================================
// WEEK 4 & 5: VIVA VOCE VIEW
// ==========================================================================
function renderVivaView(week) {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div style="margin-bottom: 16px;">
      <button class="btn-chunky" onclick="navigateTo('home')">&larr; Back to All Weeks</button>
    </div>

    <div class="week-banner">
      <div class="week-banner-top">
        <span class="week-banner-badge">WEEK ${String(week.id).padStart(2, "0")}</span>
        <span style="font-weight: 800; font-size: 13px; text-transform: uppercase;">Assessment Milestone</span>
      </div>
      <h1 class="week-banner-title">${week.title}</h1>
      <p class="week-banner-sub">${week.subtitle}</p>
    </div>

    <div class="viva-card">
      <div style="font-size: 44px; margin-bottom: 12px;">🎓</div>
      <h3>Viva Voce &amp; Practical Assessment</h3>
      <p>
        No programming task was assigned for this week. 
        This session was dedicated to comprehensive oral viva evaluation, code walkthroughs, 
        and continuous lab performance evaluation.
      </p>
      <button class="btn-chunky primary" onclick="navigateTo('week-6')">
        Continue to Week 06 &rarr;
      </button>
    </div>
  `;
}

// ==========================================================================
// PAGE: PROGRAM DETAIL (IDE WORKSPACE VIEW)
// ==========================================================================
function renderProgram(weekId, index) {
  const app = document.getElementById("app");
  if (!app) return;

  const week = weeks.find(w => w.id === weekId);
  const program = week?.programs[index];
  if (!week || !program) return;

  const output = getGeneratedOutput(weekId, index);
  const lines = program.code.split("\n");
  const lineNumbers = lines.map((_, i) => i + 1).join("\n");

  const isFirst = index === 0;
  const isLast = index === week.programs.length - 1;

  app.innerHTML = `
    <!-- Top Action Bar -->
    <div style="margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
      <button class="btn-chunky" onclick="navigateTo('week-${weekId}')">
        &larr; Week ${weekId} Programs
      </button>

      <div style="display: flex; gap: 8px;">
        <button class="btn-chunky" ${isFirst ? "disabled" : ""} onclick="navigateTo('program', { weekId: ${weekId}, programIdx: ${index - 1} })">
          &larr; Prev
        </button>
        <button class="btn-chunky" ${isLast ? "disabled" : ""} onclick="navigateTo('program', { weekId: ${weekId}, programIdx: ${index + 1} })">
          Next &rarr;
        </button>
      </div>
    </div>

    <!-- Title & Objective -->
    <div class="week-banner" style="margin-bottom: 18px;">
      <div class="week-banner-top">
        <span class="week-banner-badge">WEEK ${String(weekId).padStart(2, "0")} &bull; PROGRAM ${String(index + 1).padStart(2, "0")}</span>
        <span style="font-weight: 800; font-size: 13px; text-transform: uppercase;">Verified Implementation</span>
      </div>
      <h1 class="week-banner-title">${program.title}</h1>
      <p class="week-banner-sub">${program.description}</p>
    </div>

    <!-- Action Bar Buttons -->
    <div class="bar">
      <button class="btn-chunky primary" onclick="copyProgramCode(${weekId}, ${index})">
        📋 Copy Source Code
      </button>
      <button class="btn-chunky" onclick="downloadProgramJava(${weekId}, ${index})">
        💾 Download .java File
      </button>
      <button class="btn-chunky sky" onclick="copyProgramOutput(${weekId}, ${index})">
        📋 Copy Terminal Output
      </button>
    </div>

    <!-- Java Source Code Window -->
    <div class="code-frame">
      <div class="code-topbar">
        <div class="code-dots">
          <span class="code-dot dot-1"></span>
          <span class="code-dot dot-2"></span>
          <span class="code-dot dot-3"></span>
        </div>
        <span class="code-filename">${extractClassName(program.code)}.java</span>
        <span style="font-size: 11px; font-weight: 800; color: #94a3b8; text-transform: uppercase;">UTF-8 &bull; Java 21</span>
      </div>
      <div class="code-body">
        <div class="code-lines">${lineNumbers}</div>
        <pre class="code-text"><code>${escapeHtml(program.code)}</code></pre>
      </div>
    </div>

    <!-- Terminal Output Window -->
    <div class="term-frame">
      <div class="term-topbar">
        <div class="code-dots">
          <span class="code-dot dot-1"></span>
          <span class="code-dot dot-2"></span>
          <span class="code-dot dot-3"></span>
        </div>
        <span class="term-title">PowerShell &bull; java -version 21.0.2 &bull; Verification Terminal</span>
        <span style="font-size: 11px; font-weight: 800; color: #38bdf8; text-transform: uppercase;">Exit Code: 0</span>
      </div>
      <div class="term-body">
        <div class="term-prompt">PS C:\\Users\\Trivikram\\JavaLab\\Week-${String(weekId).padStart(2, "0")}&gt; javac ${extractClassName(program.code)}.java &amp;&amp; java ${extractClassName(program.code)}</div>
        <div class="term-output">${escapeHtml(output)}</div>
      </div>
    </div>
  `;
}

function extractClassName(code) {
  const match = code.match(/class\s+([A-Za-z0-9_]+)/);
  return match ? match[1] : "Main";
}

// ==========================================================================
// ACTIONS: COPY & DOWNLOAD
// ==========================================================================
function copyProgramCode(weekId, index) {
  const prog = weeks.find(w => w.id === weekId)?.programs[index];
  if (!prog) return;

  navigator.clipboard.writeText(prog.code).then(() => {
    showToast("✓ Java source code copied to clipboard!");
  }).catch(() => {
    showToast("Failed to copy code");
  });
}

function copyProgramOutput(weekId, index) {
  const out = getGeneratedOutput(weekId, index);
  navigator.clipboard.writeText(out).then(() => {
    showToast("✓ Terminal output copied to clipboard!");
  }).catch(() => {
    showToast("Failed to copy output");
  });
}

function downloadProgramJava(weekId, index) {
  const prog = weeks.find(w => w.id === weekId)?.programs[index];
  if (!prog) return;

  const className = extractClassName(prog.code);
  const blob = new Blob([prog.code], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${className}.java`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`✓ Downloaded ${className}.java`);
}

function showToast(msg) {
  const t = document.getElementById("toastNotice");
  const m = document.getElementById("toastMessage");
  if (!t || !m) return;

  m.innerText = msg;
  t.style.display = "inline-flex";
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    t.style.display = "none";
  }, 2500);
}

// ==========================================================================
// GLOBAL SEARCH MODAL (Ctrl + K)
// ==========================================================================
function openSearchModal() {
  const modal = document.getElementById("searchModal");
  const input = document.getElementById("searchInput");
  if (!modal || !input) return;

  modal.classList.add("open");
  input.value = "";
  input.focus();
  renderSearchResults("");
}

function closeSearchModal() {
  const modal = document.getElementById("searchModal");
  if (modal) modal.classList.remove("open");
}

function handleSearchBackdrop(e) {
  if (e.target.id === "searchModal") {
    closeSearchModal();
  }
}

function handleSearchInput(e) {
  renderSearchResults(e.target.value);
}

function renderSearchResults(query) {
  const container = document.getElementById("searchResults");
  if (!container) return;

  const q = query.toLowerCase().trim();
  const matches = [];

  weeks.forEach(w => {
    w.programs.forEach((p, idx) => {
      if (!q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
        matches.push({ week: w, prog: p, idx });
      }
    });
  });

  if (matches.length === 0) {
    container.innerHTML = `
      <div style="padding: 24px; text-align: center; font-weight: 700; color: #64748b;">
        No programs matching "${escapeHtml(query)}" found.
      </div>
    `;
    return;
  }

  container.innerHTML = matches.slice(0, 25).map(m => `
    <div class="search-item" onclick="selectSearchResult(${m.week.id}, ${m.idx})">
      <div>
        <div style="font-weight: 800; font-size: 14px; color: var(--ink);">${m.prog.title}</div>
        <div style="font-size: 12px; font-weight: 600; color: #475569;">${m.prog.description.slice(0, 95)}...</div>
      </div>
      <span style="font-size: 11px; font-weight: 900; background: var(--blue-primary); color: #fff; padding: 2px 8px; border: 2px solid var(--ink);">
        W${String(m.week.id).padStart(2, "0")} &bull; P${String(m.idx + 1).padStart(2, "0")}
      </span>
    </div>
  `).join("");
}

function selectSearchResult(weekId, index) {
  closeSearchModal();
  navigateTo("program", { weekId, programIdx: index });
}

function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === "Escape") {
      closeSearchModal();
    }
  });
}

// Fallback avatar generator
function handleAvatarFallback(img) {
  img.onerror = null;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="240" viewBox="0 0 200 240">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1d4ed8" />
          <stop offset="100%" stop-color="#0b1938" />
        </linearGradient>
      </defs>
      <rect width="200" height="240" fill="url(#bg)" />
      <circle cx="100" cy="95" r="50" fill="#ffffff" stroke="#0b1938" stroke-width="4" />
      <text x="100" y="112" font-family="'Plus Jakarta Sans', sans-serif" font-size="38" font-weight="900" fill="#1d4ed8" text-anchor="middle">TR</text>
      <rect x="25" y="170" width="150" height="34" rx="4" fill="#ffffff" stroke="#0b1938" stroke-width="3" />
      <text x="100" y="193" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="900" fill="#0b1938" text-anchor="middle">TRIVIKRAM</text>
    </svg>
  `;
  img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
