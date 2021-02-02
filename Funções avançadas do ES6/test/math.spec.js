const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
let value = 0;
describe('Math class', function () {
  //Hooks -> before, beforeEach, after, afterEach
  beforeEach(function () {
    value = 0;
  });
  it('Sum two numbers', function (done) {
    //Done faz com que o teste seja concluído apenas quando for invocado
    const math = new Math();
    this.timeout(3000);
    value = 5;
    math.sum(value, 5, (value) => {
      expect(value).to.equal(10);
      // assert.strictEqual(value, 10);
      done();
    });
  });
  //Métodos de it: skip e only
  it.only('Multiply two numbers', function () {
    const math = new Math();
    const obj = {
      name: 'Vitor RIbeiro',
    };
    const obj2 = {
      name: 'Vitor RIbeiro',
    };
    expect(obj).to.deep.equal(obj2);
    expect(math.multiply(value, 5)).to.equal(0);
    // assert.strictEqual(math.multiply(value, 5), 0);
  }); //teste pendente
});
