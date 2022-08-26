const palindromes = function (string) {

  console.log(string)
  let check = string.replace(/!|,| /g, "")
  let nodot = check.replaceAll('.', "")
  nodot = nodot.toLowerCase();
  let arr = [];

  for(let i = nodot.length - 1; i>=0; i--) {

    arr.push(nodot[i])
  }

  arr= arr.join("");
  return arr === nodot;

};

// Do not edit below this line
module.exports = palindromes;
