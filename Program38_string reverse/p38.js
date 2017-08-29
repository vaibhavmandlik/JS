function reverse()
{
	var a=document.getElementById("str").value,str="";
	var b=a.length-1;

	document.write("Reverse String is: ");
	while(b >= 0)
	{
		str=a[b];
		b--;
		document.write(str);
	}
}