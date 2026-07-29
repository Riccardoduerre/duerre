(function() {
    const candidates = [
        './footer/footer.html',
        'footer/footer.html',
        '../footer/footer.html',
        '../../footer/footer.html'
    ];

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

        const container = document.getElementById('footer-container');
        if (container && html) {
            container.innerHTML = html;
            const footer = document.getElementById('site-footer');
            if (footer) {
                footer.classList.remove('opacity-0');
                footer.classList.add('opacity-100');
            }
            window.dispatchEvent(new Event('footerLoaded'));
            return;
        }

        if (container) container.innerHTML = '<!-- footer load failed -->';
        window.dispatchEvent(new Event('footerLoaded'));
    })();
})();
