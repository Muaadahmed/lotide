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

const without = function(source, itemsToRemove) {
  let newArr = [];
  let iterable = 0;
  for(let item of source){
    if(item !== itemsToRemove[iterable]){
      newArr.push(item);
      if(itemsToRemove.length > 1){
        iterable++;
      }
    } else {
      if(itemsToRemove.length > 1){
        iterable++;
      }
    }
  }
  return newArr;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]);