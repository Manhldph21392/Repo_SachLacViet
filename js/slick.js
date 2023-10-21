$(document).ready(function(){
    $('.box-sliders').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.next'),
        speed: 500,
        nextArrow: true,
        autoplay:false,
    });

   
      $('.box-sliders').click(function(){
        $('.next').slick('slickNext');
      });
});