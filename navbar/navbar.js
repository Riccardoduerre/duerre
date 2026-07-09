// navbar.js

// Initialize navbar behaviour after navbar HTML is present.
function initNavbar() {
    if (window._navbarInitialized) return;
    window._navbarInitialized = true;

    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!header) return; // nothing to do if navbar not present

    // --- Header scroll behavior ---
    window.addEventListener('scroll', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (window.scrollY > 50) {
            header.classList.remove('bg-transparent');
            header.classList.add(isDark ? 'bg-black' : 'bg-white', 'shadow-md', 'text-theme');
        } else {
            header.classList.add('bg-transparent');
            header.classList.remove(isDark ? 'bg-black' : 'bg-white', 'shadow-md');
        }
    });

    // --- Mobile menu toggle ---
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
        });
    }
}

// Listen for navbar injection
document.addEventListener('navbarLoaded', initNavbar);
// Also run on DOMContentLoaded in case navbar is inline
document.addEventListener('DOMContentLoaded', initNavbar);