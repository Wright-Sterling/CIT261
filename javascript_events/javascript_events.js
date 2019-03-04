/* Set up all the listeners */
window.addEventListener("click",mouseCoords, true);
document.getElementsByClassName("box")[0].addEventListener("mouseover",colorBox, true);
document.getElementsByClassName("box")[0].addEventListener("mouseout",colorBox, true);
var boxColor = "blue";

function justNumbers(c) {
    let thisCode=c.charCode ? c.charCode : c.keyCode; // Assigns keyCode if charCode is null
    if (thisCode<48||thisCode>57) {
        return false; // Not a number key
    }
    return true;
}

function mouseCoords(event) {
    let mX=event.clientX;
    let mY=event.clientY;
    document.getElementById("mouseX").innerHTML=mX;
    document.getElementById("mouseY").innerHTML=mY;
}

function colorBox(event) {
    let firstBox=document.getElementsByClassName("box")[0];
    if (boxColor == "blue") {
        firstBox.classList.add("red");
        boxColor="red";
    }else{
        firstBox.classList.remove("red");
        boxColor="blue";
    }
}