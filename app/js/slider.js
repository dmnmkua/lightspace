$(document).ready(function(){
  $('.partners__list').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          accessibility: true,
          arrows: true,
          prevArrow: $('.prev-arrow'),
          nextArrow: $('.next-arrow')
        }
      }
    ]
  });

  $('.solutions__list').slick({
    adaptiveHeight: true,
    arrows: true,
    prevArrow: $('.solutions__btn--prev'),
    nextArrow: $('.solutions__btn--next')
  });
});
