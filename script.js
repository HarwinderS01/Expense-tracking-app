document.addEventListener("DOMContentLoaded", () => {
    // Tab switching logic
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Reset active states for tabs and contents
            tabs.forEach((btn) => btn.classList.remove("active"));
            contents.forEach((content) => content.classList.remove("active"));

            // Activate the selected tab and its corresponding content
            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });

    // Dark mode toggle logic
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const appContainer = document.querySelector(".app-container");

    // Check saved dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        appContainer.classList.add("dark-mode");
        if (darkModeToggle) darkModeToggle.checked = true;
    }

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", () => {
            if (darkModeToggle.checked) {
                appContainer.classList.add("dark-mode");
                localStorage.setItem("dark-mode", "enabled");
            } else {
                appContainer.classList.remove("dark-mode");
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    }
});
