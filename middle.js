const eqArrays = function(arr1, arr2) {
  let result = false;
  if(arr1.length === 0 && arr2.length === 0){
    return true;
  } else {
    for (let el1 of arr1) {
      for (let el2 of arr2) {
        el1 === el2 ? result = true : result = false;
      }
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2){
  eqArrays(arr1, arr2) ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arr1} === ${arr2}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}

const middle = function(array){
  let arr = [];

  let middNum = Math.ceil(array.length / 2);

  if(middNum === 0 || array.length < 3){
    return arr;
  } else if (array.length % 2 === 0){
    arr.push(middNum);
    arr.push(array[array.indexOf(middNum) + 1]);
  } else {
    arr.push(middNum);
  }

  return arr;
}

console.log(assertArraysEqual([4], middle([1, 2, 3, 4, 5, 6, 7]))) // => []
console.log(assertArraysEqual([], middle([1, 2]))) // => []
console.log(assertArraysEqual([3,4], middle([1, 2, 3, 4, 5, 6])));