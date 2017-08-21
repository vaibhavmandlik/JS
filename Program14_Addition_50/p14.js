function check() 
{
	var a = document.getElementById("val1").value;
	var b = document.getElementById("val2").value;
	var c=parseInt(a)+parseInt(b);

	document.getElementById("disp").innerHTML=c;

	if (a == 50) 
	{
		window.alert("Value 1 is 50.");
	}
	else if (b == 50)
	 {
	   window.alert("Value 2 is 50.");	
	 }
	 else if (c == 50) 
	 {
	 	console.log(c);
	 	window.alert("Sum of both values is 50.");
	 }
}	
