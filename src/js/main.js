$('header').load('../../src/component/header.html');

let active = $('.mainSlide .swiper-slide-active');
let allTopTxt = $('.topTxt');
let topTxt = active.find('.topTxt');

setInterval(function(){
    topTxt.removeClass('fadeUp')
    topTxt.addClass('fadeUp');
} , 800)


$.get('../../src/data/newProduct.json').then(function(data){
    data.forEach((e , i) => {
        $('.new .prod-wrap ul').append(
           `<li>
                <a href="">
                    <div class="img-wrap"><img src="${e.url}"></div>
                    <p class="product-title">${e.name}</p>
                    <p class="product-price">${e.price}원</p>
                </a>
            </li>
            ` 
        )
    });
}).catch(function(){
})
$.get('../../src/data/fitIn1.json').then(function(data){
    data.forEach((e , i) => {
        $('.fit-tab1').append(
           `<li>
                <a href="">
                    <div class="img-wrap">
                        <img src="${e.url}">
                        <p class="product-code">${e.code}</p>
                        <p class="product-title">${e.name}</p>
                        <p class="product-detail-btn">View More</p>
                    </div>
                </a>
            </li>
            ` 
        )
    });
}).catch(function(){
})