/* Simple Mobile Menu Toggle */
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-toggle');
    const navList = document.querySelector('nav ul');

    if (menuButton && navList) {
        menuButton.addEventListener('click', function() {
            // Toggle the 'open' class on the menu list
            navList.classList.toggle('open');
            // Toggle the 'active' class on the button (for animation if needed)
            menuButton.classList.toggle('active');
        });
    }
});