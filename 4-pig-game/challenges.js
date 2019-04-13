/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice1, dice2, goal;
//Sets all the scores to 0 and dice image invisable
function setGame(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}
setGame();
//Button to reroll the dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. Random Number
    dice1 = Math.floor(Math.random() * 6) + 1; //Floor removes the decimal spot, multiple by the random by the number between you want.
    dice2 = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    //3. Update the round score IF the rolled number was not a 1.
    if(dice1 !== 1 && dice2 !== 1){
        //Add Score
        roundScore += (dice1+dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    }
}); //No () so the Event Listener function will call it for us, if we add () it will automatically call it.
function nextPlayer(){
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        //Displaying the scores to 0
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        //Switching active player
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //Hides dice when it turns 1
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
}
document.querySelector('.btn-hold').addEventListener('click', function(){
    //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('.final-score').value;
    //Checks if input is empty (Undefined, 0 , null or "" are Coerced to false anything else is true)
    if(input){
       goal = input;
    }else{
        goal = 100;
    }
    //Check if player has won
    if(scores[activePlayer] >= goal){
        document.getElementById('name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1) + " is the winner!";
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }
    else{
        //nextPlayer
        nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', function(){
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    document.getElementById('name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1);
    document.querySelector('.btn-hold').style.display = 'initial';
    document.querySelector('.btn-roll').style.display = 'initial';
    setGame();
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
});