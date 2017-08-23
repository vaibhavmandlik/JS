function get() 
{
	var a=document.getElementById("str").value,j=a.length-3,c="",new_str="",mid="";
	console.log(a+ "    "+j);

	c=a.slice(j,);
	console.log(c);

	for(i=0;i<3;i++)
	{
		mid=a.substring(3,a.length-3);
	}

	console.log(mid);

	new_str=c+mid+c;
	document.getElementById("disp").innerHTML=new_str;

}