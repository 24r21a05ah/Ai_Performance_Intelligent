:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --primary-soft: #eff6ff;

    --success: #059669;
    --success-soft: #ecfdf5;

    --warning: #d97706;
    --warning-soft: #fff7ed;

    --danger: #dc2626;
    --danger-soft: #fef2f2;

    --purple: #7c3aed;
    --purple-soft: #f5f3ff;

    --navy: #0f172a;
    --navy-light: #172033;

    --text: #0f172a;
    --text-secondary: #475569;
    --text-muted: #64748b;
    --text-light: #94a3b8;

    --border: #e2e8f0;
    --border-light: #f1f5f9;

    --background: #f8fafc;
    --white: #ffffff;

    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;

    --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04);
    --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.06);
    --shadow-lg: 0 16px 40px rgba(15, 23, 42, 0.08);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: var(--background);
    color: var(--text);
    font-size: 13px;
}

button,
input,
select {
    font-family: inherit;
}

button {
    cursor: pointer;
}

button:focus-visible,
input:focus-visible,
select:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.15);
    outline-offset: 2px;
}

.app {
    min-height: 100vh;
}


/* ================= SIDEBAR ================= */

.sidebar {
    width: 250px;
    min-height: 100vh;
    position: fixed;
    inset: 0 auto 0 0;
    z-index: 20;

    display: flex;
    flex-direction: column;

    padding: 22px 14px;

    background: var(--navy);
    color: #fff;

    border-right: 1px solid rgba(255, 255, 255, 0.04);
}

.logo {
    display: flex;
    align-items: center;
    gap: 11px;

    padding: 4px 9px 23px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.logo-icon {
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background: #2563eb;

    color: #fff;
    font-size: 18px;
    font-weight: 800;

    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.22);
}

.logo h2 {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.4px;
}

.logo span {
    display: block;
    margin-top: 4px;

    color: #94a3b8;
    font-size: 8px;
    font-weight: 500;
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    gap: 4px;

    margin-top: 22px;
}

.nav-item {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 11px;

    padding: 11px 12px;

    border: 1px solid transparent;
    border-radius: 9px;

    background: transparent;
    color: #94a3b8;

    font-size: 11px;
    font-weight: 600;

    text-align: left;

    transition:
        background 0.2s ease,
        color 0.2s ease,
        border-color 0.2s ease;
}

.nav-item span {
    width: 18px;

    color: #64748b;

    font-size: 13px;
    text-align: center;
}

.nav-item:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #e2e8f0;
}

.nav-item:hover span {
    color: #cbd5e1;
}

.nav-item.active {
    background: rgba(37, 99, 235, 0.14);
    border-color: rgba(96, 165, 250, 0.12);
    color: #fff;
}

.nav-item.active span {
    color: #60a5fa;
}

.sidebar-bottom {
    margin-top: auto;
}

.ai-status {
    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 14px;
    padding: 10px 11px;

    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;

    background: rgba(255, 255, 255, 0.035);

    color: #cbd5e1;

    font-size: 9px;
    font-weight: 600;
}

.status-dot {
    width: 7px;
    height: 7px;

    flex-shrink: 0;

    border-radius: 50%;
    background: #22c55e;

    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.12);
}

