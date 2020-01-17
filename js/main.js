$(document).ready(function(){
 
 $('.next').on('click', function(){
    var currentImg = $('.active');
      var nextImg = currentImg.next();
      
      if(nextImg.length){
          currentImg.removeClass('active').css('z-index',-10);
          nextImg.addClass('active').css('z-index',10);
      }
  });
   $('.prev').on('click', function(){
    var currentImg = $('.active');
      var prevImg = currentImg.prev();
      
      if(prevImg.length){
          currentImg.removeClass('active').css('z-index',-10);
          prevImg.addClass('active').css('z-index',10);
      }
  });    
    
  
    
    
});

$(document).ready(function(){
 
 $('.nexts').on('click', function(){
    var currentImg = $('.actives');
      var nextsImg = currentImg.nexts();
      
      if(nextsImg.length){
          currentImg.removeClass('actives').css('z-index',-10);
          nextsImg.addClass('actives').css('z-index',10);
      }
  });
   $('.prevs').on('click', function(){
    var currentImg = $('.actives');
      var prevsImg = currentImg.prevs();
      
      if(prevsImg.length){
          currentImg.removeClass('actives').css('z-index',-10);
          prevImg.addClass('actives').css('z-index',10);
      }
  });    
    
  
    
    
});












