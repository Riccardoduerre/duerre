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

async function loadTranslations(lang, force = false) {
    // Use cached translations when available unless force=true
    if (!force && i18nData[lang] && Object.keys(i18nData[lang]).length) {
        return i18nData[lang];
    }
    try {
        const path = getTranslationPath(lang);
        console.debug('[i18n] loading translations', { lang, path, force });
        const response = await fetch(path + `?t=${Date.now()}`); // prevent caching on actual fetch
        if (!response.ok) throw new Error("Errore nel caricamento delle traduzioni");
        i18nData[lang] = await response.json();
        console.debug('[i18n] loaded keys', Object.keys(i18nData[lang] || {}));
        // Expose last loaded info for debugging
        window.i18nInfo = {
            lang,
            path,
            keys: Object.keys(i18nData[lang] || {})
        };
    } catch (err) {
        console.error("Errore i18n:", err);
        i18nData[lang] = {};
        window.i18nInfo = { lang, path: getTranslationPath(lang), keys: [] };
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
}

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang && userLang.startsWith && userLang.startsWith('it') ? 'it' : 'en';
}

// Auto-initialize translations on page load and react to language changes
document.addEventListener('DOMContentLoaded', async () => {
    const stored = localStorage.getItem('lang');
    const lang = stored || detectLanguage();
    // Load translations once on startup (don't force reload)
    await updateTexts(lang, false);
    // signal other scripts that i18n is ready
    window.i18nReady = true;
    window.dispatchEvent(new Event('i18nReady'));
});

window.addEventListener('languageChanged', async () => {
    const lang = localStorage.getItem('lang') || detectLanguage();
    // Force reload translations when language changes
    await updateTexts(lang, true);
    window.i18nReady = true;
    window.dispatchEvent(new Event('i18nReady'));
});