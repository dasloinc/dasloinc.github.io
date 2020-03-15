

function displayScore( form ) {

    // player sets item 
    var currentScore = returnCurrentScore();

    setCurrentScore(form.fname.value, currentScore);
}

function setCurrentScore(fname, score){
    let currentScores = {
        playerName: fname,
        playerScore: score
    };

    localStorage.setItem("currentScore",JSON.stringify(currentScores));
    alert(currentScores);
}

function returnCurrentScore () {
    return localStorage.getItem( "userFinalScore" );
}

var currentScore = returnCurrentScore();
document.getElementById("player-score").innerHTML = currentScore;




