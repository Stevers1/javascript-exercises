const sumAll = function(a,b) {

  let sum = 0;
  let args = Array.from(arguments)
  args = args.sort(function(a, b){return a-b})

  for(let x = 0; x < args.length; x++){
    if(args[x] < 0) {
      return "ERROR"
    }

    if(typeof args[x] !== 'number') {
      return "ERROR"
    }
  }

  for(let i = args[0]; i<=args[1]; i++){

    sum+=i

  }

  return sum;


};

// Do not edit below this line
module.exports = sumAll;
