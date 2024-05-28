document.addEventListener('DOMContentLoaded', () => {
    
    // Initialisation des variables
    let secretNumber = Math.floor(Math.random() * 100) + 1; // Génération d'un nombre aléatoire entre 1 et 100
    let attempts = 0; // Compteur de tentatives
    const maxAttempts = 10; // Nombre maximum de tentatives
    let guessedNumbers = []; // Tableau pour stocker les nombres proposés

    // Références aux éléments DOM
    const nombreProposerList = document.getElementById('nombre_proposer_list'); // Élément pour afficher les nombres proposés
    const nombreDevinette = document.getElementById('nombre_devinette'); // Élément pour afficher le message de résultat
    const myForm = document.getElementById('guess-form'); // Mon formulaire
    const nombreInput = document.querySelector('input[name="nombre"]'); // Champ de saisie nommée nombre
    const submitButton = document.querySelector('#submit'); // Bouton de soumission
    const retryButton = document.querySelector('#retry'); // Bouton de réinitialisation

    // Fonction pour initialiser le jeu
    function initializeGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1; // Réinitialisation du nombre secret
        attempts = 0; // Réinitialisation du compteur de tentatives
        guessedNumbers = []; // Réinitialisation de la liste des nombres proposés
        nombreProposerList.textContent = ''; // Réinitialisation de l'affichage des nombres proposés
        nombreDevinette.textContent = ''; // Réinitialisation du message de résultat
        nombreInput.value = ''; // Réinitialisation du champ de saisie
        nombreInput.disabled = false; // Réactivation du champ de saisie
        submitButton.style.display = 'inline-block'; // Affichage du bouton de soumission
        retryButton.style.display = 'none'; // Masquage du bouton de réinitialisation
    }

    // Fonction pour mettre à jour la liste des nombres proposés
    function updateGuessedNumbers(number) {
        guessedNumbers.push(number); // Ajout du nombre proposé au tableau
        myForm.reset()
        nombreProposerList.textContent = `${guessedNumbers.join(', ')}`; // Mise à jour de l'affichage des nombres proposés
    }

    // Fonction pour vérifier le nombre proposé
    function checkGuess() {
        const userGuess = Number(nombreInput.value); // Récupération du nombre proposé
        if (userGuess <= 1 || userGuess >= 100) {
            alert('Veuillez entrer un nombre valide entre 1 et 100 comprie.'); // Vérification de la validité du nombre proposé
            return;
        }

        attempts++; // Incrémentation du compteur de tentatives
        updateGuessedNumbers(userGuess); // Mise à jour de la liste des nombres proposés

        if (userGuess === secretNumber) {
            nombreDevinette.textContent = `Félicitations ! Vous avez deviné le nombre en ${attempts} tentative(s).`; // Message de réussite
            endGame(); // Fin du jeu
        } else if (attempts === maxAttempts) {
            nombreDevinette.textContent = `Désolé, vous avez épuisé vos ${maxAttempts} tentatives. Le nombre était ${secretNumber}.`; // Message d'échec après épuisement des tentatives
            endGame(); // Fin du jeu
        } else {
            nombreDevinette.textContent = `Incorrect ! Le nombre est trop ${userGuess < secretNumber ? 'bas' : 'haut'}. Vous avez ${maxAttempts - attempts} tentative(s) restante(s).`; // Indication pour le joueur
        }
    }

    // Fonction pour gérer la fin du jeu
    function endGame() {
        nombreInput.disabled = true; // Désactivation du champ de saisie
        submitButton.style.display = 'none'; // Masquage du bouton de soumission
        retryButton.style.display = 'inline-block'; // Affichage du bouton de réinitialisation
    }

    // Événement pour le bouton de soumission
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prévention de l'action par défaut du bouton
        checkGuess(); // Vérification du nombre proposé
    });

    // Événement pour le bouton de réinitialisation
    retryButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prévention de l'action par défaut du bouton
        initializeGame(); // Réinitialisation du jeu
    });

    // Initialisation du jeu au chargement de la page
    initializeGame();
});
