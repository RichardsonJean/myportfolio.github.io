// JavaScript Document
$(document).ready(function () {
	var myCanvas = $('#myCanvas');
	var myPaper = myCanvas.get(0).getContext('2d');
	
	var container = $(myCanvas).parent();
	var theMax = 0;
	var theMin = 0;
	var theAvg = 0;
	//var Maxyear = 0;
	//var Minyear =0

	if ($(container).width() < 1000) { //if small screen	
		myCanvas.attr('width', $(container).width()); //set a new width
		myCanvas.attr('height', $(container).width() / 1.7);
	}

	getMyData();

	function getMyData() {

		var children = document.getElementsByTagName('departmentAndPopulation');
		var nextX = 0;
		var nextY = 0;
		var canvasWidth = $("#myCanvas").width();
		var canvasHeight = $("#myCanvas").height();
		var widthPerNode = canvasWidth / (children.length-1)*0.95;
		//alert(widthPerNode);
		var populationArray = new Array();
		var populationArraySum = 0;
		var z = 0;

		for (z; z < children.length; z++) {
			var getPopulation = parseInt(children[z].getAttribute('population'));
			populationArray.push(getPopulation);
			populationArraySum += getPopulation;

		}
      //for the year
		/*var yearArray = new Array();
		var yearArraySum = 0;
		var k = 0;

		for (k; k < children.length; k++) {
			var getYear = parseInt(children[k].getAttribute('year'));
			yearArray.push(getYear);
			yearArraySum += getYear;

		}*/
		//alert(yearArray);
		

		theMax = Math.max.apply(Math, populationArray);
		//alert(theMax);
		theMin = Math.min.apply(Math, populationArray);
		//alert(theMin);
		theAvg = (populationArraySum / children.length).toFixed(2);
		$('#showMax').text("Max: "+theMax);
		$('#showMin').text("Min: "+theMin);
		$('#showAvg').text("Average: "+theAvg);
		
		setInterval(function () {
			drawOneNode()
		}, 500);

		var i = 0;

		function drawOneNode() {
			
			if (i < children.length) {
				//myPaper.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear the canvas
				//$("#Outer").fadeToggle(1000);
				nextX = i * widthPerNode;
				nextY = canvasHeight - children[i].getAttribute('population') * (canvasHeight / theMax) + 10;

       
				var my_gradient = myPaper.createLinearGradient(0, 0, 0, canvasHeight);
				

				my_gradient.addColorStop(0.5, " rgba(205, 134, 63, 0.646)");
				my_gradient.addColorStop(1, "  rgba(0, 0, 255, 0.649)");//rgba(205, 134, 63, 0.646)
				my_gradient.addColorStop(0, " rgba(255, 0, 0, 0.825)");
				
				myPaper.fillStyle = my_gradient;
				
				myPaper.fillRect(nextX, nextY, widthPerNode+20, canvasHeight - nextY);
				myPaper.fillStyle = "green";
				myPaper.font = "15px Lobster";
				myPaper.fillText(children[i].getAttribute('population'), nextX+10, nextY + 5);
				myPaper.fillStyle = "rgba(220, 220, 220, 0.904)";
				myPaper.fillText(children[i].getAttribute('department'), nextX , 580);

                //Start line between the circles
				myPaper.strokeStyle=" rgba(255, 192, 203, 0.377)";
				myPaper.lineTo(nextX,nextY);
				//End line between the circles
				//Start code for the circles	
				myPaper.stroke();
				myPaper.beginPath();
				myPaper.lineWidth="5";

				myPaper.arc(nextX, nextY, 10, 0,2* Math.PI);
				myPaper.fillStyle="rgba(205, 134, 63, 0.546)";
				myPaper.fill();
				myPaper.moveTo(nextX,nextY);
		//End code for the circles
		
				i++;
				
				  
		
			} //end of if not last node
		} //end of the func timer
	} //end getMy data

	var doit;
	$(window).resize(function () {
		clearTimeout(doit); //clear prev values
		doit = setTimeout(respondCanvas, 150);
	});

	function respondCanvas() {
		if ($(container).width() < 1000) { //if small screen

			myCanvas.attr('width', $(container).width()); //set a new width
			myCanvas.attr('height', $(container).width() / 1.7);
			myPaper.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear the canvas
			getMyData(); //redraw the blocks
		} else {

			myCanvas.attr('width', 1000);
			myCanvas.attr('height', 600);
			myPaper.clearRect(0, 0, myCanvas.width, myCanvas.height);
			getMyData();
		} //end if-else
		
	} //end func respond canvas



}); //end doc ready