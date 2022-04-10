var elem = document.querySelector('#Cloud');

elem.animate([
    { transform: 'translate(0 , 20px)' },
    { transform: 'translate(400px ,80px)' },
    { transform: 'translate(1200px ,20px)' },
    { transform: 'translate(400px ,80px)' },
    { transform: 'translate(0 , 20px)' }
], {
    duration: 4000,
    iterations: Infinity
})