
/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *
 */
var guessTheNumber = function () {

     //Add event listener to start the game when the user presses the start button
     var startButton = document.getElementById( 'startButton' );

          function displayLinkInfo( event ) {
            event.preventDefault();
            console.log( startButton );

            // When the button is clicked, run the following functions
            beginGame();
            insertInstructions();


          }

     startButton.addEventListener( 'click', displayLinkInfo, false );

};

guessTheNumber();




// Clears the Welcome text and starts the game
var beginGame = function() {

     var  pageTitle = document.getElementById( 'pageTitle' ),
          startButton = document.getElementById( 'startButton' );

     pageTitle.innerHTML = 'Now Playing';
     startButton.parentNode.removeChild(startButton);

}




// Inserts the text of instructions and reveal the guessing form
var insertInstructions = function() {

      var      primary = document.getElementsByClassName( 'primary' )[0],
               form = document.getElementById( 'number-input' ),
               p = document.createElement("p"),
               instructionsText = 'To play, enter a number between 0 and 10:';

          form.classList.toggle('hidden');

          primary.appendChild(p);
          p.innerHTML = instructionsText;

      console.log(primary);

}
