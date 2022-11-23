let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('header__burger--active');

        menu.classList.toggle('nav--active');

        document.body.classList.toggle('stop-scroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('header__burger--active');

        menu.classList.remove('nav--active');

        document.body.classList.remove('stop-scroll');
    })
})

let tabsBtn = document.querySelectorAll('.tabs-btn');
let tabsItem = document.querySelectorAll('.main__tabs-item');
let imgMain = document.querySelectorAll('.main__img')
let imgOne = document.querySelector('.img-one');
let imgTwo = document.querySelector('.img-two');
let imgThree = document.querySelector('.img-three');
let imgFour = document.querySelector('.img-four');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-btn--active') });
        e.currentTarget.classList.add('tabs-btn--active');

        tabsItem.forEach(
            function (element) {
                element.classList.remove('main__tabs-item--active')
            }
        );
        document.querySelector(`[data-target=${path}]`).classList.add('main__tabs-item--active');

        imgMain.forEach(function (img) {
            img.classList.remove('main__img--active');
        });

        if (path == 'one') {
            imgOne.classList.add('main__img--active');
        } else if (path == 'two') {
            imgTwo.classList.add('main__img--active');
        } else if (path == 'three') {
            imgThree.classList.add('main__img--active');
        } else {
            imgFour.classList.add('main__img--active');
        }
    });
});

const swiper = new Swiper('.swiper-container', {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    a11y: {
        paginationBulletMessage: 'Кнопка {{index}}',
    },
});

document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search-form').addEventListener('click', (e) => {
        document.getElementById('search-form').classList.add('search-form_show')
    });

    document.getElementById('search-form-close').addEventListener('click', (e) => {
        document.getElementById('search-form').classList.remove('search-form_show')

        document.getElementById('search-form').addEventListener('submit', (e) => {
            e.preventDefault()
        })
    })
})


new Accordion('.accordion');

function multAndPrint(list) {
    let mult = 1;
    for (var i=0; i<list.length; i++) {
        mult = mult * list[i];
    }
    console.log(mult);
}

function calc(a, b, operation) {
    if (operation == '+') {
        console.log(a + b);
    } else if (operation == '-') {
        console.log(a - b);
    } else if (operation == '*') {
        console.log(a * b);
    } else if (operation == '/') {
        console.log(a / b);
    };
}