const myGame = () => {
	 let pScore = 0;
	 let cScore =0;
	 //play the game
	 const matchPlay =() => {
	 	const playerOptions = document.querySelectorAll('.options button');
	 	const playerHand = document.querySelector('.player-hand');
	 	const computerHand = document.querySelector('.computer-hand');
	 //computer options
	 	const computerOptions = ['rock','paper','scissors'];

	 	playerOptions.forEach(option => {
	 		option.addEventListener('click', function() {
	 		 //generating conputer random numbers/choice
	 		const computerNumber = Math.floor(Math.random()*3);
	 		const computerChoice = computerOptions[computerNumber];
	 		//call the compare hands here
	 		handComparison(this.textContent, computerChoice); 

	 		//update the images 
	 		playerHand.src = `./Images/${this.textContent}.png`;
	 		computerHand.src = `./Images/${this.computerChoice}.png`;
	 		//for animating the hand movement
	 		});
	 	});
	 };
	 //updating the score
	 const scoreUpdate = () => {
	 	const playerScore = document.querySelector('.player-score p');
	 	const computerScore = document.querySelector('.computer-score p');
	 	playerScore.textContent = pScore;
	 	computerScore.textContent = cScore;
	 };
	 //update the text
	 const winner = document.querySelector('.winner');
	 //Comparing who is winning
	 const handComparison = (playerChoice, computerChoice) =>{
	 	if (computerChoice===playerChoice) {
	 		winner.textContent = 'Tie';
	 		return; //ends the function here
	 	};
	 	//checking for rock
	 	if (playerChoice==='rock') {
	 		if (computerChoice==='scissors') {
	 			winner.textContent = "Player 1 Wins";
	 			pScore++;
	 			scoreUpdate()
	 			return;
	 		}
	 		else{
	 			winner.textContent = 'Computer Wins';
	 			cScore++;
	 			scoreUpdate()
	 			return;
	 		}
	 	}
	 	//checking for Paper
	 	if (playerChoice==='paper') {
	 		if (computerChoice==='scissors') {
	 			winner.textContent = 'Computer Wins';
	 			cScore++;
	 			scoreUpdate()
	 			return;
	 		}
	 		else{ 
	 			winner.textContent = 'Player 1 Wins';
	 			pScore++;
	 			scoreUpdate()
	 			return;
	 		}
	 	}
	 	//checking for scissors
	 	if (playerChoice==='scissors') {
	 		if (computerChoice==='rock') {
	 			winner.textContent = 'Computer Wins';
	 			cScore++;
	 			scoreUpdate()
	 			return;
	 		}
	 		else{
	 			winner.textContent = 'Player 1 Wins';
	 			pScore++;
	 			scoreUpdate()
	 			return;
	 		}
	 	}
	 };
	 //calling the inner functions
	 matchPlay()
};

//Starting the game function
myGame();