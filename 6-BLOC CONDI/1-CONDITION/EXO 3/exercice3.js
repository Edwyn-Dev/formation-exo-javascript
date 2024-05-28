

/* Modifier le code ci dessous pour réaliser l'exercice */
let x = 0, y = 12, i = 0;

setInterval(() => {
    if (x === y) {
        document.getElementById('monDiv').innerHTML = `TENTATIVE FINALE...✅ La variable x (${x}) est bien supérieure à la variable y (${y})`;
    } else {
        i++
        x += 3
        document.getElementById('monDiv').innerHTML = `TENTATIVE NUMÉRO ${i}...⛔ La variable x (${x - 3}) est augmenter de 3 ! Elle doit être égale à 12.`;
    }
}, 2000);

