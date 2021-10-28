const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value){
  let keys = '';
  for(let key in object){
    if(object[key] === value){
      keys = '';
      keys += key;
    } else {
      if(keys === ''){
        keys = undefined;
      }
    }
  }
  return keys;
};

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));


console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));