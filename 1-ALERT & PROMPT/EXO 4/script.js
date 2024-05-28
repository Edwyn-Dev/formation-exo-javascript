// Le code ici
var PromptTextNom = prompt("inserez votre Nom");
var PromptTextPrenom = prompt("inserez votre Prénom");
var PromptTextVille = prompt("inserez votre Ville");

if (PromptTextNom && PromptTextPrenom && PromptTextVille) {
    alert(`Nom : ${PromptTextNom}\nPrénom : ${PromptTextPrenom}\nVille : ${PromptTextVille}`)
}