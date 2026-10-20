window.addEventListener("load", function () {
    alert("Welcome to Maxene's Portfolio!");
});

function toggleTheme() {
    document.body.classList.toggle("dark");

    const button = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
}

function showMore() {
    const info = document.getElementById("moreInfo");
    const button = document.querySelector("#about .btn");

    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
        button.textContent = "Show Less";
    } else {
        info.classList.add("hidden");
        button.textContent = "Read More";
    }
}

function contactAlert() {
    alert("Thank you for visiting my portfolio!");
}

// Update the View Project buttons with your real links.
document.querySelectorAll(".project-link").forEach(function (button) {
    button.addEventListener("click", function (event) {
        if (button.getAttribute("href") === "#") {
            event.preventDefault();
            alert("Please add your actual project link first.");
        }
    });
});