$(document).ready(function(){
$('.nextto').on('click', function(){
    var currenttoImg = $('.activeto');
      var nexttoImg = currenttoImg.nextto();
      
      if(nexttoImg.length){
          currenttoImg.removeClass('activeto').css('z-index',-10);
          nexttoImg.addClass('activeto').css('z-index',10);
      }
  });
   $('.prevto').on('click', function(){
    var currenttoImg = $('.activeto');
      var prevtoImg = currenttoImg.prevto();
      
      if(prevtoImg.length){
          currenttoImg.removeClass('activeto').css('z-index',-10);
          prevtoImg.addClass('activeto').css('z-index',10);
      }
  }); 
    
    

    
    
});