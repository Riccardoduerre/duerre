// i18n.js
const i18nData = {}; // Stores loaded translations

function getTranslationPath(lang) {
    // If the page is in a subfolder, use '../en.json', else use 'en.json'
    const pathParts = window.location.pathname.split('/');
    // If there is a subfolder (e.g. /photo-gigs/...), use '../'
    if (pathParts.length > 2 && pathParts[1] !== '') {
        return `../${lang}.json`;
    }
    return `${lang}.json`;
}

async function loadTranslations(lang) {
    if (!i18nData[lang]) {
        try {
            const path = getTranslationPath(lang);
            const response = await fetch(path);
            if (!response.ok) throw new Error("Errore nel caricamento delle traduzioni");
            i18nData[lang] = await response.json();
        } catch (err) {
            console.error("Errore i18n:", err);
            i18nData[lang] = {};
        }
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