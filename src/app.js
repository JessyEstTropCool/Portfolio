const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const skills = document.getElementsByClassName('skills');

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

setInterval(() => {

    for (let index = 0; index < skills.length; index++) 
    {
        const element = skills[index];
        element.scrollLeft += 1;
    }

}, 1);