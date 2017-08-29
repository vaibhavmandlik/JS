function replace()
{
	var a=document.getElementById("str").value;
	console.log(a);

	var str1=a.slice(0,1),str2=a.slice(1,);
	console.log(str1 +" "+str2);

	document.write("New String is: " +str1.toUpperCase() + str2);
}