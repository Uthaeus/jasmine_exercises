var caesar = function(str, num) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (65 <= c && c <= 90) {
      result += String.fromCharCode(((c - 65 + num) % 26) + 65);
    } else if (97 <= c && c <= 122) {
      result += String.fromCharCode((c - 97 + num) % 26 + 97);
    } else {
      result += str.charAt(i);
    }
  }
  return result;
}

module.exports = caesar
