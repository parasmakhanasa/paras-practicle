

$(document).ready(function() {
  
  // parallax 
  var initScrollTop = $(window).scrollTop();
  
  // Set the image's vertical background position based on the scroll top when the page is loaded.
  $(parallax).css({'background-position-y' : (initScrollTop/75)+'%'});
  
  // When the user scrolls...
  $(window).scroll(function() {
    
    // Find the new scroll top.
    var scrollTop = $(window).scrollTop();
    
    // Set the new background position.
    $(parallax).css({'background-position-y' : (scrollTop/5)+'%'});
    
  });

// Swiper
  var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
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