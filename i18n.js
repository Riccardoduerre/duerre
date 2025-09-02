// i18n.js
const i18nData = {}; // Stores loaded translations

function getTranslationPath(lang) {
    // If the page is in a subfolder, use '../en.json', else use 'en.json'
    // Remove empty strings from split (e.g. leading slash)
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    // If the file is in a subfolder (e.g. /photo-gigs/...), use '../'
    // pathParts[0] is the folder, pathParts[1] is the file (if in root, pathParts.length == 1)
    if (pathParts.length > 1) {
        return `../${lang}.json`;
    }
    return `${lang}.json`;
}

async function loadTranslations(lang) {
    // Always fetch fresh translations to reflect language changes immediately
    try {
        const path = getTranslationPath(lang);
    console.debug('[i18n] loading translations', { lang, path });
    const response = await fetch(path + `?t=${Date.now()}`); // prevent caching
        if (!response.ok) throw new Error("Errore nel caricamento delle traduzioni");
        i18nData[lang] = await response.json();
    console.debug('[i18n] loaded keys', Object.keys(i18nData[lang] || {}));
    } catch (err) {
        console.error("Errore i18n:", err);
        i18nData[lang] = {};
    }
    return i18nData[lang];
}

async function updateTexts(lang) {
    const translations = await loadTranslations(lang);
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
}

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang && userLang.startsWith && userLang.startsWith('it') ? 'it' : 'en';
}

// Auto-initialize translations on page load and react to language changes
document.addEventListener('DOMContentLoaded', async () => {
    const stored = localStorage.getItem('lang');
    const lang = stored || detectLanguage();
    await updateTexts(lang);
    // signal other scripts that i18n is ready
    window.dispatchEvent(new Event('i18nReady'));
});

window.addEventListener('languageChanged', async () => {
    const lang = localStorage.getItem('lang') || detectLanguage();
    // clear cached translations for fresh load
    i18nData[lang] = undefined;
    await updateTexts(lang);
    window.dispatchEvent(new Event('i18nReady'));
});