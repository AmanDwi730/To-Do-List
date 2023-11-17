let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };
      
      /* const score = {
        wins: 0,
        losses: 0,
        ties: 0
     };*/ 

  updateScore();

  document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock')
  });

  document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper')
  });

  document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('Scissors')
  });

  document.querySelector('.js-reset-button').addEventListener('click', () => {
      score.wins = 0,
      score.losses = 0,
      score.ties = 0,
  
      localStorage.removeItem('score');
      updateScore();
      location.reload();
  })

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      playGame('Rock');
    } else if (event.key === 'p') {
      playGame('Paper');
    } else if (event.key === 's') {
      playGame('Scissors');
    } else {
      score.wins = 0,
      score.losses = 0,
      score.ties = 0,
  
      localStorage.removeItem('score');
      updateScore();
      location.reload();
    }

  });

  function playGame(playerMove) {

    const computerMove = pickComputerMove();
  
    let result = '';

    if(playerMove === 'Rock'){
      if(computerMove === 'Rock') {
        result = 'Tie.';
      }
      else if(computerMove === 'Paper') {
        result = 'You Lose.';
      }
      else{
        result = 'You Win.';
    }
    }

    if(playerMove === 'Paper'){
      if(computerMove === 'Rock') {
        result = 'You Win.';
      }
      else if(computerMove === 'Paper') {
        result = 'Tie.';
      }
      else{
        result = 'You Lose.';
      }
    }

    if(playerMove === 'Scissors'){
      if(computerMove === 'Rock') {
        result = 'You Lose.';
      }
      else if(computerMove === 'Paper') {
        result = 'You Win.';
      }
      else{
        result = 'Tie.';
      }
    }

    if(result === 'You Win.') {
      score.wins += 1;
    }
    else if(result === 'You Lose.'){
      score.losses += 1;
    }
    else{
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result')
      .innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You picked<img src="images/${playerMove}-emoji.png" class="move-icon"> Computer picked <img src="images/${computerMove}-emoji.png" class="move-icon">`;
  }

  function updateScore() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {

    const randomNum = Math.random();
    let computerMove = '';

    if(randomNum >= 0 && randomNum < 1/3) {
      computerMove = 'Rock';
    }
    else if(randomNum >= 1/3 && randomNum < 2/3) {
      computerMove = 'Paper';
    }
    else{
      computerMove = 'Scissors';
    }
    return computerMove;

  }