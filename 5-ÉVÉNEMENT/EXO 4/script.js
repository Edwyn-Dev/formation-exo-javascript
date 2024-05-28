document.getElementById('valider').addEventListener('click',

    function () {
        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const ville = document.getElementById('ville').value;
        alert(`Nom:${nom}|Prénom:${prenom}|Ville:${ville}|`)
    }

)