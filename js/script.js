  $(document).ready(function(){

    $('.burger-btn').click(function(){
      //Her tilføjer vi classen active, der åbner
      //burgermenuen
      $('.burgerbar').toggleClass('active');
      //burgermenu bliver til kryds når den åbner ved at tilføje
      // classen "open"
		$(this).toggleClass('open');
    })

    $('.facilitiesheader').hover(function() {
    $(".facilitiesheader").addClass('transition');

}, function() {
    $(".facilitiesheader").removeClass('transition');
});
      
    })

// Zoom on hover til hero-images




// Repair gallery
