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

let currentLang; // will be set dynamically

// Detect browser language
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.startsWith("it") ? "it" : "en";
}

// Apply language settings (flag, code, texts)
async function setLanguage(lang) {
    const flag = lang === "it"
        ? "https://flagcdn.com/16x12/it.png"
        : "https://flagcdn.com/16x12/gb.png";

    langFlag.src = flag;
    langFlag.alt = lang;
    langCode.textContent = lang.toUpperCase();
    currentLang = lang;

    localStorage.setItem('lang', lang); // Save selected language

    if (typeof updateTexts === "function") {
        await updateTexts(lang);
    }

    window.dispatchEvent(new Event('languageChanged')); // Notify other scripts
}

// --- Dropdown handling ---
langButton.addEventListener("click", () => langDropdown.classList.toggle("hidden"));

langDropdown.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", async () => {
        const lang = item.dataset.lang;
        await setLanguage(lang);
        langDropdown.classList.add("hidden");
    });
});

// Close dropdown clicking outside
document.addEventListener("click", e => {
    if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add("hidden");
    }
});

// --- Initialize on page load ---
document.addEventListener("DOMContentLoaded", async () => {
    const storedLang = localStorage.getItem('lang');
    const browserLang = detectLanguage();
    const langToUse = storedLang || browserLang;
    await setLanguage(langToUse);
});