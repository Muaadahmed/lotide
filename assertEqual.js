const assertEqual = function(actual, expected) {
  actual === expected ? console.log('\u2705 \u2705 \u2705 Assertion Passed: ' + actual + ' === ' + expected) :
    console.log('🛑 🛑 🛑 Assertion Failed: ' + actual + ' !== ' + expected);
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, '1');