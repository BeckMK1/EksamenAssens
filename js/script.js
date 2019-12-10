  $(document).ready(function(){
    $('.image-link').magnificPopup({type:'image'});

    $('.burger-btn').click(function(){
      //Her tilføjer vi classen active, der åbner
      //burgermenuen
      $('.burgerbar').toggleClass('active');
      //burgermenu bliver til kryds når den åbner ved at tilføje
      // classen "open"
		$(this).toggleClass('open');
    })


    // Zoom on hover til hero-images
    // Ved hover på containeren 'facilitiesheader' vil
    // elementet mainpic få / miste classen trnasition som har en zoom effekt.

    $('.facilitiesheader').hover(function() {
    $(".mainpic").addClass('transition');

}, function() {
    $(".mainpic").removeClass('transition');
});

 





// Repair gallery
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