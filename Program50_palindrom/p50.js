function check()
{
	var a=document.getElementById("str").value,
	  len=a.length-1,b="",i;

	  for(var i = len ; i > -1 ; i--)	  
	  {
	  	b +=a[i];
	  }

	  if(a == b )
	  {
	  	console.log("if");
	  	document.write("String is Palindrome");
	  }
	  else
	  {
	  	document.write("String is not palindrome")
	  }
}