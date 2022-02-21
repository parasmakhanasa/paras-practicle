
 // header sticky
$(window).scroll(function(){
  var sticky = $('.header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky'); 

});

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(this).toggleClass("open");
    });
});

 // navbar scrollSpy
$(document).ready(function() {

  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNavAltMarkup'
  })
  
  // parallax 
  var initScrollTop = $(window).scrollTop(); 
  $(parallax).css({'background-position-y' : (initScrollTop/75)+'%'});
  
  $(window).scroll(function() { 
    var scrollTop = $(window).scrollTop(); 
    $(parallax).css({'background-position-y' : (scrollTop/5)+'%'});
    
  });

// Swiper
  var swiper = new Swiper(".mySwiper", { 
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          992: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          }
        }
      });

  var swiper = new Swiper(".testimonial", {
        spaceBetween: 0,
        effect: "fade",
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
}); 