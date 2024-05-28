// Récupère l'élément "viewport"
const viewport = document.getElementById('viewport');

// Récupère l'élément "Kenny"
const kenny = document.getElementById('kenny');

// Déplacer Kenny de 10 pixels vers le haut
function moveKennyTop() {
    const currentTop = parseInt(kenny.style.top) || 0;
    const newTop = currentTop - 10;
    kenny.style.top = `${newTop}px`;

    // Vérifie si Kenny dépasse les bordures du viewport
    if (newTop < 0) {
        // Kenny est en dehors du viewport, alors alert
        alert("Kenny est mort !");
        // Replacer Kenny en left=200, top=200
        kenny.style.left = '200px';
        kenny.style.top = '200px';
    }
}

// Déplacer Kenny de 10 pixels vers le bas
function moveKennyDown() {
    const currentTop = parseInt(kenny.style.top) || 0;
    const newTop = currentTop + 10;
    kenny.style.top = `${newTop}px`;

    // Vérifie si Kenny dépasse les bordures du viewport
    if (newTop + kenny.clientHeight > viewport.clientHeight) {
        // Kenny est en dehors du viewport, alors alert
        alert("Kenny est mort !");
        // Replacer Kenny en left=200, top=200
        kenny.style.left = '200px';
        kenny.style.top = '200px';
    }
}

// Déplacer Kenny de 10 pixels vers la gauche
function moveKennyLeft() {
    const currentLeft = parseInt(kenny.style.left) || 0;
    const newLeft = currentLeft - 10;
    kenny.style.left = `${newLeft}px`;

    // Vérifie si Kenny dépasse les bordures du viewport
    if (newLeft < 0) {
        // Kenny est en dehors du viewport, alors alert
        alert("Kenny est mort !");
        // Replacer Kenny en left=200, top=200
        kenny.style.left = '200px';
        kenny.style.top = '200px';
    }
}

// Déplacer Kenny de 10 pixels vers la droite
function moveKennyRight() {
    const currentLeft = parseInt(kenny.style.left) || 0;
    const newLeft = currentLeft + 10;
    kenny.style.left = `${newLeft}px`;

    // Vérifie si Kenny dépasse les bordures du viewport
    if (newLeft + kenny.clientWidth > viewport.clientWidth) {
        // Kenny est en dehors du viewport, alors alert
        alert("Kenny est mort !");
        // Replacer Kenny en left=200, top=200
        kenny.style.left = '200px';
        kenny.style.top = '200px';
    }
}

const btnMoveDown = document.getElementById('down');
btnMoveDown.addEventListener('click', moveKennyDown);

const btnMoveTop = document.getElementById('up');
btnMoveTop.addEventListener('click', moveKennyTop);

const btnMoveLeft = document.getElementById('left');
btnMoveLeft.addEventListener('click', moveKennyLeft);

const btnMoveRight = document.getElementById('right');
btnMoveRight.addEventListener('click', moveKennyRight);
