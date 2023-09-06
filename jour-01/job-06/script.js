
function square(number){
  return number **2;
}


function mySquareArray(array){
  let myArray = [];

  for(let number of array){
    myArray = [...myArray, square(number)]
  }
  return myArray;
}

mySquareArray([3,8,4,2,5]);
