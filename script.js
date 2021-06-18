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
//Roll dice
const rollDice = document.querySelector('#rDice');
//Hold dice
const holdDice = document.querySelector('#hDice');
const current = document.querySelector('.current');
//------------------------------

//------------------------------
//Nouvelle partie
const init = () => {
    if (confirm("Nouvelle partie?")) {
        console.log('lol');
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
    
if(pointsDice ==1){
    current.innerHTML = '<h2>Current score</h2><br><h3> 0</h3>';
    nextPlayer();
}else{
    current.innerHTML = '<h2>Current score</h2><br><h3>' + pointsDice + '</h3>';
}
function nextPlayer() {
    document.querySelector('.active-player').classList.remove('.active');
    document.querySelector('.player') = document.querySelector('#player1')? document.querySelector('#player1'):document.querySelector('#player2');
    document.querySelector('.player').classList.add('.active');

}
//Affichage de l'image du dès
document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
};
rollDice.addEventListener('click',getRandomImage);
//------------------------------

//------------------------------
// //Hold dice
// const hDice = ()=>{
//     //action
// };
// holdDice.addEventListener("click",hDice);


//------------------------------