.user-mini {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 14px 6px 3px;

    border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.avatar {
    width: 35px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 9px;

    background: #334155;

    color: #e2e8f0;

    font-size: 10px;
    font-weight: 800;
}

.user-mini strong {
    display: block;

    color: #f8fafc;
    font-size: 10px;
}

.user-mini small {
    display: block;

    margin-top: 3px;

    color: #94a3b8;

    font-size: 8px;
}


/* ================= MAIN ================= */

.main {
    width: calc(100% - 250px);
    min-height: 100vh;

    margin-left: 250px;
    padding: 0 34px 50px;
}

.topbar {
    min-height: 82px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 28px;

    border-bottom: 1px solid var(--border);
}

.topbar h1 {
    font-size: 21px;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.topbar p {
    margin-top: 5px;

    color: var(--text-muted);

    font-size: 10px;
}

.top-actions {
    display: flex;
    align-items: center;
    gap: 18px;
}

.cycle {
    text-align: right;
}

.cycle span {
    display: block;

    color: var(--text-light);

    font-size: 8px;
    font-weight: 500;
}

.cycle strong {
    display: block;

    margin-top: 3px;

    color: var(--text);

    font-size: 10px;
}

.notification {
    width: 34px;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid #fecaca;
    border-radius: 9px;

    background: var(--danger-soft);
    color: var(--danger);

    font-size: 10px;
    font-weight: 800;

    transition: 0.2s ease;
}

.notification:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
}


/* ================= SECTIONS ================= */

.section {
    display: none;
}

.active-section {
    display: block;
    animation: sectionIn 0.2s ease;
}

@keyframes sectionIn {
    from {
        opacity: 0;
        transform: translateY(5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.section-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 20px;

    margin-bottom: 22px;
}

.section-heading h2 {
    margin-top: 7px;

    font-size: 23px;
    font-weight: 700;
    letter-spacing: -0.7px;
}

.section-heading p {
    margin-top: 6px;

    color: var(--text-muted);

    font-size: 11px;
    line-height: 1.6;
}

.eyebrow {
    color: var(--primary);

    font-size: 8px;
    font-weight: 800;
    letter-spacing: 1.3px;
}


/* ================= WELCOME ================= */

.welcome {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    margin-bottom: 20px;
    padding: 30px;

    border: 1px solid #1e293b;
    border-radius: var(--radius-lg);

    background:
        linear-gradient(
            135deg,
            #0f172a 0%,
            #111c31 100%
        );

    color: #fff;

    box-shadow: var(--shadow-md);
}

.welcome h2 {
    margin-top: 9px;

    font-size: 28px;
    line-height: 1.2;
    letter-spacing: -1px;
}

.welcome h2 span {
    color: #60a5fa;
}

.welcome p {
    max-width: 650px;

    margin-top: 11px;

    color: #94a3b8;

    font-size: 11px;
    line-height: 1.7;
}

.primary-btn,
.secondary-btn {
    border: none;

    border-radius: 8px;

    font-size: 10px;
    font-weight: 700;

    transition:
        transform 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease;
}

.primary-btn {
    padding: 11px 16px;

    background: var(--primary);
    color: #fff;

    box-shadow: 0 6px 15px rgba(37, 99, 235, 0.18);
}

.primary-btn:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.secondary-btn {
    padding: 10px 14px;

    border: 1px solid var(--border);

    background: #fff;
    color: var(--text-secondary);
}

.secondary-btn:hover {
    border-color: #cbd5e1;
    background: #f8fafc;
}


/* ================= STATS ================= */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 13px;

    margin-bottom: 20px;
}

.stat-card {
    display: flex;
    align-items: center;
    gap: 12px;

    min-height: 88px;
    padding: 15px;

    border: 1px solid var(--border);
    border-radius: var(--radius-md);

    background: #fff;

    box-shadow: var(--shadow-sm);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.stat-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.stat-icon {
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 9px;

    font-size: 11px;
    font-weight: 800;
}

.stat-icon.blue {
    background: var(--primary-soft);
    color: var(--primary);
}

.stat-icon.green {
    background: var(--success-soft);
    color: var(--success);
}

.stat-icon.orange {
    background: var(--warning-soft);
    color: var(--warning);
}

.stat-icon.red {
    background: var(--danger-soft);
    color: var(--danger);
}

.stat-card span {
    display: block;

    color: var(--text-muted);

    font-size: 8px;
}

.stat-card strong {
    display: block;

    margin-top: 3px;

    color: var(--text);

    font-size: 20px;
    line-height: 1;
}

.stat-card small {
    display: block;

    margin-top: 4px;

    color: var(--text-light);

    font-size: 8px;
}


/* ================= PANELS ================= */

.panel {
    margin-bottom: 20px;
    padding: 20px;

    border: 1px solid var(--border);
    border-radius: var(--radius-md);

    background: #fff;

    box-shadow: var(--shadow-sm);
}

.panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    margin-bottom: 18px;
}

.panel-header h3 {
    color: var(--text);

    font-size: 13px;
    font-weight: 700;
}

.panel-header p {
    margin-top: 4px;

    color: var(--text-light);

    font-size: 9px;
    line-height: 1.5;
}

.badge {
    display: inline-flex;
    align-items: center;

    padding: 5px 9px;

    border-radius: 20px;

    font-size: 8px;
    font-weight: 700;
    white-space: nowrap;
}

.green-badge {
    background: var(--success-soft);
    color: var(--success);
}

.blue-badge {
    background: var(--primary-soft);
    color: var(--primary);
}


/* ================= DASHBOARD ================= */

.dashboard-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 20px;
}

.chart {
    height: 205px;

    display: flex;
    align-items: flex-end;

    padding: 8px 20px 0;
}

.chart-bars {
    width: 100%;
    height: 165px;

    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    border-bottom: 1px solid var(--border);

    background:
        repeating-linear-gradient(
            to top,
            transparent 0,
            transparent 40px,
            rgba(226, 232, 240, 0.45) 41px
        );
}

.bar {
    position: relative;

    width: 44px;
    min-height: 25px;

    border-radius: 6px 6px 0 0;

    background: #cbd5e1;

    transition: height 0.3s ease;
}

.bar.active-bar {
    background: var(--primary);
}

.bar span {
    position: absolute;
    bottom: -23px;
    left: 50%;

    transform: translateX(-50%);

    color: var(--text-muted);

    font-size: 8px;
    font-weight: 600;
}

.signal {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 12px 0;

    border-bottom: 1px solid var(--border-light);
}

.signal:last-child {
    border-bottom: none;
}

.signal-icon {
    width: 31px;
    height: 31px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 8px;

    font-size: 10px;
    font-weight: 800;
}

.signal-icon.warning {
    background: var(--warning-soft);
    color: var(--warning);
}

.signal-icon.purple {
    background: var(--purple-soft);
    color: var(--purple);
}

.signal-icon.blue {
    background: var(--primary-soft);
    color: var(--primary);
}

.signal strong {
    display: block;

    font-size: 10px;
}

.signal small {
    display: block;

    margin-top: 3px;

    color: var(--text-light);

    font-size: 8px;
}

.signal > span:last-child {
    margin-left: auto;

    color: var(--primary);

    font-size: 8px;
    font-weight: 700;
}

.intelligence-flow {
    margin-top: 0;
}

.flow {
    display: flex;
    align-items: center;
    gap: 10px;
}

.flow-step {
    flex: 1;

    min-height: 88px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 13px;

    border: 1px solid var(--border);
    border-radius: 10px;

    background: #fbfdff;

    text-align: center;

    transition: 0.2s ease;
}

.flow-step:hover {
    border-color: #bfdbfe;
    background: var(--primary-soft);
}

.flow-step > div {
    color: var(--primary);

    font-size: 8px;
    font-weight: 800;
}

.flow-step strong {
    display: block;

    margin-top: 6px;

    font-size: 10px;
}

.flow-step small {
    display: block;

    margin-top: 4px;

    color: var(--text-light);

    font-size: 7px;
    line-height: 1.4;
}

.arrow {
    flex-shrink: 0;

    color: #94a3b8;

    font-size: 14px;
    font-weight: 700;
}


/* ================= RANKING ================= */

.ranking-card {
    margin-top: 0;
}

.ranking-table {
    width: 100%;

    overflow-x: auto;

    border: 1px solid var(--border);
    border-radius: 10px;
}

.ranking-row {
    min-width: 850px;

    display: grid;
    grid-template-columns:
        55px
        minmax(180px, 2fr)
        80px
        90px
        90px
        110px
        110px
        90px;

    align-items: center;
    gap: 10px;

    padding: 13px 16px;

    border-bottom: 1px solid var(--border-light);

    color: var(--text-secondary);

    font-size: 9px;
}

.ranking-row:last-child {
    border-bottom: none;
}

.ranking-header {
    background: #f8fafc;

    color: var(--text-light);

    font-size: 8px;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: 0.04em;
}

.ranking-row:not(.ranking-header):hover {
    background: #fbfdff;
}

.rank-number {
    width: 27px;
    height: 27px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #f1f5f9;
    color: var(--text-secondary);

    font-size: 9px;
    font-weight: 800;
}

.ranking-employee {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.ranking-employee strong {
    color: var(--text);

    font-size: 10px;
}

.ranking-employee small {
    color: var(--text-light);

    font-size: 8px;
}

.ranking-row > strong {
    color: var(--text);

    font-size: 12px;
}

.ranking-ready,
.ranking-moderate {
    display: inline-flex;
    width: fit-content;

    padding: 5px 8px;

    border-radius: 20px;

    font-size: 8px;
    font-weight: 700;
}

.ranking-ready {
    background: var(--success-soft);
    color: #047857;
}

.ranking-moderate {
    background: var(--warning-soft);
    color: #c2410c;
}

.ranking-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    margin-top: 15px;
    padding-top: 14px;

    border-top: 1px solid var(--border-light);
}

.ranking-footer span {
    color: var(--text-light);

    font-size: 9px;
    line-height: 1.5;
}


/* ================= EMPLOYEE DIRECTORY ================= */

.employee-directory {
    margin-bottom: 20px;
}

.directory-tools {
    display: flex;
    align-items: center;
    gap: 9px;
}

.employee-search {
    width: 210px;

    padding: 9px 11px;

    border: 1px solid var(--border);
    border-radius: 8px;

    background: #fff;

    outline: none;

    color: var(--text);

    font-size: 9px;

    transition: 0.2s ease;
}

.employee-search::placeholder {
    color: #94a3b8;
}

.employee-search:focus {
    border-color: #93c5fd;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.08);
}

.directory-count {
    color: var(--text-muted);

    font-size: 8px;
    font-weight: 700;
    white-space: nowrap;
}

.employee-directory-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

.employee-directory-card {
    position: relative;

    padding: 15px;

    border: 1px solid var(--border);
    border-radius: 11px;

    background: #fff;

    cursor: pointer;

    transition:
        transform 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.employee-directory-card:hover {
    transform: translateY(-2px);

    border-color: #cbd5e1;

    box-shadow: var(--shadow-md);
}

.employee-directory-card.selected {
    border-color: #93c5fd;

    box-shadow:
        0 0 0 3px rgba(37, 99, 235, 0.07),
        var(--shadow-sm);
}

.directory-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

.directory-avatar {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9px;

    background: #f1f5f9;
    color: #334155;

    font-size: 10px;
    font-weight: 800;
}

.employee-directory-card h4 {
    margin: 12px 0 4px;

    color: var(--text);

    font-size: 11px;
}

.employee-directory-card p {
    color: var(--text-secondary);

    font-size: 9px;
}

.employee-directory-card small {
    display: block;

    margin-top: 4px;

    color: var(--text-light);

    font-size: 8px;
}

.directory-status {
    display: inline-flex;
    align-items: center;

    width: fit-content;

    padding: 4px 7px;

    border-radius: 20px;

    font-size: 7px;
    font-weight: 700;
    white-space: nowrap;
}

.directory-status.ready,
.status-pill.ready {
    background: var(--success-soft);
    color: #047857;
}

.directory-status.strong,
.status-pill.strong {
    background: var(--primary-soft);
    color: #1d4ed8;
}

.directory-status.development,
.status-pill.development {
    background: var(--warning-soft);
    color: #c2410c;
}

.directory-score {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 11px;
    padding-top: 10px;

    border-top: 1px solid var(--border-light);
}

.directory-score span {
    color: var(--text-light);

    font-size: 7px;
}

.directory-score strong {
    color: var(--text);

    font-size: 14px;
}


/* ================= EMPLOYEE PROFILE ================= */

.employee-header {
    display: flex;
    align-items: center;
    gap: 15px;

    margin-bottom: 20px;
    padding: 20px;

    border: 1px solid var(--border);
    border-radius: var(--radius-md);

    background: #fff;

    box-shadow: var(--shadow-sm);
}

.employee-avatar {
    width: 55px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 12px;

    background: var(--primary-soft);
    color: var(--primary);

    font-size: 14px;
    font-weight: 800;
}

.employee-header h2 {
    font-size: 17px;
}

.employee-header p {
    margin-top: 4px;

    color: var(--text-muted);

    font-size: 9px;
}

.status-pill {
    display: inline-flex;

    margin-top: 7px;
    padding: 5px 8px;

    border-radius: 20px;

    font-size: 7px;
    font-weight: 700;
}

.employee-score {
    margin-left: auto;

    text-align: right;
}

.employee-score span {
    display: block;

    color: var(--text-light);

    font-size: 8px;
}

.employee-score strong {
    display: block;

    margin-top: 2px;

    color: var(--text);

    font-size: 24px;
}

.employee-score small {
    color: var(--text-light);

    font-size: 7px;
}


/* ================= EVIDENCE ================= */

.evidence-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 11px;

    margin-bottom: 20px;
}

.evidence-card {
    padding: 14px;

    border: 1px solid var(--border);
    border-radius: 10px;

    background: #fff;

    box-shadow: var(--shadow-sm);

    transition: 0.2s ease;
}

.evidence-card:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.evidence-card > span {
    color: var(--text-muted);

    font-size: 7px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
}

.evidence-card h3 {
    margin-top: 8px;

    font-size: 9px;
}

.evidence-card strong {
    display: block;

    margin-top: 6px;

    color: var(--text);

    font-size: 18px;
}

.evidence-card p {
    margin-top: 3px;

    color: var(--text-light);

    font-size: 7px;
    line-height: 1.4;
}

.ai-badge {
    display: inline-flex;

    padding: 5px 8px;

    border-radius: 20px;

    background: var(--primary-soft);
    color: var(--primary);

    font-size: 7px;
    font-weight: 700;
}

.summary-box {
    padding: 16px;

    border: 1px solid var(--border);
    border-radius: 9px;

    background: #f8fafc;
}

.summary-box p {
    color: var(--text-secondary);

    font-size: 10px;
    line-height: 1.7;
}

.evidence-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    margin-top: 12px;
}

