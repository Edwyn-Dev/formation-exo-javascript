document.getElementById('valider').addEventListener('click',
    function () {
        const pointure = document.getElementById('pointure').value;
        const annee = document.getElementById('annee').value;

        const resultat = (
            (
                (
                    (
                        pointure * 2
                    ) + 5
                ) * 50
            ) - annee
        ) + 1766;


        alert(resultat)
    }
)