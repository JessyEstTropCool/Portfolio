const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton()
{
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);
navList.childNodes.forEach((child, key, parent) => {
    child.addEventListener('click', () => {
        navList.classList.remove('show');
    });
});