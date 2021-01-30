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

/* //Lazy evaluation
function randomNumber() {
  console.log('Generating a random number...');
  return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
  // b = b || 1;
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5)); */
var prop1 = 'Digital Innovation One';
function method1() {
  console.log('method called');
}
var obj = {
  prop1: prop1,
};
var objEnhanced = {
  prop1,
};
var objMethod = {
  method1,
};
var objMethodFunction = {
  sum: function sum(a, b) {
    return a + b;
  },
};
var objMethodFunctionShort = {
  sum(a, b) {
    return a + b;
  },
};

var propName = 'test';
var objName = {
  [propName + 'concat']: 'prop value',
};

objMethod.method1();
console.log(objMethodFunction.sum(5, 6));
console.log(objMethodFunctionShort.sum(5, 7));
console.log(objName);
