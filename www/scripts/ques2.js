// This is a JavaScript file

var points = 0;
var current; 

//function ScoreUp(){
//    current=10;
//    points= points + current;
//    document.getElementById("scoreCard").innerHTML = "Score:" + points;
//}
//function ScoreDown(){
//    current = 10;
//    points = points - current;
//    document.getElementById("scoreCard").innerHTML = "Score: " + points + " Points";
//}
function Navigation(pageName){
    window.location = pageName;
}
function Incorrect(){
    //grab the element we want to manipulate
    var wrongAnswer = document.getElementById("wrong1");
    wrongAnswer.style.color ="red";
    ScoreDown();
}

function Wrong(){
    var wrongAnswer = document.getElementById("wrong2");
    wrongAnswer.style.color ="red";
    ScoreDown();
}

function Cancel(){
    var wrongAnswer = document.getElementById("wrong3");
    wrongAnswer.style.color ="red";
    ScoreDown();
}

function Correct(){
    var rightAnswer = document.getElementById("right1");
    rightAnswer.style.color ="green";
    //ScoreUp();
    Navigation("ques3.html");
}