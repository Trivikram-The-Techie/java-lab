// ==========================================================================
// Trivikram's Java Programming Laboratory — Interactive Academic Workspace
// Roll No: 25EU02067 | Dept of AI & ML | Batch 2025-2029
// ==========================================================================

const studentProfile = {
  name: "Trivikram",
  rollNo: "25EU02067",
  year: "II Year (B.Tech 2nd Year)",
  branch: "Artificial Intelligence & Machine Learning (AI & ML)",
  section: "Section B",
  subject: "Java Programming (23AI5351)",
  institution: "Siddhartha Academy of Higher Education (Deemed to be University)",
  batch: "2025 – 2029"
};

// Application State
let appState = {
  currentPage: "home", // "home" | "profile" | "week-{id}" | "program"
  currentWeekId: 1,
  currentProgramIdx: 0,
  activeIdeTab: "code", // "code" | "terminal"
  weekSearchFilter: ""
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderWeekNav();
  setupKeyboardShortcuts();
  navigateTo("home");
});

// ==========================================================================
// NAVIGATION & ROUTING
// ==========================================================================
function navigateTo(page, params = {}) {
  appState.currentPage = page;

  // Close mobile sidebar if open
  const sidebar = document.getElementById("sidebar");
  if (sidebar && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }

  // Update active states in sidebar
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.page === page);
  });

  if (page === "home") {
    updateBreadcrumbs([
      { label: "Home", action: "navigateTo('home')" },
      { label: "Overview", active: true }
    ]);
    renderHome();
  } else if (page === "profile") {
    updateBreadcrumbs([
      { label: "Home", action: "navigateTo('home')" },
      { label: "Student Profile", active: true }
    ]);
    renderProfile();
  } else if (page.startsWith("week-")) {
    const weekId = parseInt(page.split("-")[1], 10);
    appState.currentWeekId = weekId;
    appState.weekSearchFilter = "";
    const week = weeks.find(w => w.id === weekId);
    updateBreadcrumbs([
      { label: "Home", action: "navigateTo('home')" },
      { label: `Week ${String(weekId).padStart(2, "0")}`, active: true }
    ]);
    renderWeek(weekId);
  } else if (page === "program") {
    const weekId = params.weekId || appState.currentWeekId;
    const programIdx = params.programIdx !== undefined ? params.programIdx : appState.currentProgramIdx;
    appState.currentWeekId = weekId;
    appState.currentProgramIdx = programIdx;
    const week = weeks.find(w => w.id === weekId);
    const program = week?.programs[programIdx];
    updateBreadcrumbs([
      { label: "Home", action: "navigateTo('home')" },
      { label: `Week ${String(weekId).padStart(2, "0")}`, action: `navigateTo('week-${weekId}')` },
      { label: `P${String(programIdx + 1).padStart(2, "0")}: ${program ? program.title : "Program"}`, active: true }
    ]);
    renderProgram(weekId, programIdx);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBreadcrumbs(items) {
  const container = document.getElementById("breadcrumbs");
  if (!container) return;

  container.innerHTML = items.map((item, idx) => {
    const separator = idx < items.length - 1 ? '<span class="breadcrumb-separator">/</span>' : '';
    if (item.active) {
      return `<span class="breadcrumb-item active">${item.label}</span>${separator}`;
    } else {
      return `<span class="breadcrumb-item" onclick="${item.action}">${item.label}</span>${separator}`;
    }
  }).join("");
}

// Render dynamic week buttons inside sidebar
function renderWeekNav() {
  const list = document.getElementById("weekNavList");
  if (!list || !window.weeks) return;

  list.innerHTML = weeks.map(week => {
    const isViva = week.id === 4 || week.id === 5;
    const countBadge = isViva ? "Viva" : `${week.programs.length} pgs`;

    return `
      <button class="nav-link" data-page="week-${week.id}" onclick="navigateTo('week-${week.id}')">
        <span class="nav-link-week-num">W${String(week.id).padStart(2, "0")}</span>
        <span class="nav-link-title">${week.title}</span>
        <span class="nav-link-count">${countBadge}</span>
      </button>
    `;
  }).join("");
}

// ==========================================================================
// PAGE: HOME / DASHBOARD
// ==========================================================================
function renderHome() {
  const app = document.getElementById("app");
  if (!app) return;

  const totalProgs = weeks.reduce((sum, w) => sum + w.programs.length, 0);

  app.innerHTML = `
    <!-- Hero Banner Card -->
    <section class="hero-card">
      <div class="hero-content">
        <div class="hero-kicker">✦ Department of AI &bull; Batch 2025&ndash;2029</div>
        <h1 class="hero-title">Java Programming <span class="highlight">Laboratory Record</span></h1>
        <p class="hero-description">
          An interactive academic repository featuring 100+ verified object-oriented solutions, architecture walkthroughs, 
          syntax comparative matrices, and real-time terminal execution outputs.
        </p>
        <div class="hero-actions">
          <button class="btn-primary" onclick="scrollToCurriculum()">Explore Curriculum &rarr;</button>
          <button class="btn-secondary" onclick="navigateTo('profile')">View Student Profile</button>
          <button class="btn-secondary" onclick="openSearchModal()">Search Programs (Ctrl+K)</button>
        </div>
      </div>

      <div class="hero-profile-box">
        <div class="hero-avatar-frame">
          <img class="hero-avatar-img" src="assets/profile.png" alt="Trivikram" onerror="handleAvatarFallback(this)">
          <span class="hero-avatar-badge">Verified</span>
        </div>
        <div class="hero-profile-name">Trivikram</div>
        <div class="hero-profile-roll">25EU02067</div>
        <div class="hero-profile-meta">
          B.Tech II Year &bull; Section B<br>
          Artificial Intelligence &amp; ML
        </div>
      </div>
    </section>

    <!-- Key Metrics Stats Bento Grid -->
    <section class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon emerald">📚</div>
        <div class="stat-data">
          <div class="stat-number">11</div>
          <div class="stat-label">Laboratory Weeks</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon cyan">⚡</div>
        <div class="stat-data">
          <div class="stat-number">${totalProgs}+</div>
          <div class="stat-label">Programs Documented</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon indigo">✓</div>
        <div class="stat-data">
          <div class="stat-number">100%</div>
          <div class="stat-label">Compilation Verified</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon amber">☕</div>
        <div class="stat-data">
          <div class="stat-number">Java 21</div>
          <div class="stat-label">LTS Standard Platform</div>
        </div>
      </div>
    </section>

    <!-- Curriculum Weeks Bento Showcase -->
    <div class="section-header-bar" id="curriculumSection">
      <div class="section-title-group">
        <h2>Weekly Laboratory Curriculum</h2>
        <p>Select any week to inspect its problem statements, source code implementations, and execution records.</p>
      </div>
    </div>

    <section class="weeks-bento-grid">
      ${weeks.map(week => {
        const isViva = week.id === 4 || week.id === 5;
        const countText = isViva ? "Viva Examination" : `${week.programs.length} Programs`;
        return `
          <article class="week-bento-card" onclick="navigateTo('week-${week.id}')">
            <div class="week-bento-card-top">
              <span class="week-tag">WEEK ${String(week.id).padStart(2, "0")}</span>
              <span class="week-count-badge">${countText}</span>
            </div>
            <h3 class="week-bento-title">${week.title}</h3>
            <p class="week-bento-desc">${week.subtitle}</p>
            <div class="week-bento-footer">
              <span class="week-bento-action">Open Week Sheet &rarr;</span>
            </div>
          </article>
        `;
      }).join("")}
    </section>
  `;
}

function scrollToCurriculum() {
  document.getElementById("curriculumSection")?.scrollIntoView({ behavior: "smooth" });
}

// ==========================================================
// PAGE: STUDENT PROFILE
// ==========================================================
function renderProfile() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="profile-view-wrapper">
      <div class="profile-hero-banner"></div>
      
      <div class="profile-main-card">
        <div class="profile-card-body">
          <div class="profile-avatar-row">
            <img class="profile-large-avatar" src="assets/profile.png" alt="Trivikram" onerror="handleAvatarFallback(this)">
            <span class="student-status-badge">
              <span class="status-dot-pulse"></span>
              Academic Record Verified
            </span>
          </div>

          <div class="profile-header-info">
            <h1>Trivikram</h1>
            <p>B.Tech Undergraduate &bull; Artificial Intelligence &amp; Machine Learning (Batch 2025&ndash;2029)</p>
          </div>

          <div class="profile-specs-grid">
            <div class="profile-spec-item">
              <span class="spec-item-label">Student Name</span>
              <span class="spec-item-value">Trivikram</span>
            </div>
            <div class="profile-spec-item">
              <span class="spec-item-label">Roll Number</span>
              <span class="spec-item-value code">25EU02067</span>
            </div>
            <div class="profile-spec-item">
              <span class="spec-item-label">Academic Year</span>
              <span class="spec-item-value">II Year (2nd Year)</span>
            </div>
            <div class="profile-spec-item">
              <span class="spec-item-label">Branch &amp; Department</span>
              <span class="spec-item-value">AI &amp; ML</span>
            </div>
            <div class="profile-spec-item">
              <span class="spec-item-label">Section</span>
              <span class="spec-item-value">Section B</span>
            </div>
            <div class="profile-spec-item">
              <span class="spec-item-label">Subject &amp; Laboratory</span>
              <span class="spec-item-value">Java Programming (23AI5351)</span>
            </div>
            <div class="profile-spec-item">
              <span class="spec-item-label">University</span>
              <span class="spec-item-value">Siddhartha Academy of Higher Education</span>
            </div>
            <div class="profile-spec-item">
              <span class="spec-item-label">Platform Standards</span>
              <span class="spec-item-value code">Oracle JDK &amp; OpenJDK 21 LTS</span>
            </div>
          </div>
        </div>
      </div>

      <div class="profile-about-card">
        <h3>About This Laboratory Record</h3>
        <p>
          This interactive web record represents the comprehensive laboratory portfolio for the Java Programming Course. 
          It encapsulates hands-on practical assignments covering Java language fundamentals, control flow structures, 
          Object-Oriented design patterns (Inheritance, Polymorphism, Abstraction, Encapsulation), user-defined packages, 
          exception propagation mechanisms, byte &amp; character stream input/output, and multithreaded synchronization.
        </p>
        <p>
          All source programs have been written, compiled, tested, and validated in conformance with current academic curriculum standards.
        </p>

        <h3 style="margin-top: 24px;">Core Technical Competencies</h3>
        <div class="skills-pill-group">
          <span class="skill-pill">Object-Oriented Programming (OOP)</span>
          <span class="skill-pill">Inheritance &amp; Dynamic Method Dispatch</span>
          <span class="skill-pill">Package Architecture &amp; CLASSPATH</span>
          <span class="skill-pill">Interface-Based Polymorphism</span>
          <span class="skill-pill">Exception Handling Architecture</span>
          <span class="skill-pill">Character &amp; Byte Streams I/O</span>
          <span class="skill-pill">Multithreading &amp; Concurrency</span>
          <span class="skill-pill">Garbage Collection &amp; Memory Safety</span>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================
// PAGE: WEEK VIEW
// ==========================================================
function renderWeek(weekId, filterQuery = "") {
  const app = document.getElementById("app");
  if (!app) return;

  const week = weeks.find(w => w.id === weekId);
  if (!week) return;

  // Week 1: Special 20-Parameter Comparative Table View
  if (weekId === 1) {
    renderWeek1SpecialView(week);
    return;
  }

  // Week 4 & 5: Viva Examination Views
  if (weekId === 4 || weekId === 5) {
    renderVivaView(week);
    return;
  }

  // Filter programs if query provided
  let filteredPrograms = week.programs;
  if (filterQuery && filterQuery.trim()) {
    const q = filterQuery.toLowerCase().trim();
    filteredPrograms = week.programs.filter((p, i) => 
      p.title.toLowerCase().includes(q) || 
      p.description.toLowerCase().includes(q) ||
      `program ${i + 1}`.includes(q)
    );
  }

  app.innerHTML = `
    <div class="week-view-wrapper">
      <header class="week-view-header">
        <div class="week-title-area">
          <span class="week-header-tag">WEEK ${String(week.id).padStart(2, "0")}</span>
          <h1 class="week-view-title">${week.title}</h1>
          <p class="week-view-subtitle">${week.subtitle}</p>
        </div>

        <div class="week-filter-bar">
          <input 
            type="text" 
            class="week-search-input" 
            placeholder="Filter programs in Week ${week.id}..." 
            value="${escapeHtml(filterQuery)}"
            oninput="handleWeekFilterInput(event, ${weekId})"
          >
        </div>
      </header>

      <div class="programs-grid">
        ${filteredPrograms.length > 0 ? filteredPrograms.map(program => {
          const originalIndex = week.programs.indexOf(program);
          return `
            <article class="program-card" onclick="navigateTo('program', { weekId: ${week.id}, programIdx: ${originalIndex} })">
              <div>
                <div class="program-card-header">
                  <span class="program-index-badge">PROGRAM ${String(originalIndex + 1).padStart(2, "0")}</span>
                </div>
                <h3 class="program-card-title">${program.title}</h3>
                <p class="program-card-desc">${program.description}</p>
              </div>
              <div class="program-card-footer">
                <span class="program-view-btn">Inspect Code &amp; Output &rarr;</span>
              </div>
            </article>
          `;
        }).join("") : `
          <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md);">
            No programs matching "<strong>${escapeHtml(filterQuery)}</strong>" found in Week ${week.id}.
          </div>
        `}
      </div>
    </div>
  `;
}

