var numberOfWins = 0;
var numberOfLosses = 0;
var guessesLeft = 9;
var guessesSoFar = null;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var computerGuess = "";
var userGuess = "";
var userGuessesSoFar = [];

var guessWhich = document.getElementById("guess-which-text");
var userChoiceText = document.getElementById("user-choice-text");
var compChoiceText = document.getElementById("computer-choice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var yourGuessesText = document.getElementById("your-guesses-text");
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);



function update() {
    winsText.textContent = "Wins: " + numberOfWins;
    lossesText.textContent = "Losses: " + numberOfLosses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    yourGuessesText.textContent = "Your Guesses so far: " + userGuessesSoFar;
}

function resetGuess() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerGuess);
    userGuessesSoFar = [];
    guessesLeft = 9;
}

document.onkeyup = function (event) {

    var userGuess = event.key.toUpperCase();
    
    
    if (letters.indexOf(userGuess) != -1) { 
         userGuessesSoFar.push(userGuess);

        if (userGuess === computerGuess) {

            alert("You are correct! The correct letter was " + computerGuess);
            resetGuess();
            numberOfWins++;
            update();
        } else {
            guessesLeft--;
            update();

        }

        if (guessesLeft === 0) {
            alert("Sorry! YOU LOSE! The correct letter was " + computerGuess)
            resetGuess();
            numberOfLosses++;
            update();
        }


    }


}
