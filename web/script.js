// ==========================================================================
// TRIVIKRAM — JAVA PROGRAMMING LABORATORY RECORD (24CS281)
// ENGINE: FUTURISTIC CLOUD IDE & JAVA DEVELOPER CONSOLE
// Student: Trivikram | Roll No: 25EU02067 | Course: 24CS281
// Institution: Siddhartha Academy of Higher Education | Guide: Ramesh Sir
// ==========================================================================

const studentProfile = {
  name: "Trivikram",
  rollNo: "25EU02067",
  course: "Java Programming Laboratory (24CS281)",
  dept: "Artificial Intelligence & Machine Learning (AI & ML)",
  section: "Section B",
  institution: "Siddhartha Academy of Higher Education",
  guide: "Ramesh Sir",
  batch: "2025 – 2029",
  platform: "Java 21 LTS (Oracle OpenJDK)"
};

// Document Metadata Registry (Exact Byte/KB Verification)
const docRegistry = {
  1: { fileName: "week-01.pdf", path: "docs/week-01.pdf", size: "541.3 KB", type: "PDF Document" },
  2: {
    oracle: { fileName: "week-02-oracle.pdf", path: "docs/week-02-oracle.pdf", size: "439.0 KB", type: "PDF Document" },
    openjdk: { fileName: "week-02-openjdk.pdf", path: "docs/week-02-openjdk.pdf", size: "531.0 KB", type: "PDF Document" }
  },
  3: { fileName: "week-03.pdf", path: "docs/week-03.pdf", size: "438.4 KB", type: "PDF Document" },
  4: { isViva: true, title: "Mid-Term Oral Viva Voce Examination — Part 1" },
  5: { isViva: true, title: "Mid-Term Oral Viva Voce Examination — Part 2" },
  6: { fileName: "week-06.pdf", path: "docs/week-06.pdf", size: "1.36 MB", type: "PDF Document" },
  7: { fileName: "week-07.pdf", path: "docs/week-07.pdf", size: "705.3 KB", type: "PDF Document" },
  8: { fileName: "week-08.pdf", path: "docs/week-08.pdf", size: "539.5 KB", type: "PDF Document" },
  9: { fileName: "week-09.pdf", path: "docs/week-09.pdf", size: "786.4 KB", type: "PDF Document" },
  10: { fileName: "week-10.pdf", path: "docs/week-10.pdf", size: "809.7 KB", type: "PDF Document" },
  11: { fileName: "week-11.pdf", path: "docs/week-11.pdf", size: "800.2 KB", type: "PDF Document" },
  12: { fileName: "week-12.pdf", path: "docs/week-12.pdf", size: "0.6 KB", type: "PDF Document (Submission)" }
};

// Syllabus Theoretical Concept Tags Mapping
const weekConceptsMap = {
  1: ["Programming Paradigms", "Platform Independence", "Bytecode Architecture", "JVM vs CLR", "Memory Management", "Compilation Models"],
  2: ["JDK vs JRE vs JVM", "JAVA_HOME Configuration", "Environment Variables", "Path Setup", "Javac Compiler", "Java Runtime Launcher"],
  3: ["Primitive Types", "Type Promotion", "Explicit Casting", "Control Flow", "Switch Expressions", "Logical Operators", "Loop Constructs"],
  4: ["Oral Viva", "JVM Spec", "Memory Layout", "Stack vs Heap", "Garbage Collection Basics", "Class Loading"],
  5: ["Oral Viva", "Control Structures", "Operators", "Ternary Evaluation", "Short-Circuit Logic", "Break & Continue"],
  6: ["Object-Oriented Design", "Constructors", "this Keyword", "Method Overloading", "Static Context", "Garbage Collection", "Encapsulation"],
  7: ["String Immutability", "String Constant Pool", "StringBuffer Thread-Safety", "StringBuilder", "StringTokenizer", "Delimiter Parsing"],
  8: ["Inheritance Hierarchies", "Method Overriding", "Dynamic Method Dispatch", "super Keyword", "final Methods", "Polymorphism"],
  9: ["Package Namespaces", "Access Modifiers", "Interface Contracts", "Multiple Inheritance", "Default Methods", "Public API Export"],
  10: ["Exception Hierarchies", "try-catch-finally", "Custom Exceptions", "throw & throws", "Byte Streams", "FileInputStream", "FileOutputStream"],
  11: ["Character Streams", "FileReader & FileWriter", "BufferedReader", "Thread Lifecycle", "Runnable Interface", "Thread Priorities", "Thread Synchronization"],
  12: ["Java Collections", "ArrayList Dynamic Arrays", "HashMap Hash Tables", "Generics Type Safety", "Collections Utility", "Final Lab Record Sign-off"]
};

