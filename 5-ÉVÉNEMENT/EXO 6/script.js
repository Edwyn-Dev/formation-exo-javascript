document.getElementById('valider').addEventListener('click',
    function () {
        const premierNombre = document.getElementById('premier_nombre').value;
        const deuxiemeNombre = document.getElementById('deuxieme_nombre').value;
        const troisiemeNombre = document.getElementById('troisieme_nombre').value;
        const quatriemeNombre = document.getElementById('quatrieme_nombre').value;

        const firstCalcul = premierNombre * deuxiemeNombre;
        const secondCalcul = troisiemeNombre / quatriemeNombre;
        const lastCalcul = firstCalcul + secondCalcul;

        alert(lastCalcul)
    }
)