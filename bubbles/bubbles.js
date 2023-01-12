var bubble1 = document.getElementById('bubbles1');
var bubble2 = document.getElementById('bubbles2');
var fish = document.getElementById('fish');
var fish1 = document.getElementById('fish1');
var bubble3 = document.getElementById('bubbles3');

var scrollheight = document.body.scrollHeight; // height of entire document
var windowheight = window.innerHeight; // height of browser window


function parallaxbubbles() {
	var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically
	var scrollamount = (scrolltop / (scrollheight - windowheight)) * 100;
	bubble1.style.top = -scrolltop * 4 + 'px'; // move bubble1 at 10% of scroll speed
	bubble1.style.right =   -scrollamount* 3.4 + '%';
	//bubble1.style.center = -scrolltop * 0.1 + 'px';//me
	
	bubble2.style.top = scrolltop * 0.6 + 'px'; // move bubble2 at 60% of scroll speed
	
	fish.style.right =  +  scrollamount + '%';
	fish1.style.right =   (scrollamount/2) + '%';
	bubble3.style.top = (-scrolltop*4) / 10 + 'px';
	

}
