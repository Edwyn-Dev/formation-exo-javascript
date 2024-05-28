const seconds = document.getElementById("seconds");
let interval;

const countUp = function() {
    seconds.textContent = parseInt(seconds.textContent) + 1;
    interval = setTimeout(countUp, 1000);
};

interval = setTimeout(countUp, 1000);

const stopCountUp = function() {
    clearTimeout(interval);
};

const stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);
