function repeat()
{
	var str=document.getElementById("str").value;
	var cnt=document.getElementById("cnt").value;

	if(cnt > 0)
	{
		for (var i = 0; i < cnt ; i++) 
		{
			document.write(str);
		}
	}
}