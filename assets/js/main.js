$(document).ready(function(){
    $('.reviews-slider').slick();
});

$('.gallery__link').magnificPopup({
    // delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
  gallery:{
    enabled:true
  },
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
