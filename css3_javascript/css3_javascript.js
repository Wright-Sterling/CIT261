//Create a 'global' list of all bold items
var bold_Tags;
window.onload = js_getBoldTags();
 
// Collect all <strong> tags
function js_getBoldTags() 
{
  bold_Tags = document.getElementsByTagName('strong'); 
}
// iterate all bold tags and change color  
function js_highlight() 
{
   for (var i=0; i<bold_Tags.length; i++)
   {                                                    
    bold_Tags[i].style.color = "green";
    }
}

// On mouse out highlighted words become black
function js_unHighlight()
{
  for (var i=0; i<bold_Tags.length; i++) 
  {
       bold_Tags[i].style.color = "black";
  }
}

function applyStyle(){
    var hlight = document.querySelector('#highlightThis');
    hlight.setAttribute('class', 'highlight');
 }

function setCssVariables(){
    const h4 = document.querySelectorAll('h4');
    const alignment = ['left','center','right'];
    const ai = Math.floor(Math.random() * 3);
    const fs = (Math.floor((Math.random() * 300)+20)/100) + 'em';
    document.querySelector('#h4Size').innerHTML = "<h4>Font Size: " + fs + "</h4>";
    document.querySelector('#h4Align').innerHTML = "<h4>Text Alignment: " + alignment[ai] + "</h4>";
    for (i = 0; i < h4.length; i++) {
        h4[i].style.setProperty('--h4-font-size',fs);
        h4[i].style.setProperty('--h4-align',alignment[ai]);
    }
}