const headerLink = document.querySelectorAll('.header__content_link');
const mainBlock = document.querySelectorAll('.main__content');
//burger
const burgerLink = document.querySelectorAll('.burger-menu');
//slider
const sliderBtn = document.querySelectorAll('.tab-section__slider_btn');
const memSliderBlock = document.querySelectorAll('.mem-slider');

//header
function headerChange() {
    for (let i = 0; i < headerLink.length; i++) {
        headerLink[i].addEventListener('click', () => {
            for (let j = 0; j < mainBlock.length; j++) {
                if (headerLink[i].dataset.tax === mainBlock[j].dataset.tax) {
                    mainBlock[j].classList.add('main__content__active');
                    headerLink[j].classList.add('header__content_link__active');
                } else {
                    mainBlock[j].classList.remove('main__content__active');
                    headerLink[j].classList.remove('header__content_link__active');
                }
            }
        })
    }
}

//burger
function burgerChange() {
    for (let i = 0; i < burgerLink.length; i++) {
        burgerLink[i].addEventListener('click', () => {
            for (let j = 0; j < mainBlock.length; j++) {
                if (burgerLink[i].dataset.tax === mainBlock[j].dataset.tax) {
                    mainBlock[j].classList.add('main__content__active');
                    burgerLink[j].classList.add('burger-menu__active');
                } else {
                    mainBlock[j].classList.remove('main__content__active');
                    burgerLink[j].classList.remove('burger-menu__active');
                }
            }
        })
    }
}

//slider
function sliderChange() {
    for (let i = 0; i < sliderBtn.length; i++) {
        sliderBtn[i].addEventListener('click', () => {
            for (let j = 0; j < memSliderBlock.length; j++) {
                if (sliderBtn[i].dataset.tax === memSliderBlock[j].dataset.tax) {
                    memSliderBlock[j].classList.add('mem-slider__active');
                    sliderBtn[j].classList.add('tab-section__slider_btn__active');
                } else {
                    memSliderBlock[j].classList.remove('mem-slider__active');
                    sliderBtn[j].classList.remove('tab-section__slider_btn__active');
                }
            }
        })
    }
}

headerChange();
burgerChange();
sliderChange();