function reverse()
{
	var a=document.getElementById("num").value,
	  b=a.length;
	console.log(b);

	while(b!=0)
	{
		document.write(b);
		b--;
	}
}