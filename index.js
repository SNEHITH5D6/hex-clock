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
	
	if(h == 0){		
		$("#hours").html("00"+" "+":");
	}

	else if(h >= 1 && h <= 9){
		$("#hours").html("0"+h+" "+":");
	}

	else{
		$("#hours").html(h+" "+":");
	}

        if(m == 0){
                $("#minutes").html("00"+" "+":");
        }

        else if(m >= 1 && m <= 9){
                $("#minutes").html("0"+m+" "+":");
        }

        else{
                $("#minutes").html(m+" "+":");
        }

        if(s == 0){
                $("#seconds").html("00"+"  ");
        }

        else if(s >= 1 && s <= 9){
                $("#seconds").html("0"+s+"  ");
        }

        else{
                $("#seconds").html(s+"  ");
        }
	$("body").css("background-color",hexColor);
}


setInterval(
        function(){
                displayTime();
},1000);


