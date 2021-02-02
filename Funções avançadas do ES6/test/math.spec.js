const assert = require('assert');
const Math = require('../src/math.js');
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
      assert.equal(value, 10);
      done();
    });
  });
  //Métodos de it: skip e only
  it('Multiply two numbers', function () {
    const math = new Math();
    assert.equal(math.multiply(value, 5), 0);
  }); //teste pendente
});
