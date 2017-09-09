function check()
{
	var a = document.getElementById("str").value,
	  int = /^[0-9]+$/,
	  str = /^[a-zA-Z]+$/,
	  bool = /^(true|True|TRUE|false|False|FALSE)$/;

	if(a.match(int))
	{
		console.log("It is Integer");
	}
	else if(a.match(bool))
	{
		console.log("It is Boolean");
	}
	else if(a.match(str))
	{
		console.log("It is Alphabet/String");
	}
	else if (typeof a === "function")
	{
		console.log("It is function");
	}
	else if(!a)
	{
		console.log("It is Undefined");
	}
	else if(!Array.isArray(a))
	{
		console.log("It is Object");
	}
}