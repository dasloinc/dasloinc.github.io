

var currentUser = JSON.parse(localStorage.getItem( "currentScore" ));

console.log(currentUser.playerName)
console.log(currentUser.playerScore)

document.getElementById("display-current-score").innerHTML = "Name: " + currentUser.playerName + " ------- score: " + currentUser.playerScore;




//==================================== ADD ON =====================================
var highScoreList = $("#highScores");

//creates the ol list elements to display them

function loadHighScores(){

    let playerScore = JSON.parse(localStorage.getItem("highScores"));

    if (playerScore !== null || currentScores == ""){
        sortByKeyDesc(playerScore,"playerScore");
        currentScores.forEach(element => {
            var newLi = $("<li>")
            .text(element.playerName+": "+element.playerScore);

            highScoreList.append(newLi);
        });
    }else{
        highScoreList.empty();
    }
}
function init(){
    loadHighScores();
    $("#back").on("click",function(){
        open("./index.html");
    });

    $("#clear").on("click", function(){
        localStorage.removeItem("highScores");
        loadHighScores();

        console.log(loadHighScores)
    });
}

