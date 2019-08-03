var numberOfWins = 0;
var numberOfLosses = 0;
var guessesLeft = 9;
var guessesSoFar = null;
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var computerGuess = "";
var userGuess = "";
var userGuessesSoFar = [];

var guessWhich = document.getElementById ("guess-which-text");
var userChoiceText = document.getElementById("user-choice-text");
var compChoiceText = document.getElementById("computer-choice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var yourGuessesText = document.getElementById("your-guesses-text");





    var computerGuess = letters[(Math.random() * letters.length)];



document.onkeyup = function(event) {



    var userGuess = event.key.toUpperCase ();
    console.log(userGuess);

    if ((userGuess === "A")||(userGuess === "B")||(userGuess === "C")||(userGuess === "D")||(userGuess === "E")||(userGuess === "F")||(userGuess === "G")||(userGuess === "A")||(userGuess === "A")||(userGuess === "A")||(userGuess === "H")||(userGuess === "I")||(userGuess === "J")||(userGuess === "K")||(userGuess === "L")||(userGuess === "M")||(userGuess === "N")||(userGuess === "O")||(userGuess === "P")||(userGuess === "Q")||(userGuess === "R")||(userGuess === "S")||(userGuess === "T")||(userGuess === "U")||(userGuess === "V")||(userGuess === "W")||(userGuess === "X")||(userGuess === "Y")||(userGuess === "Z")){

     if ((userGuess === "A" && computerGuess === "A" ) ||
        (userGuess === "B" && computerGuess === "B") ||
        (userGuess === "C" && computerGuess === "C") ||
        (userGuess === "D" && computerGuess === "D") ||
        (userGuess === "E" && computerGuess === "E") ||
        (userGuess === "F" && computerGuess === "F") ||
        (userGuess === "G" && computerGuess === "G") ||
        (userGuess === "H" && computerGuess === "H") ||
        (userGuess === "I" && computerGuess === "I") ||
        (userGuess === "J" && computerGuess === "J") ||
        (userGuess === "K" && computerGuess === "K") ||
        (userGuess === "L" && computerGuess === "L") ||
        (userGuess === "M" && computerGuess === "M") ||
        (userGuess === "N" && computerGuess === "N") ||
        (userGuess === "O" && computerGuess === "O") ||
        (userGuess === "P" && computerGuess === "P") ||
        (userGuess === "Q" && computerGuess === "Q") ||
        (userGuess === "R" && computerGuess === "R") ||
        (userGuess === "S" && computerGuess === "S") ||
        (userGuess === "T" && computerGuess === "T") ||
        (userGuess === "U" && computerGuess === "U") ||
        (userGuess === "V" && computerGuess === "V") ||
        (userGuess === "W" && computerGuess === "W") ||
        (userGuess === "X" && computerGuess === "X") ||
        (userGuess === "Y" && computerGuess === "Y") ||
        (userGuess === "Z" && computerGuess === "Z")) {

            alert("You are correct!");
            
           numberOfWins++;
        
        }

    else if(userGuess == computerGuess){
        guessesLeft--;

    }

    

    if (guessesLeft === 0 ){

        alert("Sorry! YOU LOSE.")

        numberOfLosses++;

        
    }


}

winsText.textContent = "Wins: " + numberOfWins;
lossesText.textContent = "Losses: " + numberOfLosses;
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
yourGuessesText.textContent = "Your Guesses so far: " + userGuess;



    

}

