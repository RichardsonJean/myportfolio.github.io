// JavaScript Document
$(document).ready(function () { //needed for all jquery
	$("#menu-trigger").click(function () {
		$("#mega-wrapper").toggleClass("sb_showing");
	});
	
	//slider animation start

//start mouve hover

//for banner 1
$(".banner1").hover(function () {//when we over banner 1 

	$(".banner1").css('animation-play-state', 'paused');
	$(".banner2").css('animation-play-state', 'paused');
	$(".banner3").css('animation-play-state', 'paused');
	$(".banner4").css('animation-play-state', 'paused');
	$(".text-box").css('animation-play-state', 'paused');
},function () {//when we move out of banner 1
	$(".banner1").css('animation-play-state', 'running');
	$(".banner2").css('animation-play-state', 'running');
	$(".banner3").css('animation-play-state', 'running');
	$(".banner4").css('animation-play-state', 'running');
	$(".text-box").css('animation-play-state', 'running');	

}

); //end function for banner 1
$(".banner2").hover(function () {//when we hover banner 2

	$(".banner1").css('animation-play-state', 'paused');
	$(".banner2").css('animation-play-state', 'paused');
	$(".banner3").css('animation-play-state', 'paused');
	$(".banner4").css('animation-play-state', 'paused');
	$(".text-box").css('animation-play-state', 'paused');
},function () {//when we move banner2 
	$(".banner1").css('animation-play-state', 'running');
	$(".banner2").css('animation-play-state', 'running');
	$(".banner3").css('animation-play-state', 'running');
	$(".banner4").css('animation-play-state', 'running');
	$(".text-box").css('animation-play-state', 'running');	

}
); //end function for banner 2

$(".banner3").hover(function () {//when we hover banner 3

	$(".banner1").css('animation-play-state', 'paused');
	$(".banner2").css('animation-play-state', 'paused');
	$(".banner3").css('animation-play-state', 'paused');
	$(".banner4").css('animation-play-state', 'paused');
	$(".text-box").css('animation-play-state', 'paused');
},function () {//when we move banner3 
	$(".banner1").css('animation-play-state', 'running');
	$(".banner2").css('animation-play-state', 'running');
	$(".banner3").css('animation-play-state', 'running');
	$(".banner4").css('animation-play-state', 'running');
	$(".text-box").css('animation-play-state', 'running');	

}
); //end function for banner 3
$(".banner4").hover(function () {//when we hover banner 4

	$(".banner1").css('animation-play-state', 'paused');
	$(".banner2").css('animation-play-state', 'paused');
	$(".banner3").css('animation-play-state', 'paused');
	$(".banner4").css('animation-play-state', 'paused');
	$(".text-box").css('animation-play-state', 'paused');
},function () {//when we move out of banner4
	$(".banner1").css('animation-play-state', 'running');
	$(".banner2").css('animation-play-state', 'running');
	$(".banner3").css('animation-play-state', 'running');
	$(".banner4").css('animation-play-state', 'running');
	$(".text-box").css('animation-play-state', 'running');	

}
); //end function for banner 4

//slider animation end
	
	
	
}); ///end document ready


