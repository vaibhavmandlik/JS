function check()
{
	var a=document.getElementById("str").value;
	console.log(a);

	for(var i=0; i <=a.length-1 ;i++)
	{
		if(a[i]=='a' || a[i] == 'A')
		{
			var a_i=i;
		}
		else if(a[i] =='b' || a[i] == 'B')
		{
			var b_i=i;
		}

		if((a_i - b_i) == 4 || (b_i - a_i) == 4)
		{
			document.write("The characters a and b are separated by exactly 3 places.");
			break;
		}
	}
	console.log("a_i: "+a_i + " b_i "+b_i);
}