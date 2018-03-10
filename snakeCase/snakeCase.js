var snakeCase = function(str) {
  var newStr = str.replace(/[^a-zA-Z ]/g, '').trim();
  return newStr.split(' ').join(',');
}

module.exports = snakeCase
