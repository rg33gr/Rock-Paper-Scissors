const game = () => {
    let pScore = 0;
    let cScore = 0;
    
//start the game   
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeout');
            match.classList.add('fadein');

        });
    };

          //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    // computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach( option => {
            option.addEventListener('click', function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                // Here is where we call compareHands()
                compareHands(this.textContent, computerChoice);

                //update images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;


                }, 2000);

                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };


const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

}


const compareHands = (playerChoice, computerChoice) => {
    //Update text
    const winner = document.querySelector('.winner');
    //checking for a tie
    if (playerChoice === computerChoice) {
        winner.textContent = 'Its a Tie!';
        return;
    };
    //check for rock
    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            winner.textContent = 'Player Wins!';
            pScore++;
            updateScore();
            return;
        }else {
            winner.textContent = "Computer Wins!";
            cScore++;
            updateScore();
            return;
        }
    };
    // check for paper
    if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            winner.textContent = 'Computer Wins!';
            cScore++;
            updateScore();
            return;
        }else {
            winner.textContent = "Player Wins!"
            pScore++;
            updateScore();
            return;
        }
    };
    //check for scissors
    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            winner.textContent = 'Player Wins!';
            pScore++;
            updateScore();
            return;
        }else {
            winner.textContent = "Computer Wins!"
            cScore++;
            updateScore();
            return;
        }
    };
};


//calls inner fuctions    
    startGame();
    playMatch();
};

//starts the game
game();