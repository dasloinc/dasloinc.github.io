console.log( "highscore- testing");

var highScoreList = $("#highScores");

//creates the ol list elements to display them

function loadHighScores(){

    let currentScores = JSON.parse(localStorage.getItem("highScores"));

    if (currentScores !== null || currentScores == ""){
        sortByKeyDesc(currentScores,"playerScore");
        currentScores.forEach(element => {
            var newLi = $("<li>")
            .text(element.playerName+": "+element.playerScore);

            highScoreList.append(newLi);
        });
    }else{
        highScoreList.empty();
    }

    $("#loadhighscore").on("click",function(){
        open("./highscore.html");
    });
}
function init(){
    loadHighScores();
    $("#back").on("click",function(){
        open("./gamequestions.html");
    });

    $("#clear").on("click", function(){
        localStorage.removeItem("highScores");
        loadHighScores();
    });
}

//sorts an array of objects by the selected key (descending);
function sortByKeyDesc(array, key) {
    return array.sort(function(a, b) {
        let x = a[key];
        let y = b[key];        
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}
init();