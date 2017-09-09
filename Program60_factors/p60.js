function fact()
{
	var a=document.getElementById("val").value,b="";

	for(var i=0;i<=a;i++)
	{
		if(a%i==0)
		{
			b=i;
			document.write(b +",");
		}
	}

}