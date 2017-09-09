function check() 
{
	var a= document.getElementById("val").value,cnt=0;

	for(var i=0;i<a;i++)
	{
		if (a % i == 0)
		{
			cnt+=i;
		}
	}

	if (cnt == a) 
	{
		document.write("Number is Perfect Number.");
	}
	else
	{
		document.write("Number is Not Perfect Number.");
	}
}