.evidence-tags span {
    padding: 5px 8px;

    border: 1px solid var(--border);
    border-radius: 5px;

    background: #fff;
    color: var(--text-muted);

    font-size: 7px;
}


/* ================= SKILLS ================= */

.skills-layout {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 20px;
}

.skill-row {
    display: grid;
    grid-template-columns: 150px 1fr 45px;
    align-items: center;
    gap: 14px;

    margin-bottom: 21px;
}

.skill-row:last-child {
    margin-bottom: 0;
}

.skill-row strong {
    font-size: 9px;
}

.skill-row small {
    display: block;

    margin-top: 4px;

    color: var(--text-light);

    font-size: 7px;
}

.skill-bar {
    height: 8px;

    overflow: hidden;

    border-radius: 10px;

    background: #e2e8f0;
}

.skill-bar div {
    height: 100%;

    border-radius: 10px;

    background: var(--primary);
}

.growth-number {
    margin-bottom: 3px;

    color: var(--primary);

    font-size: 37px;
    font-weight: 800;
    letter-spacing: -1px;
}

.muted {
    color: var(--text-light);

    font-size: 9px;
    line-height: 1.6;
}

.growth-list {
    margin-top: 14px;
}

.growth-list > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;

    padding: 12px 0;

    border-bottom: 1px solid var(--border-light);
}

