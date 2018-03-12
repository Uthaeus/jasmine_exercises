

function translate(str) {
  var vowels = ['a', 'e', 'i', 'o'];
  var arr = str.split(' ');
  var resultArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    
    if (vowels.includes(arr[i][0])) {
      resultArr.push(arr[i] + 'ay');
    } else {
      var x = 0;
      while (!(vowels.includes(arr[i][x]))) {
        var head = arr[i].slice(0, x + 1);
        var tail = arr[i].slice(x + 1);
        x++;
      }
      var result = tail + head + 'ay';
      resultArr.push(result);

    }
  }
  return resultArr.join(' ');
}



module.exports = {
	translate
}

