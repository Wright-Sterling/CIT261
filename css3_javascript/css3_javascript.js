window.onload = applyStyle();

function applyStyle(){
    var hlight = document.querySelector('#highlightThis');
    var hlt = document.querySelector('#HLT');
    hlight.setAttribute('class', 'highlight');
 }

function setCssVariables(){
    const h4 = document.querySelectorAll('h4');
    const alignment = ['left','center','right'];
    const ai = Math.floor(Math.random() * 4);
    const fs = (Math.floor((Math.random() * 300)+.2)/100) + 'em';
    document.querySelector('#h4Size').innerHTML = "<h4>Font Size: " + fs + "</h4>";
    document.querySelector('#h4Align').innerHTML = "<h4>Text Alignment: " + alignment[ai] + "</h4>";
    for (i = 0; i < h4.length; i++) {
        h4[i].style.setProperty('--h4-font-size',fs);
        h4[i].style.setProperty('--h4-align',alignment[ai]);
    }
}