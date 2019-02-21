function scaleCircle() {
    let circle = document.getElementsByClassName('circle')[0];
    let button = document.getElementById('scaleButton');
    if(button.innerHTML==="Scale") {
        circle.classList.add('scale');
        button.innerHTML="Reset";
    } else {
        circle.classList.remove('scale');
        button.innerHTML="Scale";
    }
}

function rotateBox() {
    let box = document.getElementsByClassName('box')[0];
    let button = document.getElementById('rotateButton');
    if(button.innerHTML==="Rotate") {
        box.classList.add('rotate');
        button.innerHTML="Reset";
    } else {
        box.classList.remove('rotate');
        button.innerHTML="Rotate";
    }
}

function moveCircle() {
    let circle = document.getElementsByClassName('circle')[1];
    let button = document.getElementById('moveButton');
    if(button.innerHTML==="Move") {
        circle.classList.add('move');
        button.innerHTML="Reset";
    } else {
        circle.classList.remove('move');
        button.innerHTML="Move";
    }
}