const ftoc = function(f) {

  let celsius = 0;

  celsius = (f-32) * (5/9);

  return Math.round(celsius * 10)/10

};

const ctof = function(c) {

  let farenheit = 0;

  farenheit = (c * (9/5)) + 32;

  return Math.round(farenheit * 10)/10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
