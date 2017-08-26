function check()
{
	var a=100 - document.getElementById("val1").value;
	var b=100 - document.getElementById("val2").value;

	console.log(a + " " + b);

	if(a < b)
	{
		alert("1st Value is near 100");
	}

	else
	{
		alert("2nd Value is near 100");
	}
}