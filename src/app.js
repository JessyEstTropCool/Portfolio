const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const skills = document.getElementsByClassName('skills');

const autoScrollDelay = 1000;
const scrollRate = 0.1;
var lastUpdate = Date.now();

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

document.getElementById("form-submit").onclick = function() {
    document.getElementById("message-form").submit();
}

for (let index = 0; index < skills.length; index++) 
{
    const element = skills[index];
    if ( element.scrollWidth > element.offsetWidth ) element.setAttribute("way", "right");
    element.setAttribute("time", "0");

    element.addEventListener('mouseenter', () => element.setAttribute("wait", "true"));
    element.addEventListener('touchstart', () => {element.setAttribute("wait", "true")});
    element.addEventListener('touchmove', () => element.setAttribute("wait", "true"));
    
    element.addEventListener('mouseleave', () => element.removeAttribute("wait"));
    element.addEventListener('touchend', () => element.removeAttribute("wait"));
    
    console.info(element);
}

//var skTitle = document.getElementById('skills-title');

var scrollInterval = setInterval(() => {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;

    //skTitle.innerText = dt + "ms";

    for (let index = 0; index < skills.length; index++) 
    {
        const element = skills[index];

        if ( element.scrollWidth <= element.offsetWidth ) 
        {
            element.removeAttribute("way");
            element.parentElement.classList.remove("skills-shadow");
        }
        else 
        {
            element.parentElement.classList.add("skills-shadow");
            if ( element.getAttribute("wait") === null )
            {
                if ( element.scrollLeft == 0 || element.scrollLeft == getScrollLeftMax(element) )
                    element.setAttribute("time", Number(element.getAttribute("time")) + dt );
    
                if ( element.getAttribute("way") === null || ( element.scrollLeft <= 0 && element.getAttribute("time") >= autoScrollDelay ) ) 
                {
                    element.setAttribute("way", "right");
                    element.setAttribute("time", "0");
                }
                else if ( element.scrollLeft >= getScrollLeftMax(element) && element.getAttribute("time") >= autoScrollDelay ) 
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

function getScrollLeftMax(elem) 
{
    if (elem.scrollLeftMax === undefined) return elem.scrollWidth - elem.clientWidth;
    else return elem.scrollLeftMax;
}