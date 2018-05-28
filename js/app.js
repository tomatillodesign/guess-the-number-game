
/**
 * Main app file.  Initializes app components.
 */


/**
 * The main app object.
 *
 */

var  guessesRemaining = 5,
     gameOver = false;


function getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let answer = getRandomInt(0, 11);
console.log( 'Answer = ' + answer);


var checkAnswer = function( guess ) {

     console.log( 'Answer in checkAnswer function = ' + answer );
     console.log( 'Guess in checkAnswer function = ' + guess );

     if( guess == answer ) {
          return 'correct';
     } else if ( guess > answer ) {
          return 'tooHigh';
     } else {
          return 'tooLow';
     }

};




var guessTheNumber = function() {

     //Add event listener to start the game when the user presses the start button
     var startButton = document.getElementById( 'startButton' );

          function displayLinkInfo( event ) {
            event.preventDefault();
            console.log( startButton );

            // When the button is clicked, run the following functions
            beginGame();
            insertInstructions();
            activePlay();

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


     var  form = document.getElementById( 'number-input' );


     function submitGuess( event ) {

          event.preventDefault();

          var  form = document.getElementById( 'number-input' ),
               field = form[0],
               guess = document.getElementById('number').value,
               guessStatement = 'Your guess is: ' + guess + '.',
               remainingStatement = ' You have ' + guessesRemaining + ' guesses remaining.',
               winningStatement,
               primary = document.getElementsByClassName( 'primary' )[0],
               p = document.createElement("p"),
               check = checkAnswer( guess );


            // Check guesses left
            guessesRemaining--;
                if( guessesRemaining < 0 ) {
                     statement = 'Your guess is: ' + guess + '. You are out of guesses.';
                     gameOver = true;
                }

           //Check Answer
           if( check === 'correct' ) {
                winningStatement = ' You are correct! 🎉 🎉 🎉';
                remainingStatement = '';
           } else if( check === 'tooHigh'){
                winningStatement = ' Your guess is too high.';
           } else if( check === 'tooLow'){
                winningStatement = ' Your guess is too low.';
           }



           document.getElementById('number').value = '';
           primary.appendChild(p);
           p.innerHTML = guessStatement + remainingStatement + winningStatement;

           if( gameOver === true ) {
                alert('Your game is over!');
           }


     }


     form.addEventListener( 'submit', submitGuess, false );



};








// Action!

guessTheNumber();
