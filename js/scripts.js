// Business Logic
function Game () {
  this.score = {}; // game.score["player1th"] += number;
  this.turn = true;
  // turn = Game.turn = !Game.turn;
}

function roll () {
  if (game.turn === false) {
    game.score["Player2"] = score(game.score);
    $("#player2").text(game.score["Player2"])
  }
  else { 
    game.score["Player1"] = score(game.score);
    $("#player1").text(game.score["Player1"])
  }
  // random number gen 1-6
  // if 1, reset score to 1
  // if 100 or greater, end game, taunt player
}
function score (playerScore) {
  let rollOutcome = math();
  $("#roll").text(rollOutcome);
  if (rollOutcome === 1) {
    return 0;
  }
  else {
    playerScore = playerScore + rollOutcome;
  }
}

function math() {
  return Math.floor((Math.random() * 6) + 1);
}


// UI Logic
game = new Game;

function changeTurn() {
  game.turn = !game.turn;
  if (game.turn === false) {
    $("#turn").text(2)
  }
  else {
    $("#turn").text(1)
  }
}
$(document).ready(function() {
  $("#hold").submit(function(event) {
    event.preventDefault();
    changeTurn();
    $("#tauntMessage").hide();
  });

  $("#roll").submit(function(event) {
    alert("YOUVE ROLLED");
    event.preventDefault();
    // roll();
    changeTurn();
    $("#tauntMessage").hide();
  });
  $("#taunt").submit(function(event) {
    event.preventDefault();
    $("#tauntMessage").show();
  });
  
});
