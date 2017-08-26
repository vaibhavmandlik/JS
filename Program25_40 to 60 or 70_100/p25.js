function check() 
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;

	console.log(a +" " + b);

	console.log("before if");
	if(a >= 40 && a <= 60)
	{
		document.write("1st Value is in between 40-60");
	}
	else if(a >= 70 && a <= 100)
	{
		document.write("1st value is in between 70-100");
	}
	else
	{
		alert("Enter 1st value properly.");
	}

	
	if(b >= 40 && b <= 60)
	{
		document.write("<br><br>2nd value is in between 40-60");
	}
	else if(b >= 70 && b <= 100)
	{
		document.write("<br><br>2nd value is in between 70-100");
	}
	else
	{
		alert("Enter 2nd value properly.");
	}
}