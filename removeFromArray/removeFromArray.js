var removeFromArray = function(array, ...items) {
  for (var i = 0; i < items.length; i++) {
    if (!(array.includes(items[i]))) {
      continue;
    } else {
    var ind = array.indexOf(items[i]);
    array.splice(ind, 1);
    }
  }
  return array;
}

module.exports = removeFromArray
