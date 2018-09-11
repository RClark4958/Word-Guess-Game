document.addEventListener("DOMContentLoaded", function() {
  var batmanShit = [
    "gotham", 
    "batmobile", 
    "joker", 
    "batcave", 
    "scarecrow", 
    "gordon", 
    "marsha", 
    "batgirl"
  ];
  var pickedWord;
  var pickedWordArray = [];
  var pickedWordPlaceholders = [];
  var wins = 0;
  var losses = 0;
  var lettersGuessed;
  var guessesLeft;

  function newGame(){
    guessesleft = 7;
    lettersGuessed = [];
    pickedWord = batmanShit[Math.floor(Math.random() * batmanShit.length)];
    pickedWordArray = pickedWord.split("");
    pickedWordPlaceholders = [];

    for (var i = 0; i < pickedWordArray.length; i++) {
      pickedWordPlaceholders.push("_");
    }
    var placeHolderString = pickedWordPlaceholders.join(" ");
    document.querySelector("#guessesRemaining").innerHTML = guessesLeft;
    document.querySelector("#placeholders").innerHTML = placeHolderString;
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses " + losses;
    document.querySelector("#pressedLetters").innerHTML = lettersGuessed;
    document.querySelector(".hangman").style.display = "none";
    document.querySelector(".zero").style.display = "none";
    document.querySelector(".one").style.display = "none";
    document.querySelector(".two").style.display = "none";
    document.querySelector(".three").style.display = "none";
    document.querySelector(".four").style.display = "none";
    document.querySelector(".five").style.display = "none";
    document.querySelector(".six").style.display = "none";
  }

  document.onkeyup = function(event) {
    if (guessesLeft >= 1) {
      var userGuess = event.key;
      for (var i = 0; i <= lettersGuessed.length -1; i++) {
        if (lettersGuessed[i].indexOf(userGuess) != -1) {
          return false;
        }
      }
      lettersGuessed.push(userGuess);
      for (var i = 0; i < pickedWordArray.length; i++) {
        if (userGuess === pickedWordArray[i]) {
          pickedWordPlaceholders[i] = userGuess;
        }
      }
      if (pickedWordPlaceholders.indexOf(userGuess) === -1) {
        guessesLeft--;
      }
      if (guessesLeft === 0) {
        losses++;
        setTimeout(() => {
          alert("You lose. You have failed the Dark Knight." + " The word was " + pickedWord);
          newGame();
        }, 300);
      }
      if (pickedWordPlaceholders.join("") === pickedWord) {
        wins++;
        setTimeout(() => {
          alert("You win! Selena Kyle is anxious to meet you :)");
        }, 300);
      }
      if (guessesLeft === 6) {
        document.querySelector(".hangman").style.display = "block";
        document.querySelector(".zero").style.display = "block";
      }
      if (guessesLeft === 5) {
        document.querySelector(".one").style.display = "block";
      }
      if (guessesLeft === 4) {
        document.querySelector(".two").style.display = "block";
      }
      if (guessesLeft === 3) {
        document.querySelector(".three").style.display = "block";
      }
      if (guessesLeft === 2) {
        document.querySelector(".four").style.display = "block";
      }
      if (guessesLeft === 1) {
        document.querySelector(".five").style.display = "block";
      }
      if (guessesLeft === 0) {
        document.querySelector(".six").style.display = "block";
      }
      document.querySelector("#losses").innerHTML = "Losses: " + losses;
      document.querySelector("#guessesRemaining").innerHTML = guessesLeft;
      document.querySelector(
        "#placeholders"
      ).innerHTML = pickedWordPlaceholders.join(" ");
      document.querySelector("#pressedLetters").innerHTML = lettersGuessed;
      document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }
  };
  newGame();
});