// Application State
let currentWeekId = 1;
let currentTab = "doc"; // "doc" | "overview" | "code"
let currentProgramIdx = 0;
let currentCategoryFilter = "all";
let currentSearchQuery = "";
let currentWeek2SubDoc = "oracle"; // "oracle" | "openjdk"
let expandedWeeks = new Set([1, 2, 3]);

// Vector Icons
const Icons = {
  chevronDown: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`,
  chevronRight: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  filePdf: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  fileCode: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  download: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`,
  externalLink: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  copy: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  search: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>`,
  terminal: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  check: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  coffee: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  upload: () => `<svg class="svg-icon stroke" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>`
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAccentTheme();
  initRouter();
  renderSidebarTree();
  updateWorkspace();
  updateInspector();
  setupKeyboardNavigation();
  setupGlobalSearch();
});

// ==========================================================================
// ACCENT THEME TOGGLE (ORANGE, CYAN, EMERALD)
// ==========================================================================
function initAccentTheme() {
  const savedAccent = localStorage.getItem("ide_accent") || "orange";
  setAccent(savedAccent, false);
}

function setAccent(accentName, save = true) {
  document.body.classList.remove("accent-cyan", "accent-emerald");
  if (accentName === "cyan") {
    document.body.classList.add("accent-cyan");
  } else if (accentName === "emerald") {
    document.body.classList.add("accent-emerald");
  }
  
  document.querySelectorAll(".accent-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.accent === accentName);
  });

  if (save) localStorage.setItem("ide_accent", accentName);
}

// ==========================================================================
// ROUTER & URL HASH SYNCHRONIZATION
// ==========================================================================
function initRouter() {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const parts = hash.split("/");
    const weekMatch = parts[0].match(/week-(\d+)/i);
    if (weekMatch) {
      const wId = parseInt(weekMatch[1], 10);
      if (wId >= 1 && wId <= 12) {
        currentWeekId = wId;
        expandedWeeks.add(wId);
      }
    }
    if (parts[1] && ["doc", "overview", "code"].includes(parts[1])) {
      currentTab = parts[1];
    }
    if (parts[2]) {
      const progIdx = parseInt(parts[2], 10);
      if (!isNaN(progIdx)) currentProgramIdx = progIdx;
    }
  }
}

function updateUrlHash() {
  window.location.hash = `week-${String(currentWeekId).padStart(2, "0")}/${currentTab}/${currentProgramIdx}`;
}

// ==========================================================================
// SIDEBAR (FILE EXPLORER) RENDERING & FILTERING
// ==========================================================================
function setCategoryFilter(category) {
  currentCategoryFilter = category;
  document.querySelectorAll(".filter-tag-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.filter === category);
  });
  renderSidebarTree();
}

function isWeekMatchingCategory(wId, cat) {
  if (cat === "all") return true;
  if (cat === "core") return [1, 2, 3].includes(wId);
  if (cat === "oops") return [6, 8, 12].includes(wId);
  if (cat === "streams") return [9, 10, 11].includes(wId);
  if (cat === "threads") return wId === 11;
  if (cat === "viva") return [4, 5].includes(wId);
  return true;
}

function isWeekMatchingSearch(week, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  if (week.title.toLowerCase().includes(q)) return true;
  if (week.subtitle.toLowerCase().includes(q)) return true;
  const concepts = weekConceptsMap[week.id] || [];
  if (concepts.some(c => c.toLowerCase().includes(q))) return true;
  if (week.programs.some(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))) return true;
  return false;
}

function renderSidebarTree() {
  const container = document.getElementById("sidebarTree");
  if (!container || !window.weeks) return;

  const filteredWeeks = weeks.filter(w => {
    return isWeekMatchingCategory(w.id, currentCategoryFilter) &&
           isWeekMatchingSearch(w, currentSearchQuery);
  });

  const countBadge = document.getElementById("sidebarCountBadge");
  if (countBadge) countBadge.textContent = `${filteredWeeks.length} of 12`;

  if (filteredWeeks.length === 0) {
    container.innerHTML = `
      <div style="padding: 24px 16px; text-align: center; color: var(--text-dim); font-size: 12px;">
        <div>No matching topics found</div>
        <div style="margin-top: 6px; font-size: 11px;">Try searching "OOPs", "Streams", or "Week 6"</div>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredWeeks.map(w => {
    const isActive = w.id === currentWeekId;
    const isExpanded = expandedWeeks.has(w.id);
    const isViva = w.id === 4 || w.id === 5;
    const taskCount = isViva ? "Oral Viva" : `${w.programs.length} Tasks`;
    const docMeta = docRegistry[w.id];

    // Sub-children: PDF link + Java program files
    let subItemsHtml = "";
    if (!isViva) {
      if (w.id === 2) {
        subItemsHtml += `
          <div class="sub-file-item pdf-sub" onclick="event.stopPropagation(); selectDocument('oracle');">
            ${Icons.filePdf()} week-02-oracle.pdf
          </div>
          <div class="sub-file-item pdf-sub" onclick="event.stopPropagation(); selectDocument('openjdk');">
            ${Icons.filePdf()} week-02-openjdk.pdf
          </div>
        `;
      } else {
        const pdfName = docMeta ? docMeta.fileName : `week-${String(w.id).padStart(2, '0')}.pdf`;
        subItemsHtml += `
          <div class="sub-file-item pdf-sub" onclick="event.stopPropagation(); switchTab('doc');">
            ${Icons.filePdf()} ${pdfName}
          </div>
        `;
      }

      w.programs.forEach((prog, pIdx) => {
        const clsName = extractClassName(prog.code);
        const fileName = `P${String(pIdx + 1).padStart(2, '0')}_${clsName}.java`;
        const isProgActive = isActive && currentProgramIdx === pIdx && currentTab === "code";
        subItemsHtml += `
          <div class="sub-file-item ${isProgActive ? 'active-sub' : ''}" onclick="event.stopPropagation(); selectProgram(${w.id}, ${pIdx});">
            ${Icons.fileCode()} ${fileName}
          </div>
        `;
      });
    } else {
      subItemsHtml += `
        <div class="sub-file-item" onclick="event.stopPropagation(); switchTab('overview');">
          ${Icons.check()} Viva_Assessment_Rubric.json
        </div>
      `;
    }

    return `
      <div class="week-node ${isActive ? 'active' : ''} ${isExpanded ? 'expanded' : ''}" data-week="${w.id}">
        <div class="week-node-header" onclick="selectWeek(${w.id})">
          <span class="tree-expand-icon" onclick="event.stopPropagation(); toggleWeekExpand(${w.id});">
            ${Icons.chevronRight()}
          </span>
          <span class="week-badge-pill">W${String(w.id).padStart(2, "0")}</span>
          <div class="week-node-info">
            <span class="week-node-title" title="${w.subtitle}">${w.subtitle}</span>
            <div class="week-node-meta">
              <span class="status-beacon-mini ${isViva ? 'viva' : ''}"></span>
              <span>${taskCount}</span>
              <span>&bull;</span>
              <span>${isViva ? 'Oral Milestone' : 'Verified'}</span>
            </div>
          </div>
        </div>
        <div class="week-node-children">
          ${subItemsHtml}
        </div>
      </div>
    `;
  }).join("");
}

