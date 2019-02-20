function js_bigchange() 
{
//font styles changed by JavaScript:
 bigchange.style.fontSize = "14pt";
 bigchange.style.fontFamily = "Impact";
 bigchange.style.color = "green";
}

function js_getFormFields()
{
  var x=document.getElementById("f_form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    {  
		window.alert(x.elements[i].value);
     }  
   }
}

function js_insert_Row()
{
	var x=document.getElementById('t_table1').insertRow(0);
	var y = x.insertCell(0);
	var z = x.insertCell(1);
	y.innerHTML="New Cell1";
	z.innerHTML="New Cell2";
}

function js_changeTable()
{
    rn = window.prompt("Input the Row number(0,1,2)", "0");
    cn = window.prompt("Input the Column number(0,1)","0");
    content = window.prompt("Input the Cell content");  
    var x=document.getElementById('t_table2').rows[parseInt(rn,10)].cells;
    x[parseInt(cn,10)].innerHTML=content;
}