function handleWeekFilterInput(event, weekId) {
  renderWeek(weekId, event.target.value);
}

// ==========================================================
// WEEK 1: 20-PARAMETER COMPARATIVE TABLE SPECIAL VIEW
// ==========================================================
function renderWeek1SpecialView(week) {
  const app = document.getElementById("app");
  if (!app) return;

  const tableData = window.comparativeTableData || [];

  app.innerHTML = `
    <div class="week-view-wrapper">
      <header class="week-view-header">
        <div class="week-title-area">
          <span class="week-header-tag">WEEK 01</span>
          <h1 class="week-view-title">Comparative Study of Programming Languages</h1>
          <p class="week-view-subtitle">
            An in-depth, parameter-by-parameter architectural comparison of Java, C, C++, Python, and JavaScript 
            across language paradigms, execution models, memory allocation, and industry application areas.
          </p>
        </div>
      </header>

      <!-- Table Filter Bar -->
      <div class="table-filter-controls">
        <input 
          type="text" 
          id="tableSearchInput"
          class="table-search-box" 
          placeholder="Search parameters or languages (e.g. Memory, OOP, Creator)..." 
          oninput="filterComparativeTable(this.value)"
        >
        <span style="font-size: 12.5px; color: var(--text-muted);">
          Covering <strong>20 Core Parameters</strong> &bull; 5 Industry Languages
        </span>
      </div>

      <!-- Comparative Table Container -->
      <div class="table-responsive-wrapper">
        <table class="comp-table" id="comparativeTable">
          <thead>
            <tr>
              <th style="min-width: 180px;">Parameter</th>
              <th class="lang-col" style="min-width: 220px;"><span class="lang-pill-sm pill-java">Java</span> Java 21</th>
              <th class="lang-col" style="min-width: 220px;"><span class="lang-pill-sm pill-c">C</span> C (ISO/IEC 9899)</th>
              <th class="lang-col" style="min-width: 220px;"><span class="lang-pill-sm pill-cpp">C++</span> C++ (Modern)</th>
              <th class="lang-col" style="min-width: 220px;"><span class="lang-pill-sm pill-py">Python</span> Python 3.12+</th>
              <th class="lang-col" style="min-width: 220px;"><span class="lang-pill-sm pill-js">JS</span> JavaScript (ES2024)</th>
            </tr>
          </thead>
          <tbody id="compTableBody">
            ${tableData.map(item => `
              <tr data-search="${escapeHtml((item.param + ' ' + item.java + ' ' + item.c + ' ' + item.cpp + ' ' + item.python + ' ' + item.js).toLowerCase())}">
                <td class="param-title-cell">${item.id}. ${item.param}</td>
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

      <!-- Quick Summary Card -->
      <div class="profile-about-card" style="margin-top: 10px;">
        <h3>Analytical Conclusion</h3>
        <p>
          <strong>Java</strong> provides an optimal balance between performance and rapid development through automatic garbage collection, 
          strong type safety, platform portability via the JVM, and immense ecosystem tooling, making it the industry standard for enterprise systems. 
          While <strong>C</strong> and <strong>C++</strong> dominate low-level system software and games with unmatched raw hardware control, 
          <strong>Python</strong> leads in machine learning and data science due to its human-readable syntax, and <strong>JavaScript</strong> remains 
          indispensable for modern web and cloud applications.
        </p>
      </div>
    </div>
  `;
}

function filterComparativeTable(query) {
  const q = query.toLowerCase().trim();
  const rows = document.querySelectorAll("#compTableBody tr");
  rows.forEach(row => {
    const text = row.getAttribute("data-search") || "";
    row.style.display = text.includes(q) ? "" : "none";
  });
}

// ==========================================================
// WEEK 4 & 5: VIVA VOCE EXAMINATION VIEW
// ==========================================================
function renderVivaView(week) {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="week-view-wrapper">
      <header class="week-view-header">
        <div class="week-title-area">
          <span class="week-header-tag">WEEK ${String(week.id).padStart(2, "0")}</span>
          <h1 class="week-view-title">${week.title}</h1>
          <p class="week-view-subtitle">${week.subtitle}</p>
        </div>
      </header>

      <div class="viva-box">
        <div class="viva-icon">🎓</div>
        <h3>Viva Voce &amp; Practical Assessment</h3>
        <p>
          No independent programming tasks were scheduled for this week. 
          This session was dedicated to comprehensive oral Viva Voce evaluation, concept checkpoints, 
          and laboratory record verification covering prior topics.
        </p>
        <div style="margin-top: 24px;">
          <button class="btn-primary" onclick="navigateTo('week-${week.id === 4 ? 6 : 6}')">
            Continue to Next Active Lab Session &rarr;
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================
// PAGE: PROGRAM DETAIL (IDE WORKSPACE VIEW)
// ==========================================================
function renderProgram(weekId, index) {
  const app = document.getElementById("app");
  if (!app) return;

  const week = weeks.find(w => w.id === weekId);
  const program = week?.programs[index];
  if (!week || !program) return;

  const generatedOutput = getGeneratedOutput(weekId, index);
  const codeLines = program.code.split("\n");
  const lineNumbers = codeLines.map((_, i) => i + 1).join("\n");

  const isFirst = index === 0;
  const isLast = index === week.programs.length - 1;

  app.innerHTML = `
    <div class="program-detail-view">
      <!-- Program Header Bar -->
      <div class="program-detail-header">
        <div class="program-detail-title-group">
          <span class="program-index-badge" style="margin-bottom: 6px; display: inline-block;">
            WEEK ${String(weekId).padStart(2, "0")} &bull; PROGRAM ${String(index + 1).padStart(2, "0")} OF ${week.programs.length}
          </span>
          <h1>${program.title}</h1>
          <p>${program.description}</p>
        </div>

        <div class="program-nav-buttons">
          <button class="btn-nav-ctrl" ${isFirst ? "disabled" : ""} onclick="navigateTo('program', { weekId: ${weekId}, programIdx: ${index - 1} })">
            &larr; Previous
          </button>
          <button class="btn-nav-ctrl" ${isLast ? "disabled" : ""} onclick="navigateTo('program', { weekId: ${weekId}, programIdx: ${index + 1} })">
            Next &rarr;
          </button>
          <button class="btn-nav-ctrl" onclick="navigateTo('week-${weekId}')">
            &equiv; Week List
          </button>
        </div>
      </div>

      <!-- IDE Code & Output Workspace -->
      <div class="ide-workspace">
        <div class="ide-tabs-header">
          <div class="ide-tabs-list">
            <button class="ide-tab-btn active" id="tabBtnCode" onclick="switchIdeTab('code')">
              ⚡ Source Code (Java)
            </button>
            <button class="ide-tab-btn" id="tabBtnTerminal" onclick="switchIdeTab('terminal')">
              🖥️ Terminal &amp; Output
            </button>
          </div>

          <div class="ide-action-group">
            <button class="ide-action-btn" onclick="copySourceCode(${weekId}, ${index})">
              📋 Copy Code
            </button>
            <button class="ide-action-btn" onclick="downloadJavaFile(${weekId}, ${index})">
              💾 Download .java
            </button>
            <button class="ide-action-btn" onclick="copyExecutionOutput(${weekId}, ${index})">
              📋 Copy Output
            </button>
          </div>
        </div>

        <!-- Tab 1: Source Code Pane -->
        <div class="ide-pane active" id="idePaneCode">
          <div class="code-editor-container">
            <div class="line-numbers">${lineNumbers}</div>
            <pre class="code-content"><code>${escapeHtml(program.code)}</code></pre>
          </div>
        </div>

        <!-- Tab 2: Terminal Execution Output Pane -->
        <div class="ide-pane" id="idePaneTerminal">
          <div class="terminal-window">
            <div class="terminal-top-bar">
              <div class="terminal-dots">
                <span class="t-dot red"></span>
                <span class="t-dot yellow"></span>
                <span class="t-dot green"></span>
              </div>
              <span class="terminal-title">PowerShell &bull; java -version 21.0.2 &bull; Lab Terminal Simulation</span>
            </div>
            <div class="terminal-prompt">PS C:\\Users\\Trivikram\\JavaLab\\Week-${String(weekId).padStart(2, "0")}&gt; javac Solution.java &amp;&amp; java Solution</div>
            <div class="terminal-output-text">${escapeHtml(generatedOutput)}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function switchIdeTab(tab) {
  appState.activeIdeTab = tab;
  const btnCode = document.getElementById("tabBtnCode");
  const btnTerminal = document.getElementById("tabBtnTerminal");
  const paneCode = document.getElementById("idePaneCode");
  const paneTerminal = document.getElementById("idePaneTerminal");

  if (!btnCode || !btnTerminal || !paneCode || !paneTerminal) return;

  if (tab === "code") {
    btnCode.classList.add("active");
    btnTerminal.classList.remove("active");
    paneCode.classList.add("active");
    paneTerminal.classList.remove("active");
  } else {
    btnTerminal.classList.add("active");
    btnCode.classList.remove("active");
    paneTerminal.classList.add("active");
    paneCode.classList.remove("active");
  }
}

// Copy Code Helper
function copySourceCode(weekId, index) {
  const week = weeks.find(w => w.id === weekId);
  const program = week?.programs[index];
  if (!program) return;

  navigator.clipboard.writeText(program.code).then(() => {
    showToast("✓ Java source code copied to clipboard!");
  }).catch(() => {
    showToast("Failed to copy code");
  });
}

// Copy Output Helper
function copyExecutionOutput(weekId, index) {
  const output = getGeneratedOutput(weekId, index);
  navigator.clipboard.writeText(output).then(() => {
    showToast("✓ Execution output copied to clipboard!");
  }).catch(() => {
    showToast("Failed to copy output");
  });
}

// Download .java file
function downloadJavaFile(weekId, index) {
  const week = weeks.find(w => w.id === weekId);
  const program = week?.programs[index];
  if (!program) return;

  // Extract class name or default
  const match = program.code.match(/class\s+([A-Za-z0-9_]+)/);
  const className = match ? match[1] : `Week${weekId}_Program${index + 1}`;
  const fileName = `${className}.java`;

  const blob = new Blob([program.code], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(`✓ Downloaded ${fileName}`);
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toastNotice");
  const toastMsg = document.getElementById("toastMessage");
  if (!toast || !toastMsg) return;

  toastMsg.innerText = message;
  toast.style.display = "inline-flex";

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.style.display = "none";
  }, 2800);
}

