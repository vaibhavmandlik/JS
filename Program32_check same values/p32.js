function check()
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;
	var c=parseInt(document.getElementById("val3").value);
	console.log(a+ " "+ b +" "+ c);

	if(a == b && a == c)
	{
		document.getElementById("disp").innerHTML='30';
	}
	else if(a == b || a == c || b == c)
	{
		document.getElementById("disp").innerHTML='20';
	}
	else
	{
		document.getElementById("disp").innerHTML='40';
	}
}