.growth-list > div:last-child {
    border-bottom: none;
}

.growth-list span {
    color: var(--text-muted);

    font-size: 9px;
}

.growth-list strong {
    color: var(--text);

    font-size: 9px;
    text-align: right;
}


/* ================= DEVELOPMENT ================= */

.gap-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;

    margin-bottom: 20px;
}

.gap-card {
    padding: 18px;

    border: 1px solid var(--border);
    border-radius: 11px;

    background: #fff;
}

.gap-top {
    display: flex;
    align-items: center;
    gap: 9px;
}

.gap-top span {
    width: 27px;
    height: 27px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 7px;

    background: #f1f5f9;
    color: #334155;

    font-size: 9px;
    font-weight: 800;
}

.gap-top strong {
    font-size: 11px;
}

.gap-card p {
    margin: 11px 0;

    color: var(--text-muted);

    font-size: 9px;
    line-height: 1.6;
}

.gap-progress {
    height: 7px;

    overflow: hidden;

    border-radius: 10px;

    background: #e2e8f0;
}

.gap-progress div {
    height: 100%;

    border-radius: 10px;

    background: var(--primary);
}

.gap-card small {
    display: block;

    margin-top: 6px;

    color: var(--text-muted);

    font-size: 7px;
}

.recommendation {
    display: grid;
    grid-template-columns: 38px 1fr auto;
    align-items: start;
    gap: 14px;

    padding: 16px 0;

    border-bottom: 1px solid var(--border-light);
}

