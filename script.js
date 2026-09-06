// Java Programming Lab - Trivikram (25EU02067)
const TOTAL_WEEKS = 8;

const fileMap = {
    1: "week-1 adv.pdf",
    2: "week-2 adv.pdf",
    3: "week-3 adv.pdf",
    4: "week-4 adv.pdf",
    5: "week-5 adv.pdf",
    6: "week-6 adv.pdf",
    7: "week-7 adv.pdf",
    8: "week-8 adv.pdf"
};

const weekTopics = {
    1: {
        title: "Java Fundamentals & OOP Architecture",
        desc: "Class creation, objects, variables, scanner inputs, and basic console I/O."
    },
    2: {
        title: "Control Statements & 2D Arrays",
        desc: "Decision making, iteration loops, array manipulation, and matrix operations."
    },
    3: {
        title: "Constructors & Method Overloading",
        desc: "Default & parameterized constructors, constructor chaining, method overloading, and 'this' keyword."
    },
    4: {
        title: "Inheritance & Dynamic Dispatch",
        desc: "Inheritance hierarchies (single, multilevel), 'super' keyword, and runtime polymorphism."
    },
    5: {
        title: "Packages & Interface Implementation",
        desc: "Defining and importing custom packages, access specifiers, and implementing multiple interfaces."
    },
    6: {
        title: "Exception Handling & Custom Errors",
        desc: "Try, catch, finally, throw, throws blocks, standard exceptions, and custom user-defined exceptions."
    },
    7: {
        title: "Multithreading & Synchronization",
        desc: "Thread class, Runnable interface, thread priorities, inter-thread communication, and synchronized blocks."
    },
    8: {
        title: "Collections & Stream I/O Operations",
        desc: "Java Collections (ArrayList, HashMap), File operations, Character and Byte Streams."
    }
};

let currentWeek = 1;
let currentViewMode = "manual"; // "manual" (HTML sheet) or "pdf"
const userUploadedPdfs = {};

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    renderWeekBoxes();
    loadWeek(1);
});

// Render the 8 week buttons inside .weeks-container
function renderWeekBoxes() {
    const container = document.querySelector(".weeks-container");
    if (!container) return;
    
    container.innerHTML = "";
    for (let i = 1; i <= TOTAL_WEEKS; i++) {
        const box = document.createElement("div");
        box.className = `week-box ${i === 1 ? "active" : ""}`;
        box.id = `week-box-${i}`;
        box.onclick = () => loadWeek(i);
        box.innerText = `Week ${i}`;
        container.appendChild(box);
    }
}

// Main loadWeek handler
function loadWeek(week) {
    currentWeek = week;

    // Update Title
    const titleEl = document.getElementById("week-title");
    if (titleEl) {
        titleEl.innerText = `Week ${week} Content`;
    }

    // Update active week card styling
    document.querySelectorAll(".week-box").forEach((el, idx) => {
        if (idx + 1 === week) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });

    updateFrameContent();
}

function setViewMode(mode) {
    currentViewMode = mode;
    const btnManual = document.getElementById("btnViewManual");
    const btnPdf = document.getElementById("btnViewPdf");

    if (btnManual && btnPdf) {
        if (mode === "manual") {
            btnManual.classList.add("active");
            btnPdf.classList.remove("active");
        } else {
            btnPdf.classList.add("active");
            btnManual.classList.remove("active");
        }
    }
    updateFrameContent();
}

function updateFrameContent() {
    const frame = document.getElementById("frame");
    const loader = document.getElementById("frameLoader");
    const downloadLink = document.getElementById("downloadLink");
    const currentDocEl = document.getElementById("currentDocName");
    const fileName = fileMap[currentWeek];

    let targetUri = "";
    if (currentViewMode === "manual") {
        targetUri = `converted/week${currentWeek}.html`;
        if (currentDocEl) currentDocEl.innerText = `converted/week${currentWeek}.html (Lab Sheet)`;
    } else {
        if (userUploadedPdfs[currentWeek]) {
            targetUri = userUploadedPdfs[currentWeek].url;
            if (currentDocEl) currentDocEl.innerText = `Uploaded File: ${userUploadedPdfs[currentWeek].name}`;
        } else {
            targetUri = `docs/${fileName}`;
            if (currentDocEl) currentDocEl.innerText = fileName;
        }
    }

    if (loader) loader.classList.add("active");

    if (frame) {
        frame.onload = () => {
            if (loader) loader.classList.remove("active");
        };
        frame.src = targetUri;
    }

    // Download link targets PDF
    if (downloadLink) {
        if (userUploadedPdfs[currentWeek]) {
            downloadLink.href = userUploadedPdfs[currentWeek].url;
            downloadLink.setAttribute("download", userUploadedPdfs[currentWeek].name);
        } else {
            downloadLink.href = `docs/${fileName}`;
            downloadLink.setAttribute("download", fileName);
        }
    }
}

// Attach user's own PDF
function triggerPdfUpload() {
    const input = document.getElementById("userPdfInput");
    if (input) input.click();
}

function handleUserPdf(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".pdf")) {
        alert("Please select a PDF file (.pdf)");
        return;
    }

    const objectUrl = URL.createObjectURL(file);
    userUploadedPdfs[currentWeek] = {
        name: file.name,
        url: objectUrl
    };

    setViewMode("pdf");

    // Optional background sync with server
    const formData = new FormData();
    formData.append("week", currentWeek.toString());
    formData.append("file", file);
    fetch("/api/upload", { method: "POST", body: formData }).catch(() => {});

    alert(`Week ${currentWeek} PDF attached successfully! You can preview or download it now.`);
    event.target.value = "";
}

// Open in New Tab
function openInNewTab() {
    const frame = document.getElementById("frame");
    if (frame && frame.src) {
        window.open(frame.src, "_blank");
    }
}
