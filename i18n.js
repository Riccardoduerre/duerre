// i18n.js
const i18nData = {};
let currentLang = 'en';

/**
 * Dynamic URL Rewriting logic (DRY Approach)
 * Updates the browser's address bar to reflect the current language without page reloads.
 */
function syncUrlPath(lang) {
    const path = window.location.pathname;
    const search = window.location.search;
    const hash = window.location.hash;
    
    // Clean current language prefix if exists
    let cleanPath = path.replace(/^\/(en|it)(\/|$)/, '/');
    if (cleanPath === '') cleanPath = '/';
    
    // Construct new path with language prefix
    const newPath = `/${lang}${cleanPath === '/' ? '/index.html' : cleanPath}`;
    
    // Update address bar
    if (window.location.pathname !== newPath) {
        window.history.replaceState({ lang: lang }, '', newPath + search + hash);
    }
}

async function loadTranslations(lang, force = false) {
    if (!force && i18nData[lang] && Object.keys(i18nData[lang]).length) {
        return i18nData[lang];
    }
    
    // Candidates for json file location (check root relative)
    const url = `/${lang}.json?t=${Date.now()}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            i18nData[lang] = await response.json();
            return i18nData[lang];
        }
    } catch (err) { /* ignore */ }

    // Fallback to relative candidates
    const candidates = ['./', '../', '../../'];
    for (const prefix of candidates) {
        try {
            const relUrl = `${prefix}${lang}.json?t=${Date.now()}`;
            const resp = await fetch(relUrl);
            if (resp.ok) {
                i18nData[lang] = await resp.json();
                return i18nData[lang];
            }
        } catch (err) { /* ignore */ }
    }
    
    console.error("i18n error: Could not load translations for", lang);
    i18nData[lang] = {};
    return i18nData[lang];
}

async function updateTexts(lang) {
    currentLang = lang;
    const translations = await loadTranslations(lang);
    
    // Update standard data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[key]) {
            if (["input", "textarea"].includes(el.tagName.toLowerCase())) {
                el.placeholder = translations[key];
            } else {
                el.innerHTML = translations[key]; // Allow HTML in translations
            }
        }
    });

    // Update page title
    if (translations["title"]) {
        document.title = translations["title"];
    }

    syncNavbarUI(lang);
    syncUrlPath(lang);
}

function detectLanguage() {
    // 1. Check URL path
    const pathLang = window.location.pathname.match(/^\/(en|it)(\/|$)/);
    if (pathLang) return pathLang[1];

    // 2. Check localStorage
    const stored = localStorage.getItem('lang');
    if (stored) return stored;

    // 3. Fallback to browser locale
    const userLang = navigator.language || navigator.userLanguage;
    return userLang && userLang.startsWith('it') ? 'it' : 'en';
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
    await updateTexts(lang);
    window.dispatchEvent(new Event('languageChanged'));
}

// Global initialization
async function initI18n() {
    const lang = detectLanguage();
    currentLang = lang;
    localStorage.setItem('lang', lang);
    await updateTexts(lang);
    window.i18nReady = true;
    window.dispatchEvent(new Event('i18nReady'));
}

document.addEventListener('DOMContentLoaded', initI18n);

// Handle Navbar initialization
window.addEventListener('navbarLoaded', () => {
    const langDropdown = document.getElementById("langDropdown");
    const langButton = document.getElementById("langButton");
    
    if (langButton && langDropdown) {
        langButton.addEventListener("click", (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle("hidden");
        });
        langDropdown.querySelectorAll("li").forEach(item => {
            item.addEventListener("click", async () => {
                await setLanguage(item.dataset.lang);
                langDropdown.classList.add("hidden");
            });
        });
        // Click outside to close
        document.addEventListener("click", e => {
            if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.add("hidden");
            }
        });
    }
    syncNavbarUI(currentLang);
});

