const colorToGuess = document.getElementById('rgb-color');
const arrayBalls = document.getElementsByClassName('ball');
const wonOrLostMessage = document.getElementById('answer');
const resetColorsButton = document.getElementById('reset-game');
const scoreElement = document.getElementById('score');

let score = 0;
scoreElement.innerHTML = `${score}`;

function generateRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();
  return `rgb(${red}, ${green}, ${blue})`;
}

function generateDifferentColor() {
  let randomColor = generateRandomColor();
  while (randomColor === colorToGuess.innerHTML.toLowerCase()) {
    randomColor = generateRandomColor();
  }
  return randomColor;
}

function fillBalls() {
  const rightBall = Math.floor(Math.random() * 6);
  for (let i = 0; i < arrayBalls.length; i += 1) {
    if (i === rightBall) {
      arrayBalls[i].style.backgroundColor = colorToGuess.innerHTML.toLowerCase();
    } else {
      arrayBalls[i].style.backgroundColor = generateDifferentColor();
    }
  }
}

function chooseColor(event) {
  const selectedBall = event.target;
  if (wonOrLostMessage.innerHTML === 'Acertou!') {
    alert('Troque as cores!');
  } else if (selectedBall.style.backgroundColor === colorToGuess.innerHTML.toLowerCase()) {
    wonOrLostMessage.innerHTML = 'Acertou!';
    score += 3;
    scoreElement.innerHTML = `${score}`;
  } else {
    wonOrLostMessage.innerHTML = 'Errou! Tente novamente!';
  }
}

function addEventListenerToBalls() {
  for (let i = 0; i < arrayBalls.length; i += 1) {
    arrayBalls[i].addEventListener('click', chooseColor);
  }
}

function onLoadPage() {
  colorToGuess.innerHTML = generateRandomColor().toUpperCase();
  addEventListenerToBalls();
  fillBalls();
  wonOrLostMessage.innerHTML = 'Escolha uma cor';
}

resetColorsButton.addEventListener('click', onLoadPage);

window.onload = onLoadPage;
