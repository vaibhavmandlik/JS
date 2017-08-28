function check()
{
	var a=parseInt(document.getElementById("val1").value);
	var b=parseInt(document.getElementById("val2").value);
	var sum= a + b, diff= a - b;
	console.log(sum);

	if(a==15)
	{
		alert("1st value is 15");
	}
	if(b==15)
	{
		alert("2nd value is 15");
	}
	if(sum==15)
	{
		console.log("if sum");
		alert("Their sum is 15");
	}
	else if(diff==15)
	{
		alert("Their difference is 15");
	}
}