/*
=====================================================================

=====================================================================
*/

  function renderTime ( setSeconds, boolMinutes, setMinutes ) {
    $( "#seconds" ).text( setSeconds );

    if ( boolMinutes ){
      setMinutes--;

      if ( setMinutes < 10 )
        setMinutes = "0" + setMinutes;

      $( "#minutes" ).text( setMinutes );
    }
  }

  function sleep(ms) {
    return new Promise( resolve => setTimeout( resolve, ms ) );
  }

  function startTimer () {
    var timer = 10;
    var currentMinute = 0; // 1 minute
    var subMinute = true;

    // Wait .5 second before it starts to countdown
    sleep( 500 ).then( () => {

      internal = setInterval( () => {
        timer--;
        if ( timer < 10 ){
          timer = "0" + timer;
        }

        renderTime( timer, subMinute, currentMinute );
        if (subMinute){
          currentMinute--;
          subMinute = false;
        }

        if ( parseInt ( timer ) === 0 ) {
          if ( parseInt ( currentMinute ) === 0 )
          {
            clearInterval( internal );
            sleep( 500 ).then( () => { keepScore(); } );
          }

          subMinute = true;
          timer = 60;
        }
      }, 1000)
      
    } );
  }