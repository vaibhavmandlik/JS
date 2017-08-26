function check()
{
	var a=document.getElementById("str1").value;
	var b=document.getElementById("str2").value;
	var c=document.getElementById("str3").value;

	console.log(a+ " " + b + " " + c);

	if(a > b && a > c)
	{
		alert("1st value is Greater");
	}
	else if(b > a && b > c)
	{
		alert("2nd value is Greater");
	}
	else
	{
		alert("3rd value is Greater");
	}
}