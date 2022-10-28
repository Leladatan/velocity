const headerLink = document.querySelectorAll('.header__content_link');
const mainBlock = document.querySelectorAll('.main__content');
const burgerLink = document.querySelectorAll('.burger-menu');

//header
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
//burger
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