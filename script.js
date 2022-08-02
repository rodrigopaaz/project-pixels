
/* document.addEventListener('click', function (event) {
    if ( event.target.classList.contains( 'accordion-link' ) ) {
        // Do something...
    }
}, false); */

let cores = document.getElementById('cores')
let classe = document.getElementById('quadro')
    let divAdd1 = document.createElement('div')
    divAdd1.className = 'blue' 
    cores.appendChild(divAdd1)
    let divAdd2 = document.createElement('div')
    divAdd2.className = 'red' 
    cores.appendChild(divAdd2)
    let divAdd3 = document.createElement('div')
    divAdd3.className = 'green' 
    cores.appendChild(divAdd3)
    let divAdd4 = document.createElement('div')
    divAdd4.className = 'black' 
    cores.appendChild(divAdd4)

for(let index = 1; index <= 25; index += 1){   
let divAdd = document.createElement('div')
divAdd.className = 'paintBoard' 
classe.appendChild(divAdd)}

let blue = document.querySelector('div.blue')
let black = document.querySelector('div.black')
let red = document.querySelector('div.red')
let green = document.querySelector('div.green')

blue.addEventListener('click', function(){
sessionStorage.setItem('color','blue')    
})
black.addEventListener('click', function(){
    sessionStorage.setItem('color','black')    
    })
    red.addEventListener('click', function(){
        sessionStorage.setItem('color','red')    
        })
        green.addEventListener('click', function(){
            sessionStorage.setItem('color','green')    
            })

setColor = document.querySelector('div.paintBoard')
setColor.addEventListener('click', function(){
    setcolor.style.background = sessionStorage.color

})

function clicaNaPaleta(evento){
    let corClicada = evento.target.classname;
    let corFavorita = document.getElementById('cor-favorita');
    corFavorita.className = corClicada;

    let container = document.querySelector('#paleta');
    container.addEventListener('click', clicaNaPaleta);
}







/* classe.addEventListener('click', function (event) {
    if ( event.target.classList.contains('div') ) {
        classe.style.background = 'blue'
    }
    else { classe.style.background = 'green'}
}, false); */

