function conv()
{
	var a=document.getElementById("str").value,
	  b=a.toLowerCase().split(" "),c;
	  console.log(b);

	  for(var i = 0 ; i < b.length ; i++)
	  {
	  	b[i]=b[i].charAt(0).toUpperCase()+ b[i].substring(1);
	  }
	  c=b.join(" ");

	  document.write(c);
}