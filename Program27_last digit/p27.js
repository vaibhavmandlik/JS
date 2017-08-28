function check()
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;
	var c=document.getElementById("val3").value;

	console.log(a + " "+b +" "+c + " last : "+a[a.length-1]);

	if(a[a.length-1]==b[b.length-1]==c[c.length-1])
	{
		alert("Last digit of all integers are same");
	}
}