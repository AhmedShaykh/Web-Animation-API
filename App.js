var elem = document.querySelector('#box');

elem.animate([
    {transform: 'translate(0 , 0)'},
    {transform: 'translate(600px , 0)'},
    {transform: 'translate(0 , 0)'}
],{
    duration: 1500,
    iterations: Infinity
})

var elem = document.querySelector('#box2');

elem.animate([
    {transform: 'translate(0 , 0)'},
    {transform: 'translate(400px , 400px)'},
    {transform: 'translate(0 , 0)'}
],{
    duration: 1500,
    iterations: Infinity
})

var elem = document.querySelector('#box3');

elem.animate([
    {transform: 'translate(0 , 0)' , background: 'darkslategrey'},
    {transform: 'translate(400px , 0)' , backgorund: 'yellow'},
    {transform: 'translate(400px , 400px)' , backgorund: 'blue'},
    {transform: 'translate(0 , 400px)' , backgorund: 'green'},
    {transform: 'translate(0 , 0)' , backgorund: 'pink'}
],{
    duration: 4000,
    iterations: Infinity
})