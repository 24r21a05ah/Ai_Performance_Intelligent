const sectionTitles = {
    dashboard: "Performance Dashboard",
    profile: "Employee Performance Profile",
    skills: "Skill Assessment",
    development: "Development Gap Analysis",
    career: "Career & Promotion",
    consistency: "Evaluation Consistency",
    calibration: "Review & Calibration"
};


function showSection(sectionId, clickedButton = null) {

    // Hide all sections
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active-section");
    });


    // Show selected section
    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }


    // Update page title
    const pageTitle = document.getElementById("pageTitle");

    if (pageTitle && sectionTitles[sectionId]) {
        pageTitle.textContent = sectionTitles[sectionId];
    }


    // Remove active class from all navigation buttons
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });


    // Add active class to clicked navigation button
    if (clickedButton) {

        clickedButton.classList.add("active");

    } else {

        // Find matching navigation button
        navItems.forEach(item => {

            const onclickText = item.getAttribute("onclick");

            if (onclickText && onclickText.includes(`'${sectionId}'`)) {
                item.classList.add("active");
            }

        });

    }


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* EMPLOYEE DATA */

const employees = {

    ananya: {
        name: "Ananya Sharma",
        initials: "AS",
        role: "Senior Software Engineer • Engineering",
        score: "87%",
        status: "Promotion Ready"
    },

    rahul: {
        name: "Rahul Kumar",
        initials: "RK",
        role: "Software Engineer • Engineering",
        score: "74%",
        status: "Development Focus"
    },

    meera: {
        name: "Meera Reddy",
        initials: "MR",
        role: "Senior Software Engineer • Product",
        score: "91%",
        status: "Promotion Ready"
    }

};


function changeEmployee(employeeId) {

    const employee = employees[employeeId];

    if (!employee) {
        return;
    }


    const employeeName = document.getElementById("employeeName");
    const employeeScore = document.getElementById("employeeScore");
    const employeeAvatar = document.querySelector(".employee-avatar");
    const employeeRole = document.querySelector(".employee-header p");
    const statusPill = document.querySelector(".status-pill");


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
        employeeRole.textContent = employee.role;
    }

    if (statusPill) {
        statusPill.textContent = employee.status;

        if (employee.status === "Promotion Ready") {
            statusPill.className = "status-pill ready";
        } else {
            statusPill.className = "status-pill";
            statusPill.style.background = "#fff7ed";
            statusPill.style.color = "#b45309";
        }
    }

}


/* SIMPLE NOTIFICATION */

const notification = document.querySelector(".notification");

if (notification) {

    notification.addEventListener("click", function () {

        alert(
            "PerformanceIQ Alert\n\n" +
            "6 evaluations have been flagged for HR review."
        );

    });

}


/* PROMOTION DETAILS */

const readinessButton = document.querySelector(
    ".promotion-card .primary-btn"
);

if (readinessButton) {

    readinessButton.addEventListener("click", function () {

        alert(
            "Promotion Readiness\n\n" +
            "82% readiness based on defined role criteria.\n\n" +
            "Completed:\n" +
            "✓ Technical excellence\n" +
            "✓ Project ownership\n" +
            "✓ Business impact\n\n" +
            "Still needed:\n" +
            "! Additional team leadership evidence"
        );

    });

}


/* INITIAL PAGE */

document.addEventListener("DOMContentLoaded", function () {

    showSection("dashboard");

});