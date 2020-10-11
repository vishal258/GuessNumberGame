window.onload = () => {
    init();
}

var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxGuesses = 10;

function gameEnded(){
    document.getElementById("newGame").style.display = 'inline';
    document.getElementById("easy").style.display = 'none';
    document.getElementById("hard").style.display = 'none';
    document.getElementById('inputBox').setAttribute('readonly','readonly');
}

document.getElementById('easy').onclick = function(){easy()};
document.getElementById('hard').onclick = function(){hard()};

function easy(){
    maxGuesses = 10;
    document.getElementById('easy').className = 'activeButton';
    document.getElementById('hard').className = '';
}

function hard(){
    maxGuesses = 5;
    document.getElementById('hard').className = 'activeButton';
    document.getElementById('easy').className = '';
}

function init(){
    computerGuess = Math.floor(Math.random() * 100 +1);
    //console.log(computerGuess)
    document.getElementById("newGame").style.display = 'none';
}

document.getElementById("newGame").onclick = function() {newGame()};
document.getElementById("inputBox").onchange = function() {compareGuess()};


function newGame() {
  window.location.reload();
}

function compareGuess(){
    var userGuess = " " + document.getElementById('inputBox').value;
    //console.log(userGuess)


    userGuessLog.push(userGuess);
    //console.log(userGuessLog)
    document.getElementById("guessLog").innerHTML = userGuessLog;

    attempts++;
    document.getElementById("attempts").innerHTML = attempts

    if (userGuessLog.length < maxGuesses){
        if(userGuess > computerGuess) {
            document.getElementById("textOutput").innerHTML = 'Your Guess is too HIGH';
            document.getElementById('inputBox').value ="";
        }else if (userGuess < computerGuess){
            document.getElementById("textOutput").innerHTML = 'Your Guess is too LOW';
            document.getElementById('inputBox').value ="";
        }else {
            document.getElementById("textOutput").innerHTML = 'CORRECT CONGRATS you got it in ' + attempts + ' attempts';
            document.getElementById('container').style.backgroundColor = "green";
            gameEnded();
        }
    }else {
        if (userGuess > computerGuess){
            document.getElementById("textOutput").innerHTML = 'You Lose' + '<br> the number was ' + computerGuess;
            document.getElementById('container').style.backgroundColor = "red";
            gameEnded();
        }else if (userGuess < computerGuess){
            document.getElementById("textOutput").innerHTML = 'You Lose' + '<br> the number was ' + computerGuess;
            document.getElementById('container').style.backgroundColor = "red";
            gameEnded();
        }else {
            document.getElementById("textOutput").innerHTML = 'CORRECT CONGRATS you got it in ' + attempts + ' attempts';
            document.getElementById('container').style.backgroundColor = "green";
            gameEnded();
        }
    }
}




