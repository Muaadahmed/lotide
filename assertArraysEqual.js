const eqArrays = function(arr1, arr2) {
  let result = false;
  for (let el1 of arr1) {
    for (let el2 of arr2) {
      el1 === el2 ? result = true : result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2){
  eqArrays(arr1, arr2) ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arr1} === ${arr2}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !==  ${arr2}`);
}

assertArraysEqual(["1","2","3"], ["1","2","3"]);