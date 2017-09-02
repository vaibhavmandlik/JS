function check()
{
	var str=document.getElementById("str").value;

	var a = e = i = o = u = 0;

	document.write("<h3>Count of Vowels</h3>")
	for(var j = 0 ; j < str.length ; j++)
	{
		if(str[j] == 'a' || str[j] == 'A')
		{
			a++;
		}
		else if (str[j] == 'e' || str[j] == 'E') 
		{
			e++;
		}
		else if (str[j] == 'i' || str[j] == 'I')
		{
			i++;
		}
		else if (str[j] == 'o' || str[j] == 'O')
		{
			o++;
		}
		else if (str[j] == 'u' || str[j] == 'U')
		{
			u++;
		}
	}
	document.write("A/a: " + a + "<br>E/e: "+ e +"<br>I/i: "+ i +"<br>O/o: "+ o +"<br>U/u: "+ u);
}