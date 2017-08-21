function check()
{
	var a=document.getElementById("str").value,i=0;
	console.log(a);

		if(a[i]=='p' || a[i + 1]=='y' || a[i]=='P' || a[i + 1]=='Y')
		{
			alert(a);
		}
		else
		{
			alert("py" + a);
		}
}