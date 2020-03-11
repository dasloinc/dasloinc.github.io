$( document ).ready(function() {
    const question = document.getElementById('question');
    const choices = Array.from(document.getElementsByClassName('choice-text'));
    console.log(choices)

    

    /*let currentQuestion = {}; //object
    let acceptAnswers = true; //let the player to wait a second before moving to the next Q.
    let score = 0;
     
    let counterCorrectAnswer = 0;
    let verifyAnswer = 0; //0 = false / 1 = true*/
    
    
    let questions = [];

    fetch(
        'https://opentdb.com/api.php?amount=15&category=22&difficulty=hard&type=multiple'
    ).then(response =>{
        return response.json();
    })
    .then (newQuestions => {
        console.log(newQuestions.results);
        questions = newQuestions.results.map(newQuestions => {
            const formattedQuestion = {
                question: newQuestions.question
            };
            
        const answerChoices = [...newQuestions.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 15) + 1;
        answerChoices.splice(formattedQuestion.answer -1, 
        0, 
        newQuestions.correct_answer);

        answerChoices.forEach((choice, index) => {
            formattedQuestion['choice' + (index +1)] = choice;
        });

        return formattedQuestion;
        });
        startGame();
    });
            
 
    const max_questions = 15;

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions]; //take each array and spread it between all questions
        //console.log(availableQuestions);
        getNewQuestion();
    };
    
    getNewQuestion = () => {

        if (availableQuestions.length === 0 || questionCounter > max_questions){
        //go to the last page
            //return window.location.assign('to a spesific page we chooose')
        }
        questionCounter++;
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
    
        //it will go through each choice - ref to each choice
        choices.forEach(choice => { 
            const number = choice.dataset['number']; //get th data from the data we set (body)
            choice.innerText = currentQuestion ['choice' + number];
        });
        //to make sure we won't get the same question a few times we set to have it only once 
        availableQuestions.splice(questionIndex, 1); 
        
        //allowing user to answer after everything was uploaded.
        acceptAnswers = true;
    };

        choices.forEach(choice => {
            choice.addEventListener('click', e => {
                if(!acceptAnswers)return;

                acceptAnswers = false;
                const selectedChoice = e.target
                const chosenAnswer = selectedChoice.dataset ['number'];
    
                //defines if the answer correct of incorrect
                const classToApply = chosenAnswer == currentQuestion.answer ? 'correct': 'incorrect';
                console.log(classToApply)
                //console.log(chosenAnswer == currentQuestion.answer);
                
                getNewQuestion();
            });
        })
    });
        /*const queryURL = "https://opentdb.com/api.php?amount=2&category=22&difficulty=hard&type=multiple";
        var results;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            console.log(response);
        });*/