let quadroPixel = document.getElementById('pixel-board');
const divAdd1 = document.createElement('div');
let pixel = document.getElementsByClassName('pixel');
divAdd1.className = 'color';
const paleta = document.getElementById('color-palette');

let blue = document.querySelector('.color.blue');
let black = document.querySelector('.color.black');
let red = document.querySelector('.color.red');
let green = document.querySelector('.color.green');

for (let index = 1; index <= 25; index += 1) {
  let divAdd = document.createElement('div');
  divAdd.className = 'pixel';
  quadroPixel.appendChild(divAdd);
}

red.addEventListener('click', () => {
  red.classList.add('selected');
  black.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
});
black.addEventListener('click', () => {
  black.classList.add('selected');
  red.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
});
blue.addEventListener('click', () => {
  blue.classList.add('selected');
  red.classList.remove('selected');
  black.classList.remove('selected');
  green.classList.remove('selected');
});
green.addEventListener('click', () => {
  green.classList.add('selected');
  black.classList.remove('selected');
  blue.classList.remove('selected');
  red.classList.remove('selected');
});

sessionStorage.setItem('cor', 'color black selected');
paleta.addEventListener('click', (object) => {
  const capturaCor = object.target.className;
  sessionStorage.setItem('cor', capturaCor);
});

quadroPixel.addEventListener('click', (object) => {
  let capturaCor = (object.target.className = 'pixel');
  let select = sessionStorage.cor;
  select = select.split().join().split(' ');
  capturaCor = object.target.classList.add(select[0]);
  capturaCor = object.target.classList.add(select[1]);
});

let reset = document.getElementById('clear-board');
reset.addEventListener('click', () => {
  for (let index = 0; index <= 24; index += 1) {
    let select = document.getElementsByClassName('pixel')[index];
    if (select.classList.contains('color')) {
      select.style.background = select = select.className = 'pixel';
    }
  }
});

let changeSize = document.getElementById('size');
changeSize.addEventListener('submit', function () {
  let sizeInput = document.querySelector('#board-size');
  sizeInput.value = Number(sizeInput.value) * Number(sizeInput.value);
  if (sizeInput.value <= 0) {
    alert('Board inválido!');
  } else {
    sessionStorage.setItem('size', sizeInput.value);
  }
});
let changeValue = sessionStorage.size;
changeValue = Number(changeValue);
if (changeValue > 0 && changeValue < 250) {
  for (let index = 0; index <= changeValue - 1; index += 1) {
    let divAdd = document.createElement('div');
    divAdd.className = 'pixel';
    quadroPixel.appendChild(divAdd);
  }
}

if (changeValue >= 2500) {
  quadroPixel.style.width = '1000px';
  for (let index = 1; index <= 2500; index += 1) {
    let divAdd = document.createElement('div');
    divAdd.className = 'pixel';
    quadroPixel.appendChild(divAdd);
  }
}

if (changeValue > 0) {
  for (let index = 1; index <= 25; index += 1) {
    quadroPixel.removeChild(pixel[0]);
  }
}

function minSize(size) {
  if (size === 1) {
    for (let index = 1; index <= 24; index += 1) {
      let divAdd = document.createElement('div');
      divAdd.className = 'pixel';
      quadroPixel.appendChild(divAdd);
    }
  }
  if (size === 4) {
    for (let index = 1; index <= 21; index += 1) {
      let divAdd = document.createElement('div');
      divAdd.className = 'pixel';
      quadroPixel.appendChild(divAdd);
    }
  }
  if (size === 9) {
    for (let index = 1; index <= 16; index += 1) {
      let divAdd = document.createElement('div');
      divAdd.className = 'pixel';
      quadroPixel.appendChild(divAdd);
    }
  }
  if (size === 16) {
    for (let index = 1; index <= 9; index += 1) {
      let divAdd = document.createElement('div');
      divAdd.className = 'pixel';
      quadroPixel.appendChild(divAdd);
    }
  }
}

minSize = minSize(changeValue);

/* window.onload=function random() {
  for (let index = 0; index <= pixel.length - 1; index += 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let select = document.getElementsByClassName('pixel')[index]
    select.style.background = `rgba(${r}, ${g}, ${b})`;
  }
}
 */

