// i18n.js
const i18nData = {}; // memorizza le traduzioni caricate

async function loadTranslations(lang) {
    if (!i18nData[lang]) {
        try {
            const response = await fetch(`${lang}.json`);
            if (!response.ok) throw new Error("Errore nel caricamento delle traduzioni");
            i18nData[lang] = await response.json();
        } catch (err) {
            console.error("Errore i18n:", err);
            i18nData[lang] = {};
        }
    }
    return i18nData[lang];
}

async function loadTranslations(lang) {
    if (!i18nData[lang]) {
        try {
            const response = await fetch(`../${lang}.json`);
            if (!response.ok) throw new Error("Errore nel caricamento delle traduzioni");
            i18nData[lang] = await response.json();
        } catch (err) {
            console.error("Errore i18n:", err);
            i18nData[lang] = {};
        }
    }
    return i18nData[lang];
}
