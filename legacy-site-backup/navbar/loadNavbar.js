(function() {
    const script = document.currentScript || document.querySelector('script[src$="loadNavbar.js"]');
    const scriptBase = script ? script.src.substring(0, script.src.lastIndexOf('/') + 1) : null;

    const candidates = [
        scriptBase ? scriptBase + 'navbar.html' : null,
        './navbar/navbar.html',
        'navbar/navbar.html',
        '../navbar/navbar.html',
        '../../navbar/navbar.html'
    ].filter(Boolean);

    (async function tryLoad() {
        let html = null;
        for (const url of candidates) {
            try {
                const response = await fetch(url, { cache: 'no-store' });
                if (response.ok) {
                    html = await response.text();
                    break;
                }
            } catch (err) { /* ignore */ }
        }

        const container = document.getElementById('navbar-container');
        if (container && html) {
            container.innerHTML = html;

            // rewrite root-relative links
            try {
                const path = window.location.pathname || '';
                const baseDir = path.substring(0, path.lastIndexOf('/') + 1);
                const depth = baseDir.split('/').filter(Boolean).length;
                const prefix = depth ? '../'.repeat(depth) : '';
                container.querySelectorAll('a[href^="/"]').forEach(a => {
                    const href = a.getAttribute('href');
                    if (href && href.startsWith('/')) {
                        a.setAttribute('href', prefix + href.slice(1));
                    }
                });
            } catch (e) { /* ignore */ }

            window.dispatchEvent(new Event('navbarLoaded'));
            return;
        }

        if (container) container.innerHTML = '<!-- navbar load failed -->';
        window.dispatchEvent(new Event('navbarLoaded'));
    })();
})();
