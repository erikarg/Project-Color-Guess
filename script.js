const answer = document.getElementById('answer');
const balls = document.getElementsByClassName('ball');
const rgb = document.getElementById('rgb-color');
const score = document.getElementById('score');
let number = 0;
score.innerHTML = number;

function colorGenerator() {
  const firstNumber = Math.round(Math.random() * 255);
  const secondNumber = Math.round(Math.random() * 255);
  const thirdNumber = Math.round(Math.random() * 255);
  return `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`;
}

function randomColor() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = colorGenerator();
    balls[index].style.backgroundColor = balls[index];
  }
}

function randomRgb() {
  const random = Math.floor(Math.random() * 6);
  const rgb2 = balls[random].style.backgroundColor;
  rgb.innerText = rgb2.replace('rgb', '');
}

function checkAnswer() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', (event) => {
      const selected = event.target.style.backgroundColor;
      if (selected.replace('rgb', '') === rgb.innerText) {
        answer.innerText = 'Acertou!';
        number += 3;
        score.innerText = number;
      } else {
        answer.innerText = 'Errou! Tente novamente!';
      }
    });
  }
}
checkAnswer();

window.onload = () => {
  colorGenerator();
  randomColor();
  randomRgb();
  answer.innerText = 'Escolha uma cor';
};

const resetButton = document.getElementById('reset-game');
resetButton.addEventListener('click', window.onload);
