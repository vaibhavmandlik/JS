function cal()
{
var a=document.getElementById('val1').value;
var b=document.getElementById('val2').value;

var c;

if(a==b)
{
	console.log("In 1st if");
	 c=3 * (parseInt(a) +parseInt(b));
	 console.log(c);
document.getElementById("disp").innerHTML=c;	 
}

else
{
	console.log("In else");
   c= parseInt(a) + parseInt(b);
   console.log(c);
   document.getElementById("disp").innerHTML=c;
}
}