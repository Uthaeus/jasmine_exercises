var fibonacci = function(num) {
  if (num == NaN) {
    num = +num;
  }
  if (num < 0) {
    return "OOPS";
  } else {
    var fib = [1, 1];
    for (var i = 2; i < num; i++) {
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num - 1]
  }
}

module.exports = fibonacci

