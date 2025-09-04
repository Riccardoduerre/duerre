(function() {
    const script = document.currentScript || document.querySelector('script[src$="loadNavbar.js"]');
    const scriptBase = script ? script.src.substring(0, script.src.lastIndexOf('/') + 1) : null;

    const candidates = [];
    if (scriptBase) {
        candidates.push(scriptBase + 'navbar.html'); // nello stesso folder dello script
    }

    // percorsi relativi comuni rispetto alla pagina
    candidates.push('./navbar/navbar.html');
    candidates.push('navbar/navbar.html');
    candidates.push('../navbar/navbar.html');
    candidates.push('../../navbar/navbar.html');

    // root-relative (utile se servito da server o GitHub Pages)
    try {
        const origin = window.location.origin || (window.location.protocol === 'file:' ? '' : window.location.protocol + '//' + window.location.host);
        if (origin) candidates.push(origin + '/navbar/navbar.html');
    } catch (e) {
        // ignore
    }

    // prova in serie i candidati
    (async function tryLoad() {
        let html = null;
        for (const url of candidates) {
            try {
                const response = await fetch(url, { cache: 'no-store' });
                if (response.ok) {
                    html = await response.text();
                    break;
                }
            } catch (err) {
                // ignora e prova il prossimo
            }
        }

        const container = document.getElementById('navbar-container');
        if (container && html) {
            container.innerHTML = html;

            // rewrite root-relative links to page-relative so navbar works from any folder depth (file:// or http)
            try {
                const rewriteRootLinks = () => {
                    const path = window.location.pathname || '';
                    const baseDir = path.substring(0, path.lastIndexOf('/') + 1);
                    const depth = baseDir.split('/').filter(Boolean).length;
                    const prefix = depth ? '../'.repeat(depth) : '';
                    container.querySelectorAll('a[href^="/"]').forEach(a => {
                        const href = a.getAttribute('href');
                        // preserva hash or full path
                        if (href && href.startsWith('/')) {
                            a.setAttribute('href', prefix + href.slice(1));
                        }
                    });
                };
                rewriteRootLinks();
            } catch (e) {
                // ignore rewrite errors
            }

            window.dispatchEvent(new Event('navbarLoaded'));
            return;
        }

        // fallback: prova percorso semplice
        try {
            const resp = await fetch('navbar/navbar.html');
            if (resp.ok) {
                const text = await resp.text();
                if (container) container.innerHTML = text;
                window.dispatchEvent(new Event('navbarLoaded'));
                return;
            }
        } catch (e) {
            // ignore
        }

        if (container) container.innerHTML = '<!-- navbar load failed -->';
        window.dispatchEvent(new Event('navbarLoaded'));
    })();

    // Also try to load a shared footer.html into #footer-container or append to body
    (async function tryLoadFooter() {
        const footerCandidates = [];
        if (scriptBase) footerCandidates.push(scriptBase + 'footer/footer.html');
        footerCandidates.push('./footer/footer.html');
        footerCandidates.push('footer/footer.html');
        footerCandidates.push('../footer/footer.html');
        footerCandidates.push('../../footer/footer.html');
        try {
            const origin = window.location.origin || (window.location.protocol === 'file:' ? '' : window.location.protocol + '//' + window.location.host);
            if (origin) footerCandidates.push(origin + '/footer/footer.html');
        } catch (e) {}

        let footerHtml = null;
        for (const url of footerCandidates) {
            try {
                const response = await fetch(url, { cache: 'no-store' });
                if (response.ok) { footerHtml = await response.text(); break; }
            } catch (err) { /* ignore */ }
        }

        if (footerHtml) {
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) footerContainer.innerHTML = footerHtml;
            else {
                const tmp = document.createElement('div');
                tmp.innerHTML = footerHtml;
                document.body.appendChild(tmp.firstElementChild);
            }

            // Trigger translations for the newly injected footer
            try {
                const lang = localStorage.getItem('lang') || (typeof detectLanguage === 'function' ? detectLanguage() : 'en');
                if (typeof updateTexts === 'function') updateTexts(lang, false);
            } catch (e) { /* ignore */ }

            // Fade the footer in by removing opacity class when present
            try {
                const footerEl = document.getElementById('site-footer') || document.querySelector('.site-footer');
                if (footerEl) requestAnimationFrame(() => footerEl.classList.remove('opacity-0'));
            } catch (e) {}

            window.dispatchEvent(new Event('footerLoaded'));
        }
    })();
})();

// --- Sostituire la parte inline di `index.html` che accede direttamente agli elementi della navbar
// con questo: (mettere il resto del tuo script dentro il listener)
window.addEventListener('navbarLoaded', () => {
    // Mobile menu toggle (controlli con guardie per evitare errori)
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
        });
    }

    // Header scroll behavior
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-black', 'text-white', 'shadow-md');
                header.classList.remove('bg-transparent');
            } else {
                header.classList.add('bg-transparent', 'text-white');
                header.classList.remove('bg-black', 'shadow-md');
            }
        });
    }

    // Language selector
    const langButton = document.getElementById('langButton');
    const langDropdown = document.getElementById('langDropdown');
    const langFlag = document.getElementById('langFlag');
    const langCode = document.getElementById('langCode');
    let currentLang;

    function detectLanguage() {
        const userLang = navigator.language || navigator.userLanguage;
        return userLang && userLang.startsWith('it') ? 'it' : 'en';
    }

    function setLanguage(lang) {
        if (!langFlag || !langCode) return;
        const flag = lang === 'it' ? 'https://flagcdn.com/16x12/it.png' : 'https://flagcdn.com/16x12/gb.png';
        langFlag.src = flag;
        langFlag.alt = lang;
        langCode.textContent = lang.toUpperCase();
        currentLang = lang;
        // persist selection and notify i18n system
        try { localStorage.setItem('lang', lang); } catch (e) {}
        window.dispatchEvent(new Event('languageChanged'));
    }

    if (langButton && langDropdown && langFlag && langCode) {
        langButton.addEventListener('click', () => langDropdown.classList.toggle('hidden'));
        langDropdown.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                const lang = item.dataset.lang;
                setLanguage(lang);
                langDropdown.classList.add('hidden');
            });
        });
        document.addEventListener('click', e => {
            if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.add('hidden');
            }
        });
        setLanguage(detectLanguage());
    }

    // Lightbox (inizializza anche se non ci sono elementi)
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    if (galleryItems.length && lightbox) {
        const lightboxImg = lightbox.querySelector('img');
        const prevBtn = lightbox.querySelector('.prev');
        const nextBtn = lightbox.querySelector('.next');
        const closeBtn = lightbox.querySelector('.close');
        let currentIndex = 0;

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                showImage(currentIndex);
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', () => lightbox.classList.add('hidden'));
        if (prevBtn) prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            showImage(currentIndex);
        });
        if (nextBtn) nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            showImage(currentIndex);
        });

        function showImage(index) {
            const imgSrc = galleryItems[index].querySelector('img').src;
            if (lightboxImg) lightboxImg.src = imgSrc;
            lightbox.classList.remove('hidden');
        }
    }
});