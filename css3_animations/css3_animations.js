function pauseAll() {
    let bar = document.getElementsByClassName('bar')[0];
    let sphere = document.getElementsByClassName('sphere')[0];
    let sphereShadow = document.getElementsByClassName('sphereShadow')[0];
    let button = document.getElementById('pauseButton');
    if(button.innerHTML==="Pause") {
        bar.classList.add('paused');
        sphere.classList.add('paused');
        sphereShadow.classList.add('paused');
        button.innerHTML="Play";
    } else {
        bar.classList.remove('paused');
        sphere.classList.remove('paused');
        sphereShadow.classList.remove('paused');
        button.innerHTML="Pause";
    }
}