function toggleWeekExpand(wId) {
  if (expandedWeeks.has(wId)) {
    expandedWeeks.delete(wId);
  } else {
    expandedWeeks.add(wId);
  }
  renderSidebarTree();
}

// ==========================================================================
// WORKSPACE NAVIGATION & UPDATES
// ==========================================================================
function selectWeek(wId) {
  currentWeekId = wId;
  currentProgramIdx = 0;
  expandedWeeks.add(wId);
  renderSidebarTree();
  updateWorkspace();
  updateInspector();
  updateUrlHash();
}

function selectProgram(wId, pIdx) {
  currentWeekId = wId;
  currentProgramIdx = pIdx;
  currentTab = "code";
  expandedWeeks.add(wId);
  renderSidebarTree();
  updateWorkspace();
  updateInspector();
  updateUrlHash();
}

function selectDocument(docType) {
  currentWeek2SubDoc = docType;
  currentTab = "doc";
  updateWorkspace();
  updateInspector();
  updateUrlHash();
}

function switchTab(tabKey) {
  currentTab = tabKey;
  document.querySelectorAll(".workspace-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabKey);
  });
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === `tab-${tabKey}`);
  });
  updateUrlHash();
}

function updateWorkspace() {
  const week = weeks.find(w => w.id === currentWeekId);
  if (!week) return;

  // Update Breadcrumb
  const bWeek = document.getElementById("breadcrumbWeek");
  const bTitle = document.getElementById("breadcrumbTitle");
  if (bWeek) bWeek.textContent = `Week ${String(week.id).padStart(2, "0")}`;
  if (bTitle) bTitle.textContent = week.subtitle;

  // Update Tabs
  document.querySelectorAll(".workspace-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === currentTab);
  });
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === `tab-${currentTab}`);
  });

  // Render Sub-Panes
  renderTabDocument(week);
  renderTabOverview(week);
  renderTabCode(week);
}

