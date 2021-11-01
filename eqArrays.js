const eqArrays = function(arr1, arr2) {
  let result = false;
  if(arr1.length === 0 && arr2.length === 0){
    return true;
  } else {
    let i = 0;
    for (let el1 of arr1) {
      if(el1 === arr2[i]){
        result = true;
      } else {
        result = false;
        return result;
      }
      i++;
    }

  }
  return result;
};
module.exports = eqArrays;