.recommendation:last-child {
    border-bottom: none;
}

.rec-number {
    width: 31px;
    height: 31px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background: var(--primary-soft);
    color: var(--primary);

    font-size: 8px;
    font-weight: 800;
}

.recommendation strong {
    font-size: 10px;
}

.recommendation p {
    margin-top: 5px;

    color: var(--text-muted);

    font-size: 8px;
    line-height: 1.6;
}

.recommendation small {
    display: block;

    margin-top: 6px;

    color: var(--text-light);

    font-size: 7px;
}

.recommendation > span {
    padding: 5px 8px;

    border: 1px solid var(--border);
    border-radius: 20px;

    background: #f8fafc;
    color: var(--text-muted);

    font-size: 7px;
    font-weight: 700;
    white-space: nowrap;
}


/* ================= CAREER ================= */

.employee-select {
    min-width: 190px;

    padding: 9px 11px;

    border: 1px solid var(--border);
    border-radius: 8px;

    background: #fff;
    color: var(--text-secondary);

    font-size: 9px;

    outline: none;
}

.employee-select:focus {
    border-color: #93c5fd;
}

.career-paths {
    display: grid;
    grid-template-columns: 1fr 42px 1fr 42px 1fr;
    align-items: center;
    gap: 10px;

    margin-bottom: 20px;
}

