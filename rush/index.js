$(function(){

  $('.portfolio').hover(
    function(){
      $(this).addClass('hovered');
      $('.portfolio').not(this).addClass('dimmed');
    },
    function(){
      $(this).removeClass('hovered');
      $('.portfolio').removeClass('dimmed');
    }
  );

  $('.portfolio').click(function(){
    const link = $(this).data('link');
    $('.container').fadeOut(800, function(){
      window.location.href = link;
    });
  });
  
});
