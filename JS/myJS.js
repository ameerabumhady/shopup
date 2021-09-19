$(document).ready(function()
{
  // hide virification Code modal
  $("#hidevirificationCode").click(function(){
    $(".virificationCode").hide();
  });

  // hide login by Mobile modal
  $("#hideLoginMobile").click(function(){
    $(".loginMobile").hide();
  });

	$(document).on('click','.list-down-btn',function(event){
  	event.preventDefault();
    var target = $(this).attr('data-toggle');
    var ss = $('.sub-titel-cat');
    
    $(target).slideToggle();
    var clicked = event.target;
    $(clicked).toggleClass("glyphicon-chevron-down  glyphicon-chevron-up");
    $(this).$(ss).css('color', 'red');
  });

  $(".show-modal").click(function(){
    $(".modal").show();
  });

  
  // $(document).on('click','.dropdown',function(event){
  // 	event.preventDefault();
  //   var target = $(this).attr('data-toggle');
  //   var ss = $('.back-color-red');
    
  //   $(target).slideToggle();
  //   var clicked = event.target;
  //   // $(clicked).toggleClass("glyphicon-chevron-down  glyphicon-chevron-up");
  //   $(this).$(ss).css('background-color', 'red');
  // });

  // $(".dropdown").click(function(){
  //   $(this).addClass("back-color-red");
  // })
});
