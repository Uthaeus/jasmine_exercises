
function range(start, edge, step) {
  // If only one number was passed in make it the edge and 0 the start.
  if (arguments.length == 1) {
    edge = start;
    start = 0;
  }
 
  // Validate the edge and step numbers.
  edge = edge || 0;
  step = step || 1;
 
  // Create the array of numbers, stopping befor the edge.
  for (var ret = []; (edge - start) * step > 0; start += step) {
    ret.push(start);
  }
  return ret;
}

var sumAll = function(num1, num2) {
  if (num1 == NaN || num2 == NaN || num1 < 0 || num2 < 0 || num1.length > 1 || num2.length > 1) {
    return "ERROR";
  } else if (num1 > num2) {
    var arr = range(num2, num1 + 1);
    var total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  } else {
    var arr = range(num1, num2 + 1);
    var total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  return total;
}


module.exports = sumAll


