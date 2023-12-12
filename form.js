function verifier(){
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;

    var regexLettres = /^[a-zA-Z]+$/;

    if (regexLettres.test(nom) && regexLettres.test(prenom)) {
      alert("Le nom et le prénom sont valides.");
    } else {
      alert("Le nom ou le prénom n'est pas valide, veuillez utiliser uniquement des lettres.");
      return false;
    }
//date naissance
var dateNaissance = new Date(document.getElementById('dateN').value);

if (dateNaissance.getFullYear() >= 2006) {
  alert("La date de naissance doit être anférieure à 2006.");
  return false;
   alert("Nom correct : " + nom + "\nDate correcte : " + dateNaissance ); 
}
//classe
var dsi = document.getElementById('dsi').checked;
var sri = document.getElementById('sri').checked;
if (!dsi && !sri) {
  alert("Veuillez sélectionner votre classe.");
  return false;
}
//langage préféré
var optionSelected = document.querySelector('select[name="option"]').value;
if (optionSelected === '-----------selectionne un choix-----------') {
  alert("Veuillez sélectionner un langage préféré.");
  return false;
}
//sexe
var sexeFemme = document.getElementById('sexeFemme').checked;
var sexeHomme = document.getElementById('sexeHomme').checked;
if (!sexeFemme && !sexeHomme) {
  alert("Veuillez sélectionner votre sexe.");
  return false;
}

alert("Formulaire soumis avec succès!");
return true;
}
