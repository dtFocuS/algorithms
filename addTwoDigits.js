function addTwoDigits(num) {
  let string = num.toString();
  let numArray = string.split("");
  return parseInt(numArray[0]) + parseInt(numArray[1]);
}
