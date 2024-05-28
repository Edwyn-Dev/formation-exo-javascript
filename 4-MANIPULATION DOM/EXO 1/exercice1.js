

const monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";
document.getElementById('viewport').appendChild(monDiv);

const monSecondDiv = document.createElement('div');
document.getElementById('viewport').appendChild(monSecondDiv);
monSecondDiv.style.backgroundColor = "red";
monSecondDiv.style.width = '100px';
monSecondDiv.style.height = '100px';

const spanSupprime = document.getElementById('aSupprimer');
document.getElementById('viewport').removeChild(spanSupprime);






