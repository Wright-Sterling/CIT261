var xmlhttp = new XMLHttpRequest();
var url = "quiz.json";
var supportLocalStorage = true;
var quizArray = "";
var question = "";
var runningScore = 500; // store and retrieve from local storage
var questionValue = 600; // will be updated to match difficulty
var newValue = 0;
var myButton = document.getElementsByClassName("question-button")[0];
var buttonText = ["Ready...", "Set...", "Go!"];
var buttonTexts = buttonText.length;
var textPointer = 0;
var downloadTimer = null;
var canvas =  document.querySelector("canvas");
var ctx = canvas.getContext("2d");

xmlhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        quizArray = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

if (typeof (Storage) === "undefined") {
    alert("Your browser does not support local storage. Your score will not persist between sessions.");
    supportLocalStorage = false;
}

if (supportLocalStorage) {
    runningScore = localStorage.runningScore;
    if (runningScore === "undefined") {
        runningScore = 0;
    }
 }


function updateRunningScore() {
    if (runningScore <0 || runningScore === null) runningScore = 0;
    document.querySelector("#running-score").innerHTML = runningScore;
        if (supportLocalStorage) {
            localStorage.setItem("runningScore", runningScore);
        }
}
updateRunningScore();

function showQuestion() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    myButton.innerHTML = buttonText[0];
    var y = 0;
    setTimeout(myTimeout1, 1500);
    setTimeout(myTimeout2, 3000);
    setTimeout(myTimeout3, 3500);
}

function myTimeout1() {
myButton.innerHTML = buttonText[1];
}
function myTimeout2() {
myButton.innerHTML = buttonText[2];
}
function myTimeout3() {
displayQuestion();
}

/* 
function nextButtonText(i) {
    myButton.innerHTML = buttonText[i];
}
*/

function valueCountdown() {
    newValue = questionValue;
    downloadTimer = setInterval(function(){
        var correctValueElement = document.getElementsByClassName("correct-value")[0];
        var incorrectValueElement = document.getElementsByClassName("incorrect-value")[0];
        newValue -= 50;
        correctValueElement.innerHTML = newValue;
        incorrectValueElement.innerHTML = (questionValue - newValue) * -1;
        if(newValue <= 0){ // testing here rather than at top on purpose
            clearInterval(downloadTimer);
            correctValueElement.innerHTML = 0;
            incorrectValueElement.innerHTML = questionValue * -1;
        }
    }, 1000);
}

function showAnswer() {
    var qAns = question.answer;
    document.getElementById("answer").innerHTML = qAns;
    var tempOne = document.getElementById("option1");
    var labelOne = tempOne.labels[0].innerHTML;
}

function countdownButton() {
    myButton.addEventListener("animationend", nextText);
    myButton.innerHTML = buttonText[textPointer];
    myButton.classList.add('fadeInOut');
}

function nextText() {
    console.log(textPointer);
    myButton.classList.remove('fadeInOut');
    textPointer++;
    if (textPointer < buttonTexts) {
        countdownButton();
    } else {
        displayQuestion();
    }
}

function displayQuestion() {
    var quizKeys = Object.keys(quizArray.quiz);
    var randCat = quizKeys[Math.floor(Math.random() * quizKeys.length)];
    var catKeys = Object.keys(quizArray.quiz[randCat]);
    var randQ = catKeys[Math.floor(Math.random() * catKeys.length)];
    question = quizArray.quiz[randCat][randQ]; // global so I can show answer in different function
    var qQuest = question.question;
    var qOpts = question.options;
    var strOptions = ""
    //var strOptions = "<ol><li>" + qOpts[0]; // assuming at least one option
    document.getElementById("category").innerHTML=question.category;
    valueCountdown();
    for (i = 0; i < qOpts.length; i++) {
        var strOptions = strOptions +
            "<p>"+
                "<input type='radio' id='option"+i+"' name='radio-group'"+
                "onclick='getAnswer(this.id)'>"+
                "<label for='option"+i+"'>"+qOpts[i]+"</label>"+
            "</p>"
    }
    document.querySelector("#options").className="show";
    document.getElementsByClassName("correct-value")[0].innerHTML = questionValue;
    document.getElementById("question").innerHTML = qQuest;
    document.getElementById("options").innerHTML = strOptions;
    document.getElementById("answer").innerHTML = "";
}

function getAnswer(answer) {
    clearInterval(downloadTimer);
    var numAnswer = answer.slice(6);
    var selectedButton = document.getElementById(answer);
    var selectedLabel = document.querySelector("label[for=option"+numAnswer+"]");
    var feedbackText = document.querySelector("#feedback");
    var optionsID = document.querySelector("#options");
    var style = window.getComputedStyle ? getComputedStyle(optionsID) : optionsID.curentStyle;
    var optionsArea = {
        marginLeft: parseInt(style.marginLeft) || 0,
        offsetTop: optionsID.offsetTop,
        offsetLeft: optionsID.offsetLeft,
        offsetHeight: optionsID.offsetHeight,
        offsetWidth: optionsID.offsetWidth
    }
    canvas.top = optionsArea.offsetTop+"px";
    canvas.style.left = optionsArea.offsetLeft+"px";
    canvas.height = optionsArea.offsetHeight;
    //canvas.width = optionsArea.offsetWidth;
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    if (question.options[numAnswer] == question.answer) {
        selectedLabel.style.color = "green";
//        feedbackText.innerHTML = "CORRECT!";
        ctx.fillStyle = "green";
        ctx.fillText("CORRECT!", canvas.width/2, canvas.height/2);
        runningScore += newValue;
    } else {
        selectedLabel.style.color = "red";
//        feedbackText.innerHTML = "INCORRECT!";
        ctx.fillStyle = "red";
        ctx.fillText("INCORRECT!", canvas.width/2, canvas.height/2);
        runningScore -= questionValue - newValue;
    }
    optionsID.className="hide";
    myButton.innerHTML="New Question";
    updateRunningScore();
}

function showDeveloper() {
    var sec=document.querySelector(".developer");
    if(sec.classList.contains("show")) {
        sec.classList.remove("show");
    } else {
        sec.classList.add("show");
    }
}

function showAbout() {
    var sec=document.querySelector(".about");
    if(sec.classList.contains("show")) {
        sec.classList.remove("show");
    } else {
        sec.classList.add("show");
    }
}

function showSettings() {
    var sec=document.querySelector(".settings");
    if(sec.classList.contains("show")) {
        sec.classList.remove("show");
    } else {
        sec.classList.add("show");
    }
}

function showRules() {
    var sec=document.querySelector(".rules");
    if(sec.classList.contains("show")) {
        sec.classList.remove("show");
    } else {
        sec.classList.add("show");
    }
}

function clearStorage() {
    localStorage.clear();
}