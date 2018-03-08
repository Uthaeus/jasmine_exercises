var repeatString = function(str, num) {
  if (num < 0) {
    return "ERROR";
  } else if (num == 0) {
    return "";
  } else {
    return str.repeat(num);
  }
}

module.exports = repeatString;
