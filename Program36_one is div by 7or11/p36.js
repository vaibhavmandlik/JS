function check()
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;

	if(a % 7 == 0 || a % 11 == 0)
	{
		alert("1st value is divisible by 7 or 11");
	}
	else if(b % 7 == 0 || b % 11 == 0)
	{
		alert("2nd value is divisible by 7 or 11");
	}
	else
	{
		alert("No vlaue is divisible by 7 or 11");
	}
}