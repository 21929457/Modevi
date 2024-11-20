var mainTop = new Swiper('.mainSlide' , {
    loop : true,
    speed : 800,
    autoplay : {
        delay : 4700,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    },
});