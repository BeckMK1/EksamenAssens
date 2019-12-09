  $(document).ready(function(){

    $('.burger-btn').click(function(){
      //Her tilføjer vi classen active, der åbner
      //burgermenuen
      $('.burgerbar').toggleClass('active');
      //burgermenu bliver til kryds når den åbner ved at tilføje
      // classen "open"
		$(this).toggleClass('open');
    })

    $('.facilitiesheader1').hover(function() {
    $(".facilitiesheader1").addClass('transition');

}, function() {
    $(".facilitiesheader1").removeClass('transition');
});

    })

// Zoom on hover til hero-images




// Repair gallery
