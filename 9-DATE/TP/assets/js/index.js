document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#countdown-form')
    const submitButton = document.querySelector('#submit');
    const pauseButton = document.querySelector('#pause');
    const resumeButton = document.querySelector('#resume');
    const resetButton = document.querySelector('#reset');
    const countdownArea = document.querySelector('#countdown-area');

    let countdownInterval;
    let paused = false;
    let remainingTime;
    let endTime;

    function calculateTimestamp(sec, min, heure) {
        return (sec * 1000) + (min * 60 * 1000) + (heure * 60 * 60 * 1000);
    }

    function startCountdown(duration) {
        // Set the end time based on the duration
        endTime = Date.now() + duration;

        // Clear any existing intervals to prevent multiple intervals running simultaneously
        clearInterval(countdownInterval);

        countdownInterval = setInterval(() => {
            if (!paused) {
                // Calculate the remaining time
                remainingTime = endTime - Date.now();

                if (remainingTime <= 0) {
                    clearInterval(countdownInterval);
                    remainingTime = 0;
                }

                // Calculate hours, minutes, and seconds from remaining time
                const hours = Math.floor(remainingTime / (1000 * 60 * 60));
                const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

                // Update the countdown display
                countdownArea.innerHTML = `<h1>${hours}h ${minutes}m ${seconds}s</h1>`;
            }
        }, 1000);
    }

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Get the input values
        const seconde = document.querySelector('input[name="seconde"]').value;
        const minute = document.querySelector('input[name="minute"]').value;
        const heure = document.querySelector('input[name="heure"]').value;
        form.reset();

        // Parse the input values to integers
        const sec = parseInt(seconde, 10) || 0;
        const min = parseInt(minute, 10) || 0;
        const hr = parseInt(heure, 10) || 0;

        // Calculate the total duration in milliseconds
        const timestamp = calculateTimestamp(sec, min, hr);

        // Clear any existing interval and start a new countdown
        clearInterval(countdownInterval);
        paused = false;
        startCountdown(timestamp);
    });

    pauseButton.addEventListener('click', () => {
        // Pause the countdown by setting the paused flag to true
        paused = true;
    });

    resumeButton.addEventListener('click', () => {
        if (paused) {
            // Calculate remaining time based on paused state
            paused = false;
            endTime = Date.now() + remainingTime;
            startCountdown(remainingTime);
        }
    });

    resetButton.addEventListener('click', () => {
        // Clear the countdown interval and reset the display
        clearInterval(countdownInterval);
        countdownArea.innerHTML = '<h1>...</h1>';
        paused = false;
        remainingTime = 0;
    });
});
