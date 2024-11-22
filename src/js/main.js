$('header').load('../../src/component/header.html');

const fit_tab = $('.fit .main-tab p');
const new_content = $('.new .prod-wrap ul');
const fit_content = $('.fit .prod-wrap ul');

//신제퓸 데이터바인딩
$.get('../../src/data/newProduct.json').then(function(data){
    data.forEach((e , i) => {
        new_content.append(
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

//FITIN 데이터바인딩
for(var i = 1; i <= 3; i++) {
    $.get(`../../src/data/fitIn${i}.json`).then(function(data){
        data.forEach((e , i) => {
            fit_content.eq(i).append(
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
}

for(let i = 0; i < fit_tab.length; i++) {
    fit_tab.eq(i).on('click' , function(e){
        fit_tab.removeClass('active');
        fit_content.removeClass('show');
        fit_tab.eq(i).addClass('active');
        fit_content.eq(i).addClass('show');
    })
}

// story 데이터바인딩
$.get('../../src/data/storySlide.json').then((data)=>{
    data.map((data , i)=>{
        $('.story ul').append(`
            <li class="swiper-slide">
                <a href="${data.link}">
                    <div class="img-wrap"><img src="${data.url}" alt="story${i}"></div>
                    <p>${data.title}</p>
                    <p>${data.discription}</p>
                </a>
            </li>
        `)
    })
})
$.get('../../src/data/storySlide.json').then((data)=>{
    data.map((data , i)=>{
        $('.yotube .swiper-wrapper').append(`
            <li class="swiper-slide">
                <a href="${data.link}">
                    <div class="img-wrap"><img src="${data.url}" alt="story${i}"></div>
                    <p>${data.title}</p>
                    <p>${data.discription}</p>
                </a>
            </li>
        `)
    })
})