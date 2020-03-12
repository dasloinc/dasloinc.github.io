$( document ).ready( function() {
console.log("testing - questionsjs file");

const questions = [
    {
      title: "How to write an IF statement in JavaScript?",
      choices: ["if i = 5","if(i == 5)","if i = 5 then","if i == 5 then"],
      answer: "if(i == 5)"
    },
    {
      title: "How do you write \"Hello World\" in an alert box?",
      choices: ["msgBox(\"Hello World\");","msg(\"Hello World\");","alert(\"Hello World\");","alertBox(\"Hello World\");"],
      answer: "alert(\"Hello World\");"
    }
  
   
  ];

  $( document ).on( "click", "#einstein-start-game", startTriviaGame);
  function startTriviaGame() {
    // console.log("Start Game Image Clicked!!");
    $( "#quiz" ).empty();

    // Create the quiz here!! Don't forget to create the next Button
    createNewQuestionAndAnswers();
  }

  function createNewQuestionAndAnswers() {
    console.log("Here we are going to put all questions one by one...and the next button!!");
    let tagH1 = $( "<h1>" ).attr( "id", "question" );
    let tagDiv = $( "<div>" ).attr( "class", "buttons" );
    let tagButton1 = $( "<button>" ).attr( "id", "btn0" ).attr( "class", "choice-text" ).attr( "data-number", "1" );
    let tagButton2 = $( "<button>" ).attr( "id", "btn1" ).attr( "class", "choice-text" ).attr( "data-number", "2" );
    let tagButton3 = $( "<button>" ).attr( "id", "btn2" ).attr( "class", "choice-text" ).attr( "data-number", "3" );
    let tagButton4 = $( "<button>" ).attr( "id", "btn3" ).attr( "class", "choice-text" ).attr( "data-number", "4" );
    let tagHR = $( "<hr>" );
    let tagP = $( "<p>" ).attr( "id", "questionCounter" );
    let tagBr = $( "<br>" );

    let entireDiv = tagDiv.append( tagButton1, tagButton2, tagButton3, tagButton4, tagHR, tagP, tagBr );
    $( "#quiz" ).append( tagH1, entireDiv );

    let contentButton = $( "<button>" ).attr( "id", "einstein-next-button" ).attr( "type","submit" ).attr( "style","border: 0; background: transparent" );
    let contentA = $( "<a>" ).attr( "href", "highscore.html" );
    let contentImg = $( "<img>").attr( "id", "next-question-button" ).attr( "src", "./images/einstein-nextbutton.png" ).attr( "alt", "submit" );

    contentA.append( contentImg );
    contentButton.append( contentA );
    $("#einstein-next-question-button").append( contentButton );

    // <h1 id="question"></h1>
		// 				<div class="buttons">
		// 					<button id="btn0" class="choice-text" data-number="1">Calgary, Alberta<span id="choice0"></span></button>
		// 					<button id="btn1" class="choice-text" data-number="2">Sudbury, Ontario<span id="choice0"></span></button>
		// 					<button id="btn2" class="choice-text" data-number="3">Halifax, Nova Scotia<span id="choice2"></span></button>
		// 					<button id="btn3" class="choice-text" data-number="4">Victoria, British Columbia<span id="choice3"></span></button>
		// 					<hr>
		// 					<p id="progress">Question x of 15</p>
		// 					Correct answer  =  Display Facts of country 
		// 					<br>
		// 					Incorrect answer = Display correct Answer
    // 				</div>
    
  //   <div class="main-content">
	// 	<!-- <button id="einstein-next-button" type="submit" style="border: 0; background: transparent"><a href="highscore.html">
	// 	<img id="next-question-button" src="./images/einstein-nextbutton.png" alt="submit">
	// 	</button></a> -->
	// </div>
  }

  let tagH1     = $( "<h1>" ).attr( "id", "question" ).text( "Let's get started!!" );
  let tagButton = $( "<button>" ).attr( "id", "einstein-start-game" );
  $( "#quiz" ).append( tagH1, tagButton );

})