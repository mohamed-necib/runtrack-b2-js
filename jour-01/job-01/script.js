
// Fonction me permettant d'avoir la taille de ma chaine de caractères
function myStringLength(string) {
  let length = 0;
  while (string[length] !== undefined) {
    length++;
  }
  return length;
}

// Créer une fonction qui permet de transformer chaques caractères de mon string en majuscule sans utiliser la fonction js .toUpperCase.

function myUpperCase(string) {
  const min = "abcdefghijklmnopqrstuvwxyz";
  const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let myString ="";

  for (let i = 0; i < myStringLength(string); i++) {
    for (let j = 0; j < myStringLength(min); j++) {
      if (string[i] === min[j]) {
        myString += maj[j];
        break;
      } else if (j === 25){
        myString += string[i];
        break;
      }
    }
  }
  return myString;
}

  console.log(myUpperCase("hello"));
