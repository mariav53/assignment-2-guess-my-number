"use strict";

//mostrar sección de mejores puntuaciones
function showScores(){
	document.getElementById('scores').style.display ='block';
}
var scoresOn = document.querySelector('.scores_image');
scoresOn.addEventListener ('click', showScores);
//esconder sección de mejores puntuaciones
function hideScores(){
	document.getElementById('scores').style.display ='none';
}
var scoresOff = document.querySelector('.close_scores');
scoresOff.addEventListener ('click', hideScores);

//EFECTO TYPING
var i = 0;
var text = 'ADIVINA ADIVINANZA...';
var speed = 95;

function typeEffect() {
  if (i < text.length) {
    document.getElementById('game_title').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}

//FUNCION OBTENER NÚMERO ALEATORIO
function getRandomNumber(){
  return Math.ceil((Math.random() * 100));
}
var randomNumber = getRandomNumber();
document.querySelector('#message1').innerHTML = "<p>el numero aleatorio es " + randomNumber+"</p>";

//SECCIÓN JUEGO
//variables necesarias
var getNumber=document.querySelector('#number');
var guessCount= 0;
var showMessage = document.querySelector('#message');
var showPlayerSection = document.querySelector('#player_section');
var showGuessCount = document.querySelector('#guessCount');

//FUNCION ADIVINAR NUMERO
function guessNumber(){
  getNumber = document.querySelector('#number').value;
  var myNumber = parseInt(getNumber);

	if (myNumber!== myNumber){
		showMessage.innerHTML = "<p>Debe introducir un número del 1 al 100</p>";
	}else if((myNumber > 100) || (myNumber < 1)){
    showMessage.innerHTML = "<p>Debe introducir un número del 1 al 100</p>";
    showHint.style.display = 'none';

  } else if (myNumber==randomNumber) {
      guessCount++;
      showMessage.innerHTML = "<p class='win'>¡HAS GANADO!</p>";
      showPlayerSection.style.display= 'block';
			play.disabled = true;
      guessCounter();
      hint();

  } else if (myNumber<randomNumber){
      guessCount++;
      showMessage.innerHTML = "<p>Tu número es bajo</p>";
      hint();
      guessCounter();

  } else {
      guessCount++;
      showMessage.innerHTML = "<p>Tu número es alto</p>";
      hint();
      guessCounter();
  }
}

var play = document.querySelector('#play');
play.addEventListener ('click', guessNumber);

//SECCIÓN CONTADOR
//Funcion contador
function guessCounter(){
   showGuessCount.innerHTML = "<p class='guess_count'>INTENTOS :<span class='counter'> " +guessCount+"</span></p>";
 }

//SECCIÓN PISTAS
//variables necesarias
var showHint =document.querySelector('#hint');
var showHintText = document.querySelector('#hint_text');
var showHintImage = document.querySelector('#hint_image');

//FUNCIÓN PISTAS CON IMAGENES
function hint(){
getNumber = document.querySelector('#number').value;
var myNumber = parseInt(getNumber);

var guessDifference = Math.abs(myNumber - randomNumber);
  if (guessDifference ==0){
    showHint.style.display = 'block';
    showHintText.innerHTML = " ";
    showHintImage.innerHTML = "<img src='img/winner.png' alt='trofeo ganador' class='winner_image'/>";

  } else if (guessDifference <=5){
    showHint.style.display = 'block';
    showHintText.innerHTML = "<p>¡Caliente Caliente! Casi lo tienes</p>";
    showHintImage.innerHTML = "<img src='img/hot.png' alt='pista caliente'/><img src='img/hot.png' alt='pista caliente'/>";

  } else if (guessDifference < 10){
    showHint.style.display = 'block';
    showHintText.innerHTML ="<p>¡Caliente! estás más cerca</p>";
    showHintImage.innerHTML = "<img src='img/hot.png' alt='pista caliente'/>";

  } else if (guessDifference < 15) {
    showHint.style.display = 'block';
    showHintText.innerHTML = "<p>Frio, pero te estás acercando</p>";
    showHintImage.innerHTML = "<img src='img/cold.png' alt='pista frio'/>";

  } else{
    showHint.style.display = 'block';
    showHintText.innerHTML ="<p>Frio Frio...sigue intentándolo</p>";
    showHintImage.innerHTML = "<img src='img/cold.png' alt='pista frio'/><img src='img/cold.png' alt='pista frio'/>";
  }
}

//SECCIÓN PUNTUACIÓN
//variables necesarias
var playerName = document.querySelector("#player");
var scoresList = [];
var highScoresList = document.querySelector(".scores_list");

function getHighScores() {
  var player = {
    name: playerName.value,
    score: guessCount
  };
  //para introducir al nuevo jugador en el array
  scoresList.push(player);
  //para ordenar scores de menor a mayor
  scoresList.sort(compareScores);

  var allScoresList = '';
  for (var i = 0; i < scoresList.length; i++) {
    allScoresList += '<li>' + scoresList[i].name + ' | Intentos: ' + scoresList[i].score + '</li>';
    showScores();
  }
  highScoresList.innerHTML = allScoresList;
}

function compareScores(first, second){
    if (first.score == second.score)
        return 0;
    if (first.score < second.score)
        return -1;
    else
        return 1;
}

var player_button = document.querySelector('#send_player');
player_button.addEventListener('click', getHighScores);

//RESET GAME
function clearFields() {
  document.getElementById('message').innerHTML = '';
  document.getElementById('hint_image').innerHTML = '';
  document.getElementById('number').value = '';
  showPlayerSection.style.display= 'none';
}

function resetGame() {
  guessCount= 0;
  guessCounter();
  clearFields();
  randomNumber = getRandomNumber();
  document.querySelector('#message1').innerHTML = "<p>el numero aleatorio es " + randomNumber+"</p>";
				play.disabled =false;
}

var retry_button = document.querySelector('#try_again');
retry_button.addEventListener ('click', resetGame);
