function check()
{
	var a=document.getElementById("str").value;
	var ch=document.getElementById("ch").value,cnt=0;
	console.log(a + " " +ch + " "+ a.length);

	for(var i = 0 ; i <= a.length ; i++)
	{
		if(a[i]==ch)
		{
			cnt++;
		}
	}
	
	if(cnt >= 2 && cnt <= 4)
	{
		alert("String contains 2 to 4 numbers of a specified character");
	}
}