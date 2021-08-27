(function ($,  Drupal) {
  'use strict';
  

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 10) {
            $('.navbar.navbar-default.navbar-fixed-top').addClass('fill-bg');
        }
        else {
            $('.navbar.navbar-default.navbar-fixed-top').removeClass('fill-bg');
        }
});

    var prev = 0;
    var $window = $(window);
    var nav = $('#navbar');

    $window.on('scroll', function(){
      var scrollTop = $window.scrollTop();
      nav.toggleClass('hidden', scrollTop > prev);
      $('#navbar').removeClass('in');
      prev = scrollTop;
    });

    $('.nav a.menu').smoothScroll();
    
}(jQuery));
