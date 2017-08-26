function check()
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;

	if(a>=50 && a<=99 && b>=50 && b<=99)
	{
			alert("Both Numbers are in Range of 50-99");
	}

	else
	{
		alert("Numbers are not in Range of 50-99");
	}
}

function check1() 
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;
	var c=document.getElementById("val3").value;

	
	if(a>=50 && a<=99 && b>=50 && b<=99 && c>=50 && c<=99)
	{
			alert("All Numbers are in Range of 50-99");
	}
	else if (a>=50 && a<=99) 
	{
		alert("1st value is in Range of 50-99");
	}
	else if (b>=50 && b<=99) 
	{
		alert("2nd value is in Range of 50-99");
	}
	else if (c>=50 && c<=99)
	{
		alert("3rd value is in Range of 50-99");
	}
	else
	{
		alert("Numbers are not in Range of 50-99");
	}
}