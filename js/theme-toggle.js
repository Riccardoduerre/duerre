const themeToggle = document.createElement('button');
themeToggle.innerText = 'Toggle Theme';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.padding = '10px 20px';
themeToggle.style.borderRadius = '5px';
themeToggle.style.zIndex = '10001';
themeToggle.style.backgroundColor = 'var(--accent-color)';
themeToggle.style.color = 'white';
themeToggle.style.cursor = 'pointer';

document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
