
/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *
 */


function getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let answer = getRandomInt(0, 11);



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






// Clears the Welcome text and starts the game
var beginGame = function() {

     var  pageTitle = document.getElementById( 'pageTitle' ),
          startButton = document.getElementById( 'startButton' );

     pageTitle.innerHTML = 'Now Playing';
     startButton.parentNode.removeChild(startButton);

};




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

};







//Add event listener to start the game when the user presses the start button
var activePlay = function() {

     //      function displayLinkInfo( event ) {
     //
     //        event.preventDefault();
     //
     //
     //      }
     //
     // startButton.addEventListener( 'click', displayLinkInfo, false );

     var  form = document.getElementById( 'number-input' ),
          field = form[0],
          guess = form[0].value;


     console.log( field );
     console.log( guess );


}












// Action!

guessTheNumber();
activePlay();
