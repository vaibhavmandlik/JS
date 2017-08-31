function check()
{
	var a=document.getElementById("str").value,p = t =0;
	console.log(a);

	for(var i = 0 ; i < a.length ; i++)
	{
		if(a[i] == 'p' || a[i] == 'P')
		{
			p++;
		}
		else if(a[i] == 't' || a[i] == 'T')
		{
			t++;
		}
	}
	if(p == t)
	{
		document.write("No. of P's and No.of T's are same.");
	}
	else
	{
		document.write("No. of P's and No.of T's are different.");
	}
}