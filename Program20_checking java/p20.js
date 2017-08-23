function check()
{
	var a=document.getElementById("str").value,str="";

	str=a.slice(0,4);

	if(str=='java' || str=='Java' || str=='JAVA')
	{
		alert("Your String starts with 'Java'");
	}
	else
	{
		alert("Your String doesn't starts with 'Java'");
	}
}