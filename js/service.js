const swiperService = new Swiper('.swiper-service', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    // width: 300,
    loopPreventsSliding: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 3300,
    },
    spaceBetween: 40,
});

let generalContainer = document.getElementById("general-container");
// let swiperServiceContainer = document.getElementById("swiper-service-container");

let swiperServiceContainers = document.getElementsByName("swiper-service-container");

setSizeSwiperContainer();
function setSizeSwiperContainer() {

    let currentSize = generalContainer.clientWidth / 2;

    if(window.screen.availWidth <= 580) {
        currentSize = generalContainer.clientWidth - 10;
    }    

    swiperServiceContainers.forEach(e => {
        
        e.style.width = currentSize + 'px';
    });    
}

window.addEventListener("resize", setSizeSwiperContainer);