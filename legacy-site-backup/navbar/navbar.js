// navbar.js

function initNavbar() {
    if (window._navbarInitialized) return;
    window._navbarInitialized = true;

    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const menuIconPath = document.getElementById('menu-icon-path');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!header) return;

    // --- Header scroll behavior ---
    const handleScroll = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (window.scrollY > 50) {
            header.classList.remove('py-6', 'bg-transparent');
            header.classList.add('py-4', isDark ? 'bg-black/90' : 'bg-white/90', 'backdrop-blur-md', 'shadow-lg');
        } else {
            header.classList.add('py-6', 'bg-transparent');
            header.classList.remove('py-4', 'bg-black/90', 'bg-white/90', 'backdrop-blur-md', 'shadow-lg');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // --- Mobile menu toggle ---
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = !mobileMenu.classList.contains('translate-x-full');
            if (isOpen) {
                mobileMenu.classList.add('translate-x-full');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                document.body.style.overflow = '';
            } else {
                mobileMenu.classList.remove('translate-x-full');
                menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
                document.body.style.overflow = 'hidden';
            }
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Mobile Language Toggle ---
    const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');
    mobileLangBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const lang = btn.dataset.lang;
            if (typeof setLanguage === 'function') {
                await setLanguage(lang);
            }
        });
    });

    // --- Mobile Theme Toggle ---
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    if (mobileThemeToggle) {
        const syncMobileThemeIcon = (theme) => {
            mobileThemeToggle.innerHTML = theme === 'dark' ? 
                '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>' : 
                '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
        };

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        syncMobileThemeIcon(currentTheme);

        mobileThemeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            if (typeof initThemeToggle === 'function') {
                // Trigger global theme toggle logic if available
                document.getElementById('theme-toggle').click();
                syncMobileThemeIcon(target);
            }
        });
    }
}

document.addEventListener('navbarLoaded', initNavbar);
document.addEventListener('DOMContentLoaded', initNavbar);