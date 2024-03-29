/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, diceDOM ;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () {
	//1. Random Number
	var dice = Math.floor(Math.random() * 6) +1;	

	//2. Display the result
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-'+dice+'.png';
	//3. Update the round score IF the rolled number was not a 1
	if (dice !== 1) {
		//Add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	}else{
		//Next player 
		roundScore = 0;
		document.getElementById('current-' + activePlayer).textContent = roundScore;
		document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
		activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
		document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
		diceDOM.style.display = 'none';
	}
});

document.querySelector('.btn-hold').addEventListener('click', function (argument) {
	/* body... */
	//////////////////////////////////////
	//Add Current score to global score //
	//////////////////////////////////////
	scores[activePlayer] += roundScore;
	//Update the UI
	

	//Check IF player won the game
})