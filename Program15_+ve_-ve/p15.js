function check()
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;

	if (a == 0)
	 {
	 	alert("You have entered 0 as Value 1.");
	 }
	 else if(a > 0)
	{
		alert("Value 1 is Positive");
	}

	else
	{
		alert("Value 1 is Negative");
	}
	
	 if(b == 0)
	 {
	 	alert("You have entered 0 as Value 2.");
	 }
	
	
 else
	if(b > 0)
	{
		alert("Value 2 is Positive");
	}

	else
	{
		alert("Value 2 is Negative");
	}
}