var counter=0;
var position="left";
var transitions = ["ease", "ease-in", "ease-out", "ease-in-out", "linear"];

function moveText() {
    var txt = document.getElementsByClassName('text')[0];
    var button = document.getElementById('myButton');
    txt.classList.remove(transitions[counter==0 ? transitions.length-1 : counter-1]);
        if(position=="left") {
            txt.classList.add('right');
            position="right";
        } else {
            txt.classList.remove('right');
            position="left";
        }
        txt.classList.add(transitions[counter]);
        document.getElementById('textHTML').innerHTML = "transition: transform 0.75s "+
        transitions[counter]+";";
        counter++;
        if (counter == transitions.length) counter=0;
        button.innerHTML=transitions[counter];
}