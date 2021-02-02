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

/* //Rest, Spreading e Destructuring

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
 */

/* //Destructuring
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var [apple, banana, orange, [tomato]] = [
  'Apple',
  'Banana',
  'Orange',
  ['Tomato'],
];
console.log(tomato);

var obj = {
  name: 'Celso',
  props: {
    age: 26,
    favoriteColors: ['Black', 'Blue'],
  },
};
// var name = obj.name;
var { name: name2 } = obj;
var {
  props: {
    age: age2,
    favoriteColors: [color1, color2],
  },
} = obj;
console.log(name2);
console.log(age2);
console.log(color1);
var arr = [{ name: 'Apple', type: 'Fruit' }];
var fruit1 = arr[0].name;
let [{ name: fruitName }] = arr;
console.log(fruitName);

function sum([a, b] = [0, 0]) {
  return a + b;
}
console.log(sum([5, 5])); */
/* 
//Symbols ->identificador único(Semelhante a chave primária)
const uniqueId = Symbol('Hello'); //Debug
console.log(uniqueId);

//Propiedades privadas
const obj = {
  [uniqueId]: 'Hello',
};
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));

//Well known symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;
const obj2 = {
  [Symbol.iterator]() {
    //Iteração do array
  },
};
//Semelhante ao iterator em C
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
while (true) {
  let { value, done } = it.next();
  if (done) break;
  console.log(value);
}
console.log('For of:');
for (let value of arr) {
  console.log(value);
}
const str = 'Digital Innovation One';
console.log('Object:');
const obj3 = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        i++;
        return {
          value: this.values[i - 1],
          done: i > this.values.length,
        };
      },
    };
  },
};
const arr2 = [...obj3];
console.log(arr2);
 */

/* //Generators
function* hello() {
  console.log('Hello');
  yield 1;
  console.log('From');
  const value = yield 2;
  console.log(value);
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

function* naturalNumbers() {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }
}
console.log('Natural Numbers:');
const it2 = naturalNumbers();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

console.log('Object Yield');
const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  },
};
for (let value of obj) {
  console.log(value);
}
 */
/* 
//Callback e promises
function doS(callback) {
  setTimeout(function () {
    callback('First data');
  }, 1000);
}
function doOt(callback) {
  setTimeout(function () {
    callback('Second data');
  }, 1000);
}
//Callback hell
function doAll() {
  try {
    doS(function (data) {
      var pData = data.split('');
      try {
        doOt(function (data2) {
          var pData2 = data2.split('');
          try {
            setTimeout(function () {
              console.log(pData, pData2);
            }, 1000);
          } catch (err) {}
        });
      } catch (err) {}
    });
  } catch (err) {}
}
doAll();

//Promise
//Pending
//Fulfilled
//Rejected

const doSomethingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('First data');
    }, 1000);
  });

const doOtherPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('Second data');
    }, 1000);
  });
//Tratamento de erros mais fácil

//Todas as promises devem ser executadas e retornadas ao Data
Promise.all([doSomethingPromise(), doOtherPromise()]).then((data) => {
  console.log(data[0].split(''));
  console.log(data[1].split(''));
});
//Promise que retornar primeiro
Promise.race([doSomethingPromise(), doOtherPromise()]).then((data) => {
  console.log(data);
});

//Forma Sequencial de executar Promise
doSomethingPromise()
  .then((data) => {
    console.log(data.split(''));
    return doOtherPromise();
  })
  .then((data2) => console.log(data2.split('')))
  .catch((error) => console.log('Ops', error)); */
/* 
//Fetch
fetch('/data.json')
  .then((responseStream) => {
    if (responseStream.status === 200) {
      return responseStream.json();
    } else {
      throw new Error('Request error');
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Erro: ', err);
  });

//Async and Await
//Await espera a promise declarada finalizar
const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 1000);
  });
const simpleFunction = async () => {
  const data = await asyncTimer();
  console.log(data);
  const dataJSON = await fetch('/data.json').then((resStream) =>
    resStream.json(),
  );
  return dataJSON;
};
const simpleFunctionParallel = async () => {
  const data = await Promise.all([
    asyncTimer(),
    fetch('/data.json').then((resStream) => resStream.json()),
  ]);
  return data;
};
simpleFunction().then((data) => {
  console.log(data);
});

simpleFunctionParallel().then((data) => {
  console.log(data);
});
 */
/* 
//Event Emitter -> Node

const EventEmitter = require('events');
const { setTimeout } = require('timers');
class Users extends EventEmitter {
  userLogged(data) {
    setTimeout(() => {
      this.emit('User logged', data);
    }, 2000);
  }
}
const users = new Users();
users.once('User logged', (data) => {
  console.log(data);
});
users.userLogged({ user: 'Vítor Ribeiro' });
users.userLogged({ user: 'Teste 2' }); */

//Testes unitários, integrados e funcionais
//Mocha:
