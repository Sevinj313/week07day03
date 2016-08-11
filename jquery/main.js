$(document).ready(function(){
   $('.gridImg').click(function(event) {
     $('.bigImg img').attr('src', ''+$(this).attr('src')+'');
   });
   counter=counter=$('.gridImg').length-1;
   $('.prev').click(function(event) {
      counter=counter-1;
      if (counter<0) {
         counter=$('.gridImg').length-1;
      }
      $('.bigImg img').attr('src', ''+$('.gridImg').eq(counter).attr('src')+'');
   });
    $('.next').click(function(event) {
      counter=counter+1;
      if (counter>4) {
         counter=0;
      }
      $('.bigImg img').attr('src', ''+$('.gridImg').eq(counter).attr('src')+'');
   });
});