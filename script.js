'use strict';
/* 
/////OBTENDO ELEMENTO

console.log(document.querySelector('.message').textContent);

/////DEFININDO ELEMENTO

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

///////////////////////////////////

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 11;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
 */

///// evento é algo em que acontece na pagina, por exemplo um clique no mouse, ou um movimento do mouse ou uma tecla pressionada ou muitos outros eventos.
//// APP PASSO A PASSO///

//Selecionamos o botão check usando querySelector e, em seguida usamos o metodo ouvinte de evento add no elemento para anexar um manipulador de eventos e esse manipulador de eventos utilizou a função.
///O valor digitado será armazenado na variavel guess.

/// Precisamos de um valor aleatório entre 1 e 20, utilizamos Match.trunc.(Math.ramdom), que é um metodo Js que nos disponibiliza numeros entre 0 e 1.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  ///Quando não há entrada
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    //Quando o jogador vence
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number! 🥳🎉';
    displayMessage('Correct Number! 🥳🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //Armazendo o maior valor///
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Quando o guess High
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game 🤷‍♂️';
      displayMessage('You lost the game 🤷‍♂️');
      document.querySelector('.score').textContent = 0;
    }

    /*  }else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤷‍♂️';
      document.querySelector('.score').textContent = 0;
    }

    //Quando guess LOW
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤷‍♂️';
      document.querySelector('.score').textContent = 0;
    }*/
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
