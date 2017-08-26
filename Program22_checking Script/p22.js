function check()
{
	var a=document.getElementById("str").value;
	console.log(a);

	if(a.includes("script",5) || a.includes("Script",5) || a.includes("SCRIPT",5))
	{
		//alert("Your String contains word 'Script'");
		var str1=a.slice(0,5);
		var str2=a.slice(11,);

		document.getElementById("1").innerHTML=str1+str2;
		document.getElementById("2").innerHTML=a;
	}
}