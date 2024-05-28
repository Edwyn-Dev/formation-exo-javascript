document.getElementById('valider').addEventListener('click', function () {
    const premierNombre = document.getElementById('premier_nombre').value;
    const deuxiemeNombre = document.getElementById('deuxieme_nombre').value;

    const integer = Math.floor(premierNombre);
    const float = Math.round(deuxiemeNombre);

    const result = integer * float;

    alert('Le résultat est : ' + result);
});