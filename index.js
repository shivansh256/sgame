
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];same
// var userClickedPattern = [];same

// var started = false;same
// var level = 0;same

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });


function checkAnswer(currentLevel)
    {
        if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
        {
            if (userClickedPattern.length === gamePattern.length){
                setTimeout(function () {
                  nextSequence();
                }, 1000);
        
              }
        }
        else{
            playsound("wrong");
            $("body").addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function() {
                $("body").removeClass("game-over");
            },200);
            startover();
        }
}


// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }
    
function nextSequence()
{
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var rannumber=Math.floor(Math.random()*4);
    var randomChoseColor=buttonColors[rannumber];
    gamePattern.push(randomChoseColor);
    $("#" +  randomChoseColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChoseColor);

    
}

// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }


function animatePress(currentColor)
{
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    },100);

}

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

function playsound(name)
{
    var audio=new Audio("sounds/" + name + ".mp3");
    audio.play();

}

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

function startover()
{
    level=0;
    gamePattern=[];
    started=false;
}

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }





















