$( document ).ready(function() {
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
 //console.log(username.value);
 saveScoreBtn.disable = !username.Value;
});

saveHighScore = e => {
    console.log('clicked the save button');
    e.preventDefault();
}
});

