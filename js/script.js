  $(document).ready(function(){

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
});
