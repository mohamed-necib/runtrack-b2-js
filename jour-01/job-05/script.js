function myPrimeList(limit) {
  let numb = [];
  for (let i = 2; i <= limit; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      numb = [...numb, i];
    }
  }
  return numb;
}

console.log(myPrimeList(18));
