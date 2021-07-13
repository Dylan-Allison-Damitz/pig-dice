// Business Logic
function Game () {
  this.score = {"player1": 0, "player2": 0};
  this.turn = true;
  this.initialValue = 0;
  this.rollOne = true;
  // turn = Game.turn = !Game.turn;
}


function roll () {
  let turn;
  if (game.turn === false)
  {
    turn = "player2";
  } else {
    turn = "player1";
  }
  if (game.rollOne === true) {
    game.initialValue = game.score[turn];
  }
  game.score[turn] = score(game.score[turn], game.initialValue);
  $("#" + turn).text(game.score[turn]);
  if (game.score[turn] >= 10) {
    $("#completeDominationMessage").show();
    $("#winner").text(turn);
    $("#roll-container").hide();
  }
}

function score (userScore, initialScore) {
  let rollOutcome = math();
  $("#roll-outcome").text(rollOutcome);
  if (rollOutcome === 1) {
    changeTurn(); 
    return initialScore;
  } 
  else {
    game.rollOne = false;
    return userScore + rollOutcome;
  }
}

function math() {
  return Math.floor((Math.random() * 6) + 1);
}


// UI Logic
game = new Game;

function changeTurn() {
  game.rollOne = true;
  game.turn = !game.turn;
  if (game.turn === false) {
    $("#turn").text(2)
  }
  else {
    $("#turn").text(1)
  }
}
$(document).ready(function(event) {
  $("#roll").submit(function(event) {
    event.preventDefault();
    roll();
    $("#tauntMessage").hide();
  });

  $("#hold").submit(function(event) {
    event.preventDefault();
    changeTurn();
    $("#tauntMessage").hide();
  });


  $("#taunt").submit(function(event) {
    event.preventDefault();
    $("#tauntMessage").show();
  });
});
