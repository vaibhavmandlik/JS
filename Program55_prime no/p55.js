function check()
{
	var a=document.getElementById("num").value;
	console.log(a);

	for(var i = 2 ;i <= a ; i++)
	{
		if(a == 2 || a % i != 0)
		{
			console.log("Prime");
		}
	}
}