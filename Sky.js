var elem = document.getElementById('clouds');

var animatedeeElem = elem.animate([
    { transform: 'translate(800px , 0)' },
    { transform: 'translate(50px , 0)' },
], {
    duration: 10000,
    iterations: Infinity
})

var elem = document.getElementById('birds');

var animatedeeElem = elem.animate([
    { transform: 'translate(0 , 0)' },
    { transform: 'translate(900px , 0)' },
], {
    duration: 15000,
    iterations: Infinity,
    playbackRate: -4
})

var elem = document.getElementById('plane');

var animatedeeElem = elem.animate([
    { transform: 'translate(0 , 0)' },
    { transform: 'translate(900px , 0)' },
], {
    duration: 3000,
    iterations: Infinity
})