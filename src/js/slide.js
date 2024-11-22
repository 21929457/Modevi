// //main < banner
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
    }
});

//main < story
var story = new Swiper('.story' , {
    slidesPerView: 3,
    spaceBetween : 12,
    loop : true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//main < youtube
var youtube = new Swiper('.youtube' , {
    slidesPerView: 2,
    spaceBetween : 12,
    loop : true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});