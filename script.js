// Règles :
// Le jeu comprend 2 joueurs sur un seul et même écran.
// Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
// À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.
// Lors de son tour, le joueur peut décider à tout moment de:
// - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le tour de l’autre joueur.
// - Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
// Le premier joueur qui atteint les 100 points sur global gagne le jeu.
//new game
const nGame = document.querySelector('#new-game');
//Actual score
const aScoreP1 = document.querySelector('#actualScorePlayer1');
const aScoreP2 = document.querySelector('#actualScorePlayer2');
//Current Score
const cScoreP1 = document.querySelector('#currentScorePlayer1');
const cScoreP2 = document.querySelector('#currentScorePlayer2');
//Roll dice
const rollDice = document.querySelector('#rollDice');
//Hold dice
const holdDice = document.querySelector('#holdDice');


//------------------------------
//Nouvelle partie
const init = () => {
    if (confirm("Nouvelle partie?")) {
        cScoreP1.textContent = 0;
        cScoreP2.textContent = 0;
        aScoreP1.textContent = 0;
        aScoreP2.textContent = 0;
      }      
};
// Bouton nouvelle partie
nGame.addEventListener("click", init);


//------------------------------
//lancé du dés
const rDice = document.querySelector('#rollDice');
function getRandomImage() {  
//declare an array to store the images  
var randomImage = [
    "img/face1.png",
    "img/face2.png",
    "img/face3.png",
    "img/face4.png",
    "img/face5.png",
    "img/face6.png"
];  

//Variable aléatoire du numéros  
var number = Math.floor(Math.random()*randomImage.length);  
//Affichage des points
var pointsDice = randomImage.indexOf(randomImage[number])+1;


if (cScoreP1.textContent!=1 || cScoreP2.textContent == 1) {
  player1();
}else if(cScoreP2.textContent !=1 || cScoreP1.textContent == 1){
    player2();
}
  function player1() {
    var curScoreP1 = cScoreP1.textContent;
    cScoreP1.textContent = pointsDice;
    var actuScoreP1 = aScoreP1.textContent;
    aScoreP1.textContent = parseInt(actuScoreP1)+pointsDice;
  }
  function player2() {
    var curScoreP2 = cScoreP2.textContent;
    cScoreP2.textContent = pointsDice;
    var actuScoreP2 = aScoreP2.textContent;
    aScoreP2.textContent = parseInt(actuScoreP2)+pointsDice;
  }
//Affichage de l'image du dès
document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
}
rollDice.addEventListener('click',getRandomImage);
//------------------------------

//------------------------------
// //Hold dice
// const hDice = ()=>{
//     //action
// };
// holdDice.addEventListener("click",hDice);


//------------------------------
