var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

var randomDiceImage = 'images/dice' + randomNumber1 +'.png';
var randomDiceImage2 = 'images/dice' + randomNumber2 +'.png';

var dice1 = document.querySelector('.img1');
var dice2 = document.querySelector('.img2');

dice1.setAttribute("src", randomDiceImage);
dice2.setAttribute("src", randomDiceImage2);


var winner = document.querySelector('h1');

if(randomNumber1 > randomNumber2) {
  winner.innerHTML = 'Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
  winner.innerHTML = 'Player 2 Wins!';
} else {
  winner.innerHTML = 'Draw!';
}
