// 1) Set up the page so that a countdown timer immediately starts when loaded. The timer will be set at 120s, so 120000 milliseconds
// 2) upon loading, all questions for the quiz are displayed. lets make 10.
// 3) each question will have three answers, but only one can be chosen. the chosen answer will be saved to an array.
// 4) the user can submit the form early if they so choose, or they can wait for the clock to run out
// 5) an array will be set up early on that holds the correct answers as a key; a function will check to see if the user guess is equal to the saved answer.
// 6) when the timer hits 0 or the user hits submit the game is over, and displays how many questions the player got wrong and how many they got right.

//below is the timer function

//setting the amount of time to answer questions
var timeLeft = 121;

var questionsRight = 0;
var questionsWrong = 0;

var countdown = setInterval(function() {
  //decrease timeLeft by 1
 timeLeft--;
 //write timeLeft to the html page
 document.getElementById("timer").textContent =
 timeLeft;
 //if timeLeft equals 0, stop running the interval
 if(timeLeft <= 0)
     clearInterval(countdown);
  //set the interval to run the function every second; set in the more global scope, so this parameter is technically set before the above function
 },
 1000);

// here we need to validate the form being submitted from the html on whether answers are correct or not. if the value of the checked answer is true, questionsRight goes up, else questionsWrong goes up.

// 1) create an if statement thatll go into effect when the timer reaches 0. If the time equals zero and for every instance that correctAnswer is checked, increase answersRight by one. Otherwise increase answersWrong by one.

//need to set up a way so that this function runs after the timer hits 0. is there a way to say that when timeLeft=0, run this function?
// this function should only run one time!

//  create a for loop to check the whole form for selected answers (?)
  if (timeLeft === 0) {

    if ( $(".correctAnswer").checked = true)  {
      questionsRight++;
      console.log(questionsRight + "right");
      document.write("# Correct" + questionsRight);
      document.write("# Wrong" + questionsWrong);
    }
    else  {
      questionsWrong++;
      console.log(questionsWrong + "wrong");
      document.write("# Correct" + questionsRight);
      document.write("# Wrong" + questionsWrong);
    }
  }

//below this is for a submit buton
// function validate() {

// object with correct answers?

var correctAnswers = {
  one: 'Hayao',
  two: 'Apollo',
  three: 'Mortal Engines',
}

// do i need to set up a while loop for this function above?
// once timeLeft = 0, document.write to page what answersRight and answersWrong is.




//extra junk

//tried running this as an object, couldnt get it to work.

// window.onload = function() {
//   $("#timer").on("load", countdown.startTimer)
// };
// window.onload = function() {
//   $("#timer").on("load", countdown.startTimer)
// };
//
// var countdown = {
//   timeleft: 10,
//
//   startTimer: function() {
//     timeleft--;
//     $("#timer").textContent = timeLeft;
//     if(timeLeft <= 0)
//       clearInterval(setTimer);
//     }
//
//   }

// var intervalId;
// var clockRunning = false;
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// var startTime = 120000;
// var endTime = 0;
// var distance = startTime - endTime;
