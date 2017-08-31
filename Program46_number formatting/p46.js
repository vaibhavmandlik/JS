function check()
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;

	var x= parseInt(a / b).toString();
	var final= x.split("");
	console.log(final);

	if( x >= 1000)
	{
		console.log("if");
		for(var i= x.length-3 ; i > 0 ; i-=3)
		{
			final.splice(i,0,",");
		}
	}
	var w=final.join("");
	document.write(w);
}