.path {
    padding: 18px;

    border: 1px solid var(--border);
    border-radius: 11px;

    background: #fff;
}

.path.recommended {
    border-color: #bfdbfe;
    background: #f8fbff;
}

.path span {
    display: block;

    color: var(--text-muted);

    font-size: 7px;
    font-weight: 800;
    letter-spacing: 0.7px;
    text-transform: uppercase;
}

.path strong {
    display: block;

    margin-top: 8px;

    font-size: 12px;
}

.path-arrow {
    color: var(--primary);

    font-size: 18px;
    font-weight: 700;

    text-align: center;
}

.career-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    margin-bottom: 20px;
}

.promotion-card {
    padding: 23px;

    border-radius: var(--radius-md);

    background:
        linear-gradient(
            135deg,
            #0f172a,
            #172033
        );

    color: #fff;

    box-shadow: var(--shadow-md);
}

.promotion-card h2 {
    margin-top: 15px;

    font-size: 20px;
    letter-spacing: -0.5px;
}

.readiness {
    display: flex;
    align-items: center;
    gap: 18px;

    margin: 22px 0;
}

.circle {
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border: 8px solid var(--primary);
    border-radius: 50%;

    background: rgba(255, 255, 255, 0.03);

    font-size: 21px;
    font-weight: 800;
}

.readiness strong {
    font-size: 10px;
}

