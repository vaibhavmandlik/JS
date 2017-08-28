function check()
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;
	var c=document.getElementById("val3").value;
	console.log(a[0]);

	if(a[0] == b[0] && a[0] == c[0])
	{
		alert("All rightmost digits are same");
	}
	else if(a[0] == b[0] || a[0] == c[0] || b[0] == c[0])
	{
		alert("2 integers have same rightmost digit");
	}
	else
	{
		alert("No integer have same rightmost digit");
	}
}