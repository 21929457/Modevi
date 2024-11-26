// //main > banner
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

//main > popup
var popup = new Swiper('.popup' , {
    loop : true,
    slidesPerView: 1,
    loopedSlides: 3,
    additionalSlides: 2,
    autoplay : {
        delay : 3000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    }
});

//main > new-prod
var new_prod = new Swiper('.new-prod' , {
    slidesPerView: 4,
    spaceBetween : 12,
    loop : true,
});

//main > fit-prod
var fit_prod = new Swiper('.fit-prod' , {
    slidesPerView: 3,
    spaceBetween : 12,
    loop : true,
});

//main > story
var story = new Swiper('.story' , {
    slidesPerView: 3,
    spaceBetween : 12,
    loop : true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//main > youtube
var youtube = new Swiper('.youtube' , {
    slidesPerView: 2,
    spaceBetween : 12,
    loop : true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});