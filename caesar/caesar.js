var caesar = function(str, num) {
  var alph = 'abcdefghijklmnop'.split('');
  var arr = str.toLower().split('');
  var result = ''
  for(var i = 0; i < arr.length; i++) {
    var strIndex = alph.indexOf(arr[i]);
    var ind = alph.charAt(strIndex + num);
    result.push(ind);
  }
  return result;
}

module.exports = caesar
