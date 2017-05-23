var hexColor;
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();

var timeToHex = function(x,y,z){
	x = x.toString();
	y = y.toString();
	z = z.toString();
	hexColor = "#"+x+y+z;
	console.log("Current time to color is : "+hexColor);
}

timeToHex(h,m,s);


var displayTime = function(){

	$("#hours").html(h+" "+":");
	$("#minutes").html(m+" "+":");
	$("#seconds").html(s+"  ");
}


displayTime();
