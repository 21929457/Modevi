const topBtn = $('.youtube-btn');
const popup_close = $('.popup-close p');
const popup_wrap = $('.popup-wrap');
const nav_a = $('nav a');
const nav_depth2 = $('.nav-depth2');
const mainSlide = $('.mainSlide ul li.swiper-slide');
const fit_tab = $('.fit .main-tab p');
const new_content = $('.new .prod-wrap ul');
const fit_content = $('.fit .prod-wrap ul');
const footerSelector = $('.fs-select');
const footerSelectorDepth2 = document.getElementsByClassName('family-depth2')[0];
const family_arrow = document.getElementsByClassName('family-arrow')[0];
const family_site_a = $('.family-depth2 a');

let day_ck = false;
let time = 0;
let clearTime = Number(localStorage.getItem('start_time')) + (24 * 60 * 60);
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let mainSlide_length = Object.keys(mainSlide).length;
let nav_length = Object.keys(nav_a).length;
let site_length = Object.keys(family_site_a).length;

// Init AOS
$(window).on('load',function(){
    AOS.init({
        offset: 120,
        duration: 1500,
    });
})

//TopButton Up funtion
$(window).on('scroll' , function(){
    this.scrollY > 0 ? topBtn.addClass('up') : topBtn.removeClass('up');
})

//Popup Close
popup_close.on('click' , function() {
    popup_wrap.addClass('close');
})

//Popup Value Change
$('.a-day').click(()=>{
    day_ck = true;
    time = (hour * 60 * 60) + (minute * 60) + (second)
    localStorage.setItem('start_time' , time);
    localStorage.setItem('day_ck' , day_ck);
})

//Popup Value Check
day_ck = localStorage.getItem('day_ck');
day_ck ? popup_wrap.addClass('close') : popup_wrap.removeClass('close')

//Popup a_day Check
time = (hour * 60 * 60) + (minute * 60) + (second);
if(time >= clearTime) {
    day_ck = false;
    localStorage.setItem('day_ck' , day_ck);
    popup_wrap.removeClass('close');
}

//Header mouseover
function show_header(target) {
    for(let i = 0; i < nav_length - 3; i++) {
        target.eq(i).on('mouseover' , function(){
            nav_depth2.removeClass('show');
            nav_depth2.eq(i).addClass('show');
        })
    }
}
function up_header(target){
    for(let i = 0; i < nav_length - 3; i++) {
        target.eq(i).on('mouseleave' , function(){
            nav_depth2.removeClass('show');
        })
    }
}
show_header(nav_a);
show_header(nav_depth2);
up_header(nav_a);
up_header(nav_depth2);

//Menu Tab Function
for(let i = 0; i < fit_tab.length; i++) {
    fit_tab.eq(i).click(()=>{
        fit_tab.removeClass('active');
        fit_content.removeClass('show');
        fit_tab.eq(i).addClass('active');
        fit_content.eq(i).addClass('show');
    })
}

//New-Product DataBinding
$.get('../../src/data/newProduct.json').then(function(data){
    data.forEach((e , i) => {
        new_content.append(
           `<li class="swiper-slide">
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

//FITIN DataBinding
for(var i = 1; i <= fit_content.length; i++) {
    $.get(`../../src/data/fitIn${i}.json`).then(function(data){
        data.forEach((e , i) => {
            fit_content.eq(i).append(
               `<li class="swiper-slide">
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

//story DataBinding
$.get('../../src/data/storySlide.json').then((data)=>{
    data.map((data , i)=>{
        $('.story ul').append(`
            <li class="swiper-slide">
                <a href="${data.link}" target="_blank">
                    <div class="img-wrap"><img src="${data.url}" alt="story${i}"></div>
                    <p>${data.title}</p>
                    <p>${data.discription}</p>
                </a>
            </li>
        `)
    })
})

//yotube DataBinding
$.get('../../src/data/yotubeSlide.json').then((data)=>{
    data.map((data , i)=>{
        $('.youtube .swiper-wrapper').append(`
            <li class="swiper-slide">
                <a href="${data.link}" target="_blank">
                    <div class="img-wrap"><img src="${data.url}" alt="story${i}"></div>
                    <p>${data.title}</p>
                    <p>${data.discription}</p>
                </a>
            </li>
        `)
    })
})

//footer Family Site toggle function
family_arrow.addEventListener('click' , function(){
    footerSelectorDepth2.classList.toggle('show');
    this.classList.toggle('arrow-up');
})
footerSelector.on('click' , function(){
    footerSelectorDepth2.classList.toggle('show');
    family_arrow.classList.toggle('arrow-up');
})
for(var i = 0; i < site_length; i++){
    family_site_a.eq(i).on('click' , function(){
        let text = this.innerText;
        footerSelector.val(text);
    })
}
