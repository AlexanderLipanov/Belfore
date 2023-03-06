
const px = "px";
let burgerLinksContainer = document.getElementById("burger-links-container");
function toggleLinksContainer() {
    let burgerLinksList = document.getElementById("burger-links-list");
    
    if(burgerLinksContainer.clientHeight === 0) {
        burgerLinksContainer.style.height = burgerLinksList.clientHeight + px;
    } else {
        burgerLinksContainer.style.height = 0 + px;
    }
}

