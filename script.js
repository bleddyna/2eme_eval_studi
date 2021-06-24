// Règles :
// Le jeu comprend 2 joueurs sur un seul et même écran.
// Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
// À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.
// Lors de son tour, le joueur peut décider à tout moment de:
// - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le tour de l’autre joueur.
// - Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
// Le premier joueur qui atteint les 100 points sur global gagne le jeu.
//------------------------------
//les variables
let newGame = document.getElementById('new-game');
var player1 = document.getElementById('player1');
var globalP1 = document.getElementById('player1GlobalScore');
var globalP2 = document.getElementById('player2GlobalScore');
var currentP1 = document.getElementById('player1CurrentScore');
var currentP2 = document.getElementById('player2CurrentScore');
var player2 = document.getElementById('player2');
const roll = document.getElementById('rDice');
const hold = document.getElementById('hDice');
var activePlayer = player1;
var result = document.getElementById('result');
//---------------------------------
var randomImage = [
	"img/face1.png",
	"img/face2.png",
	"img/face3.png",
	"img/face4.png",
	"img/face5.png",
	"img/face6.png"
];
//------------------------------
//Nouvelle partie
function init() {
	if (confirm("Nouvelle partie?") == true) {
		globalP1.textContent = '0';
		globalP2.textContent = '0';
		currentP1.textContent = '0';
		currentP2.textContent = '0';
		activePlayer.getElementsByTagName('div')[2].innerHTML = '<h2>Current score</h2><h3>0</h3>';

	}
}
//--------------------------------
function endGame() {
	activePlayer = (activePlayer == player1) ? player1 : player2;
	result.innerHTML = "<h1>c\'est gagné!!!!!</h1>";
}
//------------------------------
function rDice() {
	var number = Math.floor(Math.random() * randomImage.length);
	var pointsDice = randomImage.indexOf(randomImage[number]) + 1;
	//Affichage des points
	result.innerHTML = '<img src=' + randomImage[number] + '>';
	if (pointsDice == 1) {
		activePlayer.getElementsByTagName('div')[2].innerHTML = '<h2>Current score</h2><h3>0</h3>';
		changePlayer();
	} else {
		activePlayer.getElementsByTagName('div')[2].innerHTML = '<h2>Current score</h2><h3>' + parseInt(pointsDice) + '</h3>';
	}
}
//------------------------------
function changePlayer() {
	activePlayer.classList.remove('active');
	activePlayer = (activePlayer == player1) ? player2 : player1;
	activePlayer.classList.add('active');
	activePlayer.getElementsByTagName('div')[2].innerHTML = '<h2>Current score</h2><h3>0</h3>';
}
//------------------------------
function hDice() {
	activePlayer.getElementsByTagName('div')[1] = activePlayer.getElementsByTagName('div')[1] + activePlayer.getElementsByTagName('div')[2];
	activePlayer.getElementsByTagName('div')[1].innerHTML = 	activePlayer.getElementsByTagName('div')[1].id.value= '0';
	activePlayer.getElementsByTagName('div')[2].innerHTML = activePlayer.getElementsByTagName('div')[2].id.value = '0';
	(activePlayer.getElementsByTagName('div')[2] >= 100) ? endGame(): changePlayer();
}
//------------------------------
newGame.addEventListener("click", init);
roll.addEventListener('click', rDice);
hold.addEventListener('click', hDice);