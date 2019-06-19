function allLongestStrings(array) {

  let longArray = [];
  let currentLength = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= currentLength) {
      currentLength = array[i].length
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (array[j].length === currentLength) {
      longArray.push(array[j]);
    }
  }
  return longArray;
}
