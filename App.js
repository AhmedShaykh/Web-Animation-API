var elem = document.querySelector('#box');

elem.animate([
    { transform: 'translate(0 , 0)' },
    { transform: 'translate(600px , 0)' },
    { transform: 'translate(0 , 0)' }
], {
    duration: 1500,
    iterations: Infinity
})

var elem = document.querySelector('#box2');

elem.animate([
    { transform: 'translate(0 , 0)' },
    { transform: 'translate(400px , 400px)' },
    { transform: 'translate(0 , 0)' }
], {
    duration: 1500,
    iterations: Infinity
})

var elem = document.querySelector('#box3');

elem.animate([
    { transform: 'translate(0 , 0)', backgroundColor: 'red' },
    { transform: 'translate(400px , 0)', backgroundColor: 'yellow' },
    { transform: 'translate(400px , 400px)', backgroundColor: 'blue' },
    { transform: 'translate(0 , 400px)', backgroundColor: 'green' },
    { transform: 'translate(0 , 0)', backgroundColor: 'pink' }
], {
    duration: 4000,
    iterations: Infinity
})

var elem = document.querySelector('#box4');

elem.animate([
    { transform: 'scale(0.5)', backgroundColor: 'whitesmoke' , color: 'black'},
    { transform: 'scale(1)', backgroundColor: 'black' , color: 'grey'},
    { transform: 'scale(0.5)', backgroundColor: 'whitesmoke' , color: 'black'}
], {
    duration: 1500,
    iterations: Infinity
})