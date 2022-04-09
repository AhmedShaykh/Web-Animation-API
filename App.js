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