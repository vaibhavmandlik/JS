function check()
{
	var a=document.getElementById("val1").value;
	var b=document.getElementById("val2").value;
	var c=document.getElementById("val3").value;

	/* For Value 1 */

	if(a >=20 && a < b || a < c)
	{
		alert("1st value is greater than 20 & less than one of other inegers");
	}

	/* For Value 2 */

	else if(b >=20 && b < a || b < c)
	{
		alert("2nd value is greater than 20 & less than one of other inegers");
	}

	/* For Value 3 */

	else if(c >=20 && c < a || c < b)
	{
		alert("3rd value is greater than 20 & less than one of other inegers");
	}
}