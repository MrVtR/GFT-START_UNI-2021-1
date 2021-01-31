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
/* var prop1 = 'Digital Innovation One';
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
console.log(objName); */

//Rest, Spreading e Destructuring

//Maneira antiga
function sum(a, b) {
  var value = 0;
  for (var i = 0; i < arguments.length; i++) value += arguments[i];
  return value;
}
console.log(sum(5, 5, 5, 2, 3));

//Maneira Nova -> Rest e Spread operator ...
//Spread -> Strings, arrays, objects literais e objects iteráveis
//Rest -> Argumentos em furma de array, sem limites
function sum2(...args) {
  return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum2(5, 5, 5, 2, 3));

const sumArrow = (...rest) => {
  return multiply(...rest);
};

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

console.log(sumArrow(5, 5, 5, 2, 3));

//Spreading -> Composição em outro elemento
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
function logArgs(...args) {
  console.log(args);
}
// const arr2 = arr.concat([5, 6, 7]);
const arr2 = [5, 6, 7, ...arr];
console.log(arr2);
logArgs(...arr);

const obj = {
  test: 123,
};
const obj2 = {
  ...obj,
  test2: 'hello',
};
console.log(obj2);
