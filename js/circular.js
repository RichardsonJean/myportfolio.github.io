$( document ).ready(function() {
  $(".menu-trigger").click(function () {
		$("#mega-wrapper").toggleClass("sb_showing");
    $("#page").toggleClass("mymargin")
	});//End
  $(".mylis").click(function () {
    $("#mega-wrapper").removeClass("sb_showing");
  });
    $('#share').on('click', function(){
    $('#iconwrapper li').toggleClass('slideout');
  });
  
  });///end doc ready
  