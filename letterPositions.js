const assertArraysEqual = function(arr1, arr2){
  eqArrays(arr1, arr2) ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${arr1} === ${arr2}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}

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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let positions = [];
    let lowerLetter = sentence[i].toLowerCase();
    if(results[lowerLetter] && results[lowerLetter] !== ' ' && results[lowerLetter] !== '_'){
      if(Array.isArray(results[lowerLetter])){
        results[lowerLetter].push(i);
      }
    } else {
      if(lowerLetter !== ' ' && lowerLetter !== '_'){
        positions.push(sentence.indexOf(lowerLetter))
        results[lowerLetter] = positions;
      }
    }
  }
  return results;
};

console.log(assertArraysEqual(letterPositions('hello').l, [2,3]));
console.log(assertArraysEqual(letterPositions('hel_lo').l, [2,4]));
console.log(letterPositions('hel_lo'));
// check with sentences that have multiple of the same letter