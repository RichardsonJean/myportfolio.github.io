// JavaScript Document

$(document).ready(function() {
	
	var url = "home.html";
	 $('#content').load(url);
	 $('header h1').addClass("my_current");
	$('#main_nav ul li a, header h1').click(function(event) {
		url = $(this).attr('data');
		
		//alert (url);
		event.preventDefault();
		
		
		$('#main_nav ul li a, header h1').removeClass("my_current");
		
		$(this).addClass("my_current");
     		$("#content").animate({'opacity':0}, 1000, function(){
				 $('html, body').animate({ scrollTop:"0px" }, 500, function(){
      $('#content').load(url, function() {
            $("#content").animate({'opacity': 1}, 1000);
				
        });
		 });
		  });

		

	 });//end click
	//Circular script
	 $('#share').on('click', function(){
		$('#iconwrapper li').toggleClass('slideout');
	  });
	  
		
	  
 
 
});//end doc ready

