const i18nData = {}; // per memorizzare le traduzioni caricate

// funzione per caricare le traduzioni
async function loadTranslations(lang) {
    if (!i18nData[lang]) {
        const response = await fetch(`${lang}.json`);
        i18nData[lang] = await response.json();
    }
    return i18nData[lang];
}

// funzione per aggiornare i testi
async function updateTexts(lang) {
    const translations = await loadTranslations(lang);
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            if (el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea") {
                el.placeholder = translations[key];
            } else {
                el.textContent = translations[key];
            }
        }
    });
}

// gestione cambio lingua
document.getElementById("langSelect").addEventListener("change", (e) => {
    updateTexts(e.target.value);
});

// inizializza lingua di default
updateTexts(document.getElementById("langSelect").value);
