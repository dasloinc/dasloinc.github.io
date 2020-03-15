

function displayScore( form ) {

    // player sets item 
    var currentScore = localStorage.getItem( "userFinalScore" );

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