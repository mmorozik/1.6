import '../scss/style.scss';
import Swiper, { Pagination } from 'swiper';
//Свайпер

const swiperSlide = document.querySelectorAll('.repair-swiper-slide');
const priceSlide = document.querySelectorAll('.price-swiper-slide');
const swiperWrapper = document.querySelectorAll('.repair-swiper-wrapper');

let swiper;

const breakpointChecker = function() {
    // если окно больше 768
    if (window.outerWidth >= 768) {

      swiperWrapper.forEach(element => {
        element.removeAttribute('style');
        element.classList.remove('swiper-wrapper');
      });

      swiperSlide.forEach(element => {
        element.removeAttribute('style');
        element.classList.remove('swiper-slide');
      });

      priceSlide.forEach(element => {
        element.removeAttribute('style');
        element.classList.remove('swiper-slide');
      });
        if ( swiper ) {
          swiper = null;
        } 
        return;
  
        } else if (window.outerWidth < 768) {
  
          swiperSlide.forEach(element => {
            element.classList.add('swiper-slide')
          });
          priceSlide.forEach(element => {
            element.classList.add('swiper-slide')
          });
          swiperWrapper.forEach(element => {
            element.classList.add('swiper-wrapper')
          });
          return enableSwiper();
  
        }
}



const enableSwiper = function() {

  swiper = new Swiper('.swiper', {
      slidesPerView: 1.2,
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      modules: [Pagination]
    });
};

breakpointChecker();



//NAV
const burger = document.querySelector('.icon__burger');
const closeBurger = document.querySelector('.icon__burger-close');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.add('nav--js-active');
})

window.addEventListener('click', (e) => {
  const target = e.target;
  if (!target.closest('.nav') && !target.closest('.icon__burger')) {
    nav.classList.remove('nav--js-active');
  }
});

closeBurger.addEventListener('click', () => {
  nav.classList.remove('nav--js-active');
})

//Языки
const buttonRu = document.querySelector('.button-ru');
const buttonEn = document.querySelector('.button-en');
const buttonCh = document.querySelector('.button-ch');
let buttonLangIsActive = document.querySelector('.nav__lang--is-active');


buttonRu.addEventListener('click', () => {
  buttonLangIsActive.classList.remove('nav__lang--is-active');
  buttonRu.classList.add('nav__lang--is-active');
  buttonLangIsActive.disabled = false;
  buttonLangIsActive = buttonRu;
  buttonRu.disabled = true;
});
buttonEn.addEventListener('click', () => {
  buttonLangIsActive.classList.remove('nav__lang--is-active');
  buttonEn.classList.add('nav__lang--is-active');
  buttonLangIsActive.disabled = false;
  buttonLangIsActive = buttonEn;
  buttonEn.disabled = true;
});
buttonCh.addEventListener('click', () => {
  buttonLangIsActive.classList.remove('nav__lang--is-active');
  buttonCh.classList.add('nav__lang--is-active');
  buttonLangIsActive.disabled = false;
  buttonLangIsActive = buttonCh;
  buttonCh.disabled = true;
});


//Контент

let pageTarget = document.querySelector('.page-is-active');
let pageName = pageTarget.textContent;
const infoTitle = document.querySelector('.info__title');
const page = document.querySelectorAll('.nav__page');

for (let i = 0; i<page.length; i++) {
  let pageItem = page[i];
  pageItem.addEventListener('click', () => {
    pageTarget.classList.remove('page-is-active');
    pageTarget = pageItem;
    pageName = pageItem.textContent;
    pageItem.classList.add('page-is-active');
    infoTitle.textContent = pageName;
  });
}

//Меню
const info = document.querySelectorAll('.info__item');
let infoActive = document.querySelector('.info__item--active');

for (let i = 0; i<info.length; i++) {
  let infoItem = info[i];
  infoItem.addEventListener('click', () => {
    infoActive.classList.remove('info__item--active');
    infoActive = infoItem;
    infoActive.classList.add('info__item--active');
  });
}

// Показать больше Текст
const buttonMoreText = document.querySelector('.button-more-text');
const infoText = document.querySelector('.info__text');
const moreText = document.querySelectorAll('.more-text');
const moreReText = document.querySelectorAll('.more-r-text');

function toggleMore (moreBuuton, reMoreButton) {
  
  moreBuuton.forEach(el => {
    el.classList.toggle('display-none');
  });
 
  reMoreButton.forEach(el => {
    el.classList.toggle('display-none');
  });
}


buttonMoreText.addEventListener('click', () => {
  if (infoText.style.height) {
    infoText.style.height = null;
  } else {
    infoText.style.height = infoText.scrollHeight + "px";
  }
  infoText.classList.toggle('info__text-active');
  toggleMore (moreText, moreReText);
});

//Показать больше лого
const buttonMoreLogos = document.querySelector('.button-more-logos');
const swiperLogos = document.querySelector('.js-swiper-logos');
const moreLogos = document.querySelectorAll('.more-logos');
const moreReLogos = document.querySelectorAll('.more-r-logos');

buttonMoreLogos.addEventListener('click', () => {
  swiperLogos.classList.toggle('swiper-logos--active');
  toggleMore (moreLogos, moreReLogos);
});

//Показать больше типы
const buttonMoreType = document.querySelector('.button-more-type');
const swiperType = document.querySelector('.js-swiper-type');
const moreType = document.querySelectorAll('.more-type');
const moreReType = document.querySelectorAll('.more-r-type');

buttonMoreType.addEventListener('click', () => {
  swiperType.classList.toggle('swiper-type--active');
  toggleMore (moreType, moreReType);
});

//Звонок

const modalBackground = document.querySelector('.modal-background');
const callButton = document.querySelectorAll('.icon__chat');
const mobal = document.querySelector('.mobal');
const mobalClose = document.querySelector('.mobal-close');


for (let i = 0; i<callButton.length; i++) {
  let callButtonItem = callButton[i];
  callButtonItem.addEventListener('click', () => {
    modalBackground.classList.toggle('modal-background--active');
    mobal.classList.toggle('mobal--active');
    nav.classList.remove('nav--js-active');
    mobalBack.classList.remove('mobal-call--active');
  })
};

mobalClose.addEventListener('click', () => {
  mobal.classList.remove('mobal--active');
  modalBackground.classList.remove('modal-background--active');
});

//Обратный звонок
const callBackButton = document.querySelectorAll('.icon__call');
const mobalBack = document.querySelector('.mobal-call');
const mobalCallClose = document.querySelector('.mobal-call-close');


for (let i = 0; i<callBackButton.length; i++) {
  let callBackButtonItem = callBackButton[i];
  callBackButtonItem.addEventListener('click', () => {
    modalBackground.classList.toggle('modal-background--active');
    mobalBack.classList.toggle('mobal-call--active');
    nav.classList.remove('nav--js-active');
    mobal.classList.remove('mobal--active');
  })
};

mobalCallClose.addEventListener('click', () => {
  mobalBack.classList.remove('mobal-call--active');
  modalBackground.classList.remove('modal-background--active');
});

