$('header').load('../../src/component/header.html');

let active = $('.mainSlide .swiper-slide-active');
let allTopTxt = $('.topTxt');
let topTxt = active.find('.topTxt');

setInterval(function(){
    topTxt.addClass('fadeUp');
} , 800)