// ==========================================================
// SEARCH MODAL (Ctrl + K)
// ==========================================================
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

function handleSearchBackdrop(event) {
  if (event.target.id === "searchModal") {
    closeSearchModal();
  }
}

function handleSearchInput(event) {
  renderSearchResults(event.target.value);
}

function renderSearchResults(query) {
  const resultsContainer = document.getElementById("searchResults");
  if (!resultsContainer) return;

  const q = query.toLowerCase().trim();
  const matches = [];

  weeks.forEach(week => {
    week.programs.forEach((prog, idx) => {
      if (!q || prog.title.toLowerCase().includes(q) || prog.description.toLowerCase().includes(q)) {
        matches.push({ week, prog, idx });
      }
    });
  });

  if (matches.length === 0) {
    resultsContainer.innerHTML = `
      <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 13.5px;">
        No programs found matching "${escapeHtml(query)}"
      </div>
    `;
    return;
  }

  resultsContainer.innerHTML = matches.slice(0, 30).map(m => `
    <div class="search-result-item" onclick="selectSearchResult(${m.week.id}, ${m.idx})">
      <div>
        <div class="search-result-title">${m.prog.title}</div>
        <div class="search-result-meta">${m.prog.description.slice(0, 95)}...</div>
      </div>
      <span class="program-index-badge">W${String(m.week.id).padStart(2, "0")} &bull; P${String(m.idx + 1).padStart(2, "0")}</span>
    </div>
  `).join("");
}

function selectSearchResult(weekId, index) {
  closeSearchModal();
  navigateTo("program", { weekId, programIdx: index });
}

// ==========================================================
// THEME & UTILITIES
// ==========================================================
function initTheme() {
  const saved = localStorage.getItem("java-workspace-theme");
  if (saved === "light") {
    document.body.classList.add("light-theme");
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  localStorage.setItem("java-workspace-theme", isLight ? "light" : "dark");
}

function toggleMobileMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.toggle("open");
}

function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    // Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearchModal();
    }
    // Escape
    if (e.key === "Escape") {
      closeSearchModal();
    }
  });
}

// Fallback avatar generator
function handleAvatarFallback(img) {
  img.onerror = null;
  // Generate high-resolution SVG initials
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="80" r="76" fill="url(#g)" stroke="#ffffff" stroke-width="4"/>
      <text x="80" y="94" font-family="-apple-system, sans-serif" font-size="52" font-weight="bold" fill="#ffffff" text-anchor="middle">TR</text>
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
