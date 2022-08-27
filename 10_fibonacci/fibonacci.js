const fibonacci = function(x) {

  let arr = [1];
  let sum = 0;

  if(x < 0) {
    return "OOPS";
  }

  for(let i = 0; i < x; i++) {


    if(i == 0){

      sum = arr[0];
      arr.push(sum)
      sum = 0;
      continue;
    }

    sum = arr[i]+arr[i-1]
    arr.push(sum)
    sum = 0;

  }

  return arr[arr.length-2]

};

// Do not edit below this line
module.exports = fibonacci;
