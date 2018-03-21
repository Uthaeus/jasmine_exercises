var snakeCase = function(str) {
  var newArr = str.replace(/\W+/g, '');
  var myStr = newArr.split(/(?=[A-Z])/).join('_').toLowerCase();
  return myStr;
}

module.exports = snakeCase
