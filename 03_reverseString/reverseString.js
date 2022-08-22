const reverseString = function(string) {
  let arr=[];

  for(let i = string.length; i > 0; i--) {

    arr.push(string[i-1])
  }
  arr = arr.join('');
  return arr
};

// Do not edit below this line
module.exports = reverseString;
