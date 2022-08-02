/* document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'accordion-link' ) ) {
        // Do something...
    }
}, false); */

/* const cores = document.getElementById('color-palette'); */
const classe = document.getElementById('pixel-board');
const divAdd1 = document.createElement('div');
divAdd1.className = 'color';

for (let index = 1; index <= 25; index += 1) {
  const divAdd = document.createElement('div');
  divAdd.className = 'pixel';
  classe.appendChild(divAdd);
}

const blue = document.querySelector('.color.blue');
const black = document.querySelector('.color.black');
const red = document.querySelector('.color.red');
const green = document.querySelector('.color.green');

blue.addEventListener('click', () => {
  sessionStorage.setItem('color', 'blue');
});
black.addEventListener('click', () => {
  sessionStorage.setItem('color', 'black');
});
red.addEventListener('click', () => {
  sessionStorage.setItem('color', 'red');
});
green.addEventListener('click', () => {
  sessionStorage.setItem('color', 'green');
});

/* const setColor = document.querySelector('div.paintBoard');
setColor.addEventListener('click', () => {
  setcolor.style.background = sessionStorage.color;
}); */

/* function clicaNaPaleta(evento) {
  let corClicada = evento.target.classname;
  let corFavorita = document.getElementById('cor-favorita');
  corFavorita.className = corClicada;

  let container = document.querySelector('#paleta');
  container.addEventListener('click', clicaNaPaleta);
}
 */
/* classe.addEventListener('click', function (event) {
    if ( event.target.classList.contains('div') ) {
        classe.style.background = 'blue'
    }
    else { classe.style.background = 'green'}
}, false); */
