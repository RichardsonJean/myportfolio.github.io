// JavaScript Document

$(document).ready(function() {
 
    var c = $('#myCanvas');
    var ctx = c.get(0).getContext('2d');
    
    var centerH=c.width()/2;//find horizontal center
    var centerV=c.height()/2;//find vertical center
    var myradius;
    if (centerH>centerV){//is it landscape, wide
    myradius=centerV;//make it half of the smaller one
    }else{//portrait or square
        myradius=centerH;//make it half of the smaller one
    }
        
        //now I know: the cnter x and y, and my max radius not to go outside
      //Start face (big circle)  
    ctx.beginPath();
    ctx.arc(centerH, centerV, centerV-60, 0,2* Math.PI);
    //	2 is complete 360
    ctx.fillStyle="#Ffff00";
    
    ctx.fill();
    ctx.stroke(); 
    //End face (Big circle)

    //Start mouth (half circle)
    ctx.beginPath();
    ctx.arc(centerH, centerV, centerV-120, 0, Math.PI);
    ctx.lineWidth = 5;
    ctx.stroke(); 
    ctx.closePath();
     //End mouth (half circle)
     //Start left eye
     ctx.beginPath();
     ctx.arc(centerH-(centerV-140), centerV-60, centerV-170, 0, 2*Math.PI);
     ctx.fillStyle="#fff";
     ctx.fill()
     ctx.stroke();
     //Start little circle
     ctx.beginPath();
     ctx.arc(centerH-(centerV-140), centerV-60, centerV-185, 0, 2*Math.PI);
     ctx.stroke();
     ctx.fillStyle="#000";
     ctx.fill()
     //Endlittle circle
    //End left eye
     //Start rigth eye
     ctx.beginPath();
     ctx.arc(centerH +(centerV-140), centerV-60, centerV-170, 0, 2*Math.PI);
     ctx.fillStyle="#fff";
     ctx.fill()
     ctx.stroke();
     //Start little circle
     ctx.beginPath();
     ctx.arc(centerH +(centerV-140), centerV-60, centerV-185, 0, 2*Math.PI);
     ctx.stroke();
     ctx.fillStyle="#000";
     ctx.fill()
     //Endlittle circle
    //End rigth eye
    // Create gradient
var gradient=ctx.createLinearGradient(centerH-90, c.height(),centerH+30, c.height());
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1","red");
// Fill with gradient
ctx.fillStyle=gradient;//new fill style
    ctx.font="800 30px Arial";
    ctx.fillText("Happy",centerH-60, c.height()-10); 
    //start animation
     window.setInterval(function(){
        $( "#myCanvas" ).fadeOut( 15000, function() {
         
         }); 
         $( "#myCanvas" ).fadeIn( "slow", function() {
            
           }); 
     });//end animation

     
     });

     