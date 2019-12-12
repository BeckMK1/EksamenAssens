$(document).ready(function(){
// gallery
// code for magnificpopup (enableds gallery and adds navigation and counter)
$('.gallery-item').magnificPopup({
 
    type: 'image',
    gallery:{
      enabled: true, // set to true to enable gallery
  
    
      navigateByImgClick: true,
    
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
    
      tPrev: 'Previous (Left arrow key)', // title for left button
      tNext: 'Next (Right arrow key)', // title for right button
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
    }
  });
});