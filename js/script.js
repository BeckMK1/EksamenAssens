  $(document).ready(function(){

    $('.burger-btn').click(function(){
      //Her tilføjer vi classen active, der åbner
      //burgermenuen
      $('.burgerbar').toggleClass('active');
      //burgermenu bliver til kryds når den åbner ved at tilføje
      // classen "open"
		$(this).toggleClass('open');
    })
  
// Repair gallery
$('#pictures img').click(function(){
  $('#fullImg').attr('src',$(this).attr('src').replace('pictures','fullImg'));
});
})