const button = document.getElementById('button');
let block1 = document.querySelector('.block1');
let block2 = document.querySelector('.block2');
let block3 = document.querySelector('.block3');

const move = () => {

  block1.classList.toggle('block1--move--out');
  block2.classList.toggle('block2--move--out');
  block3.classList.toggle('block3--move--out');
}
button.addEventListener('click', move);
