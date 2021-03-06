//At the start of the game

//Designate computer choices. √

var computerOptions = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

//Wins = 0 √
//Losses = 0 √
//Number of User Guesses Left = 9 √


var userWin = 0;
var userLoss = 0;
var userGuessesLeft = 9;

//User makes a choice. √
//Capture userGuess. √
//Show userGuess.

document.onkeyup = function(event){
    var userGuess = event.key.toLowerCase();
    
    //Computer makes a random choice. √
    //Capture Computer's choice. √

    var computerGuess = computerOptions[Math.floor(Math.random()*computerOptions.length)];

    //Compare user's choice to the computer's choice. √

    //If the Result is a Win: √
    //Add 1 to the userWin. √
    //Reset userGuess to 9 √
    //Restart the game w/o refreshing the page. √

    //If the Result is a Loss: √
    //Subtract 1 from userGuess. √
    //Add 1 to userLoss. √
    //If userGuess = 0, then restart the game w/o a page refresh. √

 
    if (computerGuess === userGuess) { userWin++, (userGuessesLeft=9);
    } else { userGuessesLeft--;
    }

    if (userGuessesLeft === 0) { userLoss++, (userGuessesLeft=9);
    }

        

//Display the Result to the User. √
//Game start: "Guess what Letter I'm thinking of?"√

var html = "<h5>Guess What Letter I'm Thinking Of?<h5>" +
"<p>You chose: " + userGuess + "</p>" +
"<p>The computer chose: " + computerGuess + "</p>" +
"<p>Guesses:  " + userGuessesLeft + "</p>" +
"<p>Wins:  " + userWin + "</p>" +
"<p>Losses:  " + userLoss + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;

};