// JavaScript Document
$(document).ready(function () {
//when everything is downloaded

//////////////////// func for all buttons///////////////
	var allButtons=$(".dropbtn");//create an array of all the selectors that have the class dropbtn
	//alert(allButtons.length);

	$(".dropbtn").click(function () {//Hey any selector with this class, I got a job for u when clicked
		var whoClicked=this.id;//Who called me??? what's you id
		//alert(whoClicked);
	for(var i=0;i<allButtons.length;i++){//Loop from 0 to one less than the number of buttons
	if(allButtons[i].id != whoClicked){//Example: we clicked on btn3, but testing btn1, not the one who clicked
		
				$("#content"+(i+1)).slideUp(500);//hey content1, slide up
				$(allButtons[i]).removeClass("currentButton");//remove the current class
	}else{//It is the one who clicked! new king! new current
		$("#content"+(i+1)).slideToggle(500);//Slide up or down depending on your status
		$(allButtons[i]).addClass("currentButton");//look selected!!!
		
	}//end if else	
		
	}//end loop
	}); //end function*/	
	////////////////////////////////////////////////////////////////////////////////////	
	
	
	/////////make all menus even width on large screens//
	var allContainers=$(".drop_container");//hey all containers get into an array
	//alert(allContainers.length);
	var widthForEach=100/allContainers.length;//example: 100/7 containers, each one get 14.28
	//alert(widthForEach);
	$(".drop_container").css("width",widthForEach+"%");//hey anyone with this class, width be 14.28%
	
	

	
	
	/////////////////hamburger icon function////////////////////////
	var interface_showing=false;
	
	
$("#menuicon").click(function(){
//for small screens where the humbergur icon is visible, show-hide the entire interface
	if(interface_showing==false){
		$("#myInterface").css("left","0px");
		interface_showing=true;
	}else{
			$("#myInterface").css("left","-140px");
		interface_showing=false;
		
	}
	
					
});
	

	/////////////////////////////////reset every time window is resized///////////////////////////////
		function myreset(){
 location.reload();//reload the page
		
	}		
var doit; //declare a new obj
	$(window).resize(function () { //every time the window is resized call func
		clearTimeout(doit); //clear prev values
		doit = setTimeout(myreset, 500); //after 1000 ms call the func 
	});	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	

}); //end document ready