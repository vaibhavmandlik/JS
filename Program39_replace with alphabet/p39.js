function replace()
{
	var a=document.getElementById("str").value;
	console.log(a);
	var alpha="abcdefghijklmnopqrstuvwxyz",i;

	if(a.length <= 26)
	{
		console.log("if");
		document.write("New String is: ");
		for( i = 0 ; i <= a.length-1 ; i++)
		{
			console.log(a[i]);
			a[i]=abcdefghijklmnopqrstuvwxyzlpha[i];
			document.write(a);
		}
		
	}
}