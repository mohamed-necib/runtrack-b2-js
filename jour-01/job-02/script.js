
function myStringLength(string) {
  let length = 0;
  while (string[length] !== undefined) {
    length++;
  }
  return length;
}


function myCountChar(haystack, needle) {
  let count = 0;

  for(let i = 0; i < myStringLength(haystack); i++) {
    if (haystack[i] === needle) {
      count++
    }
  }
  return count
}

myCountChar("Hello World", "o");