function conv()
{
	var a=document.getElementById("val").value;
	console.log(a);

	var hr = Math.floor(a / 60),min = a % 60;
	console.log("hr "+hr + " min "+min);

	document.write("Time is: " + hr + ":" + min);
}