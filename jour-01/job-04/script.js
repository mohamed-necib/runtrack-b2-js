
function myStringLength(string) {
  let length = 0;
  while (string[length] !== undefined) {
    length++;
  }
  return length;
}

function myArraySum(array) {
  let numb = 0;
  for(let i = 0; i < myStringLength(array); i++ ) {
    numb += array[i];
  }
  return numb;
}

myArraySum([4,24,52,14,32,56]);