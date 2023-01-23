$( document ).ready(function() {
  $(".menu-trigger").click(function () {
		$("#mega-wrapper").toggleClass("sb_showing");
    $("#page").toggleClass("mymargin")
	});//End
    $('#share').on('click', function(){
    $('#iconwrapper li').toggleClass('slideout');
  });
  
  });///end doc ready
  