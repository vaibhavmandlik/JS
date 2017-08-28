function check()
{
	var v_exam=document.getElementById("radio1").checked;
	var f_exam=document.getElementById("radio2").checked,radio;
	var marks=document.getElementById("marks").value;
	console.log(marks);

	if(v_exam == true)
	{
		radio=document.getElementById("radio1").value;
	}
	else
	{
		radio=document.getElementById("radio2").value;
	}

	if(radio == 'v_exam')
	{
		if(marks >=89 && marks <=100)
		{
			alert("Student got A+ grade in various examinations.");
		}
		else
		{
			alert("Student failed to get A+ grade in various examinations");
		}
	}
	else
	{
		if(marks >=90 && marks <=100)
		{
			alert("Student got A+ grade in Final examination");
		}
		else
		{
			alert("Student failed to get A+ grade in Final examination");
		}
	}
}