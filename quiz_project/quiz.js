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
    var newValue = questionValue;
    var downloadTimer = setInterval(function(){
        var correctValueElement = document.getElementsByClassName("correct-value")[0];
        var incorrectValueElement = document.getElementsByClassName("incorrect-value")[0];
        correctValueElement.innerHTML = newValue;
        incorrectValueElement.innerHTML = (questionValue - newValue) * -1;
        newValue -= 50;
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
    valueCountdown();
    var quizKeys = Object.keys(quizArray.quiz);
    var randCat = quizKeys[Math.floor(Math.random() * quizKeys.length)];
    var catKeys = Object.keys(quizArray.quiz[randCat]);
    var randQ = catKeys[Math.floor(Math.random() * catKeys.length)];
    question = quizArray.quiz[randCat][randQ]; // global so I can show answer in different function
    var qQuest = question.question;
    var qOpts = question.options;
    var strOptions = ""
    //var strOptions = "<ol><li>" + qOpts[0]; // assuming at least one option
    for (i = 0; i < qOpts.length; i++) {
    //    strOptions = strOptions + "</li><li>" + qOpts[i];
        var strOptions = strOptions +
            "<p>"+
                "<input type='radio' id='option"+i+"' name='radio-group'"+
                "onclick='getAnswer(this.id)'>"+
                "<label for='option"+i+"'>"+qOpts[i]+"</label>"+
            "</p>"
    }
    //strOptions += "</li></ol>";
    document.getElementsByClassName("correct-value")[0].innerHTML = questionValue;
    document.getElementById("question").innerHTML = qQuest;
    document.getElementById("options").innerHTML = strOptions;
    document.getElementById("answer").innerHTML = "";
}

function getAnswer(answer) {
    console.log(answer);
    var numAnswer = answer.slice(6);
    console.log (numAnswer);
    console.log (numAnswer *100);
    console.log (question.options[numAnswer]+ " : " + question.answer);
}