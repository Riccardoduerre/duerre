// navbar.js

// --- Header scroll behavior ---
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.remove('bg-transparent');
        header.classList.add('bg-black', 'shadow-md');
    } else {
        header.classList.add('bg-transparent');
        header.classList.remove('bg-black', 'shadow-md');
    }
});

// --- Mobile menu toggle ---
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full');
});

// --- Language selector ---
const langButton = document.getElementById("langButton");
const langDropdown = document.getElementById("langDropdown");
const langFlag = document.getElementById("langFlag");
const langCode = document.getElementById("langCode");

let currentLang = "it"; // lingua di default

langButton.addEventListener("click", () => langDropdown.classList.toggle("hidden"));

langDropdown.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", async () => {
        const lang = item.dataset.lang;
        const flag = item.dataset.flag;

        langFlag.src = flag;
        langFlag.alt = lang;
        langCode.textContent = lang.toUpperCase();

        currentLang = lang;
        langDropdown.classList.add("hidden");

        if (typeof updateTexts === "function") {
            await updateTexts(lang);
        }
    });
});

// Chiudi dropdown cliccando fuori
document.addEventListener("click", e => {
    if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add("hidden");
    }
});

// Inizializza testi
document.addEventListener("DOMContentLoaded", () => {
    if (typeof updateTexts === "function") {
        updateTexts(currentLang);
    }
});
