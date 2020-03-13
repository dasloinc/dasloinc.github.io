$( document ).ready( function() {

/* =============================================================================== */
/* Timer Functions:                                                                */
/* =============================================================================== */
  var timer;
  function renderTime ( setSeconds, /*boolMinutes, setMinutes*/ ) {
    $( "#seconds" ).text( setSeconds );
  }

  function sleep(ms) {
    return new Promise( resolve => setTimeout( resolve, ms ) );
  }

  function startTimer ( ) {
    timer = 10;

    // Wait .5 second before it starts to countdown
    sleep( 500 ).then( () => {

      internal = setInterval( () => {
        timer--;
        if ( timer < 10 ){
          timer = "0" + timer;
        }

        renderTime( timer);

        if ( parseInt ( timer ) === 0 ) {
          clearInterval( internal );
        }
      }, 1000)
      
    } );
  }
/* =============================================================================== */


/* =============================================================================== */
/* Questions and Answers Functions:                                                */
/* =============================================================================== */
  let arrayQuestionsAnswers = [];
  const MAX_QUESTIONS       = 15;
  let questionPosition; // Current Question Position
  let counterScore;     // Counter Score

  fetch(
    'https://opentdb.com/api.php?amount=15&category=22&difficulty=hard&type=multiple'
  ).then( response => {
    return response.json();
  }).then ( triviaQ_A => {
    arrayQuestionsAnswers = triviaQ_A.results;
  });

  function startGame() {
    questionPosition = 0; // Set Current Question Position
    counterScore     = 0; // Set Counter Score 

    // Set new size to the GRID
    $( ".grid" ).attr( "style", "height: 680px" );
    
    getNewQuestion();
  }

  function getNewQuestion() {
    let incorrectPosition = 0;
    let correctPosition   = Math.floor( Math.random() * 4 ); // Set the position where is going to be placed the Correct Answer

    // Keep in Localstorage the position of the CORRECT Answer
    localStorage.setItem( "correctAnswerPosition", correctPosition ); 

    $( "#question" ).empty();
    $( "#question" ).append( arrayQuestionsAnswers[ questionPosition ].question );
    for (let index = 0; index < 4; index++) {
      if ( correctPosition === index )
        $( "#btn" + index ).text( arrayQuestionsAnswers[ questionPosition ].correct_answer );
      else {
        $( "#btn" + index ).text( arrayQuestionsAnswers[ questionPosition ].incorrect_answers[ incorrectPosition ] );
        incorrectPosition++;
      }
    }
    questionPosition++;
  }
/* =============================================================================== */


/* =============================================================================== */
/* Display Card Functions:                                                         */
/* =============================================================================== */
//Object with ALL Ccorrect Answers:
var triviaCorrectAnswers = {
  [ "Sudbury, Ontario" ]               : { geoCode: "CAN",              index: "86"}, // name
  [ "Inuktitut" ]                      : { geoCode: "CAN",              index: "86"}, // name
  [ "O Canada" ]                       : { geoCode: "CAN",              index: "86"}, // name
  [ "Niagara Falls" ]                  : { geoCode: "CAN",              index: "86"}, // name
  [ "Canadian Shield" ]                : { geoCode: "CAN",              index: "86"}, // name
  [ "Mount Logan" ]                    : { geoCode: "CAN",              index: "86"}, // name
  [ "Baffin Island" ]                  : { geoCode: "CAN",              index: "86"}, // name
  [ "Grand Banks" ]                    : { geoCode: "CAN",              index: "86"}, // name
  [ "Paradise" ]                       : { geoCode: "USA",              index: "2"},
  [ "1848" ]                           : { geoCode: "USA",              index: "2"},
  [ "Rosemead" ]                       : { geoCode: "USA",              index: "2"},
  [ "Tyler" ]                          : { geoCode: "USA",              index: "2"},
  [ "National Baseball Hall of Fame" ] : { geoCode: "USA",              index: "2"},
  [ "Madison" ]                        : { geoCode: "USA",              index: "2"},
  [ "Finland" ]                        : { geoCode: "FIN",              index: "2"},
  [ "Suomi" ]                          : { geoCode: "FIN",              index: "2"},
  [ "December 6th" ]                   : { geoCode: "FIN",              index: "2"},
  [ "Islamabad" ]                      : { geoCode: "PAK",              index: "2"},
  [ "Abruzzi Spur" ]                   : { geoCode: "PAK",              index: "2"},
  [ "Crown" ]                          : { geoCode: "TJK",              index: "2"},
  [ "49" ]                             : { geoCode: "GBR",              index: "2"},
  [ "Edinburgh" ]                      : { geoCode: "GBR",              index: "2"},
  [ "36,600" ]                         : { geoCode: "DEU",              index: "1"},
  [ "Schweizerische Bundesbahnen" ]    : { geoCode: "DEU",              index: "1"},
  [ "Albania" ]                        : { geoCode: "ALB",              index: "86"}, // name
  [ "Austria" ]                        : { geoCode: "AUT",              index: "86"}, // name
  [ "Barbados" ]                       : { geoCode: "BRB",              index: "86"}, // name
  [ "Hamilton" ]                       : { geoCode: "BMU",              index: "2"},
  [ "Yangtze" ]                        : { geoCode: "CHN",              index: "4"},
  [ "Estonia" ]                        : { geoCode: "EST",              index: "2"},
  [ "India" ]                          : { geoCode: "IND",              index: "2"}, 
  [ "Indonesia" ]                      : { geoCode: "IDN",              index: "2"},
  [ "Dead Sea" ]                       : { geoCode: "ISR",              index: "1"},
  [ "4" ]                              : { geoCode: "KGZ",              index: "2"},
  [ "Lesotho" ]                        : { geoCode: "LSO",              index: "1"}, 
  [ "Kaunas" ]                         : { geoCode: "LTU",              index: "1"}, 
  [ "Port Louis" ]                     : { geoCode: "MUS",              index: "1"}, 
  [ "Amsterdam" ]                      : { geoCode: "NLD",              index: "1"}, 
  [ "New Zealand" ]                    : { geoCode: "NZL",              index: "86"}, // name
  [ "North Korea" ]                    : { geoCode: "PRK",              index: "1"}, 
  [ "Isthmus of Panama" ]              : { geoCode: "PAN",              index: "1"}, 
  [ "Colombo" ]                        : { geoCode: "LKA",              index: "2"},
  [ "Suriname" ]                       : { geoCode: "SUR",              index: "3"}, 
  [ "Anglesey" ]                       : { geoCode: "Isle of Anglesey", index: "99"}, // Doesn't Exists in Database!!
  [ "0.44km^2" ]                       : { geoCode: "VAT",              index: "2"},
  [ "Lake Superior" ]                  : { geoCode: "USA,CAN",          index: "2,86"},
  [ "Afghanistan and Pakistan" ]       : { geoCode: "AFG,PAK",          index: "86,2"}, // name
  [ "Lishana Deni" ]                   : { geoCode: "TUR,IRQ,ISR",      index: "2,1,1"},
}

var currentPage   = 0;
var moreCountries = false;

const FLAG_ANGLESEY = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Anglesey.svg/1200px-Flag_of_Anglesey.svg.png";


$( document ).on( "click", "#extra-button", goToNextCountry);
function goToNextCountry() {
  // event.preventDefault() prevents submit button from trying to send a form.
  // Using a submit button instead of a regular button allows the user to hit
  // "Enter" instead of clicking the button if desired
  event.preventDefault();

  // Grab the text the user types into the input field
  var localStorageInput = localStorage.getItem( "correctInput" );

  // Check if the user typed something
  if (localStorageInput.length > 0) {
      // Search for the country
      getResponseRestCountriesAPI ( getCountriesFromObject ( localStorageInput ), ++currentPage );
  }
  else {
      console.log ( "Something went wrong: Answer not found." );
  }
}

function getUserAnswer() {
  // event.preventDefault() prevents submit button from trying to send a form.
  // Using a submit button instead of a regular button allows the user to hit
  // "Enter" instead of clicking the button if desired
  event.preventDefault();

  // Grab indicator from localStorage
  var isAnswerCorrect = localStorage.getItem( "verifyCorrectAnswer" );

  if ( isAnswerCorrect === "0" ) {
      // Grab the correct answer from localStorage
      var localStorageInput = localStorage.getItem( "correctInput" );

      if ( localStorageInput in triviaCorrectAnswers ) {
        getResponseRestCountriesAPI ( getCountriesFromObject ( localStorageInput ), 0 );
      }
      else {
        createCardIncorrectAnswer( "2" ); // Correct Answer but NOT Found!!
      }
  }
  //Incorrect Answer
  else {
      createCardIncorrectAnswer( isAnswerCorrect );
  }
}

function getCountriesFromObject ( inputCorrectAnswer ) {
      return triviaCorrectAnswers[ inputCorrectAnswer ];
}

function getResponseRestCountriesAPI ( countryFromAnswer, indexFromAnswer ) {
  // =================================================================
  // AJAX Function 
  //   .REST COUNTRIES API - Get: Capital, Subregion, Population, Latitude and Longitude, Currency, and Flag.
  //   .Get a static Map
  // =================================================================

  var geoCodeArr = countryFromAnswer.geoCode.split( "," );
  var indexArr   = countryFromAnswer.index.split( "," );

  if ( indexFromAnswer >= geoCodeArr.length )
      indexFromAnswer = 0;
  // Check for two or more possible answers
  moreCountries = false;
  if ( geoCodeArr.length > 1 ) {
      moreCountries = true;
      currentPage   = indexFromAnswer;
  }
  let geoCodeObj = geoCodeArr[ indexFromAnswer ]; 
  let indexObj   = indexArr[ indexFromAnswer ]; 

  // Get SPECIFIC countries and informations:
  const queryURL  = "https://restcountries.eu/rest/v2/alpha?codes=" + /*countryFromAnswer.geoCode*/ geoCodeObj + ";no;ee/?fields=name;altSpellings;capital;subregion;population;latlng;currencies;flag;";
  $.ajax({
      url: queryURL,
      type: "GET",
      success: function(response) {
          createCardCorrectAnswer( geoCodeObj, indexObj, response, moreCountries, indexFromAnswer, geoCodeArr.length );
      }
  });
}

function createCardCorrectAnswer(objGeoCode, objIndex, responseAjax, boolMoreCountries, iPage, maxPage) {
  // Clear all information on Card
  emptyCardLayout();

  let capitalStr, subregionStr, populationStr, currencynameStr;
  let googleMaps, cardRightButtonA, cardRightDetails;

  let cardLeft  = $( ".card_left" );
  let cardRight = $( ".card_right" );
  let h1Right   = $( "<h1>" ).attr( "class", "answerStatus" ).text( "Correct!!" );
  let h2Right   = $( "<h2>" ).attr( "class", "countryName");
  let cardRightDetails_Ul = $( "<ul>" );
  
  if ( /*myObject.index != 99*/ objIndex != 99 ) {
      cardLeft.append( $( "<img>").attr( "src", responseAjax[ 0 ].flag ).attr( "alt", "Country Flag" ) );

      h2Right.text( getNameOfCountry( objIndex, responseAjax ) );

      capitalStr      = $( "<li>" ).text( "Capital:    " + responseAjax[ 0 ].capital );
      subregionStr    = $( "<li>" ).text( "Sub-Region: " + responseAjax[ 0 ].subregion );
      populationStr   = $( "<li>" ).text( "Population: " + formatNumber( responseAjax[ 0 ].population ) );
      currencynameStr = $( "<li>" ).text( "Currency:   " + responseAjax[ 0 ].currencies[ 0 ].name );
      // Append the newly created unordered list
      cardRightDetails_Ul.append( capitalStr, subregionStr, populationStr, currencynameStr );

      // Get static map of the specific country
      googleMaps = "https://www.google.com/maps/place/" + getNameOfCountry( /*myObject*/ objIndex, responseAjax );
      cardRightButtonA = $( "<div>" ).attr( "class", "card_right__button" ).append( $( "<a>" ).attr( "href", googleMaps ).attr( "class", "viewmap" ).attr( "title", "Map" ).attr( "target", "_blank" ).text( "VIEW MAP" ) );
      cardRightDetails = $( "<div>" ).attr( "class", "card_right__details" ).append( cardRightDetails_Ul, cardRightButtonA );
  }
  else {
      cardLeft.append( $( "<img>").attr( "src", FLAG_ANGLESEY ).attr( "alt", "Country Flag" ) );

      h2Right.text( /*myObject.geoCode*/ objGeoCode );

      capitalStr      = $( "<li>" ).text( "Capital: Llangefni" );
      subregionStr    = $( "<li>" ).text( "Sub-Region: United Kingdom" );
      populationStr   = $( "<li>" ).text( "Population: " + formatNumber( 69961 ) );
      currencynameStr = $( "<li>" ).text( "Currency: Ynys Môn" );
      // Append the newly created unordered list
      cardRightDetails_Ul.append( capitalStr, subregionStr, populationStr, currencynameStr );

      googleMaps = "https://www.google.com/maps/place/" + /*myObject.geoCode*/ objGeoCode;
      cardRightButtonA = $( "<div>" ).attr( "class", "card_right__button" ).append( $( "<a>" ).attr( "href", googleMaps ).attr( "class", "viewmap" ).attr( "title", "Map" ).attr( "target", "_blank" ).text( "VIEW MAP" ) );
      cardRightDetails = $( "<div>" ).attr( "class", "card_right__details" ).append( cardRightDetails_Ul, cardRightButtonA );
  }
  cardRight.append( h1Right, h2Right, cardRightDetails );

  // Create button to Next Page
  if ( boolMoreCountries ) {

      var xtraRightButton_1 = $( "<div>" ).attr( "class", "button-wrapper" );
      var xtraRightButton_2 = $( "<div>" ).attr( "class", "layer" );
      var xtraRightButton_3 = $( "<button>" ).attr( "id", "extra-button" ).attr( "class", "extra-next-button fas fa-angle-double-" + ( iPage < maxPage - 1 ? "right" : "left" ) );

      xtraRightButton_1.append( xtraRightButton_2.append( xtraRightButton_3 ) );

      cardRight.append( xtraRightButton_1 );
  }
}

function createCardIncorrectAnswer( incorrectAnswer ) {
  // Clear all information on Card
  emptyCardLayout();

  let h1Right = $( "<h1>" ).attr( "class", "answerStatus" ).text( ( incorrectAnswer === "1" ) ? "Oops... I don't believe that's the right answer!!" : "Oops... I couldn't find your answer in my database, that's embarrassing!" );
  
  $( ".card_left" ).append( $( "<img>").attr( "src", "./images/einstein-charts.png" ).attr( "alt", "Einstein Oops" ) );

  $( ".card_right" ).append( h1Right );
}

function emptyCardLayout() {
  $( ".card_left" ).empty();
  $( ".card_right" ).empty();
}

function getNameOfCountry ( mObj_index, rAjax ) {
  // 86 = name
  // 99 = Doens't exists
  // others = index
  return ( mObj_index === "86" ? rAjax[ 0 ].name : rAjax[ 0 ].altSpellings[ mObj_index ] );
}

function formatNumber(num) {
  return num.toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1,' )
}
/* =============================================================================== */


/* =============================================================================== */
/* Main Functions:                                                                 */
/* =============================================================================== */
  function createNewQuestionAndAnswers() {
    $( "#quiz" ).empty();
    $( "#einstein-next-question-button" ).empty();

    let tagDiv = $( "<div>" ).attr( "class", "buttons" );
    let tagButton1 = $( "<button>" ).attr( "id", "btn0" ).attr( "class", "choice-text" ).attr( "data-number", "0" );
    let tagButton2 = $( "<button>" ).attr( "id", "btn1" ).attr( "class", "choice-text" ).attr( "data-number", "1" );
    let tagButton3 = $( "<button>" ).attr( "id", "btn2" ).attr( "class", "choice-text" ).attr( "data-number", "2" );
    let tagButton4 = $( "<button>" ).attr( "id", "btn3" ).attr( "class", "choice-text" ).attr( "data-number", "3" );
    let tagHR = $( "<hr>" );
    //let tagP = $( "<p>" ).attr( "id", "questionCounter" );
    //let tagBr = $( "<br>" );

    //Card
    let cardDiv      = $( "<div>" ).attr( "class", "card" );
    let cardDivLeft  = $( "<div>" ).attr( "class", "card_left" );
    let cardDivRight = $( "<div>" ).attr( "class", "card_right" );
    cardDiv.append( cardDivLeft, cardDivRight );

    let entireDiv = tagDiv.append( tagButton1, tagButton2, tagButton3, tagButton4, tagHR, /*tagP, tagBr,*/ cardDiv);
    $( "#quiz" ).append( tagH1, entireDiv );

    let contentButton = $( "<button>" ).attr( "id", "einstein-next-button" ).attr( "type","submit" ).attr( "style","border: 0; background: transparent" );
    //let contentA = $( "<a>" ).attr( "href", "highscore.html" );
    let contentImg = $( "<img>").attr( "id", "next-question-button" ).attr( "src", "./images/einstein-nextbutton.png" ).attr( "alt", "submit" );

    //contentA.append( contentImg );
    //contentButton.append( contentA );
    contentButton.append( contentImg );
    $("#einstein-next-question-button").append( contentButton );

    $(".number").text("10");
  }

  $( document ).on( "click", "#einstein-start-game", startTriviaGame);
  function startTriviaGame() {

    // Create the quiz here!! Don't forget to create the next Button
    createNewQuestionAndAnswers();
    startGame();
    startTimer( );
  }

  $( document ).on( "click", ".choice-text", verifyUserAnswer);
  function verifyUserAnswer() {
    // Forces Timer to Stop
    $(".number").text("00");
    renderTime("00");
    timer = 1;

    // Get the answer clicked by user
    localStorage.setItem('correctInput', $( this ).get(0).innerHTML); 

    // Verify if the answer is CORRECT
    if ( localStorage.getItem( "correctAnswerPosition" ) === $( this ).get(0).dataset.number ) {
      counterScore++;
      localStorage.setItem( "verifyCorrectAnswer", "0" ); // Correct Answer
      localStorage.setItem( "userFinalScore", counterScore ); // Keep the Score
    }
    else
      localStorage.setItem( "verifyCorrectAnswer", "1" ); // Incorrect Answer

    getUserAnswer();
  }

  $( document ).on( "click", "#next-question-button", goToNextQuestion);
  function goToNextQuestion() {
    if ( questionPosition < MAX_QUESTIONS ) {
      createNewQuestionAndAnswers();
      getNewQuestion();
      startTimer( );
    }
    else {
      window.location.href='gameover.html';
    }
  }
  

  let tagH1     = $( "<h1>" ).attr( "id", "question" ).text( "Let's get started!!" );
  let tagButton = $( "<button>" ).attr( "id", "einstein-start-game" );
  $( "#quiz" ).append( tagH1, tagButton );
  
})