function remove()
{
	var a=document.getElementById("str").value;
	var b=document.getElementById("ch").value,i,new_str2="",new_str1="";
	console.log(a+" "+b+" "+a.length);

	for(i=0;i<a.length;i++)
	{
		if(a[i]==b)
		{
			var c=i;
		}
	}

	console.log(c);
	
	for(i = 0 ; i < c ; i++)
	{
		new_str1=new_str1 + a[i];

	}

	for(i= c+1 ; i<a.length ; i++)
	{
	   new_str2=new_str2+a[i];
	}

	document.getElementById("new").innerHTML=new_str1+new_str2;
}