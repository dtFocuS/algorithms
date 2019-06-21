function containsDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    for (let j = 0; j < array.length; j++) {
      if (current == array[j] && i !== j) {
        return true;
      }
    }
  }
  return false;
}
