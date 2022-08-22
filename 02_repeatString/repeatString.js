const repeatString = function(string, num) {

  let stringR=string;

  for(let i = 1;i<num; i++){
    stringR+=string;
  }

  if(num <0){
    return "ERROR"
  }
  else if(num==0) {
    return ""
  }

  return stringR;
};

console.log(repeatString);
// Do not edit below this line
module.exports = repeatString;
