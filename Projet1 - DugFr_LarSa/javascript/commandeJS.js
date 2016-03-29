//Validation des champs

function surligne(champ, erreur) 
{ 
if(erreur) 
champ.style.backgroundColor = "#fba"; 
else 
champ.style.backgroundColor = ""; 
}

function verifNom(champ) 
{ 
if(champ.value.length < 2 || champ.value.length > 25) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function verifPrenom(champ) 
{ 
if(champ.value.length < 2 || champ.value.length > 25) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function verifMail(champ) 
{ 
var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; 
if(!regex.test(champ.value)) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}


function veriftelephone(champ) 
{
var regex =/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
if(!regex.test(champ.value)) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function verifcredit(champ) 
{
var regex =/^(\()?\d{4}(\))?( |\s)?\d{4}( |\s)?\d{4}( |\s)\d{4}$/;

if(!regex.test(champ.value)) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------

//calcule du prix total

function calculerPrix()
{
var objet = document.getElementById(Marchandise).value;
var combien = document.getElementById(nombre);
var prix, prixTotal;

prix = objet*combien;
prixTotal = prix * (14.75/100);

alert  ("Le prix total est de : " + prixTotal);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------

//message alert
function valider()
{
//if ()
//{
//alert ("vous devez entrer les données de la bonne façons");
//}
//else
//{
//
alert ("La commande a été faite au nom de : " + document.getElementsByName("Prenom")[0].value + " " + 
  + document.getElementsByName("nom")[0].value+ (". Elle sera envoyer a l'adresse suivante : ") 
  + document.getElementsByName("Adresse")[0].value+ ". Vous recevrez une confirmation d'achat avec les détails par courriel à cette adresse : " 
  + document.getElementsByName("Email").value);
//}
}