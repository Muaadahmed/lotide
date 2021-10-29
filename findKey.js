const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`\u2705 \u2705 \u2705 Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !==  ${expected}`);
};

const findKey = function(object, callback) {
  let objectKeys = Object.keys(object);
  let keyIdentified = '';

  for (let key of objectKeys) {
    if (callback(object[key])) {
      keyIdentified = '';
      keyIdentified += key;
      break;
    } else {
      if (keyIdentified === '') {
        keyIdentified = '';
        keyIdentified = undefined;
      }
    }
  }
  return keyIdentified;
};

assertEqual('noma', findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

assertEqual('noma', findKey({
  "Blue Hill": 1 ,
  "Akaleri": 3,
  "noma": 2,
  "elBulli": 3,
  "Ora": 2,
  "Akelarre": 3
}, x => x === 2));

assertEqual('Akaleri', findKey({
  "Blue Hill": 2 ,
  "Akaleri": 3,
  "noma": 6
}, x => x % 3 === 0));