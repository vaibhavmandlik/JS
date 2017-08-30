function valid()
{
	var name=document.myform.nam.value;
	var pass=document.myform.pass.value,p_exp=/^[A-Za-z\d$@$!%*#?&]{8,}$/;
	var c_code=document.myform.c_code.value=cc_exp=/^[0-9]{7,2}$/;
	var add=document.myform.add.value,exp=/^[0-9a-zA-Z,/()]+$/;
	var city=document.myform.city.value,c_exp=/^[a-zA-Z]{,1}+$/;
	var state=document.myform.state.value;
	var phn=document.myform.phn.value,ph_exp=/^[0-9]{10,10}$/;

	console.log(add);
	for(var i = 0 ; i < name.length ; i++)
	{
		if(name[i] >=0 || name[i] <= 9)
		{
			alert("Enter proper name");
			break;
		}
	}

/*	if(<?php echo $email_taken;?>)
        {
                alert("This email address is already taken. Please choose a different email");
                document.getElementById("email").focus();
                return false;
        }  */
	if(!pass.match(p_exp))
	{
		alert("Enter correct password with minimum length of 8");
	}

	for( i = 0 ;i < c_code.length ;i++)
	{
		if(c_code[i] >= 'a' && c_code[i] <= 'z' || c_code[i] >= 'A' && c_code[i] <= 'Z')
		{
			alert("country code should be numeric value");
			break;
		}
	}

	if(!add.match(exp))
		alert("enter proper address");

	if(!city.match(c_exp))
	{
		alert("enter proper city");
	}

	if(!state.match(c_exp))
	{
		alert("enter proper state");
	}

	if(!phn.match(ph_exp))
	{
		alert("enter correct phone number");
	}
}	