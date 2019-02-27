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

function skewBox() {
    let box = document.getElementsByClassName('box')[1];
    let button = document.getElementById('skewButton');
    if(button.innerHTML==="Skew") {
        box.classList.add('skew');
        button.innerHTML="Reset";
    } else {
        box.classList.remove('skew');
        button.innerHTML="Skew";
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

function changePerspective() {
    let cube = document.getElementsByClassName('cube')[0];
    let button = document.getElementById('changePerspectiveButton');
    if(button.innerHTML==="Stretch") {
        cube.classList.remove('pers650')
        cube.classList.add('pers250');
        button.innerHTML="Reset";
    } else {
        cube.classList.remove('pers250');
        cube.classList.add('pers650');
        button.innerHTML="Stretch";
    }
}

function changeViewpoint() {
    let cube = document.getElementsByClassName('cube')[0];
    let button = document.getElementById('changeViewpointButton');
    if(button.innerHTML==="Change Viewpoint") {
        cube.classList.remove('pov150');
        cube.classList.add('pov-tl');
        button.innerHTML="Reset";
    } else {
        cube.classList.remove('pov-tl');
        cube.classList.add('pov150');
        button.innerHTML="Change Viewpoint";
    }
}