// ==========================================================================
// TAB 1: EMBEDDED RESPONSIVE PDF VIEWER
// ==========================================================================
function renderTabDocument(week) {
  const container = document.getElementById("tab-doc");
  if (!container) return;

  const isViva = week.id === 4 || week.id === 5;

  if (isViva) {
    container.innerHTML = `
      <div class="overview-scroll-body">
        <div class="viva-assessment-box">
          <div class="viva-beacon-large">
            ${Icons.coffee()}
          </div>
          <h2 class="viva-title">Week ${week.id}: Oral Viva Voce Examination</h2>
          <p class="viva-desc">
            This laboratory milestone evaluates conceptual mastery, JVM execution flow, 
            and algorithmic problem solving through one-on-one technical questioning by faculty incharge <strong>Ramesh Sir</strong>.
          </p>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <button class="ide-action-btn primary" onclick="switchTab('overview')">
              View Syllabus Evaluation Rubrics &rarr;
            </button>
            <button class="ide-action-btn" onclick="openUploadModal(${week.id})">
              ${Icons.upload()} Attach Oral Assessment Notes
            </button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Determine active PDF for this week
  let activePdfUrl = `docs/week-${String(week.id).padStart(2, "0")}.pdf`;
  let activeFileName = `week-${String(week.id).padStart(2, "0")}.pdf`;
  let multiBarHtml = "";

  if (week.id === 2) {
    if (currentWeek2SubDoc === "oracle") {
      activePdfUrl = "docs/week-02-oracle.pdf";
      activeFileName = "week-02-oracle.pdf";
    } else {
      activePdfUrl = "docs/week-02-openjdk.pdf";
      activeFileName = "week-02-openjdk.pdf";
    }

    multiBarHtml = `
      <div class="pdf-multi-bar">
        <div class="pdf-multi-tabs">
          <button class="pdf-multi-pill ${currentWeek2SubDoc === 'oracle' ? 'active' : ''}" onclick="selectDocument('oracle')">
            ${Icons.filePdf()} Oracle JDK Installation PDF (439 KB)
          </button>
          <button class="pdf-multi-pill ${currentWeek2SubDoc === 'openjdk' ? 'active' : ''}" onclick="selectDocument('openjdk')">
            ${Icons.filePdf()} OpenJDK Installation PDF (531 KB)
          </button>
        </div>
        <div style="font-size: 11.5px; color: var(--text-subtle); font-family: var(--font-mono);">
          Dual Verification Guides Available
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="pdf-viewer-container">
      ${multiBarHtml}

      <div class="pdf-embed-wrapper">
        <iframe 
          id="idePdfFrame" 
          src="${activePdfUrl}" 
          class="pdf-embed-frame" 
          title="Week ${week.id} Laboratory Record PDF">
        </iframe>
      </div>

      <div class="pdf-fallback-bar">
        <div class="pdf-fallback-info">
          <span style="color: var(--accent-primary);">${Icons.filePdf()}</span>
          <span>Previewing <strong>${activeFileName}</strong></span>
          <span>&bull;</span>
          <span style="font-family: var(--font-mono);">${docRegistry[week.id]?.size || 'Verified'}</span>
        </div>

        <div class="pdf-fallback-actions">
          <a class="ide-action-btn" href="${activePdfUrl}" target="_blank">
            ${Icons.externalLink()} Open in New Tab
          </a>
          <a class="ide-action-btn primary" href="${activePdfUrl}" download="Trivikram_${activeFileName}">
            ${Icons.download()} Download PDF
          </a>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// TAB 2: LAB OVERVIEW & SYLLABUS
// ==========================================================================
function renderTabOverview(week) {
  const container = document.getElementById("tab-overview");
  if (!container) return;

  const concepts = weekConceptsMap[week.id] || ["Core Java", "OOPs Concepts"];
  const conceptsHtml = concepts.map(c => `<span class="concept-pill">${c}</span>`).join("");

  let programsTableHtml = "";
  if (week.programs.length > 0) {
    const rowsHtml = week.programs.map((p, idx) => {
      const clsName = extractClassName(p.code);
      return `
        <tr onclick="selectProgram(${week.id}, ${idx})">
          <td style="width: 70px;">
            <span class="prog-index-pill">P${String(idx + 1).padStart(2, '0')}</span>
          </td>
          <td style="font-weight: 600; color: #ffffff;">${p.title}</td>
          <td style="font-family: var(--font-mono); font-size: 11.5px; color: var(--accent-cyan);">${clsName}.java</td>
          <td style="text-align: right;">
            <button class="ide-action-btn" style="padding: 3px 8px; font-size: 11px;">
              View Code &rarr;
            </button>
          </td>
        </tr>
      `;
    }).join("");

    programsTableHtml = `
      <div class="concepts-section-title">
        ${Icons.fileCode()} Laboratory Programs & Exercises (${week.programs.length})
      </div>
      <div class="syllabus-table-card">
        <table class="syllabus-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Program Title & Objective</th>
              <th>Class Name</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="overview-scroll-body">
      <div class="overview-aim-card">
        <div class="aim-kicker">Laboratory Aim &amp; Learning Objectives // Week ${String(week.id).padStart(2, '0')}</div>
        <h2 class="aim-title-text">${week.subtitle}</h2>
        <p class="aim-body-text">
          Comprehensive practical laboratory module designed for <strong>24CS281 (Java Programming)</strong> at 
          <strong>Siddhartha Academy of Higher Education</strong>. Guided and verified by <strong>Ramesh Sir</strong>.
        </p>
      </div>

      <div class="concepts-section-title">
        ${Icons.check()} Key Theoretical Concepts Covered
      </div>
      <div class="concept-tags-grid">
        ${conceptsHtml}
      </div>

      ${programsTableHtml}
    </div>
  `;
}

// ==========================================================================
// TAB 3: QUICK CODE SNIPPET & TERMINAL OUTPUT
// ==========================================================================
function renderTabCode(week) {
  const container = document.getElementById("tab-code");
  if (!container) return;

  if (week.programs.length === 0) {
    container.innerHTML = `
      <div style="padding: 40px 20px; text-align: center; color: var(--text-dim);">
        <h3>No Code Snippets for Week ${week.id}</h3>
        <p style="margin-top: 8px;">This milestone is an Oral Viva Voce Examination.</p>
      </div>
    `;
    return;
  }

  const prog = week.programs[currentProgramIdx] || week.programs[0];
  const clsName = extractClassName(prog.code);
  const pTag = "P" + String(currentProgramIdx + 1).padStart(2, "0");
  const fileName = `${pTag}_${clsName}.java`;

  // Selector chips
  const chipsHtml = week.programs.map((p, idx) => {
    return `
      <button class="prog-chip ${idx === currentProgramIdx ? 'active' : ''}" onclick="selectProgram(${week.id}, ${idx})">
        P${String(idx + 1).padStart(2, '0')}: ${extractClassName(p.code)}
      </button>
    `;
  }).join("");

  // Line numbers
  const lines = prog.code.split("\n");
  const gutterHtml = lines.map((_, i) => `<div>${i + 1}</div>`).join("");
  const syntaxCode = highlightJavaSyntax(escapeHtml(prog.code));

  // Terminal Output
  const outputText = window.getGeneratedOutput ? window.getGeneratedOutput(week.id, currentProgramIdx) : "Output verified.";

  container.innerHTML = `
    <div class="code-tab-body">
      <!-- Subprogram Selector Bar -->
      <div class="prog-selector-bar">
        ${chipsHtml}
      </div>

      <!-- IDE Code Window -->
      <div class="ide-code-window">
        <div class="ide-window-topbar">
          <div class="ide-window-dots">
            <span class="dot-red"></span>
            <span class="dot-amber"></span>
            <span class="dot-green"></span>
          </div>

          <div class="ide-window-filename">
            ${Icons.fileCode()} ${fileName}
          </div>

          <div class="ide-window-actions">
            <button class="code-copy-btn" onclick="copyActiveCode()">
              ${Icons.copy()} Copy Code
            </button>
            <button class="code-copy-btn" onclick="downloadActiveJava()">
              ${Icons.download()} .java
            </button>
          </div>
        </div>

        <div class="ide-code-viewport">
          <div class="code-gutter">${gutterHtml}</div>
          <pre class="code-canvas"><code>${syntaxCode}</code></pre>
        </div>
      </div>

      <!-- Terminal Console Window -->
      <div class="ide-terminal-window">
        <div class="ide-terminal-topbar">
          <div style="display: flex; align-items: center; gap: 8px;">
            ${Icons.terminal()} PowerShell // Java 21 Execution Output
          </div>
          <div>Verified Output</div>
        </div>

        <div class="ide-terminal-body">
          <div class="term-cmd-prompt">PS C:\\Java> javac ${fileName}</div>
          <div class="term-cmd-prompt">PS C:\\Java> java ${clsName}</div>
          <div style="color: #f8fafc; margin-top: 4px;">${escapeHtml(outputText)}</div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// RIGHT INSPECTOR / METADATA PANEL UPDATES
// ==========================================================================
function updateInspector() {
  const week = weeks.find(w => w.id === currentWeekId);
  if (!week) return;

  const totalWeeks = weeks.length;
  const totalProgs = weeks.reduce((sum, w) => sum + w.programs.length, 0);

  // Active File Info
  const isViva = week.id === 4 || week.id === 5;
  let activeDocName = `week-${String(week.id).padStart(2, "0")}.pdf`;
  let activeDocSize = docRegistry[week.id]?.size || "450 KB";

  if (week.id === 2 && currentWeek2SubDoc === "openjdk") {
    activeDocName = "week-02-openjdk.pdf";
    activeDocSize = "531.0 KB";
  } else if (week.id === 2) {
    activeDocName = "week-02-oracle.pdf";
    activeDocSize = "439.0 KB";
  }

  const inspector = document.getElementById("inspectorPanel");
  if (!inspector) return;

  inspector.innerHTML = `
    <!-- Lab Metrics Bento Card -->
    <div class="inspector-section-title">
      <span>Curriculum Metrics</span>
      <span style="color: var(--accent-emerald);">● Online</span>
    </div>
    <div class="inspector-bento-card">
      <div class="bento-metric-tile">
        <span class="bento-num">${totalWeeks}</span>
        <span class="bento-label">Total Lab Weeks</span>
      </div>
      <div class="bento-metric-tile">
        <span class="bento-num">${totalProgs}+</span>
        <span class="bento-label">Programs Verified</span>
      </div>
      <div class="bento-metric-tile">
        <span class="bento-num" style="color: var(--accent-cyan); font-size: 18px;">JDK 21</span>
        <span class="bento-label">LTS Toolchain</span>
      </div>
      <div class="bento-metric-tile">
        <span class="bento-num" style="color: var(--accent-emerald); font-size: 18px;">100%</span>
        <span class="bento-label">Faculty Signed</span>
      </div>
    </div>

    <!-- Active Document Metadata Card -->
    <div class="inspector-section-title" style="margin-top: 14px;">
      <span>Active File Metadata</span>
      <span style="font-family: var(--font-mono); color: var(--accent-primary);">W${String(week.id).padStart(2, '0')}</span>
    </div>
    <div class="inspector-meta-card">
      <div class="meta-row">
        <span class="meta-label">File Name</span>
        <span class="meta-value">${isViva ? 'Oral_Assessment.json' : activeDocName}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">File Size</span>
        <span class="meta-value">${isViva ? 'N/A (Oral Viva)' : activeDocSize}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">File Format</span>
        <span class="meta-value">${isViva ? 'Oral Milestone' : 'PDF Document (ISO 32000)'}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Active Tab</span>
        <span class="meta-value" style="color: var(--accent-cyan);">${currentTab.toUpperCase()}</span>
      </div>
      <div class="meta-row">
        <span class="meta-label">Verified By</span>
        <span class="meta-value" style="color: var(--accent-orange);">${studentProfile.guide}</span>
      </div>

      ${!isViva ? `
        <div style="display: flex; gap: 8px; margin-top: 6px;">
          <a class="ide-action-btn primary" style="flex: 1; justify-content: center;" href="docs/${activeDocName}" download="Trivikram_${activeDocName}">
            ${Icons.download()} Download PDF
          </a>
        </div>
      ` : ''}
    </div>

    <!-- Student & Faculty Profile Card -->
    <div class="inspector-section-title" style="margin-top: 14px;">
      <span>Student &amp; Guide Info</span>
    </div>
    <div class="student-profile-card">
      <div class="profile-avatar-row">
        <div class="profile-hologram-avatar">
          TR
        </div>
        <div class="profile-name-group">
          <span class="profile-name">${studentProfile.name}</span>
          <span class="profile-roll">${studentProfile.rollNo}</span>
        </div>
      </div>

      <div class="profile-details-list">
        <div class="profile-detail-item">
          <span class="detail-k">Course Code</span>
          <span class="detail-v">24CS281</span>
        </div>
        <div class="profile-detail-item">
          <span class="detail-k">Department</span>
          <span class="detail-v">${studentProfile.dept}</span>
        </div>
        <div class="profile-detail-item">
          <span class="detail-k">Section</span>
          <span class="detail-v">${studentProfile.section}</span>
        </div>
        <div class="profile-detail-item">
          <span class="detail-k">Faculty Guide</span>
          <span class="detail-v" style="color: var(--accent-orange); font-weight: 700;">${studentProfile.guide}</span>
        </div>
        <div class="profile-detail-item">
          <span class="detail-k">Institution</span>
          <span class="detail-v" style="font-size: 11px;">Siddhartha Academy</span>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// CODE HELPERS & SYNTAX HIGHLIGHTING
// ==========================================================================
function extractClassName(code) {
  if (!code) return "Program";
  const match = code.match(/public\s+class\s+([A-Za-z0-9_]+)/) ||
                code.match(/class\s+([A-Za-z0-9_]+)/);
  return match ? match[1] : "Program";
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

function highlightJavaSyntax(code) {
  // Simple token highlight
  const keywords = /\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while|record|var)\b/g;
  const strings = /(&quot;.*?&quot;)/g;
  const comments = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;

  return code
    .replace(strings, '<span style="color: #a5d6ff;">$1</span>')
    .replace(keywords, '<span style="color: #ff7b72; font-weight: 600;">$1</span>')
    .replace(/(\bSystem\.out\.println\b|\bSystem\.out\.print\b)/g, '<span style="color: #79c0ff; font-weight: 600;">$1</span>');
}

function copyActiveCode() {
  const week = weeks.find(w => w.id === currentWeekId);
  const prog = week?.programs[currentProgramIdx];
  if (!prog) return;

  navigator.clipboard.writeText(prog.code).then(() => {
    showToast("Program code copied to clipboard!");
  });
}

function downloadActiveJava() {
  const week = weeks.find(w => w.id === currentWeekId);
  const prog = week?.programs[currentProgramIdx];
  if (!prog) return;

  const clsName = extractClassName(prog.code);
  const fileName = `P${String(currentProgramIdx + 1).padStart(2, '0')}_${clsName}.java`;
  const blob = new Blob([prog.code], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Downloaded ${fileName}`);
}

// ==========================================================================
// TOAST NOTIFICATION
// ==========================================================================
function showToast(msg) {
  const toast = document.getElementById("toastNotice");
  const msgSpan = document.getElementById("toastMessage");
  if (!toast || !msgSpan) return;

  msgSpan.textContent = msg;
  toast.style.display = "flex";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2600);
}

// ==========================================================================
// KEYBOARD NAVIGATION (ARROW UP/DOWN, 1/2/3, ESC, CTRL+K)
// ==========================================================================
function setupKeyboardNavigation() {
  window.addEventListener("keydown", (e) => {
    // Focus search on Ctrl+K or Cmd+K
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const input = document.getElementById("globalSearchInput");
      if (input) input.focus();
      return;
    }

    // Escape closes modals or clears search
    if (e.key === "Escape") {
      closeUploadModal();
      const input = document.getElementById("globalSearchInput");
      if (input && document.activeElement === input) {
        input.value = "";
        currentSearchQuery = "";
        renderSidebarTree();
        input.blur();
      }
      return;
    }

    // Do not intercept arrow keys if typing in input
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (currentWeekId < 12) {
        selectWeek(currentWeekId + 1);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentWeekId > 1) {
        selectWeek(currentWeekId - 1);
      }
    } else if (e.key === "1") {
      switchTab("doc");
    } else if (e.key === "2") {
      switchTab("overview");
    } else if (e.key === "3") {
      switchTab("code");
    }
  });
}

// ==========================================================================
// GLOBAL SEARCH
// ==========================================================================
function setupGlobalSearch() {
  const input = document.getElementById("globalSearchInput");
  if (!input) return;

  input.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.trim();
    renderSidebarTree();
  });
}

// ==========================================================================
// DIRECT FILE UPLOAD MODAL
// ==========================================================================
function openUploadModal(defaultWeekId = null) {
  const modal = document.getElementById("uploadModal");
  if (!modal) return;

  if (defaultWeekId && document.getElementById("modalWeekSelect")) {
    document.getElementById("modalWeekSelect").value = defaultWeekId;
  }
  modal.classList.add("open");
}

function closeUploadModal() {
  const modal = document.getElementById("uploadModal");
  if (modal) modal.classList.remove("open");
}

function handleUploadBackdrop(e) {
  if (e.target.id === "uploadModal") {
    closeUploadModal();
  }
}

function handleModalFileSelected(e) {
  const file = e.target.files[0];
  if (!file) return;
  processSelectedFile(file);
}

function handleDropFile(e) {
  e.preventDefault();
  const zone = document.getElementById("dropZone");
  if (zone) zone.classList.remove("dragover");
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    processSelectedFile(e.dataTransfer.files[0]);
  }
}

let uploadedFileData = null;

function processSelectedFile(file) {
  uploadedFileData = file;
  const statusEl = document.getElementById("uploadFileStatus");
  const nameEl = document.getElementById("previewFileName");
  const sizeEl = document.getElementById("previewFileSize");

  if (statusEl) statusEl.style.display = "flex";
  if (nameEl) nameEl.textContent = file.name;
  if (sizeEl) sizeEl.textContent = (file.size / 1024).toFixed(1) + " KB";
}

function applyUploadedFile() {
  if (!uploadedFileData) {
    alert("Please select a document or code file first.");
    return;
  }

  const weekSelect = document.getElementById("modalWeekSelect");
  const weekId = parseInt(weekSelect ? weekSelect.value : currentWeekId, 10);

  showToast(`Attached ${uploadedFileData.name} to Week ${weekId}!`);
  closeUploadModal();
  selectWeek(weekId);
}
