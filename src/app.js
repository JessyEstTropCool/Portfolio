const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const skills = document.getElementsByClassName('skills');

const autoScrollDelay = 60;

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

for (let index = 0; index < skills.length; index++) 
{
    const element = skills[index];
    if ( element.scrollWidth > element.offsetWidth ) element.setAttribute("way", "right");
    element.setAttribute("time", "0");

    element.addEventListener('mouseenter', () => {
        console.log('mouseenter');
        element.setAttribute("wait", "true");
    });
    element.addEventListener('active', () => {
        console.log('active');
        element.setAttribute("wait", "true");
    });
    element.addEventListener('mouseleave', () => {
        console.log('mouseleave');
        element.removeAttribute("wait");
    });
    
    console.info(element);
}

setInterval(() => {

    for (let index = 0; index < skills.length; index++) 
    {
        const element = skills[index];

        if ( element.scrollWidth <= element.offsetWidth ) element.removeAttribute("way");
        else 
        {
            if ( element.getAttribute("wait") === null )
            {
                if ( element.scrollLeft == 0 || element.scrollLeft == element.scrollLeftMax )
                    element.setAttribute("time", Number(element.getAttribute("time")) + 1 );
    
                if ( element.getAttribute("way") === null || ( element.scrollLeft <= 0 && element.getAttribute("time") >= autoScrollDelay ) ) 
                {
                    element.setAttribute("way", "right");
                    element.setAttribute("time", "0");
                }
                else if ( element.scrollLeft >= element.scrollLeftMax && element.getAttribute("time") >= autoScrollDelay ) 
                {
                    element.setAttribute("way", "left");
                    element.setAttribute("time", "0");
                }
                
                if ( element.getAttribute("way") === "right" ) element.scrollLeft += 1;
                else element.scrollLeft -= 1;
            }
        }
    }

}, 1);