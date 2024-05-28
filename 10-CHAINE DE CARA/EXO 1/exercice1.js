

const monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

//Completer le code suivant pour afficher la longueur de la variable monTexte

alert(`Largeur du texte : ${monTexte.length}ka`);

//Ajouter du code ci dessous pour réaliser la suite de l'exercice
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < monTexte.length; i++) {
        if (monTexte[i].toLowerCase() == "i") {
            if (!(document.getElementById('position').textContent)) {
                document.getElementById('position').textContent = i;
            }
        }
    };


    const newText = monTexte.toLowerCase();
    document.getElementById('chaineMaj').textContent = newText;


    let numberOfA = 0;
    for (let i = 0; i < monTexte.length; i++) {
        if (monTexte[i].toLowerCase() === "a") {
            numberOfA++;
        }
    };

    alert(`lettre 'a' trouvé ${numberOfA} fois`);
})