const catEl = document.getElementById("cat");
const startTime = new Date().getTime();
const speed = 100; // Vitesse en pixels par seconde

const walkTheCat = function() {
    const currTime = new Date().getTime();
    const secondsElapsed = (currTime - startTime) / 1000;
    const newPosition = speed * secondsElapsed;
    
    catEl.style.left = newPosition + 'px';
    
    window.requestAnimationFrame(walkTheCat);
};

walkTheCat();