.readiness p {
    margin-top: 6px;

    color: #94a3b8;

    font-size: 9px;
    line-height: 1.6;
}

.criteria h3 {
    margin-bottom: 4px;

    font-size: 13px;
}

.criterion {
    display: flex;
    align-items: center;
    gap: 11px;

    padding: 13px 0;

    border-bottom: 1px solid var(--border-light);
}

.criterion:last-child {
    border-bottom: none;
}

.check,
.pending {
    width: 25px;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 7px;

    font-size: 9px;
    font-weight: 800;
}

.check {
    background: var(--success-soft);
    color: var(--success);
}

.pending {
    background: var(--warning-soft);
    color: var(--warning);
}

.criterion strong {
    display: block;

    font-size: 9px;
}

.criterion small {
    display: block;

    margin-top: 3px;

    color: var(--text-light);

    font-size: 7px;
}

.explanation-card {
    display: flex;
    align-items: flex-start;
    gap: 13px;

    margin-top: 20px;
    padding: 17px;

    border: 1px solid #dbeafe;
    border-radius: 11px;

    background: #f8fbff;
}

.explain-icon {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 8px;

    background: #dbeafe;
    color: var(--primary);

    font-size: 10px;
    font-weight: 800;
}

.explanation-card h3 {
    font-size: 10px;
}

.explanation-card p {
    margin-top: 5px;

    color: var(--text-muted);

    font-size: 8px;
    line-height: 1.7;
}


/* ================= CONSISTENCY ================= */

.consistency-alert {
    display: flex;
    align-items: flex-start;
    gap: 12px;

    margin-bottom: 20px;
    padding: 16px;

    border: 1px solid #fed7aa;
    border-radius: 11px;

    background: var(--warning-soft);
}

.alert-icon {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 8px;

    background: #ffedd5;
    color: var(--warning);

    font-size: 10px;
    font-weight: 800;
}

.consistency-alert strong {
    font-size: 10px;
}

.consistency-alert p {
    margin-top: 4px;

    color: #9a3412;

    font-size: 8px;
    line-height: 1.6;
}

.manager-table {
    width: 100%;
}

.table-row {
    display: grid;
    grid-template-columns: 1.2fr 0.7fr 1fr 1fr 0.8fr 0.8fr;
    align-items: center;
    gap: 12px;

    padding: 13px 7px;

    border-bottom: 1px solid var(--border-light);
}

.table-row:last-child {
    border-bottom: none;
}

.table-row span {
    color: var(--text-secondary);

    font-size: 8px;
}

.table-head span {
    color: var(--text-light);

    font-size: 7px;
    font-weight: 700;

    text-transform: uppercase;
}

.status-ok,
.status-review {
    display: inline-flex;
    width: fit-content;

    padding: 5px 8px;

    border-radius: 20px;

    font-size: 7px !important;
    font-weight: 700;
}

.status-ok {
    background: var(--success-soft);
    color: #047857 !important;
}

.status-review {
    background: var(--warning-soft);
    color: #c2410c !important;
}

.variance-high {
    color: var(--danger) !important;
    font-weight: 700;
}


/* ================= CALIBRATION ================= */

.calibration-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.distribution > div {
    display: grid;
    grid-template-columns: 35px 1fr 40px;
    align-items: center;
    gap: 10px;

    margin-bottom: 17px;
}

.distribution > div:last-child {
    margin-bottom: 0;
}

.distribution span,
.distribution strong {
    font-size: 8px;
}

.distribution strong {
    text-align: right;
}

.distribution-bar {
    height: 8px;

    overflow: hidden;

    border-radius: 10px;

    background: #e2e8f0;
}

.distribution-bar div {
    height: 100%;

    border-radius: 10px;

    background: var(--primary);
}

.audit-item {
    padding: 11px 0;

    border-bottom: 1px solid var(--border-light);
}

.audit-item:last-child {
    border-bottom: none;
}

.audit-item span {
    color: var(--primary);

    font-size: 7px;
    font-weight: 700;
}

.audit-item p {
    margin-top: 4px;

    color: var(--text-secondary);

    font-size: 8px;
}

