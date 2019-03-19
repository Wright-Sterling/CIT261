var xmlhttp = new XMLHttpRequest();
var url = "quiz.json";
var quizArray = "";
var question = "";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        quizArray = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function showQuestion() {
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
    document.getElementById("question").innerHTML = qQuest;
    document.getElementById("options").innerHTML = strOptions;
    document.getElementById("answer").innerHTML = "";
}

function showAnswer() {
    var qAns = question.answer;
    document.getElementById("answer").innerHTML = qAns;
}