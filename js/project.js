
const projectId1 = "project-1";

const projectBody = document.getElementById("project-body");

let project1 = '<div id="project-1" style="z-index: 10; background-color: #fcfcfa;" class="p-absolute d-flex f-column align-center justify-center full-width-percent full-height-percent hidden">'
                    + '<div style="margin-top: 37px;" class="d-flex full-width-percent f-row justify-end align-center">'
                        + '<button style="padding: 15px 20px;" onclick={closeProject(projectId1)}>\n' 
                        + '<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' 
                    + '<path d="M20.115 18L29.565 8.56497C29.8475 8.28252 30.0062 7.89943 30.0062 7.49997C30.0062 7.10052 29.8475 6.71743 29.565 6.43497C29.2826 6.15252 28.8995 5.99384 28.5 5.99384C28.1006 5.99384 27.7175 6.15252 27.435 6.43497L18 15.885L8.56503 6.43497C8.28258 6.15252 7.89948 5.99384 7.50003 5.99384C7.10058 5.99384 6.71749 6.15252 6.43503 6.43497C6.15257 6.71743 5.99389 7.10052 5.99389 7.49997C5.99389 7.89943 6.15257 8.28252 6.43503 8.56497L15.885 18L6.43503 27.435C6.29444 27.5744 6.18285 27.7403 6.10669 27.9231C6.03054 28.1059 5.99133 28.302 5.99133 28.5C5.99133 28.698 6.03054 28.894 6.10669 29.0768C6.18285 29.2596 6.29444 29.4255 6.43503 29.565C6.57447 29.7056 6.74038 29.8172 6.92317 29.8933C7.10595 29.9695 7.30201 30.0087 7.50003 30.0087C7.69805 30.0087 7.89411 29.9695 8.0769 29.8933C8.25968 29.8172 8.42559 29.7056 8.56503 29.565L18 20.115L27.435 29.565C27.5745 29.7056 27.7404 29.8172 27.9232 29.8933C28.106 29.9695 28.302 30.0087 28.5 30.0087C28.698 30.0087 28.8941 29.9695 29.0769 29.8933C29.2597 29.8172 29.4256 29.7056 29.565 29.565C29.7056 29.4255 29.8172 29.2596 29.8934 29.0768C29.9695 28.894 30.0087 28.698 30.0087 28.5C30.0087 28.302 29.9695 28.1059 29.8934 27.9231C29.8172 27.7403 29.7056 27.5744 29.565 27.435L20.115 18Z" fill="black"/>\n' 
                    + '</svg>\n</button>'
                    + '</div>'
                    + '<div style="padding: 0 15px;max-height: calc(100vh - 100px);" class="d-flex justify-center align-centr full-width-percent">'
                            + '<div class="swiper">'
                                + '<div class="swiper-wrapper">'

                                    + '<div class="swiper-slide">'
                                        + '<div style="height: calc(100% - 40px);" class="full-width-percent hidden" >'
                                            + '<img alt="a" src="pictures/projects/testProject.jpg" class="full-width-percent" />'
                                        + '</div>'
                                    + '</div>'
                                    + '<div class="swiper-slide">'
                                        + '<div style="height: calc(100% - 40px);" class="full-width-percent hidden" >'
                                            + '<img alt="a" src="pictures/projects/testProject.jpg" class="full-width-percent" />'
                                        + '</div>'
                                    + '</div>'
                                    + '<div class="swiper-slide">'
                                        + '<div style="height: calc(100% - 40px);" class="full-width-percent hidden" >'
                                            + '<img alt="a" src="pictures/projects/testProject.jpg" class="full-width-percent" />'
                                        + '</div>'
                                    + '</div>'

                                + '</div>'
    
                                + '<div class="swiper-pagination"></div>'
                                + '<div class="swiper-button-prev"></div>'
                                + '<div class="swiper-button-next"></div>'
                            + '</div>'
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