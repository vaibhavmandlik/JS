function check()
{
	var a=document.getElementById("str").value,
	  b=a.split(" "),c,word;

	  console.log(b);

	  for(var i = 0 ; i < b.length ; i++)
	  {
	  	c=b[i].length;
	  	console.log(c);
	  	word=b[i];
	  }
	  console.log(word);
}