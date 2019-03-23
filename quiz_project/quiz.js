var xmlhttp = new XMLHttpRequest();
var url = "quiz.json";
var quizArray = "";
var question = "";
var questionValue = 600; // will be updated to match difficulty
var myButton = document.getElementsByClassName("question-button")[0];
var buttonText = ["Ready...", "Set...", "Go!"];
var buttonTexts = buttonText.length;
var textPointer = 0;

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        quizArray = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function showQuestion() {
    myButton.innerHTML = buttonText[0];
    var y = 0;
    setTimeout(myTimeout1, 2000);
    setTimeout(myTimeout2, 4000);
    setTimeout(myTimeout3, 4500);
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


function nextButtonText(i) {
    myButton.innerHTML = buttonText[i];
}

function valueCountdown() {
    var startValue = 500; // replace with value assigned by difficulty level
    var newValue = startValue;
    var downloadTimer = setInterval(function(){
        document.getElementById("question-value").innerHTML = newValue;
        newValue -= 50;
        if(newValue <= startValue*-1){
            clearInterval(downloadTimer);
            document.getElementById("question-value").innerHTML = "Finished"
        }
    }, 1000);
}

function showAnswer() {
    var qAns = question.answer;
    document.getElementById("answer").innerHTML = qAns;
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
    valueCountdown();
    var quizKeys = Object.keys(quizArray.quiz);
    var randCat = quizKeys[Math.floor(Math.random() * quizKeys.length)];
    var catKeys = Object.keys(quizArray.quiz[randCat]);
    var randQ = catKeys[Math.floor(Math.random() * catKeys.length)];
    question = quizArray.quiz[randCat][randQ]; // global so I can show answer in different function
    var qQuest = question.question;
    var qOpts = question.options;
    var strOptions = "<ol><li>" + qOpts[0]; // assuming at least one option
    for (i = 1; i < qOpts.length; i++) {
        strOptions = strOptions + "</li><li>" + qOpts[i];
    }
    strOptions += "</li></ol>";
    document.getElementById("question-value").innerHTML = questionValue;
    document.getElementById("question").innerHTML = qQuest;
    document.getElementById("options").innerHTML = strOptions;
    document.getElementById("answer").innerHTML = "";
}