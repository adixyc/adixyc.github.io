// Example: Mobile menu toggle
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});
