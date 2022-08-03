const quadroPixel = document.getElementById('pixel-board');
const divAdd1 = document.createElement('div');
let pixel = document.getElementsByClassName('pixel')
divAdd1.className = 'color';
const paleta = document.getElementById('color-palette');

let blue = document.querySelector('.color.blue');
let black = document.querySelector('.color.black');
let red = document.querySelector('.color.red');
let green = document.querySelector('.color.green');

for(let index = 1; index <= 25; index += 1){   	
    let divAdd = document.createElement('div')	
    divAdd.className = 'pixel' 	
    quadroPixel.appendChild(divAdd)}

red.addEventListener('click', () => {
    red.classList.add('selected')
    black.classList.remove('selected')
    blue.classList.remove('selected')
    green.classList.remove('selected') 
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
    green.classList.add('selected')
    black.classList.remove('selected')
    blue.classList.remove('selected')
    red.classList.remove('selected') 
});

sessionStorage.setItem('cor', 'color black selected')

paleta.addEventListener('click', (object) => {
    const capturaCor = object.target.className
    sessionStorage.setItem('cor', capturaCor)
 

});

quadroPixel.addEventListener('click', (object) => {
    let capturaCor = object.target.className = 'pixel'
    let select = sessionStorage.cor 
    select = select.split().join().split(' ')
    capturaCor = object.target.classList.add(select[0])
    capturaCor = object.target.classList.add(select[1])
    //capturaCor = object.target.classList.add(select[2])
    
})

reset = document.getElementById('clear-board')
reset.addEventListener('click', function () {
for(let index = 0; index <= 24; index += 1){   	
    let select = document.getElementsByClassName('pixel')[index]
    if (select.classList.contains('color')){
    select.style.background = 
    select = select.className = 'pixel'}
    
    }
})


