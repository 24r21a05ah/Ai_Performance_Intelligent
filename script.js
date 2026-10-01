const sectionTitles = {
    dashboard: "Performance Dashboard",
    profile: "Employee Performance Profile",
    skills: "Skill Assessment",
    development: "Development Gap Analysis",
    career: "Career Growth & Readiness",
    consistency: "Evaluation Consistency",
    calibration: "Review & Calibration"
};


/* =========================
   SECTION NAVIGATION
========================= */

function showSection(sectionId, clickedButton = null) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active-section");
    });

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }

    const pageTitle = document.getElementById("pageTitle");

    if (pageTitle && sectionTitles[sectionId]) {
        pageTitle.textContent = sectionTitles[sectionId];
    }

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    if (clickedButton) {

        clickedButton.classList.add("active");

    } else {

        navItems.forEach(item => {

            const onclickText = item.getAttribute("onclick");

            if (
                onclickText &&
                onclickText.includes(`'${sectionId}'`)
            ) {
                item.classList.add("active");
            }

        });

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   EMPLOYEE DATA
========================= */

const employees = {

    ananya: {
        name: "Ananya Sharma",
        initials: "AS",
        role: "Senior Software Engineer",
        department: "Engineering",
        score: "87%",
        status: "Promotion Ready",
        statusClass: "ready",
        goals: "92%",
        projects: "88%",
        feedback: "4.5/5",
        training: "8",
        impact: "+18%",
        attendance: "96%"
    },

    rahul: {
        name: "Rahul Kumar",
        initials: "RK",
        role: "Software Engineer",
        department: "Engineering",
        score: "74%",
        status: "Development Focus",
        statusClass: "development",
        goals: "78%",
        projects: "72%",
        feedback: "3.8/5",
        training: "5",
        impact: "+9%",
        attendance: "94%"
    },

    meera: {
        name: "Meera Reddy",
        initials: "MR",
        role: "Senior Software Engineer",
        department: "Product",
        score: "91%",
        status: "Promotion Ready",
        statusClass: "ready",
        goals: "95%",
        projects: "94%",
        feedback: "4.7/5",
        training: "10",
        impact: "+24%",
        attendance: "98%"
    },

    arjun: {
        name: "Arjun Patel",
        initials: "AP",
        role: "Software Engineer",
        department: "Platform",
        score: "81%",
        status: "Strong Performance",
        statusClass: "strong",
        goals: "86%",
        projects: "82%",
        feedback: "4.2/5",
        training: "7",
        impact: "+14%",
        attendance: "95%"
    },

    sneha: {
        name: "Sneha Rao",
        initials: "SR",
        role: "Product Manager",
        department: "Product",
        score: "78%",
        status: "Development Focus",
        statusClass: "development",
        goals: "80%",
        projects: "79%",
        feedback: "4.0/5",
        training: "6",
        impact: "+11%",
        attendance: "93%"
    },

    vikram: {
        name: "Vikram Singh",
        initials: "VS",
        role: "Engineering Manager",
        department: "Engineering",
        score: "89%",
        status: "Strong Performance",
        statusClass: "strong",
        goals: "91%",
        projects: "87%",
        feedback: "4.6/5",
        training: "9",
        impact: "+20%",
        attendance: "97%"
    },

    kavya: {
        name: "Kavya Nair",
        initials: "KN",
        role: "Data Analyst",
        department: "Analytics",
        score: "84%",
        status: "Strong Performance",
        statusClass: "strong",
        goals: "88%",
        projects: "83%",
        feedback: "4.3/5",
        training: "7",
        impact: "+15%",
        attendance: "96%"
    },

    rohan: {
        name: "Rohan Mehta",
        initials: "RM",
        role: "Senior Developer",
        department: "Technology",
        score: "93%",
        status: "Promotion Ready",
        statusClass: "ready",
        goals: "97%",
        projects: "95%",
        feedback: "4.8/5",
        training: "11",
        impact: "+27%",
        attendance: "99%"
    },

    divya: {
        name: "Divya Iyer",
        initials: "DI",
        role: "UX Designer",
        department: "Design",
        score: "76%",
        status: "Development Focus",
        statusClass: "development",
        goals: "79%",
        projects: "75%",
        feedback: "4.1/5",
        training: "5",
        impact: "+8%",
        attendance: "92%"
    },

    aditya: {
        name: "Aditya Verma",
        initials: "AV",
        role: "Software Engineer",
        department: "Engineering",
        score: "68%",
        status: "Development Focus",
        statusClass: "development",
        goals: "70%",
        projects: "65%",
        feedback: "3.6/5",
        training: "4",
        impact: "+5%",
        attendance: "91%"
    }

};


/* =========================
   CHANGE EMPLOYEE
========================= */

function changeEmployee(employeeId) {

    const employee = employees[employeeId];

    if (!employee) {
        return;
    }

    const employeeName =
        document.getElementById("employeeName");

    const employeeScore =
        document.getElementById("employeeScore");

    const employeeAvatar =
        document.querySelector(".employee-avatar");

    const employeeRole =
        document.querySelector(".employee-header p");

    const statusPill =
        document.querySelector(".status-pill");


    if (employeeName) {
        employeeName.textContent = employee.name;
    }


    if (employeeScore) {
        employeeScore.textContent = employee.score;
    }


    if (employeeAvatar) {
        employeeAvatar.textContent = employee.initials;
    }


    if (employeeRole) {
        employeeRole.textContent =
            employee.role + " • " + employee.department;
    }


    if (statusPill) {

        statusPill.textContent = employee.status;

        statusPill.className =
            "status-pill " + employee.statusClass;

    }


    /* Update evidence cards */

    const evidenceCards =
        document.querySelectorAll(".evidence-card");

    if (evidenceCards.length >= 6) {

        evidenceCards[0].querySelector("strong").textContent =
            employee.goals;

        evidenceCards[1].querySelector("strong").textContent =
            employee.projects;

        evidenceCards[2].querySelector("strong").textContent =
            employee.feedback;

        evidenceCards[3].querySelector("strong").textContent =
            employee.training;

        evidenceCards[4].querySelector("strong").textContent =
            employee.impact;

        evidenceCards[5].querySelector("strong").textContent =
            employee.attendance;

    }


    /* Update directory selected employee */

    const directoryCards =
        document.querySelectorAll(".employee-directory-card");

    directoryCards.forEach(card => {
        card.classList.remove("selected");
    });

    const selectedCard =
        document.querySelector(
            `[data-employee="${employeeId}"]`
        );

    if (selectedCard) {
        selectedCard.classList.add("selected");
    }

}


/* =========================
   EMPLOYEE DIRECTORY
========================= */

function openEmployee(employeeId) {

    const employee = employees[employeeId];

    if (!employee) {
        return;
    }

    changeEmployee(employeeId);

    showSection("profile");

    const select =
        document.querySelector(".employee-select");

    if (select) {
        select.value = employeeId;
    }

}


/* =========================
   NOTIFICATION
========================= */

const notification =
    document.querySelector(".notification");

if (notification) {

    notification.addEventListener("click", function () {

        alert(
            "PerformanceIQ Alert\n\n" +
            "6 evaluations have been flagged for HR review.\n\n" +
            "These cases require human review because " +
            "manager ratings differ from supporting evidence."
        );

    });

}


/* =========================
   CAREER READINESS
========================= */

const readinessButton =
    document.querySelector(".promotion-card .primary-btn");

if (readinessButton) {

    readinessButton.addEventListener("click", function () {

        alert(
            "Career Growth & Readiness\n\n" +

            "Current Role:\n" +
            "Senior Software Engineer\n\n" +

            "Potential Next Role:\n" +
            "Engineering Lead\n\n" +

            "Readiness Criteria:\n" +
            "✓ Technical excellence\n" +
            "✓ Project ownership\n" +
            "✓ Business impact\n\n" +

            "Evidence Still Needed:\n" +
            "! Additional team leadership evidence\n\n" +

            "Final promotion decisions remain with HR and managers."
        );

    });

}


/* =========================
   DIRECTORY SEARCH
========================= */

function searchEmployees() {

    const input =
        document.getElementById("employeeSearch");

    if (!input) {
        return;
    }

    const searchValue =
        input.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(
            ".employee-directory-card"
        );

    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        const role =
            card.dataset.role.toLowerCase();

        const department =
            card.dataset.department.toLowerCase();

        if (
            name.includes(searchValue) ||
            role.includes(searchValue) ||
            department.includes(searchValue)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   INITIALIZE
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        showSection("dashboard");

        changeEmployee("ananya");

    }
);
