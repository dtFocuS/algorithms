function largestOfFour(array) {
  let largestArray = [];
  for (let i = 0 ; i < array.length; i++) {
    let largestNum = array[i][0];
    for (let j = 0 ; j < array[i].length; j++) {
      if (array[i][j] > largestNum) {
        largestNum = array[i][j];
      }
    }
    largestArray.push(largestNum);
  }
  return largestArray;
}
