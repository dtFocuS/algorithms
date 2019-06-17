parseInt()
split()

"25:51"

function validTime(string) {

  let timeArray = string.split(":");
  let hour = parseInt(timeArray[0]);
  let min = parseInt(timeArray[1]);
  
  if (hour > 24 || min > 59) {
    return false;
  } else if (hour == 24 && min != 0) {
    return false
  } else {
    return true;
  
  }

}
