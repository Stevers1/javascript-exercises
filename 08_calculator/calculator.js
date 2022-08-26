const add = function(a, b) {
	
  let sum=0;

  sum=a+b;

  return sum;
};

const subtract = function(a, b) {
	
  let sub = a-b;

  return sub;

};

const sum = function(a, b) {
  let arr = Array.from(arguments)
  let sum = 0;


  if(typeof arr[0] == "object"){

    for(let i = 0; i < arr[0].length; i++) {

        sum+=arr[0][i]

      }
  }

  return sum;
	
};

const multiply = function(a) {

  let result = 1;

  for(let i = 0; i< a.length; i++) {

    result*= a[i];

  }
  return result;
};

const power = function(a,b) {

  return a**b;
	

};

const factorial = function(a) {

  let result=1;

  if(a == 0){
    return result;
  }

  for(let i = a; i>0; i--){

    result *= i;
  }

  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
