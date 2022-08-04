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

sessionStorage.setItem('cor', 'black');

paleta.addEventListener('click', (object) => {
  const capturaCor = object.target.style.background;
  sessionStorage.setItem('cor', capturaCor);
});

quadroPixel.addEventListener('click', (object) => {
  let capturaCor = (object.target.className = 'pixel');
  let select = sessionStorage.cor;
  capturaCor = object.target.style.background =select;

});

let reset = document.getElementById('clear-board');
reset.addEventListener('click', () => {
  for (let index = 0; index <= 24; index += 1) {
    let select = document.getElementsByClassName('pixel')[index];
    if (select.style.background != 'white') {
      select.style.background = select = select.style.background = 'white';
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
    quadroPixel.style.width='1000px'
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

/*   for (let index = 1; index <= 1; index += 1) {
    let divAdd = document.createElement('div');
    divAdd.className = 'pixel';
    quadroPixel.appendChild(divAdd);  
} */
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


    function random(valor) {
      let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    red.style.background = `rgba(${r}, ${g}, ${b})`;
     }
     
random = random(red);

function random2(valor) {
    let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  let redPixel = document.querySelectorAll('.color');
  let back = green.style.background = `rgba(${r}, ${g}, ${b})`;
  green.style.background = back;
   }
   
random2 = random2(green);

function random3(valor) {
    let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  let redPixel = document.querySelectorAll('.color');
  let back = blue.style.background = `rgba(${r}, ${g}, ${b})`;
  blue.style.background = back;
   }
   
random3 = random3(red); 

function random4(valor) {
    let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  let redPixel = document.querySelectorAll('.color');
  let back = black.style.background = 'black';
  black.style.background = back;
   }
   
random4 = random4(black); 
 