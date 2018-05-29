/**
 * A JS Practice App by Chris Liu-Beers for Code the Dream (homework)
 *
 *
 * Main app file.  Runs all components.
 *
 */

// Global variables for running the game
var  totalGuesses = 10, // Set the number of guesses here
     form = document.getElementById( 'number-input' ),
     guessesRemaining = totalGuesses - 1,
     possibleAnswerMin = 0, // Set the min range of possible answers here
     possibleAnswerMax = 100, // Set the max range of possible answers here
     answer = getRandomInt(0, possibleAnswerMax + 1);
     console.log( 'Answer = ' + answer);

// Function to get a random number in range
function getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


// Check if the answer is correct and return a text string
var checkAnswer = function( guess ) {

     // console.log( 'Answer in checkAnswer function = ' + answer );
     // console.log( 'Guess in checkAnswer function = ' + guess );

     if( guess == answer ) {
          return 'correct';
     } else if ( guess > answer ) {
          return 'tooHigh';
     } else {
          return 'tooLow';
     }

};


// Doesn't Work Yet; trying to calculate and display the odds of guessing correctly on every guess
// Equation not working, needs some math help
function checkPercentage( guess, prevGuess ) {

     var percentage;

     if( guess >= prevGuess ) {
          percentage = ( 1 / (guess - prevGuess) ) * 100;
     } else {
          percentage = ( 1 / (prevGuess - guess) ) * 100;
     }

     return percentage.toFixed(0);

}


// Wrap up once the game is over
var gameIsNowOver = function() {

     var  secondary = document.getElementsByClassName( 'secondary' )[0],
          pageTitle = document.getElementById( 'pageTitle' ),
          p = document.createElement("p"),
          gameOverText = 'Your game is now over. Would you like to play again?',
          button = document.createElement('button'),
          buttonText = 'Play Again';

     form.classList.toggle('hidden');
     pageTitle.innerHTML = 'Game Over';

     secondary.appendChild(p);
     p.innerHTML = gameOverText;

     secondary.appendChild(button);
     button.innerHTML = buttonText;
     button.setAttribute("id", "start-over");

     //Add event listener to start the game when the user presses the start button
     var startButton = document.getElementById( 'start-over' );

          function startOver( event ) {

            event.preventDefault();
            window.location.reload(true);

       }

       startButton.addEventListener( 'click', startOver, false );


};



//Add event listener to start the game when the user presses the start button
var guessTheNumber = function() {

     var startButton = document.getElementById( 'startButton' );

          function displayLinkInfo( event ) {

            event.preventDefault();

            // When the button is clicked, run the following functions
            setupGame();
            activePlay();

          }

     startButton.addEventListener( 'click', displayLinkInfo, false );

};






// Clears the Welcome text, adds instructions, and starts the game
var setupGame = function() {

     var       pageTitle = document.getElementById( 'pageTitle' ),
               startButton = document.getElementById( 'startButton' ),
               primary = document.getElementsByClassName( 'primary' )[0],
               form = document.getElementById( 'number-input' ),
               p = document.createElement("p"),
               instructionsText = 'To play, enter a number between ' + possibleAnswerMin + ' and ' + possibleAnswerMax + '.',
               guessesText = '<br/>You will have a total of ' + totalGuesses + ' guesses.';

     pageTitle.innerHTML = 'Now Playing';
     startButton.parentNode.removeChild(startButton);

     form.classList.toggle('hidden');

     primary.appendChild(p);
     p.innerHTML = instructionsText + guessesText;

};


//Add event listener to start the game when the user presses the start button
var activePlay = function() {

     var  form = document.getElementById( 'number-input' ),
          prevGuess = document.getElementById('number').value;

     // Runs the game as the user submits numbers into the form
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

               guessesRemaining--;

               // Fix the grammar on "guesses" if only 1 left
               if( guessesRemaining == 0 ) {
                    remainingStatement = ' You have 1 guess remaining.';
               }


               // Check guesses left
               if( guessesRemaining < 0 ) {
                    statement = 'Your guess is: ' + guess + '. You are out of guesses.';
                    gameIsNowOver();
               }

           //var percentage = checkPercentage( guess, prevGuess );


           //Check Answer
           if( check === 'correct' ) {

                winningStatement = ' You are correct! 🎉';
                remainingStatement = '';
                form.removeEventListener( 'submit', submitGuess, false );
                gameIsNowOver();

           } else if( check === 'tooHigh'){

                //guessStatement += '<span class="percentage">' + percentage + '%</span>';
                winningStatement = ' Your guess is too high.';

           } else if( check === 'tooLow'){

                //guessStatement += '<span class="percentage">' + percentage + '%</span>';
                winningStatement = ' Your guess is too low.';

           }

           document.getElementById('number').value = '';
           primary.appendChild(p);
           p.innerHTML = guessStatement + remainingStatement + winningStatement;


     }


     form.addEventListener( 'submit', submitGuess, false );


};


// Run the app - Action!
guessTheNumber();
