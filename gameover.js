

function displayScore( form ) {

    // player sets item 
    var currentScore = returnCurrentScore();

    setCurrentScore(form.fname.value, currentScore);
    setHighScores(form.fname.value, currentScore);
}

function setCurrentScore(name, score){
    let currentScores = {
        playerName: name,
        playerScore: score
    };

    localStorage.setItem("currentScore",JSON.stringify(currentScores));
    // alert(currentScores);
}

function setHighScores(name, score){
    let currentScores = JSON.parse(localStorage.getItem("highScores"));
    
    if(currentScores === null || currentScores == ""){
        currentScores = [];
    }
    
    currentScores.push({
        playerName: name,
        playerScore: score
    });
    localStorage.setItem("highScores",JSON.stringify(currentScores));
}

function returnCurrentScore () {
    return localStorage.getItem( "userFinalScore" );
}

var currentScore = returnCurrentScore();
document.getElementById("player-score").innerHTML = currentScore;




