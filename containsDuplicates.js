//Solution 1
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

//solution 2
// function containsDuplicates(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
