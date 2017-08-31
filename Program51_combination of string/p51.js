function check()
{
	var a=document.getElementById("str").value;
	console.log(a.length-1);

	document.write(a[0]);
	for(var i = 0 ; i < a.length ; i++)
	{
		for(var j = 1 ; j < a.length ;j++)
		{
			document.write(","+a[i]+a[j]);
		}
	}
	document.write(","+a[a.length-1]);
}