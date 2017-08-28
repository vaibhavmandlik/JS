function check()
{
	var val1=parseInt(document.getElementById("val1").value);
	var val2=parseInt(document.getElementById("val2").value);
	var sum = val1 + val2;

	if(sum >=50 && sum <=80)
	{
		document.getElementById("disp").innerHTML='65';
	}
	else
	{
		document.getElementById("disp").innerHTML='80';
	}
}