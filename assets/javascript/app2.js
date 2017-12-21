// 1) Set up the page so that a countdown timer immediately starts when loaded. The timer will be set at 120s, so 120000 milliseconds
// 2) upon loading, all questions for the quiz are displayed. lets make 10.
// 3) each question will have three answers, but only one can be chosen. the chosen answer will be saved to an array.
// 4) the user can submit the form early if they so choose, or they can wait for the clock to run out
// 5) an array will be set up early on that holds the correct answers as a key; a function will check to see if the user guess is equal to the saved answer.
// 6) when the timer hits 0 or the user hits submit the game is over, and displays how many questions the player got wrong and how many they got right.

//below is the timer function

//setting the amount of time to answer questions
var timeLeft = 61;

var questionsRight = 0;
var questionsWrong = 0;

var countdown = setInterval(function() {
  //decrease timeLeft by 1
 timeLeft--;
 //write timeLeft to the html page
 document.getElementById("timer").textContent =
 timeLeft;
 //if timeLeft equals 0, stop running the interval (clear it), run the validateForm function to validate every correct and incorrect answer, log "times up", then clear the page and write to it to restart
 if(timeLeft <= 0) {
     clearInterval(countdown);
     validateForm();
     console.log("times up");
     document.body.innerHTML = "Amount Right: " + questionsRight + "<br>" +"Amount Wrong: " + questionsWrong + "<br>" + "Refresh the page to try again!";
   }
  //set the interval to run the function every second; set in the more global scope, so this parameter is technically set before the above function
 },
 1000);

//create a callback function to run when a certain event occurs


     // "Your Questions Right: " + questionsRight + "Your Questions Wrong: " + questionsWrong;

//the code to the callback; when the timer reaches 0, check the entire form. for each instance of an input that is checked equaling "true", add one to questionsRight. else add one to questionsWrong.
function validateForm () {
console.log(document.forms[0].elements[0].checked);

//go through and read the whole form and the form's elements
    for (var i = 0; i < document.forms[0].elements.length; i++) {
//if the answer that is checked equals the answer with the value of "true", questionsRight goes up by one. else questionsWrong goes up.
      if (document.forms[0].elements[i].checked == true &&  document.forms[0].elements[i].value === "true") {
        questionsRight++;
        console.log(questionsRight + "right");
      }

      else if (document.forms[0].elements[i].checked == true &&  document.forms[0].elements[i].value === "false"){
        questionsWrong++;
        console.log(questionsWrong + "wrong");

      }
    }
  }

console.log(questionsRight);
console.log(questionsWrong);







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
