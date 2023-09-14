document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".Navbar_navToggleContainer__P5OAt");
    const navMenu = document.querySelector(".Navbar_navContentWrapper__2Yibc");

    toggleButton.addEventListener("click", function() {
        navMenu.classList.toggle("Navbar_opened__Am8rg");
    });
});

const toggleButton = document.querySelector('.Navbar_navToggleContainer__P5OAt');
        const bars = document.querySelectorAll('.Navbar_navHeaderToggleBar__hmmt3');

        toggleButton.addEventListener('click', () => {
            // Toggle the 'active' class for each bar
            bars.forEach(bar => {
                bar.classList.toggle('active');
            });
        });