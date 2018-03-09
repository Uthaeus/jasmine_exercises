var reverseString = function(str) {
  var revString = str.split('').reverse().join('');
  return revString;
}

module.exports = reverseString