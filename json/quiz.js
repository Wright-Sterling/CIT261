var xmlhttp = new XMLHttpRequest();
var url = "quiz.json";
var arr = "";
var question = "";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        arr = JSON.parse(this.responseText);
        //var arr = JSON.parse(this.responseText);
        //dumpQuiz(myArr);
        //showQuestion(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

/*
function dumpQuiz(arr) {
    var out = "";
    var i;
    var quizKeys = Object.keys(arr.quiz);
    for(i = 0; i < quizKeys.length; i++) {
    	out += quizKeys[i] + '<br>';
    }
    document.getElementById("qcats").innerHTML = out;
    document.getElementById("qcat0").innerHTML = quizKeys[0];
}
*/
    
function showQuestion() {
    var quizKeys = Object.keys(arr.quiz);
    var randCat = quizKeys[Math.floor(Math.random() * quizKeys.length)];
    var catKeys = Object.keys(arr.quiz[randCat]);
    var randQ = catKeys[Math.floor(Math.random() * catKeys.length)];
    question = arr.quiz[randCat][randQ]; // global
    var qQ = question.question;
    var qO = question.options;
    var strOptions = "<ol><li>" + qO[0]; // assuming at least one option
    for (i = 1; i < qO.length; i++) {
        strOptions = strOptions + "</li><li>" + qO[i];
    }
    strOptions += "</li></ol>";
    document.getElementById("question").innerHTML = qQ;
    document.getElementById("options").innerHTML = strOptions;
    document.getElementById("answer").innerHTML = "";
}

function showAnswer() {
    var qA = question.answer;
    document.getElementById("answer").innerHTML = qA;
}

/*    {
	  let value = arr.quiz[key];
	    out += value + '">' + '<br>';
	  //use key and value here
	});    
	document.getElementById("id01").innerHTML = out;*/

/*
function dumpQuiz(arr) {
    var out = JSON.stringify(arr, null, "    ");
    document.getElementById("id01").innerHTML = out;
}    
*/
    
/*
function dumpQuiz(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}
*/