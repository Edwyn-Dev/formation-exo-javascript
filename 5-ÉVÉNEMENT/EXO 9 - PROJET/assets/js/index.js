// Exécute ce code lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', () => {

    // Récupère tous les éléments ayant la classe 'choices'
    const allChoices = document.getElementsByClassName('choices');

    // Récupère l'élément avec l'ID 'container'
    const allChoicesContainer = document.getElementById('container');

    // Récupère l'élément actuellement actif dans le conteneur (celui qui a la classe 'active')
    let actuallyActive = allChoicesContainer.querySelector('.active');

    // Récupère les conteneurs pour le nom et le paragraphe par leur ID
    const containerInfoName = document.getElementById('name-part-body');
    const containerInfoParagraphe = document.getElementById('para-part-body');

    // Met les valeurs par défaut pour Nom et Description
    containerInfoName.innerHTML = `<h2>Épaule</h2>`;
    containerInfoParagraphe.innerHTML = `<p>L'épaule est une articulation complexe reliant le bras au tronc. Elle est composée de l'humérus, de la scapula (omoplate) et de la clavicule. Cette articulation permet une grande amplitude de mouvement grâce à la coiffe des rotateurs, un groupe de muscles et de tendons qui stabilisent et mobilisent l'articulation.</p>`;

    // Définition des positions spécifiques pour chaque élément 'choices' en fonction de son ID
    const positions = {
        "1": { top: '80px' },
        "2": { top: '170px', left: '-10px' },
        "3": { top: '250px', left: '22px' },
        "4": { top: '275px', left: '63px' },
        "5": { top: '40px', left: '75px' },
        "6": { top: '-80px', left: '100px' }
    };

    // Définition des noms et descriptions pour chaque ID de choices
    const infoData = {
        "1": { name: "Épaule", description: "L'épaule est une articulation complexe reliant le bras au tronc. Elle est composée de l'humérus, de la scapula (omoplate) et de la clavicule. Cette articulation permet une grande amplitude de mouvement grâce à la coiffe des rotateurs, un groupe de muscles et de tendons qui stabilisent et mobilisent l'articulation." },
        "2": { name: "Poignet", description: "Le poignet est une articulation qui relie l'avant-bras à la main. Il est formé par l'extrémité distale des os du radius et de l'ulna, ainsi que par les huit os du carpe. Cette structure permet des mouvements de flexion, d'extension, d'abduction et d'adduction, essentiels pour la mobilité de la main." },
        "3": { name: "Genoux", description: "Le genou est l'une des plus grandes et des plus complexes articulations du corps. Il connecte le fémur à la tibia et comprend également la rotule (patella). Les mouvements du genou sont principalement de flexion et d'extension, stabilisés par des ligaments cruciaux, tels que les ligaments croisés antérieur et postérieur, ainsi que les ménisques qui amortissent les chocs." },
        "4": { name: "Cheville", description: "La cheville est l'articulation qui relie la jambe au pied, constituée par l'extrémité inférieure du tibia et de la fibula, ainsi que par le talus du pied. Elle permet des mouvements de flexion plantaire et dorsale, ainsi que de légère rotation, et est stabilisée par divers ligaments, notamment les ligaments latéraux." },
        "5": { name: "Hanche", description: "La hanche est une articulation synoviale de type sphéroïde qui relie le fémur au bassin. Elle permet des mouvements dans plusieurs directions : flexion, extension, abduction, adduction et rotation. La stabilité de l'articulation est assurée par la capsule articulaire et des ligaments forts, ainsi que par les muscles environnants, tels que les muscles fessiers et les muscles de la cuisse." },
        "6": { name: "Coude", description: "Le coude est l'articulation qui connecte le bras à l'avant-bras, comprenant trois os : l'humérus, le radius et l'ulna. Il permet principalement les mouvements de flexion et d'extension de l'avant-bras, ainsi que des mouvements de rotation grâce à l'articulation radio-ulnaire proximale. La stabilité du coude est maintenue par des ligaments forts et des tendons." }
    };

    for (let choice of allChoices) {

        // Récupère la position correspondante à l'ID de l'élément actuel
        const pos = positions[choice.id];

        if (pos) {

            // Applique le style de positionnement 'top'
            choice.style.top = pos.top;

            // Applique le style de positionnement 'left' s'il est défini
            if (pos.left) choice.style.left = pos.left;
        }
    }

    // Ajoute un écouteur d'événements au conteneur pour gérer les clics sur les éléments 'choices'
    allChoicesContainer.addEventListener('click', (event) => {

        // Vérifie si l'élément cliqué ou son parent le plus proche est un élément 'choices'
        const clickedChoice = event.target.closest('.choices');

        // Si l'élément cliqué n'est pas un 'choices', quitte la fonction
        if (!clickedChoice) return;

        // Si un autre élément est actuellement actif et ce n'est pas l'élément cliqué
        if (actuallyActive && actuallyActive !== clickedChoice) {

            // Retire la classe 'active' de l'élément actif actuel
            actuallyActive.classList.remove('active');

            // Réinitialise la couleur de fond de l'élément actif actuel
            actuallyActive.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        }

        // Alterne l'état actif de l'élément cliqué
        const isActive = clickedChoice.classList.toggle('active');
        
        // Met à jour la référence de l'élément actuellement actif
        actuallyActive = isActive ? clickedChoice : null;

        // Récupère l'information correspondante à l'ID de l'élément cliqué
        const info = infoData[clickedChoice.id];

        // Met à jour le contenu des conteneurs en fonction de l'état actif
        if (isActive) {
            containerInfoName.innerHTML = `<h2>${info.name}</h2>`;
            containerInfoParagraphe.innerHTML = `<p>${info.description}</p>`;
            clickedChoice.style.backgroundColor = 'rgba(153, 2, 2, 0.6)';
        } else {
            containerInfoName.innerHTML = "";
            containerInfoParagraphe.innerHTML = "";
            clickedChoice.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        }
    });
});
