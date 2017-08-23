function chnge()
{
	var a=document.getElementById("str").value;
	var len=a.length,i=0;
	console.log(a[i]);
	var first=a[0];
	console.log("f "+first);

	var new_str=a.replace(a[len-1],first);
	console.log("new "+new_str);

	document.getElementById("disp").innerHTML=new_str;
}