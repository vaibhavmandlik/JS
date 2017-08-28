function check()
{
	var a=parseInt(document.getElementById("val1").value);
	var b=parseInt(document.getElementById("val2").value);
	var sum= a + b, diff= a - b;
	console.log(sum);

	if(a==8)
	{
		alert("1st value is 8");
	}
	if(b==8)
	{
		alert("2nd value is 8");
	}
	if(sum==8)
	{
		console.log("if sum");
		alert("Their sum is 8");
	}
	else if(diff==8)
	{
		alert("Their difference is 8");
	}
}