.calibration-message {
    display: flex;
    align-items: flex-start;
    gap: 11px;

    margin-top: 20px;
    padding: 16px;

    border: 1px solid #bbf7d0;
    border-radius: 11px;

    background: var(--success-soft);
}

.calibration-message > span {
    width: 28px;
    height: 28px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    border-radius: 7px;

    background: #d1fae5;
    color: #047857;

    font-size: 10px;
    font-weight: 800;
}

.calibration-message strong {
    color: #065f46;

    font-size: 9px;
}

.calibration-message p {
    margin-top: 4px;

    color: #047857;

    font-size: 8px;
    line-height: 1.6;
}


/* ================= RESPONSIVE ================= */

@media (max-width: 1200px) {

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .employee-directory-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .evidence-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .ranking-table {
        overflow-x: auto;
    }

    .ranking-row {
        min-width: 850px;
    }
}


@media (max-width: 950px) {

    .sidebar {
        width: 220px;
    }

    .main {
        width: calc(100% - 220px);
        margin-left: 220px;

        padding: 0 20px 40px;
    }

    .dashboard-grid,
    .skills-layout,
    .career-grid,
    .calibration-grid {
        grid-template-columns: 1fr;
    }

    .career-paths {
        grid-template-columns: 1fr;
    }

    .path-arrow {
        transform: rotate(90deg);
    }

    .evidence-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .flow {
        flex-wrap: wrap;
    }

    .flow-step {
        min-width: calc(50% - 30px);
    }
}


@media (max-width: 700px) {

    .app {
        display: block;
    }

    .sidebar {
        position: relative;

        width: 100%;
        min-height: auto;

        padding: 16px;
    }

    .logo {
        padding-bottom: 17px;
    }

    .sidebar nav {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        margin-top: 17px;
    }

    .sidebar-bottom {
        margin-top: 18px;
    }

    .main {
        width: 100%;
        margin-left: 0;

        padding: 0 16px 30px;
    }

    .topbar {
        min-height: auto;

        padding: 18px 0;
    }

    .top-actions {
        display: none;
    }

    .welcome {
        flex-direction: column;
        align-items: flex-start;

        padding: 23px;
    }

    .welcome h2 {
        font-size: 24px;
    }

    .section-heading {
        flex-direction: column;
        align-items: flex-start;
    }

    .employee-select {
        width: 100%;
    }

    .directory-tools {
        width: 100%;
        flex-direction: column;
        align-items: stretch;
    }

    .employee-search {
        width: 100%;
    }

    .employee-directory-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .evidence-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .employee-header {
        flex-wrap: wrap;
    }

    .employee-score {
        width: 100%;
        margin-left: 0;

        margin-top: 8px;

        text-align: left;
    }

    .flow {
        flex-direction: column;
    }

    .flow-step {
        width: 100%;
        min-width: 100%;
    }

    .arrow {
        transform: rotate(90deg);
    }

    .table-row {
        grid-template-columns: repeat(2, 1fr);
    }

    .ranking-footer {
        flex-direction: column;
        align-items: flex-start;
    }

    .ranking-footer .secondary-btn {
        width: 100%;
    }

    .career-paths {
        gap: 5px;
    }
}


@media (max-width: 480px) {

    .main {
        padding: 0 12px 25px;
    }

    .stats-grid,
    .employee-directory-grid,
    .evidence-grid {
        grid-template-columns: 1fr;
    }

    .panel {
        padding: 16px;
    }

    .welcome h2 {
        font-size: 22px;
    }

    .skill-row {
        grid-template-columns: 1fr;
        gap: 7px;
    }

    .recommendation {
        grid-template-columns: 35px 1fr;
    }

    .recommendation > span {
        grid-column: 2;
        width: fit-content;
    }

    .career-role h3 {
        font-size: 16px;
    }

    .readiness {
        align-items: flex-start;
        flex-direction: column;
    }

    .circle {
        width: 88px;
        height: 88px;
    }
}
