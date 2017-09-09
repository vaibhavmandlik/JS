function find() 
{
	var a=document.getElementById("arr").value;

	var b=a.split(" ").sort();
	console.log(b.length);

	if(b[0] == b[1] || b[b.length-1] == b[b.length-2])
	{
		console.log("2nd Lowest is: "+ b[2] +"<br><br>2nd Highest is: "+ b[b.length-3]);
	}

	else
	{
		console.log("2nd Lowest is: "+ b[1] +"<br><br>2nd Highest is: "+ b[b.length-2]);
	}
	 
}