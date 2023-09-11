var array = ["red", "yellow", "blue", "green"];
var gameseq = [];
var choosenarr = [];
var Level = 0;
var started = false;

//this will make sure that the game is restarted
$(document).on("keypress", function () {
  if (!started) {

    $("h1").text("Level " + Level);
    gamefun();
    started = true;
  }
});
$(".btn").on("click", handler);
function handler() {

  var choosen = $(this).attr("id");
  choosenarr.push(choosen);
  playmusic(choosen);
  animation(choosen);
  checkforseq(choosenarr.length - 1);
}
function gamefun() {
  choosenarr=[];
  Level++;
  $("h1").text("Level " + Level);

  //var len=array.length=4;
  var randomnum = Math.floor(Math.random() * 4);
  var arrran = array[randomnum];
  gameseq.push(arrran);
  $("#" + arrran).fadeIn(100).fadeOut(100).fadeIn(100);
playmusic(arrran);
}
function playmusic(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animation(currentcolor) {

  $("#" + currentcolor).on("click", happen)
  function happen() {
    $("#" + currentcolor).addClass("pressed");

    setTimeout(() => {
      $("#" + currentcolor).removeClass("pressed");

    }, 100);
  }

}
function checkforseq(currchose) {
  if (gameseq[currchose] === choosenarr[currchose]) {
    console.log("success");
  if (gameseq.length === choosenarr.length) {
    setTimeout(function () {


      gamefun();
    }, 1000);
  }
}
  else {
    console.log("lose");
  playmusic("wrong");

 
$("h1").text("Game Over, Press Any Key to Restart");
setInterval(() => {
  
  $("body").addClass("game-over");
}, 10);


$("p").text("**** Well-Done  you win up to level-> "+Level +" Refresh to play again****")
startAgain();
}
}
function startAgain() {
  started=false;
  Level=0;
  gamefun=[];
  
}