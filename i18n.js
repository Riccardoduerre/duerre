// i18n.js
const i18nData = {}; // Stores loaded translations

function getTranslationPath(lang) {
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 1) {
        return `../${lang}.json`;
    }
    return `${lang}.json`;
}

async function loadTranslations(lang, force = false) {
    if (!force && i18nData[lang] && Object.keys(i18nData[lang]).length) {
        return i18nData[lang];
    }
    try {
        const path = getTranslationPath(lang);
        const response = await fetch(path + `?t=${Date.now()}`);
        if (!response.ok) throw new Error("Errore nel caricamento delle traduzioni");
        i18nData[lang] = await response.json();
    } catch (err) {
        console.error("Errore i18n:", err);
        i18nData[lang] = {};
    }
    return i18nData[lang];
}

async function updateTexts(lang, force = false) {
    const translations = await loadTranslations(lang, force);
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            if (["input", "textarea"].includes(el.tagName.toLowerCase())) {
                el.placeholder = translations[key];
            } else {
                el.textContent = translations[key];
            }
        }
    });
    syncNavbarUI(lang);
}

function detectLanguage() {
    const stored = localStorage.getItem('lang');
    if (stored) return stored;
    const userLang = navigator.language || navigator.userLanguage;
    return userLang && userLang.startsWith && userLang.startsWith('it') ? 'it' : 'en';
}

function syncNavbarUI(lang) {
    const langFlag = document.getElementById("langFlag");
    const langCode = document.getElementById("langCode");
    if (langFlag && langCode) {
        const flag = lang === 'it' ? "https://flagcdn.com/16x12/it.png" : "https://flagcdn.com/16x12/gb.png";
        langFlag.src = flag;
        langFlag.alt = lang;
        langCode.textContent = lang.toUpperCase();
    }
}

async function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    await updateTexts(lang, true);
    window.dispatchEvent(new Event('languageChanged'));
}

// Auto-initialize translations on page load and react to language changes
document.addEventListener('DOMContentLoaded', async () => {
    const lang = detectLanguage();
    await updateTexts(lang, false);
    window.i18nReady = true;
    window.dispatchEvent(new Event('i18nReady'));
});

// Sync when navbar loads
document.addEventListener('navbarLoaded', () => {
    const lang = detectLanguage();
    syncNavbarUI(lang);

    // Set up click listeners for language selector in navbar
    const langDropdown = document.getElementById("langDropdown");
    if (langDropdown) {
        langDropdown.querySelectorAll("li").forEach(item => {
            item.addEventListener("click", async () => {
                const lang = item.dataset.lang;
                await setLanguage(lang);
                langDropdown.classList.add("hidden");
            });
        });
    }
});