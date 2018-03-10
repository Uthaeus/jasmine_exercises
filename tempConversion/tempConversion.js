var ftoc = function(temp) {
  var cel = (temp - 32) / 1.8;
  return +cel.toFixed(1);
}

var ctof = function(temp) {
  var far = (temp * 1.8) + 32;
  return +far.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
