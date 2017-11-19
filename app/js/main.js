
window.addEventListener('DOMContentLoaded', () => {

  function OpenMenu() {
    
    this.btnMenu = document.querySelector('#btn-menu');
    this.nav = document.querySelector('.nav');
    this.navList = document.querySelector('.nav__list');
    this.overlay = document.querySelector('.overlay');
    this.callBackForm = document.querySelector('.callback__form');
    this.callbackInput = document.querySelectorAll('.callback__input');
    this.callbackPlaceholder = document.querySelectorAll('.callback__placeholder');
    this.formSubmit = document.querySelector('.callback__btn');
    this.headerSub = document.querySelector('.header-sub');
    this.solutionsLists = document.querySelectorAll('.solutions__list');
    this.solutionsMenu = document.querySelector('.header-sub__list');
    this.solutionsItemsMenu = document.querySelectorAll('.header-sub__item');
    this.headerSubBtn = document.querySelectorAll('.header-sub__btn');
    this.listWrap = document.querySelectorAll('.solution__list-wrap');
    this.solutionMobileMenu = document.querySelector('.section-third__solution');
    this.subBtnMobile = document.querySelectorAll('.header-sub__btn--mobile');
    this.mobileMenuBtn =
      document.querySelector('.section-third__solution-wrap');
    this.mobileMenu = document.querySelector('.header-sub__list--mobile');

    viewMenuItem_ = () => {
      for(let i =0; i < this.subBtnMobile.length; i++) {
        if(this.subBtnMobile[i].classList.contains('header-sub__btn--mobile-active')) {
          this.solutionMobileMenu.innerHTML = this.subBtnMobile[i].innerHTML;
        }
      }
    }

    viewMenuItem_();

    $('#home > ul').slick ({
      adaptiveHeight: true,
      arrows: true,
      prevArrow: $('.solutions__btn--prev'),
      nextArrow: $('.solutions__btn--next')
    })

    reset_ = () => {
      for(let i = 0; i < this.listWrap.length; i++) {
        if(this.listWrap[i].classList.contains('solution__list-wrap--show')) {
          this.listWrap[i].classList.remove('solution__list-wrap--show');
        }
        if(this.solutionsItemsMenu[i].children[0].classList.contains('header-sub__btn--active')) {
          this.solutionsItemsMenu[i].children[0].classList.remove('header-sub__btn--active')
        }
        if(this.subBtnMobile[i].classList.contains('header-sub__btn--mobile-active')) {
          this.subBtnMobile[i].classList.remove('header-sub__btn--mobile-active')
        }
      }
    }


    event_ = () => {

      //  Open menu on tap button
      this.btnMenu.addEventListener('click', () => {
        this.nav.classList.toggle('nav--open');
        this.overlay.classList.toggle('overlay--show');
      });

      //  Overlay for menu
      this.overlay.addEventListener('click', () => {
        this.nav.classList.remove('nav--open');
        this.overlay.classList.remove('overlay--show');
      });

      //  Remove value button
      this.callBackForm.addEventListener('click', e => {
        if(e.target.tagName === 'I') {
          e.target.previousElementSibling.value = '';
          e.target.previousElementSibling.focus();
        }
      });

      //  Open sub-menu
      window.addEventListener('scroll', () => {
        let topWindowPos = window.pageYOffset;
        let solutionsPos = solutions.offsetTop;
        let solutionsHeight = solutions.offsetHeight;
        // console.log(topWindowPos, solutionsPos, solutionsHeight);

        if(topWindowPos >= solutionsPos && topWindowPos < solutionsPos + solutionsHeight / 2) {
          this.headerSub.classList.add('header-sub--open');
        }
        else {
          this.headerSub.classList.remove('header-sub--open');
        }
      });

      //  Toggle sliders
      this.solutionsMenu.addEventListener('click', e => {
        e.preventDefault();
        e.stopImmediatePropagation();

        reset_();

        let activeTab = e.target.getAttribute('href');
        let activeList = document.querySelector(activeTab);
        activeList.classList.add('solution__list-wrap--show');
        $(activeTab + " > ul").slick({
          adaptiveHeight: true,
          arrows: true,
          prevArrow: $('.solutions__btn--prev'),
          nextArrow: $('.solutions__btn--next')
        });
        e.target.classList.add('header-sub__btn--active');
      });

      //  Mobile menu slider open
      this.mobileMenuBtn.addEventListener('click', e => {
        e.stopImmediatePropagation();
        this.mobileMenu.classList.toggle('header-sub__list--mobile-show');
      });

      //  select mobile menu item
      this.mobileMenu.addEventListener('click', e => {
        if(e.target.tagName === "A") {
          e.preventDefault();
          e.stopImmediatePropagation();

          reset_();

          let activeTab = e.target.getAttribute('href');
          let activeList = document.querySelector(activeTab);
          activeList.classList.add('solution__list-wrap--show');
          e.target.classList.add('header-sub__btn--mobile-active');
          this.mobileMenu.classList.toggle('header-sub__list--mobile-show');
          viewMenuItem_();
          $(activeTab + " > ul").slick({
            adaptiveHeight: true,
            arrows: true,
            prevArrow: $('.solutions__btn--prev'),
            nextArrow: $('.solutions__btn--next')
          });
          e.target.classList.add('header-sub__btn--active');
        }
      });
    }

    init_ = () => {
      event_();
    }

    init_();
  }

  let openMenu = new OpenMenu();

  //  Smooth Scroll
  $(".nav__link, .logo-block__link").click(function() {
    openMenu.nav.classList.remove('nav--open');
    openMenu.overlay.classList.remove('overlay--show');
     $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + 1 + "px"
     }, {
        duration: 500,
        easing: "swing"
     });
     return false;
  });
})
