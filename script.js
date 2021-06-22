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
const newGame = document.querySelector('#new-game');
var player1 = document.querySelector('#player1');
var globalP1 = document.querySelector('#player1GlobalScore');
var globalP2 = document.querySelector('#player2GlobalScore');
var currentP1 = document.querySelector('#player1CurrentScore');
var currentP2 = document.querySelector('#player2CurrentScore');
var player2 = document.querySelector('#player2');
let current = document.querySelector('.current');
const roll = document.querySelector('#rDice');
const hold = document.querySelector('#hDice');
var activePlayer = player1;
let globalScore = document.querySelector(".active").getElementsByTagName('div')[1];
let currentScore = document.querySelector(".active").lastElementChild;
//------------------------------
//Nouvelle partie
const init = () => {
    if (confirm("Nouvelle partie?")) {
        nGame();
      }
};
//restart the game
const nGame = () => {
  globalP1.textContent = '0';
  globalP2.textContent = '0';
  currentP1.textContent = '0';
  currentP2.textContent = '0';
  document.querySelector('.active').lastElementChild.innerHTML = '<h2>Current score</h2><h3>0</h3>';
}
// Bouton nouv*elle partie
newGame.addEventListener("click", init);
//------------------------------

//declare an array to store the images  
var randomImage = [
    "img/face1.png",
    "img/face2.png",
    "img/face3.png",
    "img/face4.png",
    "img/face5.png",
    "img/face6.png"
];  
//lancé du dés
function getRandomImage() {  

//Variable aléatoire du numéros  
var number = Math.floor(Math.random()*randomImage.length);  
//Affichage des points
var pointsDice = randomImage.indexOf(randomImage[number])+1;
  document.getElementById('result').innerHTML = '<img src='+randomImage[number]+ '>';
  if(pointsDice == 1){
    document.querySelector('.active').lastElementChild.innerHTML = '<h2>Current score</h2><h3>0</h3>';
    changePlayer();
  }else{
    document.querySelector('.active').lastElementChild.innerHTML = '<h2>Current score</h2><h3>'+pointsDice+'</h3>';
    }
}
//------------------------------
//savoir quel joueur joue
var changePlayer = () => {
    activePlayer.classList.remove('active');
    activePlayer =(activePlayer == player1)?player2:player1;
    activePlayer.classList.add('active');
    document.querySelector(".active").lastElementChild.innerHTML = '<h2>Current score</h2><h3>'+ pointsDice+'</h3>';
}
roll.addEventListener('click', getRandomImage);

//------------------------------
const hDice = ()=>{
  //save the current score of player -> add current score to global score
  global = global + current;
  globalScore.textContent = global;
  currentScore.textContent = 0; 
  current = 0;
  (global >= 100) ? endGame() : changePlayer();
}
hold.addEventListener('click', hDice);

//--------------------------------
const endGame = () => {
    result = (activePlayer == player1)?player1:player2;
    result.innerHTML = "<h1>c\'est gagné!!!!!</h1>";
}