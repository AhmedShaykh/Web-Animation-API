var elem = document.querySelector('#Cloud');

var animatedElem = elem.animate([
    { transform: 'translate(0 , 30px)' },
    { transform: 'translate(550px ,80px)' },
    { transform: 'translate(1000px ,20px)' },
    { transform: 'translate(550px ,80px)' },
    { transform: 'translate(0 , 30px)' }
], {
    duration: 4000,
    iterations: Infinity
})

document.addEventListener("mousedown", () => {
    animatedElem.pause();
})

document.addEventListener("mouseup", () => {
    animatedElem.play();
})