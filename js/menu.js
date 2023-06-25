
const px = "px";

let burgerLinksContainer = document.getElementById("burger-links-container");
function toggleLinksContainer() {
    let burgerLinksList = document.getElementById("burger-links-list");
    
    if(burgerLinksContainer.clientHeight === 0) {
        burgerLinksContainer.style.height = burgerLinksList.clientHeight + 30 + px;
    } else {
        burgerLinksContainer.style.height = 0 + px;
    }
}

window.onload = function () {

    window.addEventListener("scroll", onScroll);

    window.scrollTo({
        left: null,
        top: 0,
        behavior: "smooth",
    });

    let b = document.getElementById("header");
    let h = b === undefined || b === null ? 44.39 : b.offsetHeight;

    function onScroll() {

        let scrollTop = window.pageYOffset;
        let sectionHome = document.getElementById("section-home");
        
        if(sectionHome === null 
        || scrollY + innerHeight === document.body.scrollHeight) {return;}
        sectionHome.style.height = window.screen.height - scrollTop + h + px; 
    } 
}

const scrollLinks = document.getElementsByName("scroll-button");

if(scrollLinks.length > 0)
{
    scrollLinks.forEach(l => {
        l.addEventListener("click", onScrollLinkClick);
    })
}

function onScrollLinkClick(e) {
    const menuLink = e.target;

    if(document.getElementById("page-1") === null 
    || document.getElementById("page-1") === undefined) return;

    let d = document.getElementById("page-1").scrollTop;
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    let t = gotoBlock.getBoundingClientRect().top;
    let b = document.getElementById("header");
    let h = b === undefined || b === null ? 65 : b.offsetHeight;
    const gotoBlockValue = d + t + scrollY - h;

    window.scrollTo({
        left: null,
        top: gotoBlockValue,
        behavior: "smooth",
    });
    e.preventDefault();
}

