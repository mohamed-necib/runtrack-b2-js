// Fonction me permettant d'avoir la taille de ma chaine de caractères
function myStringLength(string) {
  let length = 0;
  while (string[length] !== undefined) {
    length++;
  }
  return length;
}

function myIsInString(haystack, needle) {
  for (let i = 0; i <= myStringLength(haystack) - myStringLength(needle); i++) {
    let state = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        state = false;
        break;
      }
    }
    if (state) {
      return true;
    }
  }
  return false;
}

myIsInString("Hello World", "llo");
