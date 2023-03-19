
const projectId1 = "project-1";

const projectBody = document.getElementById("project-body");

let project1 = '<div id="project-1" style="z-index: 10; background-color: #fcfcfa;" class="p-absolute full-width-percent hidden">'
                    + '<div style="margin-top: 65px;" class="d-flex full-width-percent f-row justify-end align-center"><button style="padding: 15px 20px;" onclick={closeProject(projectId1)}>Close</button></div>'    
                    + '<div style="padding: 0 15px; height: calc(100vh - 150px);" class="swiper">'
                    + '<div class="swiper-wrapper">'
    
                    + '<div class="swiper-slide">' 
                        + '<div style="height: calc(100% - 40px);" class="full-width-percent hidden" >' 
                           + '<img alt="a" src="../pictures/projects/testProject.jpg" class="full-width-percent" />'
                        + '</div>'
                    + '</div>'
                    + '<div class="swiper-slide">' 
                        + '<div style="height: calc(100% - 40px);" class="full-width-percent hidden" >'
                            + '<img alt="a" src="../pictures/projects/testProject.jpg" class="full-width-percent" />'
                        + '</div>'
                    + '</div>'
                    + '<div class="swiper-slide">' 
                        + '<div style="height: calc(100% - 40px);" class="full-width-percent hidden" >'
                            + '<img alt="a" src="../pictures/projects/testProject.jpg" class="full-width-percent" />'
                        + '</div>'
                    + '</div>'
            
                    + '</div>'
                    + '<div class="swiper-pagination"></div>'

                    + '<div class="swiper-button-prev"></div>'
                    + '<div class="swiper-button-next"></div>'
                    + '</div>'

                    + '</div>'

window.onload = function() {
    
}

function openProject1() {
    projectBody.insertAdjacentHTML("afterbegin", project1);
    initSwiperProject1();
}

function closeProject(projectId) {
    
    let p = document.getElementById(projectId);
    projectBody.removeChild(p);
}

function  initSwiperProject1() {
    new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        // width: 300,
        loopPreventsSliding: true,
        spaceBetween: 40,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
}