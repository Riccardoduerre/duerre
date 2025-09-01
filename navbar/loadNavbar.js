// loadNavbar.js
async function loadNavbar() {
    try {
        const container = document.getElementById("navbar-container");
        if (!container) return;

        // Load navbar.html
        const response = await fetch("navbar.html"); // adjust path if needed
        const html = await response.text();
        container.innerHTML = html;

        // Now attach navbar.js AFTER the HTML is injected
        const script = document.createElement("script");
        script.src = "navbar.js"; // adjust path if needed
        document.body.appendChild(script);

    } catch (err) {
        console.error("Error loading navbar:", err);
    }
}

// Run on DOM ready
document.addEventListener("DOMContentLoaded", loadNavbar);