function create()
{
	var a=document.getElementById("str").value;
	console.log(a);

	var str1=a.slice(0,3);
	console.log(str1);
	var str2=a.slice(3,),str="";
	console.log(str2);

	if(a.length <= 3)
	{
		str=a.replace(a,str1.toUpperCase());
		document.getElementById("disp").innerHTML=str;
	}
	else
	{

      str=a.replace(a,str1.toLowerCase()+str2);
	  console.log(str);
	  document.getElementById("disp").innerHTML=str;
	}
}