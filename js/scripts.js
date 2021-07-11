// Business Logic
function Game () {
  this.score = {"player1": 0, "player2": 0};
  this.turn = true;
  this.initialValue = 0;
  this.rollOne = true;
  // turn = Game.turn = !Game.turn;
}


function roll () {
  if (game.turn === false) {
    if (game.rollOne === true) {
      game.initialValue = game.score["player2"];
      console.log(game.initialValue);
    }
    game.score["player2"] = score(game.score["player2"], game.initialValue);
    $("#player2").text(game.score["player2"]);
    if (game.score["player2"] >= 10) {
      $("#completeDominationMessage").show();
      $("#winner").text(2);
    }
  }
  else {
    if (game.rollOne === true) {
      game.initialValue = game.score["player1"];
      console.log(game.initialValue);
    } 
    game.score["player1"] = score(game.score["player1"], game.initialValue);
    $("#player1").text(game.score["player1"]);
    if (game.score["player1"] >= 10) {
      $("#completeDominationMessage").show();
      $("#winner").text(1);
    }
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
    console.log(game.rollOne);
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
$(document).ready(function() {
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
