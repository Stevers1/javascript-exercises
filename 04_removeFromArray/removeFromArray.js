const removeFromArray = function(array, ...therest) {

  const arr = Array.from(therest);

  if(arr.length > 1) {

    for(let i = 0; i < arr.length; i++) {

      if(array.indexOf(arr[i]) >= 0){

        array.splice(array.indexOf(arr[i]), 1)
      }
    }
  }

  else {
    if(array.indexOf(arr[0]) >= 0) {
      
      array.splice(array.indexOf(arr[0]), 1)
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
