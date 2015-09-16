var humanPlayed,
    computerPlayed,
    humanScore = 0,
    computerScore = 0;


function shoot(playPick){
  if($(this).hasClass('rock')){
    humanPlayed = 'rock';
  } else if ($(this).hasClass('paper')){
    humanPlayed = 'paper';
  } else if ($(this).hasClass('scissors')){
    humanPlayed = 'scissors';
  }

  computerPlayed = (function(){
    var randomNumber = Math.random();
    if(randomNumber < 0.34){
      return 'rock';
    } else if (randomNumber >= 0.34 && randomNumber < 0.67){
      return 'paper';
    } else {
      return 'scissors';
    }
  })();
  determineWinner(humanPlayed, computerPlayed);
}

function determineWinner(humanPlayed, computerPlayed){
  var gameOutcomes = {
    rock : {
      scissors : 1,
      paper : 0,
      rock : 'tie'
    },
    scissors : {
      rock: 0,
      paper: 1,
      scissors : 'tie'
    },
    paper : {
      rock : 1,
      scissors : 0,
      paper : 'tie'
    }
  };

  if(gameOutcomes[humanPlayed][computerPlayed]==='tie'){
      $('.game-status').html("OOOOO... It's a tie!");
  } else if (gameOutcomes[humanPlayed][computerPlayed]===1){
      $('.game-status').addClass('move-in-and-up');
      $('.game-status').html("Human's " + humanPlayed + " beats Computer's " + computerPlayed);
      humanScore++;
      $('.player-score').html(humanScore);
  } else if (gameOutcomes[humanPlayed][computerPlayed]===0){
      $('.game-status').addClass('move-in-and-up');
      $('.game-status').html("Computers " + computerPlayed + " beats Human's " + humanPlayed);
      computerScore++;
      $('.computer-score').html(computerScore);
  }
}

$('.rock').hover(
  function(){
    $('.icon-hand-rock-o').addClass('fist-rotation')
  },
  function(){
    $('.icon-hand-rock-o').removeClass('fist-rotation')
  }
);

$(".button").click(shoot);
