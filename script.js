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

paleta.addEventListener('click', (object) => {
    const capturaCor = object.target.className.split(' ')
    sessionStorage.setItem('cor', capturaCor)
    

});

quadroPixel.addEventListener('click', (object) => {
    let recover = JSON.stringify(sessionStorage.cor)
    recover = recover.split(' ')
    recover = recover.join()
    recover = recover.replace(/,/g,"','")
    recover = recover.replace(/"/g,"'")
    console.log(recover)
    const capturaCor = object.target.classList.add(recover[0])
    
    
    
})



