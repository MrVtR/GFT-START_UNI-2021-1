/* var sum01 = function (a, b) {
  return a + b;
};

Arrow function -> função anonima enxuta

var sum = (a, b) => a + b;
console.log(sum(5, 15));

var sum = (a, b) => a + b;
console.log(sum(5, 15));

var createObject = () => ({ teste: 123 });
console.log(createObject());
 */

//Lazy evaluation
function randomNumber() {
  console.log('Generating a random number...');
  return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
  // b = b || 1;
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5));
