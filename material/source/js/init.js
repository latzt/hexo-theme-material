(function($){
  $( document ).ready(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider:not(.fullscreen)').slider();
    $('.slider.fullscreen').slider({full_width: true});
    $('.dropdown-button').dropdown();
    $('.parallax').parallax();
    $('.tooltipped').tooltip({delay: 50});

  }); // end of document ready
})(jQuery); // end of jQuery name space
