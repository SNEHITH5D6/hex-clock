var hexColor;
var timeToHex = function(x,y,z){
	x = x.toString();
	y = y.toString();
	z = z.toString();
	hexColor = "#"+x+y+z;
	console.log("Current time to color is : "+hexColor);}

var displayTime = function(){
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	timeToHex(h,m,s);
	$("#hours").html(h+" "+":");
	$("#minutes").html(m+" "+":");
	$("#seconds").html(s+"  ");
}


setInterval(
        function(){
                displayTime();
},1000);


