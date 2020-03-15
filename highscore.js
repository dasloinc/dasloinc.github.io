

var currentUser = JSON.parse(localStorage.getItem( "currentScore" ));

// console.log(currentUser.playerName)
// console.log(currentUser.playerScore)

// document.getElementById("display-current-score").innerHTML = "Name: " + currentUser.playerName + "  " + currentUser.playerScore;

//ADD ON

var highScoreList = $("#highScores");

//creates the ol list elements to display them

function loadHighScores(){

    let currentScores = JSON.parse(localStorage.getItem("highScores"));

    if (currentScores !== null) {
        sortByKeyDesc(currentScores,"playerScore");
        currentScores.forEach(element => {
            var newLi = $("<li>")
            .text(element.playerName+": "+element.playerScore);

            highScoreList.append(newLi);
        });
    }else{
        highScoreList.empty();
    }
 
}

//sorts an array of objects by the selected key (descending);
function sortByKeyDesc(array, key) {
    return array.sort(function(a, b) {
        let x = a[key];
        let y = b[key];        
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}
loadHighScores();


// localStorage.removeItem("highScores");