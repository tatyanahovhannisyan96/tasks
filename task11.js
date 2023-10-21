function getProduct(arr) {
  let product = 1;
  let hasNegative = false;

  for (const element of arr) {
    let largestNegative = null;

    for (const num of element) {
      if (num < 0 && (largestNegative === null || num > largestNegative)) {
        largestNegative = num;
      }
    }

    if (largestNegative !== null) {
      product *= largestNegative;
      hasNegative = true;
    }
  }

  return hasNegative ? product : 'No negatives';
}

console.log(getProduct([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]));