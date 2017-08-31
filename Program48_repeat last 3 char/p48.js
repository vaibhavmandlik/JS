function repeat() 
{
	var a=document.getElementById("str").value;
	var str=a.slice(-3,);
	
	if(a.length >= 3)
	for (var i = 0; i <3; i++) 
	{
		document.write(str);
	}
}