
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

    reset_ = () => {
      for(let i = 0; i < this.solutionsLists.length; i++) {
        if(this.solutionsLists[i].classList.contains('solutions__list--show')) {
          this.solutionsLists[i].classList.remove('solutions__list--show');
        }
        if(this.solutionsItemsMenu[i].children[0].classList.contains('header-sub__btn--active')) {
          this.solutionsItemsMenu[i].children[0].classList.remove('header-sub__btn--active')
        }
      }
    }

    addCountSlider_ = () => {
      let solutionShowList = document.querySelector('.solutions__list--show');
      for(let i = 0; i < solutionShowList.children.length; i++)
      this.location = document.createElement('div');
      this.location.classList.add('slider__count');
      this.textLocation = document.createTextNode(`${solutionShowList}`);
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

      //  Remove button
      this.callBackForm.addEventListener('click', e => {
        if(e.target.tagName === 'I') {
          e.target.previousElementSibling.value = '';
          e.target.previousElementSibling.focus();
        }
      });

      //  Add placeholder
      for(let i = 0; i < this.callbackInput.length; i++) {
        this.callbackInput[i].addEventListener('blur', e => {
          let t = this.callbackInput[i].value;
          this.callbackInput[i].value = t;
          if(e.target.value !== "") {
            this.callbackPlaceholder[i].classList.add('callback__placeholder--value');
          }
          if(e.target.value === "" || e.target.value === "+7 (___) ___-____") {
            this.callbackPlaceholder[i].classList.remove('callback__placeholder--value');
          }
        });

        // this.formSubmit.addEventListener('click', () => {
        //   let xhr = new XMLHttpRequest();
        //   xhr.open('POST', 'form.json');
        //   xhr.responseType = 'json';
        //   xhr.addEventListener('load', () => {
        //
        //   })
        //   xhr.send();
        // })

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
          // console.log(e.target.parentNode);
          reset_();
          console.log(e.target);
          e.target.preventDefault();
          let activeTab = e.target.getAttribute('href').slice(1);
          console.log(activeTab);
          for(let i = 0; i < this.solutionsItemsMenu.length; i++) {
            if(e.target.parentNode === this.solutionsItemsMenu[i]) {
              this.solutionsLists[i].classList.add('solutions__list--show');
              e.target.classList.add('header-sub__btn--active');
            }
          }
        });
      }
    }

    init_ = () => {
      event_();
    }

    init_();
  }

  let openMenu = new OpenMenu();

  $("a").click(function() {
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
